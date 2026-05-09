# Changelog

All notable changes to this template will be documented in this file.

## [Unreleased]

### Fixed

- Resolved `import/no-unresolved` errors for `@sveltejs/vite-plugin-svelte` in Vite config files.
- Updated ESLint import resolver settings to correctly resolve TypeScript/ESM package paths.

### Changed

- Added `eslint-import-resolver-typescript` to dev dependencies for consistent module resolution during linting.

### Added

- Initial SvelteKit + Electron app template structure.
- Electron Forge + Vite configuration for main, preload, and renderer builds.
- Starter SvelteKit page and app shell for the renderer.
- Template README with setup and run instructions.
- Template metadata updated to clearly describe this repo as a SvelteKit + Electron starter.
- README expanded with a short roadmap for next steps.

### Notes

- This repository is intended to serve as a starting point for new SvelteKit/Electron apps.
- The scaffold is ready for feature development, branding, and app-specific routing.
