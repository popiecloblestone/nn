import React from 'react';
import FadeIn from './FadeIn';

const Plans: React.FC = () => {
    return (
        <section className="py-32 relative z-10" id="plans">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <FadeIn className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Investimento <span className="text-zinc-500">Inteligente</span>
                    </h2>
                    <p className="text-zinc-400 font-light max-w-2xl">
                        A arquitetura digital perfeita para o estágio atual do seu negócio.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Basic Plan */}
                    <FadeIn delay={0.1}>
                        <div className="p-10 rounded-4xl border border-white/5 bg-zinc-950/40 backdrop-blur-xl hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Landing Page</h3>
                            <p className="text-zinc-400 text-sm font-light mb-8">Máxima conversão para campanhas pontuais.</p>
                            
                            <div className="mb-8 font-light text-zinc-500">
                                A partir de <span className="text-3xl font-semibold text-white ml-2 block mt-1">R$ 997</span>
                            </div>
                            
                            <ul className="space-y-4 mb-10 text-zinc-300 font-light">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mr-3"></span>
                                    Design Focado em Conversão
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mr-3"></span>
                                    Velocidade de Carregamento Extrema
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mr-3"></span>
                                    Entrega Rápida em 3 Dias
                                </li>
                            </ul>
                            
                            <button
                                onClick={() => window.open(`https://wa.me/5563981590428?text=${encodeURIComponent('Olá! Gostaria de contratar o Plano Landing Page.')}`, '_blank')}
                                className="w-full py-3.5 px-6 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide"
                            >
                                Iniciar Projeto
                            </button>
                        </div>
                    </FadeIn>

                    {/* Intermediate Plan (Highlighted) */}
                    <FadeIn delay={0.2} className="relative z-10 w-full h-full">
                        <div className="p-10 rounded-4xl border border-white/20 bg-zinc-900 shadow-2xl shadow-black/50 transform md:-translate-y-4 h-full">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                                Principal
                            </div>
                            
                            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Plataforma Institucional</h3>
                            <p className="text-zinc-400 text-sm font-light mb-8">Autoridade digital completa para empresas.</p>
                            
                            <div className="mb-8 font-light text-zinc-500">
                                A partir de <span className="text-4xl font-semibold text-white ml-2 block mt-1">R$ 4.997</span>
                            </div>
                            
                            <ul className="space-y-4 mb-10 text-zinc-300 font-light">
                                <li className="flex items-center text-white font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span>
                                    SEO Técnico Avançado
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span>
                                    Design Premium e Exclusivo
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span>
                                    Painel de Gerenciamento (CMS)
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span>
                                    1 Ano de Domínio Incluso
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-3"></span>
                                    Multi-Páginas
                                </li>
                            </ul>
                            
                            <button
                                onClick={() => window.open(`https://wa.me/5563981590428?text=${encodeURIComponent('Olá! Gostaria de contratar o Plano Website/Blog.')}`, '_blank')}
                                className="w-full py-4 px-6 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-bold tracking-wide"
                            >
                                Contratar Agora
                            </button>
                        </div>
                    </FadeIn>

                    {/* Custom Plan */}
                    <FadeIn delay={0.3}>
                        <div className="p-10 rounded-4xl border border-white/5 bg-zinc-950/40 backdrop-blur-xl hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Software Sob Medida</h3>
                            <p className="text-zinc-400 text-sm font-light mb-8">Sistemas complexos, SaaS e E-commerce.</p>
                            
                            <div className="mb-8 h-[60px] flex items-end pb-1 font-light text-zinc-500">
                                <span className="text-3xl font-semibold text-zinc-300">Sob Estratégia</span>
                            </div>
                            
                            <ul className="space-y-4 mb-10 text-zinc-300 font-light">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mr-3"></span>
                                    Arquitetura Escalável
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mr-3"></span>
                                    Integrações com APIs Externas
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mr-3"></span>
                                    Banco de Dados Avançado
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mr-3"></span>
                                    Fluxos de Pagamento
                                </li>
                            </ul>
                            
                            <button
                                onClick={() => window.open(`https://wa.me/5563981590428?text=${encodeURIComponent('Olá! Gostaria de apresentar meu projeto de SaaS/E-commerce.')}`, '_blank')}
                                className="w-full py-3.5 px-6 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide"
                            >
                                Agendar Consultoria
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Plans;
