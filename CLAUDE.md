# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/corporate website for **Rastotel Technologies Pvt Ltd** (rastotel.in) — React + Vite + TypeScript + Tailwind, statically built and deployed to Hostinger shared hosting (upload `/dist` to `public_html/`).

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b (typecheck/build refs) && vite build -> /dist
npm run preview   # preview the production build locally
```

There is no test suite, linter, or formatter configured in this repo — don't assume `npm test`/`npm run lint` exist.

## Environment variables

Vite only exposes vars prefixed `VITE_`. Set in `.env` (already present locally, not committed conventions aside):
- `VITE_CONTACT_PROVIDER` — `formspree` or `emailjs`
- `VITE_FORMSPREE_ID` — Formspree form id (used when provider is `formspree`)
- `VITE_RECAPTCHA_SITE_KEY` — reCAPTCHA v3 site key, used directly in `src/pages/Contact.tsx`
- `VITE_EMAILJS_SERVICE_ID` / `VITE_EMAILJS_TEMPLATE_ID` / `VITE_EMAILJS_PUBLIC_KEY` — for the EmailJS path
- `VITE_GA_ID` — optional GA4 id, injected by `src/lib/analytics.ts`

`src/env.d.ts` only declares `VITE_CONTACT_PROVIDER` and `VITE_FORMSPREE_ID` on `ImportMetaEnv` — extend it when adding/using new env vars elsewhere, or TS won't type-check `import.meta.env.X` correctly.

## Architecture

- Single-page-app style routing lives entirely in `src/main.tsx`: `BrowserRouter` wraps `App` (persistent `Navbar`/`Footer` shell from `src/App.tsx`) wraps a flat `<Routes>` list, one route per file in `src/pages`. There is no route config file, nested routes, or lazy loading — adding a page means adding a file in `src/pages` and a `<Route>` line in `main.tsx`.
- `src/config/site.ts` (`SITE` object) is the single source of company info (name, phone, email, address, socials, default meta) — components like `Footer` read from it. `src/lib/constants.ts` holds standalone marketing copy (tagline/subline) but `Home.tsx` currently redefines the same strings locally instead of importing them (inconsistency to be aware of if editing copy).
- Every page follows the same shape: `<SEO .../>` (from `src/lib/seo.tsx`, a thin `react-helmet-async` wrapper for title/description/canonical) + `<PageHeader/>` + one or more `<Section/>` blocks (`src/components/layout/`). `Container` provides the centered max-width wrapper used inside `Section`/`PageHeader`/`Navbar`/`Footer`.
- Two separate, divergent contact-form implementations exist:
  - `src/lib/form.ts` — a generic `sendContact()` supporting both `formspree` and `emailjs` providers, but the `emailjs` branch is an unimplemented stub (`'EmailJS provider not yet implemented'`) and this module isn't currently imported anywhere.
  - `src/pages/Contact.tsx` — has its own inline `sendContact()` that only handles the `formspree` provider (with reCAPTCHA v3 gating) and silently no-ops ("Demo: message captured") for any other provider value, including `emailjs`. This is the one actually wired to the UI.
  When working on the contact form, reconcile these rather than editing only one.
- Styling is Tailwind utility classes plus a few semantic classes (`.card`, `.btn`, `.btn-outline`, `.section`) defined in `src/styles/globals.css`; brand colors/shadows/radii are extended in `tailwind.config.cjs` (`brand.primary`, `brand.primaryDark`, `brand.accent`).
- `@/*` resolves to `src/*` (configured in both `tsconfig.json` paths and `vite.config.ts` alias) — some files use it, others use relative `../` imports; both work.

## Known-incomplete sections (placeholder/stub content)

These are intentionally unfinished per the README and page contents — treat filling them in as expected work, not bugs to silently "fix" by removing:
- **Blog** (`src/pages/Blog.tsx`, `src/pages/Post.tsx`): posts are a hardcoded in-file array; `Post.tsx` renders literal placeholder text instead of real content. README notes: "hook to MD/MDX or a headless CMS later."
- **Projects** (`src/pages/Projects.tsx`): 4 generated "Case Study N" cards with placeholder copy and empty gray boxes instead of real case studies/images.
- **Solutions** (`src/pages/Solutions.tsx`): 6 generated "Solution N" cards with placeholder specs and a dead `#` "Download PDF" link.
- **Privacy** / **Terms** (`src/pages/Privacy.tsx`, `src/pages/Terms.tsx`): explicit placeholder legal text ("Replace with your legal text").
- **EmailJS contact provider**: unimplemented in `src/lib/form.ts`, and not handled at all in the live `src/pages/Contact.tsx` form (falls through to a "Demo" no-op).
- **Social links** in `src/config/site.ts` (`socials.linkedin/twitter/youtube`) are all `"#"` placeholders.
- Logo/asset and imagery throughout (e.g. gray placeholder boxes in Solutions/Projects) are unfinished visual content, not functional placeholders.
