"use client";

import Image from "next/image";
import { useLang } from "@/lib/language";
import { ProductCard } from "@/components/ProductCard";
import { exampleProducts } from "@/lib/products";

const featured = exampleProducts.slice(0, 2);

export function Hero() {
  const { lang } = useLang();

  return (
    <section
      id="top"
      className="relative grid overflow-hidden md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
      style={{ background: "#cabfa4" }}
    >
      <div className="relative hidden aspect-[4/5] md:block md:aspect-auto">
        <Image
          src="/images/hero-figure.png"
          alt="OMPK — Buenos Aires, Collection Nº001"
          fill
          priority
          sizes="45vw"
          className="object-cover object-[20%_center] grayscale-[15%]"
        />
      </div>

      <div
        className="relative flex flex-col items-center justify-center px-6 py-20 text-center md:items-start md:px-14 md:text-left"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 0%, var(--paper-raised) 0%, #d9cfb8 55%, #cabfa4 100%)",
        }}
      >
        <div className="relative w-full aspect-[4/3] md:hidden">
          <Image
            src="/images/hero-figure.png"
            alt="OMPK — Buenos Aires, Collection Nº001"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top grayscale-[15%]"
          />
        </div>

        <span className="relative z-10 mt-8 mb-5 block text-[11px] font-bold uppercase tracking-[0.28em] text-ink-soft md:mt-0">
          {lang === "es" ? "Colección Nº001" : "Collection Nº001"}
        </span>

        <h1 className="font-script relative z-10 text-[clamp(64px,11vw,140px)] leading-[0.85] text-ink">
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

        <div className="relative z-10 mt-14 grid w-full max-w-[420px] grid-cols-2 gap-px bg-newsprint-line md:mt-16">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} size="feature" />
          ))}
        </div>
      </div>
    </section>
  );
}
