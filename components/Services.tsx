import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

const services = [
  {
    id: '01',
    title: 'Performance Frontend',
    description: 'Interfaces otimizadas ao extremo. Foco absoluto no Core Web Vitals (LCP, FID, CLS) para reduzir o bounce rate e maximizar a retenção.',
    metric: 'LCP < 0.8s',
  },
  {
    id: '02',
    title: 'Arquitetura de Sistemas',
    description: 'Design estrutural projetado para hiperescala. Implementação de ecossistemas robustos com integração de APIs, Headless CMS e Serverless.',
    metric: 'Zero Downtime',
  },
  {
    id: '03',
    title: 'Sustentação & Escala',
    description: 'Auditoria de código, mitigação de dívida técnica e segurança by design. Ambientes resilientes com Single Point of Failure nulo.',
    metric: '99.9% Uptime',
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-40 relative z-10 bg-black" id="services">
      <div className="max-w-5xl mx-auto px-8">

        <FadeIn className="mb-20">
          <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em] mb-6">
            Capacidades
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-white max-w-xl">
            O que entregamos.
          </h2>
        </FadeIn>

        <div className="border-t border-white/[0.06]">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                className="border-b border-white/[0.06] py-10 md:py-14 transition-colors duration-500 hover:bg-white/[0.015]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-baseline justify-between gap-8">
                  <div className="flex items-baseline gap-8">
                    <span className="text-sm font-mono text-zinc-700 tabular-nums shrink-0">
                      {service.id}
                    </span>
                    <h3 className={`text-3xl md:text-4xl font-bold tracking-[-0.03em] transition-colors duration-400 ${isHovered ? 'text-white' : 'text-zinc-400'}`}>
                      {service.title}
                    </h3>
                  </div>

                  <span
                    className={`
                      hidden md:block text-2xl text-zinc-600 shrink-0
                      transition-all duration-500
                      ${isHovered ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-3'}
                    `}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-14 flex flex-col sm:flex-row gap-6 sm:gap-16 items-start">
                        <p className="text-base md:text-lg font-light text-zinc-500 max-w-xl leading-relaxed">
                          {service.description}
                        </p>
                        <span className="text-sm font-mono text-zinc-600 whitespace-nowrap shrink-0">
                          {service.metric}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;