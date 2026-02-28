import React from 'react';
import FadeIn from './FadeIn';

const metrics = [
  { value: '99.9%', label: 'Uptime garantido' },
  { value: '< 0.8s', label: 'LCP médio' },
  { value: '3 dias', label: 'Entrega Landing Page' },
];

const About: React.FC = () => {
  return (
    <section className="py-40 relative z-10 bg-black" id="about">
      <div className="apple-divider" />

      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Text */}
          <FadeIn>
            <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em] mb-8">
              Sobre
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-white leading-[1.05] mb-8">
              A fundação invisível que sustenta tudo.
            </h2>
            <div className="space-y-5 text-zinc-500 font-light text-base leading-relaxed">
              <p>
                Não construímos apenas sites — projetamos produtos digitais que eliminam entropia e maximizam resultados. Cada decisão técnica é calculada para escalar sem fricção.
              </p>
              <p>
                De integrações complexas de banco de dados a microsserviços de tempo real, nossa fundação técnica permite às empresas operar com confiança absoluta.
              </p>
            </div>
          </FadeIn>

          {/* Right: Metrics */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-0 divide-y divide-white/6">
              {metrics.map(({ value, label }) => (
                <div key={label} className="py-8 flex items-baseline justify-between gap-4">
                  <span className="text-[2.75rem] font-bold tracking-[-0.04em] text-white leading-none">
                    {value}
                  </span>
                  <span className="text-sm text-zinc-600 font-light tracking-wide text-right">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>

      <div className="apple-divider" />
    </section>
  );
};

export default About;
