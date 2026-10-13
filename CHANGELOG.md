# Changelog

All notable changes to **Quantum Fluidity** are documented here.

## [2.1.0]

### Added
- **New brand mark.** The marketplace icon is now a vector "Fluid Q": a neon-tube Q with a wave tail and an electron orbit, drawn in the theme's own cyan to violet to pink bracket ramp. Lives in `assets/brand/` with small and mono cuts, plus a social card and GitHub repo preview, all rendered by `npm run build:brand`.
- **Agentic surfaces.** Chat panels (`chat.*`), inline chat, next-edit suggestions (`inlineEdit.*`), the code-action list and ghost text are themed for Cursor, Kiro and Copilot.
- **Bracket-pair guides** follow the same six-level gradient as the brackets.
- **Wider workbench coverage**, 264 to 750 colors: tabs and editor groups, activity bar (top position too), sticky scroll everywhere, SCM graph, debug console and token expressions, testing coverage, notebooks, terminal command decorations, extensions view, settings editor, welcome page, charts and symbol icons.
- **More semantic tokens.** Keywords, operators, strings, numbers, regexps and comments at the semantic layer, plus Pylance (`selfParameter`, `builtinConstant`, `magicFunction`) and rust-analyzer (`lifetime`, `selfKeyword`, `builtinAttribute`, `derive`) token types.
- **More TextMate scopes.** YAML, TOML and INI keys in cyan; decorators and annotations; Rust lifetimes and macros; docstrings read as comments; template-literal expressions no longer inherit string pink; markdown strikethrough, fenced-code content, list bullets and rules; diff headers; log-output levels.
- **Real previews of all four variants** in the README, plus a hero card.

### Changed
- `package.json` now carries homepage, bugs, Q&A, sponsor, pricing and a CI badge; the license field matches the AGPL-3.0-only `LICENSE` (it still said MIT).
- Copy sweep: plain hyphens instead of em dashes across the README, changelog, templates and source comments.
- CI and release workflows install dependencies with `npm ci`; `sharp` is the only dev dependency (brand rendering).
- The `.vsix` now excludes the brand sources, GitHub config and contributor docs.

### Fixed
- The `URL` TextMate rule used glob scopes (`*url*`, `*link*`, `*uri*`) that never matched; links in markdown are now underlined cyan via real scopes.

### Removed
- The raster icon sources (`src/icon-q.png`, `src/icon-badge.svg`, `src/icon-accents.svg`, `src/build-icon.sh`) in favor of the vector mark.

## [2.0.0]

### Added
- **Two new variants** - the family is now 2 dark + 2 light:
  - **Quantum Fluidity Mist** (dark): Midnight Mist navy surfaces with gentler neons for long sessions.
  - **Quantum Fluidity Dawn** (light): warm paper surfaces with earthy quantum accents.
- **Single-source build system** - all four themes are generated from `src/palettes.mjs` via `npm run build`; variants can never drift out of sync again.
- **Automated WCAG contrast audit** (`npm run check`) - every syntax color ≥ 4:1, body text ≥ 7:1, brackets/hints ≥ 3:1, in all four variants.
- **Multi-IDE packaging** - install/publish flows for VS Code Marketplace, Cursor, and Kiro (Open VSX), plus `npm run package` for manual `.vsix` installs.
- **New marketplace icon** - the original neon Q letterform on a rounded "quantum orbit" badge with orbit ring and electron accents, composited by `npm run build:icon` (src/build-icon.sh).
- **Gradient-feel surface ramp** - the workbench now steps through a subtle luminance ramp ("light falls from above"): title bar and tab strip sit brighter than the editor, sidebar/panel/terminal sit one step off it, in all four variants.

### Fixed
- **Light theme contrast** - green (`#00B359` → `#067A43`), amber (`#D99900` → `#A36A00`), violet (`#9933FF` → `#7C24D9`), and UI cyan (`#0099CC` → `#007399`) previously fell as low as 2.4:1 on white; all now clear 4:1.
- **Light theme dark-palette leaks** - badges, buttons, and the debugging status bar used the dark theme's `#B266FF` violet; they now use the light palette.
- **Light terminal** - `ansiWhite` was `#F8F9FA` on a `#F8F9FA` background (invisible); the bright ANSI row was neon-on-white. Rebuilt both rows GitHub-Light-style.
- **Dark terminal** - `ansiBrightBlack` (`#1A1A2E`) was nearly invisible; lightened to `#3A3A5E`.
- **`invalid` tokens** rendered violet like keywords; now Quantum Pink as intended.
- **`support.type` scope conflict** - was defined in two rules with different colors; deduplicated.
- **Markdown/markup diff colors** - `markup.inserted`/`deleted`/`changed` were cyan/violet/violet in dark; now green/pink/amber in all variants.

## [1.1.0]

### Fixed
- **Bracket depth gradient** now flows the full 6 levels (cyan → blue → periwinkle → violet → magenta → pink). Previously levels 4–6 collapsed to a single flat violet, so deep nesting was unreadable.
- **Matching brackets** are now highlighted with a cyan box (`editorBracketMatch`) instead of falling back to the editor's default grey.
- **Selection contrast** - selected text now uses a cyan-tinted highlight that's actually visible on the `Obsidian Void` background, replacing the near-invisible navy.

### Added
- **Agentic polish for Cursor / AI** - AI inline suggestions (`editorGhostText`) and TypeScript inlay hints (`editorInlayHint`) are now styled on-palette: type hints in emerald, parameter hints in amber, ghost text in muted violet.
- **Richer semantic highlighting** - added `enum`, `enumMember`, `type`, `typeParameter`, `struct`, `namespace`, `decorator`, `macro`, `event`, and readonly properties, plus strikethrough for deprecated symbols.
- **Full UI coverage** - themed surfaces that previously inherited VS Code defaults: diagnostic squiggles & problem icons, hover/peek widgets, notifications, menus, breadcrumbs, the command palette / command center, git-decoration file colors in the explorer, merge-conflict regions, sticky scroll, debug & testing icons, and keybinding labels.

Applied identically to both **Quantum Fluidity** (dark) and **Quantum Fluidity Light**.

## [1.0.7]
- Added light theme and preview images.
- Semantic highlighting and palette refinements.
- MIT license.
