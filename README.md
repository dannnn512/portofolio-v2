## Ziddan Aryasatya – Portfolio

Personal portfolio built with Vite + React + TypeScript, styled with Tailwind and shadcn/ui.

### Tech stack
- **Build/dev**: Vite (TS, SWC)
- **UI**: React 18, Tailwind CSS, shadcn/ui (Radix primitives), Lucide Icons
- **State/Data**: TanStack Query
- **Routing**: react-router-dom
- **Tooling**: TypeScript, ESLint, PostCSS, Autoprefixer

### Architecture
- **SPA** built with Vite + React 18
- **Routing** with `react-router-dom`
- **UI** with `shadcn/ui` (Radix) and Tailwind CSS
- **Data separation**: `src/types/**` (TypeScript types) and `src/data/**` (static content: skills, experience, projects)
- **Assets**:
  - Public static files in `public/**` (e.g., images, `favicon.ico`, `Resume.pdf`)
  - Component-specific assets can live in `src/assets/**` and be imported
- **State/async** ready via `@tanstack/react-query`
- **Build**: Vite + SWC, PostCSS pipeline

### Package manager(s)
This repo contains multiple lockfiles from previous setups:
- `package-lock.json` (npm)
- `bun.lockb` (Bun)

Use exactly one package manager to avoid conflicts. Recommended default: **npm** (since `package-lock.json` is present). If you prefer Bun or pnpm, delete the other lockfiles first.

### What is pnpm?
**pnpm** is an alternative JS package manager that is faster and more disk‑efficient than npm/yarn due to a content‑addressable global store and strict, symlinked node_modules layout. It improves install speed, saves disk space, and is monorepo‑friendly.

### Requirements
- Node.js 18+ (Vite 5 requires Node 18 or newer)

### Getting started
From the project root:

Using npm (recommended)
```bash
npm install
npm run dev
```

Using pnpm
```bash
pnpm install
pnpm dev
```

Using Bun
```bash
bun install
bun run dev
```

Dev server runs at `http://localhost:8080` (configured in `vite.config.ts`). If the port is busy, you can run a different port temporarily:
```bash
npm run dev -- --port 5173
```

### Scripts
- `dev`: start Vite dev server
- `build`: production build
- `preview`: preview production build locally
- `lint`: run ESLint

### Project structure (high level)
```text
public/                # static assets
src/
  components/          # UI components (incl. shadcn/ui)
  hooks/               # custom hooks
  lib/                 # utilities
  pages/               # route components (react-router)
  main.tsx             # app entry
  index.css            # global styles (Tailwind)
vite.config.ts         # Vite config (port 8080)
tailwind.config.ts     # Tailwind config
postcss.config.js      # PostCSS config
```

### Notes
- This app uses **Vite + React + TypeScript** (yes, that’s the current setup).
- If you switch package managers, remove other lockfiles (`package-lock.json`, `bun.lockb`) to prevent resolution conflicts.

### Troubleshooting
- Missing package manager: install Node.js (npm), or install pnpm/Bun and re-run the commands.
- Port already in use: change the port with `--port` or free the port 8080.

### Assets & Resume
- Resume is available at `public/` and linked via the footer CTA.
- Example public path: `/Ziddan%20Aryasatya%20Nugraha%20Resume%20V7.pdf`.

### Deployment
- Deployed on my own VPS (domain to be added).
- Platform: Linux (Ubuntu) VPS + Docker.
- Typical setup: build with Vite, serve `dist/` via Nginx in a Docker container, enable HTTPS at the VPS layer.
- Build:
  ```bash
  npm run build
  ```
- VPS notes:
  - Option A (Docker, recommended):
    - Create a Dockerfile:
      ```Dockerfile
      FROM nginx:alpine
      COPY dist /usr/share/nginx/html
      ```
    - Build and run on the VPS:
      ```bash
      docker build -t portfolio .
      docker run -d --name portfolio -p 80:80 portfolio
      ```
    - Put Nginx/Caddy or a reverse proxy in front for HTTPS (443) and caching.
  - Option B (without Docker):
    - Copy `dist/` to `/var/www/portfolio` and point Nginx root there.
    - Enable gzip/caching; set SPA fallback to `index.html`.
