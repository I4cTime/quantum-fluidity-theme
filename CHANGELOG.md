# Changelog

All notable changes to **Quantum Fluidity** are documented here.

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
