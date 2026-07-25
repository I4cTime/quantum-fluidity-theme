# Contributing to Quantum Fluidity

Thanks for helping improve Quantum Fluidity! This guide covers the dev environment and how the theme is structured.

## Dev environment

- **Node** and **npm** (this project uses `npm`, not pnpm/yarn).
- Install and build:

  ```bash
  npm install
  npm run build
  ```

- Useful scripts:

  | Script | What it does |
  |---|---|
  | `npm run build` | Regenerates `themes/*.json` from `src/palettes.mjs` |
  | `npm run check` | WCAG contrast audit over every palette (fails CI on regression) |
  | `npm run package` | `build` + `check` + creates the `.vsix` |
  | `npm run build:icon` | Regenerates `icon.png` from the SVG sources in `src/` |

## How the theme is structured

- **`src/palettes.mjs`** — the single source of truth: one flat palette object per variant (Void, Mist, Light, Dawn).
- **`src/template.mjs`** — maps a palette onto the full VS Code theme structure (workbench colors, semantic tokens, TextMate scopes).
- **`src/check-contrast.mjs`** — the WCAG luminance-contrast audit that `npm run check` runs.
- **`themes/*.json`** — **generated**. Never edit these by hand; CI fails the build if they drift out of sync with `src/`. Run `npm run build` after any palette or template change and commit the regenerated JSON alongside it.

To add a fifth variant: add a palette object to `src/palettes.mjs`, run `npm run build`, then add the theme entry to `package.json`'s `contributes.themes`.

## Installing your build for local testing

1. `npm run package` to produce a `.vsix`.
2. In VS Code / Cursor / Kiro: Command Palette → `Extensions: Install from VSIX...` → select the file.
3. Switch to the variant you're testing (Command Palette → `Color Theme`) and check it against real code in a few languages — syntax highlighting issues are easiest to spot in TypeScript, Python, and Rust.

## Branches and commits

- Base your work on `main`.
- Before opening a PR: run `npm run build` and confirm `git diff themes/` is empty, then run `npm run check`.

## Releasing

Maintainer-only. Tagging `vX.Y.Z` on `main` triggers `.github/workflows/release.yml`, which publishes the `.vsix` to the VS Code Marketplace and Open VSX and attaches it to a GitHub Release. See the "Releasing" section of `README.md` for the full flow and required secrets.

## Security issues

Do **not** open a public issue for vulnerabilities — follow [SECURITY.md](SECURITY.md).

## License

By contributing you agree your work is licensed under [AGPL-3.0-only](LICENSE), the same license as the project.
