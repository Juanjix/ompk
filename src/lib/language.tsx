"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "es", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Pick the string for the active language. Spanish establishes origin — see Brand Bible §29. */
export function t(lang: Lang, copy: { es: string; en: string }) {
  return copy[lang];
}
