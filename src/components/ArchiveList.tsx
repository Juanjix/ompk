"use client";

import { useLang } from "@/lib/language";

const ROWS = [
  { num: "001", es: "After Midnight", en: "After Midnight", meta: "COLLECTION · 2026" },
  { num: "R001", es: "Buenos Aires 1973", en: "Buenos Aires 1973", meta: "RADIO SESSION · 2026" },
  { num: "000", es: "El Brand Bible", en: "The Brand Bible", meta: "FOUNDING DOCUMENT · 2026" },
];

export function ArchiveList() {
  const { lang } = useLang();

  return (
    <section id="archive" className="px-6 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-signal">
          {lang === "es" ? "El archivo empieza acá" : "The archive starts here"}
        </span>
        <h2 className="mb-9 text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight">
          {lang === "es" ? "Archivo" : "Archive"}
        </h2>

        <div className="border-t border-ink">
          {ROWS.map((row) => (
            <div
              key={row.num}
              className="grid grid-cols-[80px_1fr_auto] items-baseline gap-5 border-b border-newsprint-line py-5"
            >
              <div className="text-[11px] font-bold tabular-nums text-ink-soft">{row.num}</div>
              <div className="text-[16px] font-bold">{lang === "es" ? row.es : row.en}</div>
              <div className="whitespace-nowrap text-[11px] tracking-[0.04em] text-ink-soft">
                {row.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
