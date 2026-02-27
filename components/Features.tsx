import React from 'react';
import FadeIn from './FadeIn';

const Features: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
          <FadeIn delay={0.1} className="flex flex-col items-center px-4 py-8 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-white/10 mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <span className="material-symbols-outlined text-2xl">bolt</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Latência Analisada
            </h4>
            <p className="text-base text-zinc-400 font-light leading-relaxed">
              Respostas em sub-segundos. Arquiteturas avaliadas continuamente para maximizar LCP e minimizar tempo de interação (TTI).
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col items-center px-4 py-8 group">
             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-white/10 mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <span className="material-symbols-outlined text-2xl">diamond</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Design System Escalável
            </h4>
            <p className="text-base text-zinc-400 font-light leading-relaxed">
              Consistência visual mantida através de tokens estritos, garantindo fácil manutenibilidade por times de Produto e Engenharia.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-col items-center px-4 py-8 group">
             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-white/10 mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <span className="material-symbols-outlined text-2xl">troubleshoot</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Arquitetura de Conversão
            </h4>
            <p className="text-base text-zinc-400 font-light leading-relaxed">
              Interfaces guiadas por dados. Remoção de pontos de fricção através de testes A/B estruturados e heatmaps comportamentais.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Features;