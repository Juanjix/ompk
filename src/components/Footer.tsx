"use client";

import { useState } from "react";
import { useLang } from "@/lib/language";

export function Footer() {
  const { lang } = useLang();
  const [joined, setJoined] = useState(false);

  return (
    <footer className="bg-ink px-6 pb-8 pt-16 text-paper sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="font-script text-[30px]">OMPK</div>
            <p className="font-editorial mt-3.5 max-w-[26ch] text-[13px] italic leading-[1.5] text-paper/70">
              {lang === "es" ? "Hecho despacio. Tocado fuerte." : "Made slowly. Played loud."}
            </p>
          </div>

          <FooterCol title="SHOP" links={[
            { es: "Bootcut Nº01", en: "Bootcut Nº01", href: "#shop" },
            { es: "Colecciones", en: "Collections", href: "#shop" },
            { es: "Archivo", en: "Archive", href: "#archive" },
          ]} lang={lang} />

          <FooterCol title={lang === "es" ? "MARCA" : "BRAND"} links={[
            { es: "Historia", en: "Stories", href: "#editorial" },
            { es: "Radio", en: "Radio", href: "#radio" },
            { es: "Sobre nosotros", en: "About", href: "#" },
          ]} lang={lang} />

          <FooterCol title={lang === "es" ? "AYUDA" : "HELP"} links={[
            { es: "Envíos", en: "Shipping", href: "#" },
            { es: "Cambios", en: "Returns", href: "#" },
            { es: "Contacto", en: "Contact", href: "#" },
          ]} lang={lang} />

          <div>
            <p className="font-editorial mb-3.5 text-[12.5px] italic leading-[1.5] text-paper/70">
              {lang === "es"
                ? "Novedades de la ciudad, no spam de tienda."
                : "News from the city, not store spam."}
            </p>
            <form
              className="flex border-b border-paper/30"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
            >
              <input
                type="email"
                required
                placeholder={lang === "es" ? "mail@ejemplo.com" : "mail@example.com"}
                className="flex-1 bg-transparent py-2.5 text-[12.5px] text-paper placeholder:text-paper/40 focus:outline-none"
              />
              <button
                type="submit"
                className="py-2.5 pl-1 text-[11px] font-bold tracking-[0.1em]"
              >
                {joined ? (lang === "es" ? "GRACIAS" : "THANKS") : lang === "es" ? "SUMARME" : "JOIN"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-2.5 border-t border-paper/20 pt-5.5 text-[10.5px] tracking-[0.06em] text-paper/50">
          <span>© 2026 OMPK — BUENOS AIRES</span>
          <span>MADE IN ARGENTINA</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  lang,
}: {
  title: string;
  links: { es: string; en: string; href: string }[];
  lang: "es" | "en";
}) {
  return (
    <div>
      <h4 className="mb-3.5 text-[10.5px] font-extrabold tracking-[0.12em] text-paper/55">
        {title}
      </h4>
      {links.map((l) => (
        <a
          key={l.es}
          href={l.href}
          className="mb-2 block text-[12.5px] text-paper/85 hover:text-paper"
        >
          {lang === "es" ? l.es : l.en}
        </a>
      ))}
    </div>
  );
}
