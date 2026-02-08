import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="sobre">
      <div className="gradient-blob bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-30 w-[500px] h-[500px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
              <img
                alt="Foto de Perfil Saracura DEV"
                className="relative size-48 md:size-64 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
                src="/profile.jpg"
              />
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-800">
                <span className="material-symbols-outlined text-xl">code</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold uppercase tracking-wide mb-4">
                Sobre Mim
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Desenvolvedor focado em <span className="text-primary">crescimento</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Mais do que código, entrego soluções. Minha abordagem combina expertise técnica com uma visão estratégica de negócios.
                </p>
                <p>
                  Especialista em criar interfaces intuitivas e sistemas robustos que ajudam empreendedores a escalarem suas operações. Seja uma landing page de alta conversão ou um sistema complexo, meu foco é sempre a qualidade e o retorno sobre o investimento.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;