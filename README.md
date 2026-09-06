# Fewzed Website

This website was built for **Fewzed Ltd** to present the company, its services,
and its products. Fewzed provides design, engineering, consultancy, data
collection, and trial management services for highways, transport, and
construction projects.

The site includes dedicated pages for consulting, trials, data collection,
products, and contacting the company, with animated interactions and 3D visuals.

**Website:** https://fewzed-v2.vercel.app

## Technology and packages

The project uses Nuxt 4, Vue 3, and TypeScript with server-side rendering enabled.
The current dependencies are recorded in `package.json`, with exact installed
versions pinned in `package-lock.json`.

| Package | Purpose |
| --- | --- |
| `nuxt` and `vue` | Application framework, routing, server-side rendering, and UI components. |
| `@nuxtjs/tailwindcss` | Tailwind CSS integration for styling and responsive layouts. |
| `@nuxt/icon` | Icon components with a locally bundled selection of icons. |
| `@nuxtjs/sitemap` | Sitemap generation for the public site pages. |
| `@vueuse/core` and `@vueuse/nuxt` | Vue composable utilities and Nuxt integration. |
| `@splinetool/runtime` | Interactive Spline 3D scenes. |
| `@studio-freight/lenis` | Smooth scrolling, synchronized with GSAP ScrollTrigger. |
| `nuxt-gsap-module` | Declared GSAP module dependency; the app integrates GSAP and ScrollTrigger through its own plugins. |
| `typeface-inter` | Inter font package. |
| `vite-svg-loader` | SVG loader dependency. |

Local Iconify collections are provided by `@iconify-json/icon-park-outline`,
`@iconify-json/iconoir`, `@iconify-json/lucide`,
`@iconify-json/material-symbols`, `@iconify-json/mdi`,
`@iconify-json/mynaui`, and `@iconify-json/teenyicons`. The selected icons are
bundled into the app to avoid runtime requests to the Iconify API.

## Local development

Use a Node.js version supported by `package.json`:
`^22.19.0 || ^24.11.0 || >=26.0.0`.

Install dependencies from the lockfile:

```bash
npm ci
```

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

## Build and preview

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

`npm run generate` is also available for static generation. The Vercel deployment
uses the production build.

## Deployment

Deployment is handled by the existing Vercel GitHub integration for
`YRlp98/Fewzed-v2`. Vercel builds and deploys pushes automatically; the production
branch is configured in the Vercel project settings, and other branches receive
preview deployments. GitHub Pages is not used.

Use the Nuxt framework preset and `npm run build` in Vercel. No separate GitHub
Actions deployment workflow or Vercel token in GitHub Actions is required.

See the [Vercel GitHub integration documentation](https://vercel.com/docs/git/vercel-for-github).

## Project structure

- `pages/` — Website pages and routes.
- `components/` — Shared navigation, cards, forms, buttons, and animated elements.
- `layouts/` — Shared page layouts.
- `plugins/` — Application integrations, including GSAP and Lenis.
- `composables/` — Reusable Vue composition functions.
- `assets/` — Stylesheets, images, and icons.
- `public/` — Public files served directly.
- `nuxt.config.ts` — Nuxt modules, site metadata, sitemap, and icon configuration.
