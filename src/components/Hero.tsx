"use client";

import { useLang } from "@/lib/language";

const BUILDINGS = [
  { x: 0, y: 140, w: 90, h: 120 },
  { x: 95, y: 90, w: 60, h: 170 },
  { x: 160, y: 160, w: 120, h: 100 },
  { x: 290, y: 60, w: 46, h: 200 },
  { x: 345, y: 120, w: 150, h: 140 },
  { x: 510, y: 40, w: 34, h: 220 },
  { x: 555, y: 150, w: 200, h: 110 },
  { x: 770, y: 90, w: 70, h: 170 },
  { x: 850, y: 170, w: 160, h: 90 },
  { x: 1030, y: 50, w: 40, h: 210 },
  { x: 1080, y: 130, w: 130, h: 130 },
  { x: 1220, y: 95, w: 60, h: 165 },
  { x: 1290, y: 150, w: 110, h: 110 },
];

const WINDOWS = [
  { x: 130, y: 200 },
  { x: 370, y: 160 },
  { x: 610, y: 190 },
  { x: 890, y: 210 },
  { x: 1120, y: 170 },
];

export function Hero() {
  const { lang } = useLang();

  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-center"
      style={{
        background:
          "radial-gradient(ellipse 60% 45% at 50% 18%, #3a2e2088 0%, transparent 70%), linear-gradient(180deg, var(--night) 0%, var(--night-2) 55%, #201d19 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0 1px,transparent 1px 3px)",
        }}
      />

      <svg
        className="absolute inset-x-0 bottom-0 h-[38%] opacity-90"
        viewBox="0 0 1400 260"
        preserveAspectRatio="none"
        aria-hidden
      >
        {BUILDINGS.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill={i % 3 === 0 ? "#0f0e0c" : i % 3 === 1 ? "#131210" : "#161410"}
          />
        ))}
        {WINDOWS.map((w, i) => (
          <rect
            key={i}
            x={w.x}
            y={w.y}
            width={8}
            height={8}
            fill="#e8b96a"
            opacity={0.5 + (i % 3) * 0.08}
          />
        ))}
      </svg>

      <span className="z-10 mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-paper/70">
        {lang === "es" ? "Colección Nº001" : "Collection Nº001"}
      </span>

      <h1
        className="font-script z-10 text-[clamp(72px,15vw,168px)] leading-[0.85] text-paper"
        style={{ textShadow: "0 2px 40px rgba(0,0,0,0.4)" }}
      >
        OMPK
      </h1>

      <div className="z-10 mt-6 text-[12.5px] font-bold tracking-[0.22em] text-paper/85">
        BUENOS AIRES
      </div>
      <p className="font-editorial z-10 mt-2.5 text-[clamp(15px,2vw,18px)] italic text-paper/80">
        AFTER MIDNIGHT — 03:17 AM
      </p>

      <a
        href="#shop"
        className="z-10 mt-9 inline-flex items-center gap-2.5 border border-paper px-6 py-3 text-[11.5px] font-bold tracking-[0.12em] text-paper transition-colors hover:bg-paper hover:text-ink"
      >
        {lang === "es" ? "Ver la colección" : "View the collection"}
      </a>

      <div
        className="absolute bottom-6 left-1/2 z-10 h-[34px] w-px -translate-x-1/2 opacity-50"
        style={{ background: "linear-gradient(var(--paper), transparent)" }}
      />
    </section>
  );
}
