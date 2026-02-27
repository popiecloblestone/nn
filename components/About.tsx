import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/50 border-t border-b border-white/5" id="about">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Technical Philosophy */}
          <FadeIn className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-zinc-300 text-xs font-semibold tracking-widest uppercase mb-6 bg-white/5">
              Engenharia Orientada a Resultados
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-tight">
              A arquitetura invisível <br className="hidden md:block"/>
              que <span className="text-zinc-500">sustenta seu ecossistema.</span>
            </h2>

            <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
              <p>
                Não construímos apenas sites; nós projetamos produtos digitais que definem a curva de excelência. Cada linha de código é uma decisão calculada para eliminar entropia.
              </p>
              <p>
                De integrações complexas de banco de dados a microsseviços de tempo real, nosso foco está na fundação técnica que permite às empresas escalar sem restrições e operar com confiança absoluta.
              </p>
            </div>
          </FadeIn>

          {/* Right Column: Data / Metrics Bento Box Style */}
          <FadeIn delay={0.2} className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
               {/* Metric 1 */}
               <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl col-span-2 sm:col-span-1 flex flex-col justify-between aspect-square group hover:bg-zinc-900/80 transition-colors">
                 <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-white transition-colors">network_check</span>
                 <div>
                   <div className="text-4xl font-light text-white tracking-tighter mb-1">99.9%</div>
                   <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Uptime SLA Garantido</div>
                 </div>
               </div>

                {/* Metric 2 */}
               <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl col-span-2 sm:col-span-1 flex flex-col justify-between aspect-square group hover:bg-zinc-900/80 transition-colors">
                  <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-white transition-colors">speed</span>
                 <div>
                   <div className="text-4xl font-light text-white tracking-tighter mb-1">&lt; 0.8s</div>
                   <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Average LCP Load</div>
                 </div>
               </div>

               {/* Metric 3 / Stack Focus */}
               <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:bg-zinc-900/80 transition-colors">
                  <div>
                    <div className="text-xl font-semibold text-white mb-2">Supabase & Next.js</div>
                    <div className="text-sm text-zinc-400 font-light">Stack preferencial para aplicações serverless e tempo-real, garantindo segurança RLS e performance em Edge.</div>
                  </div>
                   <span className="material-symbols-outlined text-zinc-500 text-3xl group-hover:text-white transition-colors shrink-0">database</span>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default About;