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
Upload the contents of `/dist` to `public_html/`.
Add the following `.htaccess` in your site root to enable SPA routing:
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Structure
- `/src/pages` — Pages
- `/src/components` — UI & Layout
- `/src/config/site.ts` — Company config
- `/src/lib` — SEO, analytics, forms
- `/public` — Static files (favicon, robots, sitemap)

## Notes
- Replace placeholder copy, images, and legal text.
- Blog is stubbed (static list) — hook to MD/MDX or a headless CMS later.
