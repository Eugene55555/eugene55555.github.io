# Live site (built)

This branch `main` contains the built static site (output of Astro build).
Source code lives in branch `source` (Astro + Tailwind v4 + Preline).

Workflow:
1. Edit sources in branch `source`.
2. `npm install && npm run build` (locally).
3. Copy `dist/*` into branch `main`, commit & push.
4. GitHub Pages (Deploy from a branch: main) publishes automatically.

NOTE: GitHub Actions auto-deploy was attempted but the runner cannot reach
npm registry reliably, so we deploy the prebuilt site from this branch.
