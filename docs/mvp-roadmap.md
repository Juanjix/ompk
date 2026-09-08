# OMPK — MVP Roadmap

Snapshot as of 2026-09-08. This is the working checklist for getting OMPK from "brand on paper" to "can take a real order." Update it as items close — it's meant to stay current, not be a one-time export.

## Done

| # | Item | Where it lives |
|---|---|---|
| 1 | **Brand Bible** — DNA, color/type system, photography modes, garment strategy, tone of voice | `docs/BRAND_BIBLE.md` |
| 2 | **Naming** — 3 rounds (Buenos Aires/archive-first → fashion-first pivot → "attitude before explanation"), landed on **OMPK** | `docs/naming-round-02.md`, `docs/naming-round-03.md` |
| 3 | **Logo direction** — script wordmark (Rickenbacker-headstock energy) as primary, 2×2 grid monogram seal as secondary/hardware mark | `docs/logo-system-v01.md` |
| 4 | **Trademark check** — confirmed available to register with INPI (Argentina, class 25) | `docs/legal-domain-clearance.md` |
| 5 | **Website v0** — homepage built (Next.js + Tailwind + Shopify-ready), ES/EN toggle, pushed to GitHub | `github.com/Juanjix/ompk`, this repo |

## Partial / decided-but-not-executed

| # | Item | Status |
|---|---|---|
| 6 | **Domain** | `ompk.com.ar` looks open, `ompk.com` is parked/for sale — decision deferred, not yet registered |
| 7 | **Social handles** | `@ompk` taken on Instagram (unrelated account) — need a variant, not yet claimed |
| 8 | **Shopify integration** | Code is ready (`src/lib/shopify.ts`) and falls back to example data — no real Shopify store connected yet |

## Not started — grouped by who does it

### Founder actions (things only you can do — accounts, money, physical world)

- [ ] Create and configure the real Shopify store: account, plan, payment processor, shipping zones, tax settings
- [ ] Register the domain (`ompk.com.ar` via NIC.ar, and/or acquire `ompk.com`)
- [ ] Claim a social handle variant (Instagram, others as relevant)
- [ ] Commission or hand-draw the **production** logo — the site currently uses Yellowtail (a stock Google Font) as a placeholder script; this should not ship long-term as the real wordmark
- [ ] Product photography for the Bootcut Nº01 (at minimum), per Brand Bible §15–17 (Mode A portrait / Mode B night)
- [ ] Confirm final pricing, sizing run, and manufacturing/production partner
- [ ] AFIP business registration for OMPK as an entity, and a decision on **how AFIP electronic invoicing connects to Shopify** — Shopify has no native AFIP support; this needs a third-party app or custom middleware. This is the single most complex open item and worth starting early, not last.
- [ ] Decide real shipping costs/zones and return policy terms (content, not code)
- [ ] Curate the actual OMPK Radio Nº001 tracklist

### Build work (once the inputs above exist, this is what happens in code)

- [ ] Wire real `SHOPIFY_STORE_DOMAIN` / `SHOPIFY_STOREFRONT_ACCESS_TOKEN` into the site
- [ ] Build product detail pages (PDP) and collection pages (PLP) — right now there's only the homepage; Shop/Collections/Stories/Radio nav links point to anchors on that one page, not real routes
- [ ] Build cart + checkout flow (Shopify Storefront API cart mutations, or — faster for a first launch — deep-link "Buy now" straight to Shopify's own hosted checkout and build a custom cart later)
- [ ] Build Stories (editorial), About, Shipping, Returns, Contact pages — footer links currently point to `#`
- [ ] Drop in real product photography once it exists (currently illustrative SVG silhouettes)
- [ ] AFIP invoicing integration, once the founder-side decision above is made
- [ ] SEO basics: metadata per page, OG images, sitemap
- [ ] Deploy to Vercel, point the real domain at it once registered

## Minimum to take a first real order

Not everything above has to be done to launch — this is the actual floor:

1. Shopify store live, Bootcut Nº01 loaded with real price + real photo
2. Domain registered and pointed at the deployed site
3. Site deployed to production (Vercel), env vars set
4. A working path from product page to paid checkout (Shopify-hosted checkout is an acceptable v1 — doesn't have to be a fully custom cart)
5. AFIP invoicing resolved — legally required for any sale in Argentina, so this can't be skipped for v1 even though it's easy to defer
6. Shipping/returns policy text finalized (even a simple version)
7. Logo good enough to ship — doesn't need to be perfect production art day one, but shouldn't be a stock font indefinitely

Everything else in "Build work" above (Stories, Radio content, full editorial pages, a custom cart) can reasonably ship *after* the first order, not before it.
