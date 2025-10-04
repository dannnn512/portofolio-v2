## Portfolio V2

Modern portfolio built with Vite + React + TypeScript, styled with Tailwind and shadcn/ui.

### Tech stack
- **Build/dev**: Vite (TS, SWC)
- **UI**: React 18, Tailwind CSS, shadcn/ui (Radix primitives), Lucide Icons
- **State/Data**: TanStack Query
- **Routing**: react-router-dom
- **Tooling**: TypeScript, ESLint, PostCSS, Autoprefixer

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

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/5b1d53bf-f99d-4c6e-8638-606ec2b25f0e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5b1d53bf-f99d-4c6e-8638-606ec2b25f0e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5b1d53bf-f99d-4c6e-8638-606ec2b25f0e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
