# SnapQR

Free QR code generator with guides. Built with TanStack Start, React and Tailwind.
Every page is prerendered to static HTML at build time, so crawlers see the full text.

## Develop

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
```

Output goes to `.vercel/output` (Vercel Build Output API). Deploy by importing the repo in Vercel.

## Content

- Guides live in `src/content/guides/*.md` and are listed in `src/lib/guides.ts`.
- Contact email is set in `src/lib/seo.ts`.
- `public/ads.txt`, `robots.txt` and `sitemap.xml` are served from the site root.
