# OMPK — Buenos Aires

Independent clothing label, headless storefront: Next.js (App Router) front end + Shopify (Storefront API) as the commerce backend. Deliberately a separate repo from the rolling-order / AFIP codebase — nothing in here should depend on that project.

Full brand reasoning — naming, logo, positioning — lives in [`docs/`](./docs): `BRAND_BIBLE.md` is the source of truth; the `naming-round-*.md` and `logo-system-v01.md` files are the decision history behind the current name (OMPK) and mark.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage renders with example product data until Shopify is connected (see below) — nothing is broken, it's just not live inventory yet.

## Connecting Shopify

The storefront reads products via the **Storefront API** (not the Admin API — that stays server-side/private, this is the public read-only one meant for a front end).

1. In the Shopify admin: **Settings → Apps and sales channels → Develop apps** → create an app → enable the **Storefront API** scope `unauthenticated_read_product_listings` (add more scopes as checkout/cart features are built) → install the app → copy the **Storefront API access token**.
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_...
   ```
3. Restart `npm run dev`. `src/components/ShopGrid.tsx` switches from the example catalogue (`src/lib/products.ts`) to real Shopify products automatically — see `isShopifyConfigured()` in `src/lib/shopify.ts`.

No Shopify store yet? Creating the store itself (account, plan, billing) is a Shopify-account action — do that directly at shopify.com; this repo is ready to point at it the moment credentials exist.

## Project structure

```
src/
  app/            App Router entry (layout.tsx sets fonts + metadata, page.tsx assembles the homepage)
  components/     One component per homepage section (Header, Hero, Editorial, ShopGrid, RadioTeaser, ArchiveList, Footer)
  lib/
    language.tsx  ES/EN toggle (React context) — Spanish is the default per Brand Bible §29
    shopify.ts    Storefront API client (plain fetch, no SDK)
    products.ts   Example catalogue used until Shopify is connected
docs/             Brand Bible + naming/logo decision history
```

## Design system

Brand tokens (Paper / Ink / Newsprint / Signal / Tobacco / Wine) live as CSS variables in `src/app/globals.css`, mapped into Tailwind v4 via `@theme inline` — use them as `bg-paper`, `text-ink-soft`, `text-signal`, etc. rather than hardcoded hex values. Three type voices, per Brand Bible §12: `font-grotesk` (Archivo — nav, data, UI), `font-editorial` (Piazzolla — stories, quotes, longer copy), `font-script` (Yellowtail, **placeholder only** — the primary OMPK wordmark; see `docs/logo-system-v01.md` §Open items: commission a custom script before this ships publicly).

## Deploy

Vercel is the natural fit for a Next.js App Router project. Connect the GitHub repo directly in the Vercel dashboard; set the same two `SHOPIFY_*` env vars there under Project Settings → Environment Variables.
