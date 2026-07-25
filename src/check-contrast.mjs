/**
 * WCAG contrast audit for all palettes.
 * Run: npm run check
 *
 * Targets:
 *   fg on bg            ≥ 7.0  (AAA body text)
 *   comments on bg      ≥ 4.0
 *   syntax colors on bg ≥ 4.0  (readable code, AA-ish for colored text)
 *   brackets on bg      ≥ 3.0  (WCAG graphical objects)
 *   badge/button text   ≥ 3.0  (large/bold UI text on violet fills)
 */
import { palettes } from './palettes.mjs';

const lin = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = (hex) => {
  const n = parseInt(hex.slice(1, 7), 16);
  return (
    0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255)
  );
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

let failures = 0;
for (const p of palettes) {
  console.log(`\n── ${p.name} (${p.type}) ─ bg ${p.bg}`);
  const onViolet = p.type === 'dark' ? p.bg : '#FFFFFF';
  const checks = [
    ['fg / bg', p.fg, p.bg, 7.0],
    ['comment / bg', p.comment, p.bg, 4.0],
    ['accent / bg', p.accent, p.bg, 4.0],
    ['violet / bg', p.violet, p.bg, 4.0],
    ['green / bg', p.green, p.bg, 4.0],
    ['amber / bg', p.amber, p.bg, 4.0],
    ['pink / bg', p.pink, p.bg, 4.0],
    ['ghost text / bg', p.ghost, p.bg, 3.0],
    ['inlay hint / bg', p.inlay, p.bg, 3.0],
    ['badge text / violet', onViolet, p.violet, 3.0],
    ['fg / container', p.fg, p.container, 4.5],
    ...p.brackets.map((b, i) => [`bracket ${i + 1} / bg`, b, p.bg, 3.0]),
  ];
  for (const [label, a, b, min] of checks) {
    const ratio = contrast(a, b);
    const ok = ratio >= min;
    if (!ok) failures++;
    console.log(
      `  ${ok ? '✓' : '✗'} ${label.padEnd(22)} ${ratio.toFixed(2).padStart(6)} (min ${min})${ok ? '' : `  ← ${a} on ${b}`}`
    );
  }
}
console.log(failures ? `\n${failures} check(s) FAILED` : '\nAll contrast checks passed.');
process.exit(failures ? 1 : 0);
