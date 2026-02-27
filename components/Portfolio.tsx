import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const Portfolio: React.FC = () => {
  // Parallax setup for Bola da Vez 10
  const ref1 = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress1, [0, 1], ["-10%", "10%"]);

  // Parallax setup for Sim Mais Seguros
  const ref2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"]
  });
  const y2 = useTransform(scrollYProgress2, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-32 relative z-10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Capacidades em <span className="text-zinc-500">Produção</span>
          </h2>
          <p className="text-zinc-400 font-light max-w-2xl">
            Estudos de caso de arquiteturas implantadas, demonstrando resiliência técnica e impacto no core business.
          </p>
        </FadeIn>

        {/* Bola da Vez 10 Card */}
        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-4xl p-8 md:p-14 border border-white/5 bg-zinc-950/40 backdrop-blur-xl mb-12 group">
            <div className="flex flex-col md:flex-row items-center gap-14">

              {/* Image Section (Left) */}
              <div ref={ref1} className="shrink-0 relative w-full md:w-[55%]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 group-hover:border-white/20 transition-colors duration-700 h-[300px] sm:h-[400px]">
                  <motion.img
                    style={{ y: y1 }}
                    alt="Bola da Vez 10 Dashboard"
                    className="absolute inset-0 w-full h-[120%] object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    src="/Captura de tela 2026-02-18 153819.png"
                  />
                </div>
              </div>

              {/* Content Section (Right) */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-zinc-300 text-xs font-semibold tracking-widest uppercase mb-6 bg-white/5">
                  E-Commerce SaaS
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Bola da Vez 10
                </h3>

                <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed mb-10">
                  <p>
                    Plataforma completa de e-commerce e gestão. Arquitetura serverless que garantiu processamento seguro de pagamentos e escalabilidade automatizada em picos de acesso.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      Next.js
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      Supabase
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      Tailwind CSS
                    </div>
                  </div>
                </div>

                <a
                  href="https://boladavez10.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
                >
                  Documentação Técnica
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* Sim Mais Seguros Card */}
        <FadeIn delay={0.3}>
          <div className="relative overflow-hidden rounded-4xl p-8 md:p-14 border border-white/5 bg-zinc-950/40 backdrop-blur-xl mb-12 group flex flex-col md:flex-row-reverse items-center gap-14">
            
            {/* Image Section (Right) */}
            <div ref={ref2} className="shrink-0 relative w-full md:w-[55%]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 group-hover:border-white/20 transition-colors duration-700 h-[300px] sm:h-[400px]">
                <motion.img
                  style={{ y: y2 }}
                  alt="Sim Mais Seguros Website"
                  className="absolute inset-0 w-full h-[120%] object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  src="/Captura de tela 2026-02-18 153446.png"
                />
              </div>
            </div>

            {/* Content Section (Left) */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-zinc-300 text-xs font-semibold tracking-widest uppercase mb-6 bg-white/5">
                Plataforma Institucional
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Sim Mais Seguros
              </h3>

              <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed mb-10">
                <p>
                  Pipeline de captação de leads otimizado para o setor financeiro. Otimização profunda de SEO técnico e fluxos de navegação focados em redução de abandono.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    React
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    SEO Integration
                  </div>
                </div>
              </div>

              <a
                href="https://www.simmaisseguros.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
              >
                Ver Aplicação
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Aires Films Card */}
        <FadeIn delay={0.4}>
          <div className="relative overflow-hidden rounded-4xl p-8 md:p-14 border border-white/5 bg-zinc-950/40 backdrop-blur-xl group">
            <div className="flex flex-col md:flex-row items-center gap-14">

              {/* Image Section (Left) */}
              <div className="flex-shrink-0 relative w-full md:w-[55%]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 group-hover:border-white/20 transition-colors duration-700">
                  <img
                    alt="Aires Films Landing Page"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    src="/Captura de tela 2026-02-18 154059.png"
                  />
                </div>
              </div>

              {/* Content Section (Right) */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-zinc-300 text-xs font-semibold tracking-widest uppercase mb-6 bg-white/5">
                  High-Performance Gateway
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Aires Films
                </h3>

                <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed mb-10">
                  <p>
                    Portal cinemático projetado para carregar mídias pesadas instantaneamente. Utilização intensiva de Framer Motion para fluidez de navegação em uma estrutura Vite leve.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      Vite
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      Framer Motion
                    </div>
                  </div>
                </div>

                <a
                  href="https://landin-page-aires-films.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
                >
                  Ver Aplicação
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Portfolio;