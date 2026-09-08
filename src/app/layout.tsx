import type { Metadata } from "next";
import { Archivo, Piazzolla, Yellowtail } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const piazzolla = Piazzolla({
  variable: "--font-piazzolla",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "OMPK — Buenos Aires",
  description:
    "OMPK. Buenos Aires. Collection Nº001 — After Midnight. Made slowly. Played loud.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${piazzolla.variable} ${yellowtail.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink font-grotesk antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
