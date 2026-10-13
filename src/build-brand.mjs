/**
 * Quantum Fluidity - brand asset generator.
 *
 * Regenerates every raster brand asset from the canonical vector mark
 * (assets/brand/mark.svg) and the palettes in src/palettes.mjs:
 *
 *   icon.png                                512  marketplace icon: Obsidian Void tile + mark
 *   assets/brand/social-card-1200x630.jpg        Open Graph / link-preview card
 *   assets/brand/repo-social-preview.png   1280x640  GitHub -> Settings -> Social preview
 *                                                (manual upload, GitHub has no API for it);
 *                                                also the README hero
 *
 * Run: npm run build:brand
 *
 * Card text renders with the vendored fonts in assets/brand/fonts through a
 * scoped fontconfig, so output is identical on every machine. FONTCONFIG_FILE
 * must be set before sharp/libvips loads, hence the dynamic import.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { palettes } from './palettes.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const brand = join(root, 'assets', 'brand');
process.env.FONTCONFIG_FILE = join(brand, 'fonts.conf');
const sharp = (await import('sharp')).default;

const TITLE = 'Space Grotesk';
const MONO = 'JetBrains Mono';

// The signature dark palette drives every card surface.
const voidP = palettes.find((p) => p.id === 'void');
const C = {
  bg: voidP.bg,
  fg: voidP.fg,
  muted: voidP.comment,
  container: voidP.container,
  cyan: voidP.accent,
  violet: voidP.violet,
  pink: voidP.pink,
};

const markSvg = readFileSync(join(brand, 'mark.svg'), 'utf8');
const markDefs = markSvg.match(/<defs>[\s\S]*?<\/defs>/)[0];
const markUses = markSvg.slice(markSvg.indexOf('<use'), markSvg.lastIndexOf('</svg>'));

/** The marketplace tile: 22.5% corner radius (rx 115 @ 512), Obsidian Void
 *  radial, inner hairline echoing the theme's container borders. */
const tileSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="tbg" cx="0.5" cy="0.42" r="0.78">
      <stop offset="0" stop-color="#15152A"/>
      <stop offset="0.6" stop-color="#0A0A14"/>
      <stop offset="1" stop-color="${C.bg}"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" rx="115" fill="url(#tbg)"/>
  <rect x="3" y="3" width="506" height="506" rx="112" fill="none" stroke="${C.fg}" stroke-opacity="0.09" stroke-width="5"/>
</svg>`;

/** One swatch chip per variant: its real background with the five role colors. */
function swatchRow(x, y) {
  const chipW = 118;
  const gap = 18;
  return palettes
    .map((p, i) => {
      const cx = x + i * (chipW + gap);
      const dots = [p.accent, p.violet, p.green, p.amber, p.pink]
        .map((c, j) => `<circle cx="${cx + 20 + j * 19.5}" cy="${y + 26}" r="6.5" fill="${c}"/>`)
        .join('');
      const label = p.name.replace('Quantum Fluidity', '').trim() || 'Void';
      return `
    <rect x="${cx}" y="${y}" width="${chipW}" height="52" rx="12" fill="${p.bg}" stroke="${p.container}" stroke-width="2"/>
    ${dots}
    <text x="${cx + chipW / 2}" y="${y + 80}" text-anchor="middle" font-family="${MONO}" font-size="17" fill="${C.muted}">${label}</text>`;
    })
    .join('');
}

/** 1200x630 card body; reused for the 1280x640 repo preview with an offset. */
function cardBody() {
  return `
  <rect width="1200" height="630" fill="${C.bg}"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <ellipse cx="300" cy="315" rx="330" ry="330" fill="url(#backglow)"/>

  <g transform="translate(70 95) scale(0.86)" fill="none">
    ${markUses}
  </g>

  <text x="560" y="222" font-family="${TITLE}" font-weight="700" font-size="88" fill="${C.fg}">Quantum</text>
  <text x="560" y="312" font-family="${TITLE}" font-weight="700" font-size="88" fill="url(#word)">Fluidity</text>
  <text x="562" y="362" font-family="${MONO}" font-size="20" letter-spacing="4" fill="${C.muted}">HIGH-CONTRAST THEME FAMILY</text>
  <text x="562" y="398" font-family="${TITLE}" font-weight="500" font-size="26" fill="#C9CED6">2 dark + 2 light. VS Code, Cursor and Kiro.</text>

  ${swatchRow(562, 432)}

  <text x="562" y="580" font-family="${MONO}" font-weight="500" font-size="22" fill="${C.cyan}">github.com/I4cTime/quantum-fluidity-theme</text>`;
}

const cardDefs = markDefs.replace(
  '</defs>',
  `
    <linearGradient id="word" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${C.cyan}"/>
      <stop offset="0.6" stop-color="${C.violet}"/>
      <stop offset="1" stop-color="${C.pink}"/>
    </linearGradient>
    <radialGradient id="backglow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${C.cyan}" stop-opacity="0.16"/>
      <stop offset="0.6" stop-color="${C.violet}" stop-opacity="0.08"/>
      <stop offset="1" stop-color="${C.violet}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="${C.fg}" opacity="0.05"/>
    </pattern>
  </defs>`
);

const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  ${cardDefs}
  ${cardBody()}
</svg>`;

const repoSvg = `<svg width="1280" height="640" viewBox="0 0 1280 640" xmlns="http://www.w3.org/2000/svg">
  ${cardDefs}
  <rect width="1280" height="640" fill="${C.bg}"/>
  <g transform="translate(40 5)">${cardBody()}</g>
</svg>`;

const png = (svg, w, h) => sharp(Buffer.from(svg), { density: 300 }).resize(w, h).png();

mkdirSync(brand, { recursive: true });

// Marketplace icon: tile under the transparent mark.
const tile = await png(tileSvg, 512, 512).toBuffer();
const mark = await png(markSvg, 512, 512).toBuffer();
await sharp(tile).composite([{ input: mark }]).png({ compressionLevel: 9 }).toFile(join(root, 'icon.png'));

await png(ogSvg, 1200, 630).jpeg({ quality: 90, mozjpeg: true }).toFile(join(brand, 'social-card-1200x630.jpg'));
await png(repoSvg, 1280, 640).png({ compressionLevel: 9 }).toFile(join(brand, 'repo-social-preview.png'));

for (const f of ['icon.png', 'assets/brand/social-card-1200x630.jpg', 'assets/brand/repo-social-preview.png']) {
  console.log(`✓ ${f.padEnd(40)} ${(readFileSync(join(root, f)).length / 1024).toFixed(0)} KB`);
}
