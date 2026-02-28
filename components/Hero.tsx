import React, { useEffect, useState } from 'react';
import { Magnetic } from './Magnetic';

/**
 * Hero redesign — Apple-level minimalism.
 *
 * Design intent:
 *  - Negative space IS the design. No panels, no widgets, no rings.
 *  - One massive headline that owns the viewport.
 *  - Subtitle in zinc-500 — present but not competing.
 *  - Single CTA, centered, no options.
 *  - A single, razor-thin horizontal separator as the only graphic element.
 */

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 text-center"
      aria-label="Apresentação principal"
    >
      {/* ── Eyebrow label ───────────────────────────────────── */}
      <div
        className={`
          inline-flex items-center gap-2 mb-10
          text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500
          transition-all duration-700 ease-out
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        `}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Disponível para novos projetos
      </div>

      {/* ── Main headline ───────────────────────────────────── */}
      <h1
        className={`
          max-w-4xl
          text-[clamp(3rem,9vw,7rem)] font-bold leading-none tracking-[-0.04em]
          text-white
          transition-all duration-1000 ease-out delay-100
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        Saracura Dev
      </h1>

      {/* ── Separator ───────────────────────────────────────── */}
      <div
        className={`
          mt-12 mb-10 w-px h-16 bg-white/10
          transition-all duration-1000 ease-out delay-200
          ${mounted ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} origin-top
        `}
      />

      {/* ── Subtitle ────────────────────────────────────────── */}
      <p
        className={`
          max-w-lg
          text-[clamp(0.95rem,2vw,1.125rem)] text-zinc-500 font-light leading-relaxed
          transition-all duration-1000 ease-out delay-300
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        `}
      >
        Arquitetamos infra de missão crítica e interfaces de alta conversão.
        <br className="hidden sm:block" />
        Dados em vez de achismos. Código que escala.
      </p>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div
        className={`
          mt-12
          transition-all duration-1000 ease-out delay-500
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        `}
      >
        <Magnetic strength={0.2}>
          <button
            onClick={() => window.open('https://wa.me/5563981590428', '_blank')}
            className="
              group relative
              inline-flex items-center gap-3
              px-10 py-4 rounded-full
              bg-white text-black
              text-sm font-semibold tracking-wide
              transition-all duration-300
              hover:bg-zinc-100 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]
            "
          >
            Iniciar conversa
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </Magnetic>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <div
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          transition-all duration-1000 ease-out delay-700
          ${mounted ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-700">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full bg-white/40 h-full animate-[scrollDrop_1.8s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;