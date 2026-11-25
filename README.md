# AETHER

**Move through sound. Create harmony. Find your calm.**

AETHER is a web based musical experience in development. This repository is at
its project foundation stage; camera input, hand tracking, audio, and the
immersive visual environment are not implemented yet.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Getting started

```sh
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run typecheck` | Check application and configuration TypeScript |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check source and configuration with ESLint |
| `npm run build` | Type check and create the production build |
| `npm run preview` | Serve the production build locally |

## Architecture

The current source is intentionally small:

- `src/app` contains the React application shell.
- `src/styles` contains global application styles.
- `src/test` contains shared test setup.
- `src/main.tsx` is the browser entry point.

Future vision, movement, interaction, music, audio, visual, and experience
modules should be introduced with their first real implementation. Keep
high-frequency processing outside React state, and keep the vision, musical,
audio, and rendering layers independent, as described in the project
architecture specification.

## Project specifications

The product constitution and technical architecture, interaction, musical,
visual, and development roadmap specifications are provided in the repository
root. Consult the relevant specification before implementing a product module.
