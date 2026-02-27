import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

const services = [
  {
    id: '01',
    title: 'Performance Frontend',
    description: 'Interfaces otimizadas ao extremo. Foco absoluto no Core Web Vitals (LCP, FID, CLS) para reduzir o bounce rate e maximizar a retenção.',
    metric: 'LCP < 0.8s'
  },
  {
    id: '02',
    title: 'Arquitetura de Sistemas',
    description: 'Design estrutural projetado para hiperescala. Implementação de ecossistemas robustos (integração de APIs, Headless CMS e Serverless DBs).',
    metric: 'Zero Downtime'
  },
  {
    id: '03',
    title: 'Sustentação & Escala',
    description: 'Auditoria de código, mitigação de dívida técnica e segurança by design. Ambientes seguros com Single Point of Failure nulo.',
    metric: '99.9% Uptime'
  }
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-black text-white" id="services">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        <FadeIn className="mb-20">
           <div className="flex items-center gap-4 mb-6">
             <span className="w-2 h-2 rounded-full bg-zinc-500"></span>
             <span className="text-sm font-mono tracking-widest uppercase text-zinc-500">Capacidades</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white max-w-2xl">
              Nossa expertise técnica traduzida em <span className="text-zinc-500 italic">vantagem competitiva.</span>
           </h2>
        </FadeIn>

        <div className="border-t border-zinc-800 flex flex-col w-full">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={service.id}
                className="group border-b border-zinc-800 relative py-12 md:py-16 transition-colors duration-500 hover:bg-zinc-900/30 cursor-none flex flex-col cursor-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Header row: Number + Huge Title */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10 w-full justify-between pr-4 md:pr-12 cursor-none">
                  <div className="flex items-baseline gap-4 md:gap-12 cursor-none">
                    <span className="text-lg md:text-2xl font-mono text-zinc-600 font-light cursor-none transition-colors duration-500 group-hover:text-zinc-400">
                      {service.id}
                    </span>
                    <h3 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter uppercase transition-colors duration-500 text-zinc-300 group-hover:text-white cursor-none leading-[0.9]">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Decorative Icon that appears on hover */}
                  <div className="hidden md:flex items-center justify-center opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white cursor-none">
                     <span className="material-symbols-outlined text-5xl font-light cursor-none">arrow_forward</span>
                  </div>
                </div>

                {/* Expandable Content Area */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden cursor-none"
                    >
                      <div className="pt-8 md:pt-12 md:pl-[6rem] lg:pl-[9rem] flex flex-col md:flex-row gap-8 md:gap-16 items-start cursor-none">
                         <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed cursor-none">
                           {service.description}
                         </p>
                         <div className="mt-4 md:mt-0 px-6 py-3 rounded-full border border-zinc-700 text-sm font-mono text-zinc-300 whitespace-nowrap cursor-none">
                           Padrão: {service.metric}
                         </div>
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