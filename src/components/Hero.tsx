"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-figure.jpg"
        alt="OMPK — Buenos Aires, Collection Nº001"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_center] grayscale-[10%]"
      />
    </section>
  );
}
