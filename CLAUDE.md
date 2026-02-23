# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check then build (tsc -b && vite build)
pnpm lint         # Run ESLint
pnpm preview      # Preview production build
```

No test suite is configured.

## Architecture

Single-page portfolio built with React 18 + TypeScript + Vite. The entire page lives in `src/App.tsx`, which stacks sections vertically in order: `Navbar → HeroParallax → About → Techs → Projects → Testimonials → ContactMe`. A `FloatingDock` (sticky bottom nav) provides anchor-link navigation between sections.

**Path alias**: `@` resolves to `./src` (configured in `vite.config.ts`).

### Key directories

- `src/constants/index.ts` — All editable content: `products` (hero parallax images), `technologies` (3D tech balls), `projects` (project cards). **Edit this file to change displayed content.**
- `src/assets/index.ts` — Central re-export for all image assets (tech icons, project screenshots).
- `src/components/canvas/` — Three.js components (`Ball.tsx` for spinning tech-icon icosahedrons, `Earth.tsx` for 3D globe in contact section). These use `@react-three/fiber` + `@react-three/drei`.
- `src/components/ui/` — shadcn/ui primitives (Button, Input, Label, Textarea, Toast).
- `src/lib/motion.ts` — Shared Framer Motion variant presets (`containerVariants`, `slideInLeft`, `slideInRight`, `staggerContainer`).
- `src/hooks/useIntersectionObserver.ts` — Used to lazy-trigger 3D canvas animations on scroll.

### Contact form

`ContactForm.tsx` sends email via EmailJS. Requires three environment variables in `.env`:

```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

Form validation is handled with `react-hook-form` + `zod`.

### Tailwind setup

`tailwind.config.js` adds several custom utilities beyond shadcn defaults:
- `bg-dot-*` — dot-grid background pattern (used in `App.tsx` for the main content area).
- `.mask-fade-sides` / `.mask-fade-top-bottom` — mask gradient utilities used by `Marquee` components.
- Custom animations: `marquee`, `marquee-vertical`, `scroll`.
- All Tailwind color values are injected as CSS variables via the `addVariablesForColors` plugin.
