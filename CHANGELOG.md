# Changelog

All notable changes to **Quantum Fluidity** are documented here.

## [2.0.0]

### Added
- **Two new variants** — the family is now 2 dark + 2 light:
  - **Quantum Fluidity Mist** (dark): Midnight Mist navy surfaces with gentler neons for long sessions.
  - **Quantum Fluidity Dawn** (light): warm paper surfaces with earthy quantum accents.
- **Single-source build system** — all four themes are generated from `src/palettes.mjs` via `npm run build`; variants can never drift out of sync again.
- **Automated WCAG contrast audit** (`npm run check`) — every syntax color ≥ 4:1, body text ≥ 7:1, brackets/hints ≥ 3:1, in all four variants.
- **Multi-IDE packaging** — install/publish flows for VS Code Marketplace, Cursor, and Kiro (Open VSX), plus `npm run package` for manual `.vsix` installs.
- **New marketplace icon** — the original neon Q letterform on a rounded "quantum orbit" badge with orbit ring and electron accents, composited by `npm run build:icon` (src/build-icon.sh).
- **Gradient-feel surface ramp** — the workbench now steps through a subtle luminance ramp ("light falls from above"): title bar and tab strip sit brighter than the editor, sidebar/panel/terminal sit one step off it, in all four variants.

### Fixed
- **Light theme contrast** — green (`#00B359` → `#067A43`), amber (`#D99900` → `#A36A00`), violet (`#9933FF` → `#7C24D9`), and UI cyan (`#0099CC` → `#007399`) previously fell as low as 2.4:1 on white; all now clear 4:1.
- **Light theme dark-palette leaks** — badges, buttons, and the debugging status bar used the dark theme's `#B266FF` violet; they now use the light palette.
- **Light terminal** — `ansiWhite` was `#F8F9FA` on a `#F8F9FA` background (invisible); the bright ANSI row was neon-on-white. Rebuilt both rows GitHub-Light-style.
- **Dark terminal** — `ansiBrightBlack` (`#1A1A2E`) was nearly invisible; lightened to `#3A3A5E`.
- **`invalid` tokens** rendered violet like keywords; now Quantum Pink as intended.
- **`support.type` scope conflict** — was defined in two rules with different colors; deduplicated.
- **Markdown/markup diff colors** — `markup.inserted`/`deleted`/`changed` were cyan/violet/violet in dark; now green/pink/amber in all variants.

## [1.1.0]

### Fixed
- **Bracket depth gradient** now flows the full 6 levels (cyan → blue → periwinkle → violet → magenta → pink). Previously levels 4–6 collapsed to a single flat violet, so deep nesting was unreadable.
- **Matching brackets** are now highlighted with a cyan box (`editorBracketMatch`) instead of falling back to the editor's default grey.
- **Selection contrast** — selected text now uses a cyan-tinted highlight that's actually visible on the `Obsidian Void` background, replacing the near-invisible navy.

### Added
- **Agentic polish for Cursor / AI** — AI inline suggestions (`editorGhostText`) and TypeScript inlay hints (`editorInlayHint`) are now styled on-palette: type hints in emerald, parameter hints in amber, ghost text in muted violet.
- **Richer semantic highlighting** — added `enum`, `enumMember`, `type`, `typeParameter`, `struct`, `namespace`, `decorator`, `macro`, `event`, and readonly properties, plus strikethrough for deprecated symbols.
- **Full UI coverage** — themed surfaces that previously inherited VS Code defaults: diagnostic squiggles & problem icons, hover/peek widgets, notifications, menus, breadcrumbs, the command palette / command center, git-decoration file colors in the explorer, merge-conflict regions, sticky scroll, debug & testing icons, and keybinding labels.

Applied identically to both **Quantum Fluidity** (dark) and **Quantum Fluidity Light**.

## [1.0.7]
- Added light theme and preview images.
- Semantic highlighting and palette refinements.
- MIT license.
