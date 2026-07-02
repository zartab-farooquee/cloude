# ScriptZen — Agent Notes

This project uses **Next.js 15** (App Router) with TypeScript, Tailwind CSS v4,
and Framer Motion. Standard Next.js 15 App Router conventions apply.

## Key conventions
- Site-wide business data and content live in `src/lib/` — edit data there, not
  in components.
- SEO helpers (metadata, JSON-LD schema) live in `src/lib/seo.ts`; render schema
  with `src/components/seo/JsonLd.tsx`.
- Social images are generated via the file-convention routes
  `src/app/opengraph-image.tsx` / `twitter-image.tsx`.
- Use the `Icon` component (`src/components/ui/Icon.tsx`) with a mapped name
  rather than importing lucide icons ad hoc in data files.

## Before shipping
- `npm run lint` and `npm run build` must pass.
