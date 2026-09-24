# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Nuno Araújo: a single-page React 19 + TypeScript + Vite app styled with Tailwind v4 and animated with Framer Motion. There's no router and no backend.

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: `tsc -b && vite build` (type errors fail the build; `noUnusedLocals`/`noUnusedParameters` are on)
- `npm run lint`: ESLint
- `npm run preview`: serve the built `dist/`

There is no test suite. Verify with `npm run build` + `npm run lint`, and check visually in the browser.

## Deployment

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`, Node 22, `npm ci`). `vite.config.ts` sets `base` to `/araujos-nest-website/` only when `GITHUB_ACTIONS` is set, so root-absolute asset paths (e.g. `"/profile.png"`) work locally but break on Pages. Use `import.meta.env.BASE_URL` or import the asset instead.

## Architecture

- **Content lives in `src/data/*.ts`** (profile, experience + education, skills, certifications). Section components import these arrays directly, so content edits belong in `data/`, not in JSX.
- **`App.tsx`** stacks the sections in order and owns theme state. The theme toggles an `html.light` class and is persisted in `localStorage`, with dark as the default.
- **Sections** (`components/sections/`) each render a `<section id="...">`; navigation is hash anchors (`#experience`, etc.), so keep ids stable.
- **Design system is in `src/index.css`**: Tailwind v4 `@theme` tokens (`--color-*`, `--font-*`) with light-mode overrides under `html.light`, plus shared component classes (`.glass-card`, `.skill-tag`, `.section-label`, `.section-number`, `.gradient-text`, `.section-container`). Use the tokens (`var(--color-cyan)`) instead of hard-coded colors so both themes keep working.
- **`docs/SPEC.md`** is the design spec ("Blueprint Noir"): section contents, palette, typography, responsive breakpoints per section, and animation rules. Check it before changing layout or visuals. `docs/CV.md` is the source CV data.

## Agent skills

### Issue tracker

Issues live in GitHub Issues (SilverX21/araujos-nest-website), managed via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
