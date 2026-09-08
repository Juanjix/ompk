"use client";

import { useLang } from "@/lib/language";
import { ProductCard } from "@/components/ProductCard";
import { exampleProducts } from "@/lib/products";

const featured = exampleProducts.slice(0, 2);

/**
 * What used to live inside the Hero — wordmark, collection line, CTA and the
 * two featured garments — now its own beat right after the pure campaign
 * image, closer to Brand Bible §31's Hero → Editorial → Product flow.
 */
export function CollectionIntro() {
  const { lang } = useLang();

  return (
    <section className="flex flex-col items-center px-6 pb-20 pt-20 text-center sm:pt-24">
      <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.28em] text-ink-soft">
        {lang === "es" ? "Colección Nº001" : "Collection Nº001"}
      </span>

      <h1 className="font-script text-[clamp(64px,13vw,160px)] leading-[0.85] text-ink">
        OMPK
      </h1>

      <div className="mt-6 text-[12.5px] font-bold tracking-[0.22em] text-ink">
        BUENOS AIRES
      </div>
      <p className="font-editorial mt-2.5 text-[clamp(15px,2vw,18px)] italic text-ink-soft">
        AFTER MIDNIGHT — 03:17 AM
      </p>

      <a
        href="#shop"
        className="mt-9 inline-flex items-center gap-2.5 border border-ink px-6 py-3 text-[11.5px] font-bold tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        {lang === "es" ? "Ver la colección" : "View the collection"}
      </a>

      <div className="mt-14 grid w-full max-w-[420px] grid-cols-2 gap-px bg-newsprint-line sm:mt-16">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} size="feature" />
        ))}
      </div>
    </section>
  );
}
