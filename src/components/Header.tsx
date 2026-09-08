"use client";

import Link from "next/link";
import { useLang } from "@/lib/language";

const NAV = [
  { href: "#shop", es: "SHOP", en: "SHOP" },
  { href: "#shop", es: "COLECCIONES", en: "COLLECTIONS" },
  { href: "#editorial", es: "HISTORIAS", en: "STORIES" },
  { href: "#radio", es: "RADIO", en: "RADIO" },
  { href: "#archive", es: "ARCHIVO", en: "ARCHIVE" },
];

export function Header() {
  const { lang, setLang } = useLang();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-newsprint-line bg-paper px-5 py-4 sm:px-7">
      <nav className="hidden items-center gap-5 sm:flex">
        {NAV.map((item) => (
          <Link
            key={item.es}
            href={item.href}
            className="border-b border-transparent pb-0.5 text-[11.5px] font-bold tracking-[0.1em] hover:border-ink"
          >
            {lang === "es" ? item.es : item.en}
          </Link>
        ))}
      </nav>

      <button
        aria-label="Menu"
        className="flex flex-col gap-1 sm:hidden"
        type="button"
      >
        <span className="block h-[1.5px] w-5 bg-ink" />
        <span className="block h-[1.5px] w-5 bg-ink" />
        <span className="block h-[1.5px] w-5 bg-ink" />
      </button>

      <Link href="#top" className="font-script text-[26px] leading-none">
        OMPK
      </Link>

      <div className="flex items-center gap-4">
        <div className="flex gap-1.5 text-[10.5px] font-bold tracking-[0.06em]" role="group" aria-label="Language">
          <button
            type="button"
            onClick={() => setLang("es")}
            aria-pressed={lang === "es"}
            className={lang === "es" ? "border-b border-ink text-ink" : "text-ink-soft"}
          >
            ES
          </button>
          <span className="text-newsprint-line">/</span>
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={lang === "en" ? "border-b border-ink text-ink" : "text-ink-soft"}
          >
            EN
          </button>
        </div>
        <div className="flex items-center gap-1.5 text-[11.5px] font-bold tracking-[0.08em]">
          {lang === "es" ? "BOLSA" : "BAG"}
          <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-ink text-[9px] text-paper">
            0
          </span>
        </div>
      </div>
    </header>
  );
}
