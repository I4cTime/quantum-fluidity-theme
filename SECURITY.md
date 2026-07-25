# Security Policy

Quantum Fluidity is a static VS Code / Cursor / Kiro color theme — palette JSON and build scripts, no runtime code, no network calls, and no user data collection. Its attack surface is small, but not zero: a compromised build script, dependency, or published `.vsix` could still ship malicious content into users' editors.

## Supported Versions

Only the latest published release is supported. Older versions are not patched — upgrade to the latest release from the VS Code Marketplace, Open VSX, or GitHub Releases.

| Version | Supported |
|---------|-----------|
| 2.x     | Yes       |
| < 2.0   | No        |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Instead, please report them privately using one of the following methods:

### 1. GitHub Private Vulnerability Reporting (preferred)

**[Report a vulnerability](https://github.com/I4cTime/quantum-fluidity-theme/security/advisories/new)**

### 2. Email

Send details to the maintainer directly. You can find contact information on the [@I4cTime GitHub profile](https://github.com/I4cTime).

## What to Include

- **Description** of the vulnerability and its potential impact.
- **Steps to reproduce**, if applicable.
- **Affected version(s)** and distribution channel (VS Code Marketplace / Open VSX / manual `.vsix`).

## Scope

- **Build pipeline** — `src/*.mjs` scripts, the CI/release workflows (`.github/workflows/`), and anything that could inject malicious content into a published `.vsix`.
- **Supply chain** — compromised dependencies pulled in at build or publish time.
- **Published artifacts** — a `.vsix` on the Marketplace, Open VSX, or GitHub Releases that doesn't match this repository's source.

## Out of Scope

- Cosmetic issues in the theme itself (open a regular [bug report](https://github.com/I4cTime/quantum-fluidity-theme/issues/new/choose) instead).
- Vulnerabilities in VS Code, Cursor, or Kiro themselves — report those to the respective project.

## Response Timeline

| Stage | Timeframe |
|-------|-----------|
| Acknowledgement | Within 48 hours |
| Initial assessment | Within 7 days |
| Fix or mitigation | Varies by severity |
| Public disclosure | After a fix is released |
