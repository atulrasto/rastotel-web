# Rastotel.in — React + Vite + Tailwind

Production-ready starter for **Rastotel Technologies Pvt Ltd**.

## Tech
- React 18 + Vite + TypeScript
- Tailwind CSS
- React Router
- react-helmet-async (SEO)
- react-hook-form + zod (forms/validation)
- lucide-react (icons)

## Setup
1. Install deps:
   ```bash
   npm i
   npm run dev
   ```

## Environment
Copy `.env.example` to `.env` and fill in values:
```
VITE_CONTACT_PROVIDER=formspree
VITE_FORMSPREE_ID=your_formspree_id
# OR EmailJS REST
VITE_CONTACT_PROVIDER=emailjs
VITE_EMAILJS_SERVICE_ID=svc_xxx
VITE_EMAILJS_TEMPLATE_ID=tpl_xxx
VITE_EMAILJS_PUBLIC_KEY=pub_xxx

# Optional GA4
VITE_GA_ID=G-XXXXXXXX
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (Hostinger)

**Automated (recommended):** `.github/workflows/deploy.yml` builds and FTP-deploys `dist/` to
`public_html/` on every push to `main`. Requires these GitHub repo secrets (Settings → Secrets and
variables → Actions):
- `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` — from Hostinger hPanel → Advanced → FTP Accounts
- `VITE_CONTACT_PROVIDER`, `VITE_FORMSPREE_ID`, `VITE_RECAPTCHA_SITE_KEY`, `VITE_GA_ID` — same values as your local `.env`

**Manual:** `npm run build`, then upload the contents of `/dist` to `public_html/` (File Manager or FTP).

The `.htaccess` needed for SPA routing lives in `/public/.htaccess` and is included in every build
automatically — no separate manual step needed.

## Structure
- `/src/pages` — Pages
- `/src/components` — UI & Layout
- `/src/config/site.ts` — Company config
- `/src/lib` — SEO, analytics
- `/public` — Static files (favicon, robots, sitemap, `.htaccess`)

## Notes
- Replace placeholder copy, images, and legal text.
- Blog is stubbed (static list) — hook to MD/MDX or a headless CMS later.
