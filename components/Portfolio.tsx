import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Optional, or can be integrated into the card like About) */}
        {/* Keeping strict to "About" layout, let's put it inside or keep consistent title? 
            About has "Sobre Mim" tag inside. Let's do similar. */}

        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Image Section (Left) */}
            <div className="flex-shrink-0 relative group w-full md:w-1/2">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10">
                <img
                  alt="Bola da Vez 10 Dashboard"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="/Captura de tela 2026-02-18 153819.png"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Content Section (Right) */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                Case de Sucesso
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Bola da Vez <span className="text-primary">10</span>
              </h2>

              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                <p>
                  E-commerce SaaS completo para gestão de vendas online. Uma plataforma robusta que transformou a maneira como administram suas vendas.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 px-4 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                    <span className="material-symbols-outlined text-lg">trending_up</span>
                    <span>+25% Retenção</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <span className="material-symbols-outlined text-lg">speed</span>
                    <span>Performance Extrema</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="https://boladavez10.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
                >
                  Visitar Projeto
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Sim Mais Seguros Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 mt-8">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Image Section (Left) */}
            <div className="flex-shrink-0 relative group w-full md:w-1/2">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10">
                <img
                  alt="Sim Mais Seguros Website"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="/Captura de tela 2026-02-18 153446.png"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Content Section (Right) */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                Case de Sucesso
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Sim Mais <span className="text-primary">Seguros</span>
              </h2>

              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                <p>
                  Site institucional completo para corretora de seguros e produtos financeiros. Plataforma que conecta clientes às melhores seguradoras do mercado.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 px-4 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                    <span className="material-symbols-outlined text-lg">shield</span>
                    <span>Seguros & Financeiro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <span className="material-symbols-outlined text-lg">language</span>
                    <span>Site Institucional</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="https://www.simmaisseguros.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
                >
                  Visitar Projeto
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Aires Films Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 mt-8">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Image Section (Left) */}
            <div className="flex-shrink-0 relative group w-full md:w-1/2">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10">
                <img
                  alt="Aires Films Landing Page"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="/Captura de tela 2026-02-18 154059.png"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Content Section (Right) */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                Case de Sucesso
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Aires <span className="text-primary">Films</span>
              </h2>

              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                <p>
                  Landing page moderna para produtora de filmes. Design cinematográfico que captura a essência criativa e profissional da marca.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 px-4 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                    <span className="material-symbols-outlined text-lg">movie</span>
                    <span>Produtora de Filmes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <span className="material-symbols-outlined text-lg">web</span>
                    <span>Landing Page</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="https://landin-page-aires-films.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
                >
                  Visitar Projeto
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;