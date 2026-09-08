"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative aspect-[4/5] overflow-hidden" id="top">
      <Image
        src="/images/hero-figure.jpg"
        alt="OMPK — Buenos Aires, Collection Nº001"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[40%_20%] grayscale contrast-[1.15]"
      />
    </section>
  );
}
