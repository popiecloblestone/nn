import React from 'react';

const Plans: React.FC = () => {
    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-4">
                        Escolha o Plano Ideal
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Soluções personalizadas para cada etapa do seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Basic Plan */}
                    <div className="glass-card p-8 rounded-2xl border-slate-800 relative group hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Landing Page</h3>
                        <p className="text-slate-400 text-sm mb-6">Comece sua presença digital</p>
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-primary">R$ 997,99</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-green-400 mr-2 text-sm">check_circle</span>
                                LP Exclusiva (Design único)
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-green-400 mr-2 text-sm">check_circle</span>
                                1 Ano de domínio grátis
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-green-400 mr-2 text-sm">check_circle</span>
                                Entrega rápida em 3 dias
                            </li>
                        </ul>
                        <button
                            onClick={() => window.open(`https://wa.me/5563981590428?text=${encodeURIComponent('Olá! Gostaria de contratar o Plano Landing Page.')}`, '_blank')}
                            className="w-full py-3 px-6 rounded-lg border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                        >
                            Contratar Agora
                        </button>
                    </div>

                    {/* Intermediate Plan (Highlighted) */}
                    <div className="glass-card p-10 rounded-2xl border-primary/50 relative transform md:-translate-y-4 z-10 shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                            RECOMENDADO
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Website / Blog</h3>
                        <p className="text-slate-400 text-sm mb-6">Para negócios em crescimento</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">R$ 4.997,99</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-white font-medium">
                                <span className="material-symbols-outlined text-primary mr-2 text-sm">check_circle</span>
                                1 Ano de Domínio Grátis
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-primary mr-2 text-sm">check_circle</span>
                                Design Exclusivo
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-primary mr-2 text-sm">check_circle</span>
                                Prazo de entrega: 10 dias
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-primary mr-2 text-sm">check_circle</span>
                                Banner personalizado
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-primary mr-2 text-sm">check_circle</span>
                                Configuração de Tráfego Pago
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-primary mr-2 text-sm">check_circle</span>
                                1 mês de suporte grátis
                            </li>
                        </ul>
                        <button
                            onClick={() => window.open(`https://wa.me/5563981590428?text=${encodeURIComponent('Olá! Gostaria de contratar o Plano Website/Blog.')}`, '_blank')}
                            className="w-full py-4 px-6 rounded-lg bg-primary text-black hover:bg-cyan-400 transition-all duration-300 font-bold shadow-lg shadow-primary/20"
                        >
                            Quero este plano
                        </button>
                    </div>

                    {/* Custom Plan */}
                    <div className="glass-card p-8 rounded-2xl border-slate-800 relative group hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">E-commerce</h3>
                        <p className="text-slate-400 text-sm mb-6">Lojas virtuais completas</p>
                        <div className="mb-6 h-[46.5px] flex items-center">
                            <span className="text-2xl font-bold text-slate-200">Sob Consulta</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-purple-400 mr-2 text-sm">check_circle</span>
                                Tudo do plano Website
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-purple-400 mr-2 text-sm">check_circle</span>
                                Mais opções de customização
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-purple-400 mr-2 text-sm">check_circle</span>
                                Exclusividade total no design
                            </li>
                            <li className="flex items-center text-slate-300">
                                <span className="material-symbols-outlined text-purple-400 mr-2 text-sm">check_circle</span>
                                Integrações avançadas
                            </li>
                        </ul>
                        <button
                            onClick={() => window.open(`https://wa.me/5563981590428?text=${encodeURIComponent('Olá! Gostaria de negociar um projeto E-commerce.')}`, '_blank')}
                            className="w-full py-3 px-6 rounded-lg border border-slate-600 text-slate-300 hover:border-white hover:text-white transition-all duration-300 font-medium"
                        >
                            Negociar Projeto
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;
