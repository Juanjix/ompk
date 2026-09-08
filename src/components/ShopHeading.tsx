"use client";

import { useLang } from "@/lib/language";

export function ShopHeading() {
  const { lang } = useLang();
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
      <div>
        <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-signal">
          {lang === "es" ? "Prenda hero" : "Hero garment"}
        </span>
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-[1.05] tracking-tight">
          BOOTCUT Nº01
        </h2>
      </div>
      <p className="font-editorial max-w-[42ch] text-[15px] leading-[1.5] text-ink-soft">
        {lang === "es"
          ? "Tiro medio, quiebre exacto sobre la bota. Una silueta, seis superficies — hecha para reconocerse antes que el logo."
          : "Mid-rise, break landing exactly at the boot. One silhouette, six surfaces — built to be recognized before the logo is."}
      </p>
    </div>
  );
}
