# sveltekit-electron

A starter template for building desktop apps with **SvelteKit** and **Electron**.

> Template status: ready for cloning, branding, and feature work.

This template gives you:

- an Electron main process in `electron/`
- a SvelteKit renderer in `src/`
- Forge + Vite wiring for local development and packaging

## Template Roadmap

- Replace the starter page with your app's first real flow
- Add your design system, theme tokens, and navigation
- Wire up data, persistence, and API integration
- Add packaging details and app-specific release notes

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the app:

```bash
pnpm start
```

Run in headless mode:

```bash
pnpm run start:headless
```

## Project Layout

- `electron/` — Electron main and preload process code
- `src/routes/` — SvelteKit pages and layout
- `src/App.svelte` — App shell used by the renderer bootstrap
- `vite.*.config.ts` — build configuration for Electron Forge + Vite

## Template Status

This repository is currently set up as a reusable template for a SvelteKit/Electron app. The next step is to replace the starter page with your own app flows, data model, and UI.
