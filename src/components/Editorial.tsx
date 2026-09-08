"use client";

import { useLang } from "@/lib/language";

export function Editorial() {
  const { lang } = useLang();

  return (
    <section id="editorial" className="px-6 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-signal">
            {lang === "es" ? "Del manifiesto" : "From the manifesto"}
          </span>

          <p className="font-editorial text-[clamp(22px,3vw,32px)] italic leading-[1.4]">
            {lang === "es" ? (
              <>
                Buenos Aires nunca estuvo en silencio. Detrás de puertas de
                departamentos, en estudios de grabación, bares subterráneos,
                teatros, salas de ensayo y talleres de imprenta,{" "}
                <ScribbleWrap>siempre pasaba algo</ScribbleWrap>.
              </>
            ) : (
              <>
                Buenos Aires was never quiet. Behind apartment doors, inside
                recording studios, underground bars, theatres, rehearsal rooms
                and printing workshops,{" "}
                <ScribbleWrap>something was always happening</ScribbleWrap>.
              </>
            )}
          </p>

          <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.1em] text-ink-soft">
            {lang === "es" ? "Del manifiesto de marca" : "Brand manifesto"}
          </div>

          <a href="#" className="mt-6 inline-flex gap-2 border-b border-ink text-[12px] font-bold tracking-[0.06em]">
            {lang === "es" ? "Leer la historia →" : "Read the story →"}
          </a>
        </div>

        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{ background: "linear-gradient(160deg,#2b2620,#171512 65%)" }}
        >
          {[
            { left: "22%", top: "30%", w: "7%", h: "11%", opacity: 1 },
            { left: "22%", top: "46%", w: "7%", h: "11%", opacity: 0.3 },
            { left: "34%", top: "38%", w: "7%", h: "11%", opacity: 0.55 },
            { left: "60%", top: "24%", w: "6%", h: "9%", opacity: 1 },
            { left: "70%", top: "52%", w: "6%", h: "9%", opacity: 0.4 },
          ].map((w, i) => (
            <div
              key={i}
              className="absolute bg-[#e8b96a]"
              style={{ left: w.left, top: w.top, width: w.w, height: w.h, opacity: w.opacity }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScribbleWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline">
      {children}
      <svg
        className="absolute -bottom-1.5 -left-1 h-3.5"
        style={{ width: "calc(100% + 8px)" }}
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M2,9 C60,2 110,13 160,6 C210,-1 250,10 298,4"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
