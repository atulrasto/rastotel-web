# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/corporate website for **Rastotel Technologies Pvt Ltd** (rastotel.in) — React + Vite + TypeScript + Tailwind, statically built and deployed to Hostinger shared hosting. `.github/workflows/deploy.yml` builds and FTP-deploys `dist/` to `public_html/` automatically on every push to `main` (see README for the required GitHub secrets); manual upload is a fallback, not the normal path.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b (typecheck/build refs) && vite build -> /dist
npm run preview   # preview the production build locally
```

There is no test suite, linter, or formatter configured in this repo — don't assume `npm test`/`npm run lint` exist.

## Environment variables

Vite only exposes vars prefixed `VITE_`. Copy `.env.example` to `.env` and fill in values — `.env` is gitignored and not in the repo:
- `VITE_CONTACT_PROVIDER` — `formspree` or `emailjs`
- `VITE_FORMSPREE_ID` — Formspree form id (used when provider is `formspree`)
- `VITE_RECAPTCHA_SITE_KEY` — reCAPTCHA v3 site key, used directly in `src/pages/Contact.tsx`
- `VITE_EMAILJS_SERVICE_ID` / `VITE_EMAILJS_TEMPLATE_ID` / `VITE_EMAILJS_PUBLIC_KEY` — for the EmailJS path
- `VITE_GA_ID` — optional GA4 id, injected by `src/lib/analytics.ts`

`src/vite-env.d.ts` declares all env vars on `ImportMetaEnv` — extend it when adding/using new env vars elsewhere, or TS won't type-check `import.meta.env.X` correctly. (This used to be split across a duplicate `src/env.d.ts`; that's been consolidated here.)

## Architecture

- Single-page-app style routing lives entirely in `src/main.tsx`: `BrowserRouter` wraps `App` (persistent `Navbar`/`Footer` shell from `src/App.tsx`) wraps a flat `<Routes>` list, one route per file in `src/pages`, ending in a catch-all `<Route path="*" element={<NotFound />} />`. There is no route config file, nested routes, or lazy loading — adding a page means adding a file in `src/pages` and a `<Route>` line in `main.tsx`.
- `src/config/site.ts` (`SITE` object) is the single source of company info (name, phone, email, address, default meta) plus `WHATSAPP_LINK` (derived from `SITE.phone`) — components like `Footer`, `Contact.tsx`, and `Home.tsx` read from it rather than hardcoding contact details. `src/lib/constants.ts` holds the hero tagline/subline (`TAGLINE`/`SUBLINE`), imported by `Home.tsx`.
- Every page follows the same shape: `<SEO .../>` (from `src/lib/seo.tsx`, a thin `react-helmet-async` wrapper for title/description/canonical) + `<PageHeader/>` + one or more `<Section/>` blocks (`src/components/layout/`). `Container` provides the centered max-width wrapper used inside `Section`/`PageHeader`/`Navbar`/`Footer`.
- The contact form lives only in `src/pages/Contact.tsx` (Formspree + reCAPTCHA v3; any other `VITE_CONTACT_PROVIDER` value falls back to a "Demo: message captured" no-op). There used to be a second, unused generic implementation in `src/lib/form.ts` with an unimplemented EmailJS branch — it was deleted as dead code; don't recreate that split.
- Styling is Tailwind utility classes plus a few semantic classes (`.card`, `.btn`, `.btn-outline`, `.section`) defined in `src/styles/globals.css`; brand colors/shadows/radii are extended in `tailwind.config.cjs` (`brand.primary`, `brand.primaryDark`, `brand.accent`, `brand.navy` — the logo's navy, used as the chip background behind the logo in `Navbar.tsx` since the logo itself is white/teal-on-navy and unreadable on the site's white nav bar).
- `@/*` resolves to `src/*` (configured in both `tsconfig.json` paths and `vite.config.ts` alias) — some files use it, others use relative `../` imports; both work.
- Case-study/solution/blog content on `Projects.tsx`, `Solutions.tsx`, and `src/lib/posts.ts` is written as marketing/thought-leadership copy only, deliberately with **no implementation or architecture detail** (no mention of specific hardware, protocols, or infrastructure). Keep new content to that same level of abstraction.
- Blog posts are data-driven from `src/lib/posts.ts` (`Post` type: slug, title, excerpt, date, `sections[]` of heading+paragraphs) — `Blog.tsx` lists them, `Post.tsx` looks one up by slug via `getPostBySlug` and renders a "Post Not Found" fallback if the slug doesn't match. Add a new post by adding an entry to the `posts` array; also add its `/blog/<slug>` URL to `public/sitemap.xml`.

## Known-incomplete sections (placeholder/stub content)

These are intentionally unfinished per the README and page contents — treat filling them in as expected work, not bugs to silently "fix" by removing:
- **EmailJS contact provider**: `VITE_CONTACT_PROVIDER=emailjs` is documented in `.env.example` but not implemented anywhere — currently falls through to the Formspree code's generic "Demo" no-op branch.

`Privacy.tsx` / `Terms.tsx` now have real baseline copy (not placeholder text), but it's a generic template written by Claude, not reviewed by a lawyer — flag that if asked to touch these pages, and don't treat the content as legally authoritative.
