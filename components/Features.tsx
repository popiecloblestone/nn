import React from 'react';
import FadeIn from './FadeIn';

const features = [
  {
    index: '01',
    title: 'Latência Analisada',
    description: 'Respostas em sub-segundos. Arquiteturas avaliadas continuamente para maximizar LCP e minimizar TTI.',
  },
  {
    index: '02',
    title: 'Design System Escalável',
    description: 'Consistência visual mantida através de tokens estritos, garantindo manutenibilidade por times de Produto e Engenharia.',
  },
  {
    index: '03',
    title: 'Arquitetura de Conversão',
    description: 'Interfaces guiadas por dados. Remoção de fricção através de testes A/B estruturados e heatmaps comportamentais.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f) => (
            <FadeIn key={f.index} delay={parseInt(f.index) * 0.08}>
              <div className="flex flex-col gap-5">
                <span className="text-[11px] font-mono text-zinc-700">
                  {f.index}
                </span>
                <h4 className="text-lg font-semibold text-white tracking-[-0.02em]">
                  {f.title}
                </h4>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;