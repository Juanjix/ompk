"use client";

import Image from "next/image";
import { useLang } from "@/lib/language";
import { ProductCard } from "@/components/ProductCard";
import { exampleProducts } from "@/lib/products";

const featured = exampleProducts.slice(0, 2);

export function Hero() {
  const { lang } = useLang();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="/images/hero-figure.jpg"
        alt="OMPK — Buenos Aires, Collection Nº001"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_center] grayscale-[10%]"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(20,19,17,0.55) 0%, rgba(20,19,17,0.15) 42%, rgba(20,19,17,0.05) 60%, rgba(20,19,17,0.35) 100%)",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-16 pt-[22vh] text-center">
        <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.28em] text-paper/80">
          {lang === "es" ? "Colección Nº001" : "Collection Nº001"}
        </span>

        <h1
          className="font-script text-[clamp(64px,13vw,160px)] leading-[0.85] text-paper"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.45)" }}
        >
          OMPK
        </h1>

        <div className="mt-6 text-[12.5px] font-bold tracking-[0.22em] text-paper">
          BUENOS AIRES
        </div>
        <p className="font-editorial mt-2.5 text-[clamp(15px,2vw,18px)] italic text-paper/85">
          AFTER MIDNIGHT — 03:17 AM
        </p>

        <a
          href="#shop"
          className="mt-9 inline-flex items-center gap-2.5 border border-paper px-6 py-3 text-[11.5px] font-bold tracking-[0.12em] text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          {lang === "es" ? "Ver la colección" : "View the collection"}
        </a>

        <div className="mt-14 grid w-full max-w-[420px] grid-cols-2 gap-px bg-newsprint-line/60 md:mt-16">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} size="feature" />
          ))}
        </div>
      </div>
    </section>
  );
}
