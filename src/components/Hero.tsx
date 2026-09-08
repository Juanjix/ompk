"use client";

import { useLang } from "@/lib/language";
import { ProductCard } from "@/components/ProductCard";
import { exampleProducts } from "@/lib/products";

const featured = exampleProducts.slice(0, 2);

export function Hero() {
  const { lang } = useLang();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-28 text-center"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 0%, var(--paper-raised) 0%, #d9cfb8 60%, #cabfa4 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 160px 40px rgba(23,23,20,0.18)",
        }}
      />

      <span className="relative z-10 mb-5 block text-[11px] font-bold uppercase tracking-[0.28em] text-ink-soft">
        {lang === "es" ? "Colección Nº001" : "Collection Nº001"}
      </span>

      <h1 className="font-script relative z-10 text-[clamp(72px,15vw,168px)] leading-[0.85] text-ink">
        OMPK
      </h1>

      <div className="relative z-10 mt-6 text-[12.5px] font-bold tracking-[0.22em] text-ink">
        BUENOS AIRES
      </div>
      <p className="font-editorial relative z-10 mt-2.5 text-[clamp(15px,2vw,18px)] italic text-ink-soft">
        AFTER MIDNIGHT — 03:17 AM
      </p>

      <a
        href="#shop"
        className="relative z-10 mt-9 inline-flex items-center gap-2.5 border border-ink px-6 py-3 text-[11.5px] font-bold tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        {lang === "es" ? "Ver la colección" : "View the collection"}
      </a>

      <div className="relative z-10 mx-auto mt-16 grid max-w-[520px] grid-cols-2 gap-px bg-newsprint-line sm:mt-20">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} size="feature" />
        ))}
      </div>
    </section>
  );
}
