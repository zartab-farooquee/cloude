# ScriptZen — AI Automation & Business Solutions Website

A modern, premium, SEO-optimized marketing website for **ScriptZen**, an AI
automation agency. Built for lead generation, high conversion, and strong
Google rankings.

## Tech Stack

- **Next.js 15** (App Router, Server-Side Rendering / SSG)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations & hover effects)
- **next-themes** (premium dark/light mode)
- **lucide-react** (icons)

## Features

### Pages
- **Home** — hero, services, why choose us, benefits, industries, testimonials,
  case studies, FAQ, contact form, final CTA
- **Services** — 8 dedicated services, each with description, benefits, process
  and FAQs (AI Chatbots, AI Voice Agents, Workflow Automation, WhatsApp
  Automation, CRM Automation, Lead Generation, Email Automation, Custom AI)
- **About** — story, mission, vision, core values, why businesses trust us
- **Case Studies** — before/after results, ROI metrics, success stories
- **Blog** — SEO-ready listing with category filtering + individual article pages
- **Contact** — form, email, phone, WhatsApp button, Google Map embed

### Conversion elements
- Sticky mobile CTA bar
- Floating WhatsApp button
- Consultation / lead-capture form (`/api/contact`)
- Trust badges, client logos, testimonials

### SEO
- Semantic HTML5 with proper H1/H2/H3 hierarchy
- Per-page metadata, canonical URLs, Open Graph & Twitter cards
- JSON-LD schema: Organization, LocalBusiness, WebSite, Service, FAQPage,
  BreadcrumbList, BlogPosting
- Dynamic `sitemap.xml` and `robots.txt`
- Dynamically generated Open Graph / Twitter images
- Web app manifest + SVG favicon
- Fast Core Web Vitals (static rendering, font optimization)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run production build
npm run lint     # lint
```

## Configuration

All business details (name, contact info, address, social links, WhatsApp
number, stats) live in [`src/lib/site.ts`](src/lib/site.ts). Update these
before going live — in particular:

- `url` — your production domain (used for canonical URLs, sitemap, schema)
- `phone`, `phoneHref`, `whatsapp`, `email`, `address`, `geo`
- `social` handles

Content data lives in `src/lib/`:
- `services.ts` — services, benefits, process, FAQs
- `content.ts` — why-choose, benefits, industries, testimonials, case studies, FAQs
- `blog.ts` — blog posts & categories

### Contact form
The form posts to `src/app/api/contact/route.ts`, which currently validates and
logs the lead. To deliver leads, wire it to your provider (Resend, HubSpot,
Slack webhook, etc.) using environment variables.

### Analytics & Search Console
- Add your analytics snippet (e.g. Google Analytics / GA4) in
  `src/app/layout.tsx`.
- Verify the domain in Google Search Console and submit `/sitemap.xml`.
