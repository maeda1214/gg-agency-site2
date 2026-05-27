# GG Agency Site

Quiet luxury model and talent agency site for refined shoots, appearances, brand projects, and international inquiries.

## Tech Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- zod
- clsx
- lucide-react

## Setup
```bash
npm install
```

## Development
```bash
npm run dev
```

## Validation
```bash
npm run lint
npm run typecheck
npm run build
```

## Directory Structure
```txt
app/              App Router pages, layouts, API routes, sitemap, robots
components/       Layout, sections, forms, SEO components
content/          Locale-specific navigation and metadata copy
data/             Talent profiles and social links
lib/              SEO, analytics, utils, contact delivery
types/            Shared TypeScript types
public/           Static assets and placeholder images
```

## Editing Copy
- Japanese copy: `content/ja.ts`
- English copy: `content/en.ts`
- Talent profiles and image paths: `data/talents.ts`

## Main Routes
- `/`: language selection
- `/talent`: luxury black talent roster
- `/talent/[slug]`: root talent profile detail
- `/ja`, `/en`: top LP with Hero, Talent, About, Works, Contact CTA
- `/ja/talent`, `/en/talent`: localized talent listing
- `/ja/talent/[slug]`, `/en/talent/[slug]`: localized talent detail
- `/contact`, `/ja/contact`, `/en/contact`: business inquiry form sent through Resend
- `/apply`, `/ja/apply`, `/en/apply`: model application form sent through Resend
- `/ja/company`, `/en/company`: minimal company profile
- `/ja/privacy`, `/en/privacy`: privacy policy
- `/ja/brands`, `/en/services`: redirect to homepage About

## Environment Variables
Create `.env.local` based on `.env.example`.

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
RESEND_API_KEY=
CONTACT_EMAIL=nasu@gg1.jp
CONTACT_DELIVERY_MODE=resend
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

## Future Enhancements
- Replace placeholder company profile and legal text.
- Replace placeholder photography with production visuals.
- Connect inquiries and applications to a CRM when operations require it.
- Add verified work visuals once available.
