import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
          <div className="flex flex-col items-center px-4 py-4">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">bolt</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Velocidade Relâmpago
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sites otimizados que carregam em milissegundos, melhorando o SEO e a retenção.
            </p>
          </div>
          <div className="flex flex-col items-center px-4 py-4">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">diamond</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Design Exclusivo
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Nada de templates prontos. Visual único desenhado para destacar sua marca.
            </p>
          </div>
          <div className="flex flex-col items-center px-4 py-4">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">trending_up</span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Foco em ROI
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Cada pixel é pensado para converter visitantes em clientes pagantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;