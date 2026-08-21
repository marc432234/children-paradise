# Children's Paradise Learning Academies

Next.js 16 website for Children's Paradise Learning Academies — 9 locations across Hialeah and Miami Lakes, Florida.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **SweetAlert2** — contact form notifications
- **Google Fonts** — Inter, Instrument Serif, Space Grotesk, Fraunces

## Project Structure

```
src/
  app/
    layout.js           Root layout — metadata, fonts, JSON-LD schema, skip link
    page.js             Homepage
    about/page.js
    programs/page.js
    schools/page.js
    student-life/page.js
    contact/page.js
    blog/
      page.js           Blog index
      [slug]/page.js    Individual posts
      page/[page]/page.js  Pagination
    sitemap.js          Auto-generated sitemap.xml
    robots.js           Auto-generated robots.txt
  components/           Shared UI components
  data/blog-posts.js    Blog content
```

## SEO

All SEO is handled via Next.js App Router metadata conventions.

**What's in place:**
- Title template: `%s | Children's Paradise Learning Academies`
- Open Graph and Twitter Card tags on every page
- Canonical URLs on every page
- JSON-LD `EducationalOrganization` schema with all 9 campus `LocalBusiness` entries (injected via layout)
- Dynamic `generateMetadata` on blog post pages (per-post OG, Twitter, canonical)
- Auto-generated `sitemap.xml` covering all static pages and blog posts
- `robots.txt` referencing the sitemap
- `metadataBase` set to `https://michildrensparadise.com`

**To update the domain** — change `siteUrl` in these three files:
- `src/app/layout.js`
- `src/app/sitemap.js`
- `src/app/robots.js`

## Performance

- AVIF and WebP image formats enabled in `next.config.mjs` — Next.js Image serves these automatically
- `sizes` attributes on all major images for correct responsive srcset
- `display: "swap"` on all Google Fonts — prevents invisible text during font load
- `compress: true` in Next.js config
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- `X-Powered-By` header disabled

## Environment Variables

Create a `.env.local` file in the project root (never committed — already in `.gitignore`):

```env
NEXT_PUBLIC_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxxxx/xxxxxxx/
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEBHOOK_URL` | Zapier webhook endpoint for the contact and admissions forms |

On Vercel, add this under **Project Settings → Environment Variables**.

## Contact Form

The contact and admissions forms submit to the Zapier webhook defined in `NEXT_PUBLIC_WEBHOOK_URL`. To change the endpoint, update the value in `.env.local` (and in Vercel's environment variables for production).

## Deployment

Deploy to Vercel:

```bash
npm i -g vercel
vercel --prod
```
