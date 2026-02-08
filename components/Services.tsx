import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="gradient-blob top-1/2 right-0 translate-x-1/2 opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            O que eu ofereço
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Soluções completas para cada etapa da sua jornada digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
            <div className="size-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
              <span className="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Landing Pages de Alta Conversão
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Páginas otimizadas para vender. Design focado na experiência do usuário e copywriting estratégico para maximizar leads e vendas.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
            <div className="size-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
              <span className="material-symbols-outlined text-3xl">apartment</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Sites Institucionais Modernos
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Fortaleça sua marca com um site profissional, responsivo e gerenciável. A vitrine perfeita para o seu negócio na internet.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
            <div className="size-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
              <span className="material-symbols-outlined text-3xl">build_circle</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Manutenção e Otimização
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Não basta lançar, é preciso evoluir. Mantenha seu site rápido, seguro e atualizado com as últimas tecnologias do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;