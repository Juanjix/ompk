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
          style={{ background: "linear-gradient(155deg,#2a2724 0%,#171512 60%,#0f0e0c 100%)" }}
        >
          <span className="absolute left-4 top-4 text-[13px] font-extrabold tracking-[-0.01em] text-paper">
            OMPK
          </span>

          {/* flight-case stack, backstage register — Brand Bible §16 Mode B */}
          <div className="absolute bottom-[14%] left-[10%] h-[22%] w-[34%] border border-[#4a443b] bg-[#221f1b]" />
          <div className="absolute bottom-[14%] left-[10%] h-[2px] w-[34%] translate-y-[9%] bg-[#4a443b]" />
          <div className="absolute bottom-[36%] left-[13%] h-[16%] w-[28%] border border-[#4a443b] bg-[#26221d]" />

          {/* warm practical light */}
          <div
            className="absolute right-[16%] top-[20%] h-24 w-24 rounded-full opacity-70"
            style={{ background: "radial-gradient(circle, #e8b96a55 0%, transparent 70%)" }}
          />
          <div className="absolute right-[20%] top-[24%] h-2.5 w-2.5 rounded-full bg-[#e8b96a]" />

          {/* the pinned poster line */}
          <div className="absolute right-[8%] top-[10%] w-[38%] border border-paper/25 bg-paper/[0.06] p-3 text-right backdrop-blur-[1px]">
            <div className="font-editorial text-[13px] italic leading-tight text-paper/85">
              {lang === "es" ? "Un mañana" : "A louder"}
              <br />
              {lang === "es" ? "más ruidoso." : "tomorrow."}
            </div>
          </div>
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
