import React from 'react';
import FadeIn from './FadeIn';

const plans = [
  {
    name: 'Landing Page',
    description: 'Máxima conversão para campanhas pontuais.',
    price: 'R$ 997',
    priceLabel: 'A partir de',
    features: [
      'Design focado em conversão',
      'Velocidade de carregamento extrema',
      'Entrega em 3 dias',
    ],
    cta: 'Iniciar Projeto',
    ctaMsg: 'Olá! Gostaria de contratar o Plano Landing Page.',
    highlight: false,
  },
  {
    name: 'Plataforma Institucional',
    description: 'Autoridade digital completa para empresas.',
    price: 'R$ 4.997',
    priceLabel: 'A partir de',
    features: [
      'SEO Técnico Avançado',
      'Design Premium e Exclusivo',
      'Painel de Gerenciamento (CMS)',
      '1 Ano de Domínio Incluso',
      'Multi-Páginas',
    ],
    cta: 'Contratar Agora',
    ctaMsg: 'Olá! Gostaria de contratar o Plano Website/Blog.',
    highlight: true,
  },
  {
    name: 'Software Sob Medida',
    description: 'Sistemas complexos, SaaS e E-commerce.',
    price: 'Sob Estratégia',
    priceLabel: '',
    features: [
      'Arquitetura Escalável',
      'Integrações com APIs Externas',
      'Banco de Dados Avançado',
      'Fluxos de Pagamento',
    ],
    cta: 'Agendar Consultoria',
    ctaMsg: 'Olá! Gostaria de apresentar meu projeto de SaaS/E-commerce.',
    highlight: false,
  },
];

const Plans: React.FC = () => {
  return (
    <section className="py-40 relative z-10" id="plans">
      <div className="max-w-5xl mx-auto px-8">

        <FadeIn className="mb-20">
          <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em] mb-6">
            Investimento
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-white">
            A arquitetura certa para cada estágio.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <FadeIn key={plan.name} delay={0.1}>
              <div
                className={`
                  flex flex-col h-full p-8 rounded-2xl border transition-colors duration-300
                  ${plan.highlight
                    ? 'bg-zinc-900 border-white/20 md:-translate-y-3'
                    : 'bg-zinc-950 border-white/6 hover:border-white/10'}
                `}
              >
                {plan.highlight && (
                  <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.25em] mb-5">
                    Mais popular
                  </p>
                )}

                <h3 className="text-lg font-semibold text-white tracking-[-0.02em] mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-zinc-600 font-light mb-8">
                  {plan.description}
                </p>

                <div className="mb-8">
                  {plan.priceLabel && (
                    <span className="text-xs text-zinc-600 font-light block mb-1">
                      {plan.priceLabel}
                    </span>
                  )}
                  <span className={`font-bold tracking-[-0.04em] ${plan.highlight ? 'text-4xl text-white' : 'text-3xl text-zinc-300'}`}>
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-500 font-light">
                      <span className="text-zinc-700 mt-0.5 shrink-0">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open(`https://wa.me/5563981590428?text=${encodeURIComponent(plan.ctaMsg)}`, '_blank')}
                  className={`
                    w-full py-3 rounded-full text-sm font-semibold tracking-wide
                    transition-all duration-300
                    ${plan.highlight
                      ? 'bg-white text-black hover:bg-zinc-100'
                      : 'border border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'}
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
