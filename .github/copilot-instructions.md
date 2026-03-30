# Copilot instructions for this repository

Summary
- This is a minimal Node.js Express project. Entry point: `index.js`. Source modules live in `src/` (e.g. `src/time.js`). The project uses ES modules (`"type": "module"` in `package.json`) and depends on `express` (v5.x).

What to know before changing code
- Running: install deps with `npm install`, then run the app with `node index.js` (ESM is enabled via `package.json`).
- There are no npm `start` or test scripts defined yet; add `"start": "node index.js"` to `package.json` when adding run tasks.
- Port: the server listens on port `3000` (see `index.js`).

Project-specific patterns and examples
- Entry and routing: `index.js` is the HTTP server and registers Express routes directly. Example route skeleton:

  app.post('/', (req, res) => { /* handler */ })

- Module imports: use ES module syntax. Example importing the time helper:

  import timeValue from './src/time.js'

- `src/time.js` currently exports a default value (`horaActual.getDate()`) rather than a function — expect a numeric day value when imported.

Integration points and dependencies
- External: `express` is the only top-level dependency declared in `package.json`.
- No CI, linters, or test frameworks detected. If you add them, update `.github/workflows/` and `package.json` scripts.

Agent guidance (how AI agents should modify this repo)
- Preserve ESM: do not convert modules back to CommonJS. Keep `type: "module"` consistent with `import`/`export`.
- When adding runtime scripts, update `package.json.scripts` (e.g. `start`, `dev` using `nodemon`).
- When modifying `src/time.js`, prefer exporting functions for reusability (e.g. `export function getCurrentDay() { ... }`) rather than exporting a static value unless the value is intentionally constant.
- For server changes, edit `index.js` only for route registration and server lifecycle code; keep business logic in `src/`.

Files to inspect for context
- `index.js` — server entry, routes, port definition.
- `src/time.js` — small helper module exporting current day value.
- `package.json` — ESM flag and dependencies.

Examples of useful prompts for follow-ups
- "Add a `GET /time` endpoint that returns the current day using `src/time.js`." — Agent should: (1) export a function from `src/time.js`; (2) add a `GET /time` route in `index.js`; (3) add/adjust `package.json` scripts if necessary.
- "Add a `start` script and instructions to run the server" — Agent should update `package.json.scripts.start` and add brief README or comment in `index.js`.

If you change project structure
- Update this file with any new conventions (scripts, CI, folder layout) so future agents know the new canonical workflow.

Questions for the maintainer
- Should `src/time.js` export a function rather than a static value? If yes, prefer `getCurrentDay()` style.
