import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 layout-container flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto min-h-[600px] [zoom:0.75]">

      <div className="relative z-10 flex flex-col items-center">

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-700/50 text-sm font-medium text-slate-300 mb-8 backdrop-blur-md shadow-sm hover:bg-slate-800/50 transition-colors cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#06b6d4]"></span>
          System Status: <span className="text-primary font-semibold">Online</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-sm text-center max-w-4xl">
          Transformo sua presença digital em <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary animate-gradient bg-300%">
            máquina de vendas
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl text-center mb-10 leading-relaxed font-light">
          Desenvolvimento web de alta performance. Design moderno, código limpo e foco total em conversão.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group min-w-[160px] bg-primary hover:bg-primary-hover text-slate-900 text-base font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 relative overflow-hidden"
          >
            Solicitar Orçamento
          </button>

          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-w-[160px] bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 text-base font-medium py-3.5 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            Ver Portfolio
          </button>
        </div>

        {/* Trusted By / Tech Stack (Optional Placeholder based on layout) */}
        <div className="mt-16 sm:mt-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest text-center">Stack Principal</p>
          <div className="flex gap-8 items-center justify-center text-slate-400">
            {/* Using text for icons to avoid extra dependencies for now, or simple spans */}
            <span className="font-bold">REACT</span>
            <span className="font-bold">TYPESCRIPT</span>
            <span className="font-bold">TAILWIND</span>
            <span className="font-bold">NEXT.JS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;