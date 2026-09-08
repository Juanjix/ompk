"use client";

import Image from "next/image";
import { useLang } from "@/lib/language";

export function RadioTeaser() {
  const { lang } = useLang();

  return (
    <section id="radio" className="bg-night px-6 py-24 text-paper sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 md:grid-cols-[280px_1fr]">
        <div className="relative mx-auto aspect-[3/4] w-[220px] overflow-hidden border border-[#3a352c] md:mx-0 md:w-full">
          <Image
            src="/images/radio-001-live.jpg"
            alt="OMPK Radio Nº001 — live, Buenos Aires"
            fill
            sizes="(min-width: 768px) 280px, 220px"
            className="object-cover object-top grayscale contrast-[1.1]"
          />
        </div>

        <div className="text-center md:text-left">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
            OMPK RADIO — Nº001
          </div>
          <h2 className="mt-2.5 text-[clamp(26px,4vw,40px)] font-extrabold">
            Buenos Aires 1973
          </h2>
          <p className="font-editorial mx-auto mt-4 max-w-[48ch] text-[15px] italic leading-[1.55] text-paper/70 md:mx-0">
            {lang === "es"
              ? "Una sesión, no una playlist de fondo. Grabada para sonar a las 3 de la mañana, en un auto, volviendo de algún lado sin apuro."
              : "A session, not a background playlist. Made to sound right at 3am, in a car, on the way back from somewhere, in no hurry."}
          </p>
          <div className="mt-6 flex justify-center gap-6 text-[11px] tracking-[0.08em] text-paper/60 md:justify-start">
            <span>18 TRACKS</span>
            <span>52 MIN</span>
            <span>CAT. Nº R001</span>
          </div>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2.5 border border-paper px-5 py-3 text-[11.5px] font-bold tracking-[0.12em] transition-colors hover:bg-paper hover:text-night"
          >
            {lang === "es" ? "Escuchar →" : "Listen →"}
          </a>
        </div>
      </div>
    </section>
  );
}
