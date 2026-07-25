/**
 * Generates themes/*.json from src/palettes.mjs + src/template.mjs.
 * Run: npm run build
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { palettes } from './palettes.mjs';
import { buildTheme } from './template.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'themes');
mkdirSync(outDir, { recursive: true });

for (const palette of palettes) {
  const theme = buildTheme(palette);
  const outPath = join(outDir, palette.file);
  writeFileSync(outPath, `${JSON.stringify(theme, null, 2)}\n`);
  console.log(`✓ ${palette.name.padEnd(28)} → themes/${palette.file}`);
}
