import React from 'react';
import FadeIn from './FadeIn';

const skills = [
  'Next.js', 'React', 'TypeScript', 'Supabase',
  'PostgreSQL', 'Tailwind CSS', 'Node.js', 'Vercel',
];

const AboutMe: React.FC = () => {
  return (
    <section className="py-40 relative z-10 bg-black" id="about-me">
      <div className="apple-divider" />

      <div className="max-w-5xl mx-auto px-8 py-24">

        {/* Label */}
        <FadeIn>
          <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em] mb-20">
            Fundador
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">

          {/* Left: Name + role + photo slot */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              {/* Avatar placeholder — swap src for a real photo */}
              <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/8 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Edilson Barreto"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-[-0.04em] text-white mb-1">
                  Edilson Barreto
                </h2>
                <p className="text-sm text-zinc-600 font-light tracking-wide">
                  Fundador & Engenheiro Principal — Saracura Dev
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex flex-col gap-0 divide-y divide-white/6 mt-4">
                {[
                  { label: 'Baseado em',  value: 'Brasil 🇧🇷' },
                  { label: 'Experiência', value: '3+ anos' },
                  { label: 'Projetos',    value: '30+ entregues' },
                ].map(({ label, value }) => (
                  <div key={label} className="py-4 flex justify-between items-baseline">
                    <span className="text-xs text-zinc-700 uppercase tracking-wider">{label}</span>
                    <span className="text-sm text-zinc-300 font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5563981590428"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-white font-medium hover:text-zinc-400 transition-colors duration-200 group"
              >
                Falar comigo
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </FadeIn>

          {/* Right: Bio + skills */}
          <FadeIn delay={0.12}>
            <div className="flex flex-col gap-8">
              <div className="space-y-5 text-zinc-500 font-light text-base leading-relaxed">
                <p>
                  Construo produtos digitais de alta performance com obsessão por detalhe e resultado. Cada sistema que assino passa por um padrão de engenharia que não aceita mediocridade técnica.
                </p>
                <p>
                  Comecei a programar por necessidade, escalei por paixão. Hoje a <span className="text-white font-medium">Saracura Dev</span> é a expressão dessa trajetória: uma operação enxuta que entrega trabalho de alto nível para empresas que entendem o valor da tecnologia feita certo.
                </p>
                <p>
                  Especializado em arquiteturas serverless, otimização de Core Web Vitals e integrações de pagamento. Se você tem um projeto desafiador, esse é o lugar certo.
                </p>
              </div>

              {/* Skills */}
              <div className="pt-4 border-t border-white/6">
                <p className="text-[10px] text-zinc-700 uppercase tracking-[0.3em] mb-5">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-zinc-500 px-3 py-1.5 rounded-full border border-white/6 hover:border-white/10 hover:text-zinc-300 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      <div className="apple-divider" />
    </section>
  );
};

export default AboutMe;
