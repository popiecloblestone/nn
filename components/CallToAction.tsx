import React from 'react';
import FadeIn from './FadeIn';
import { Magnetic } from './Magnetic';

const CallToAction: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5563981590428', '_blank');
  };

  return (
    <section className="py-32 relative overflow-hidden bg-black flex items-center justify-center min-h-[60vh]">
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 w-full">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
            Escalonamento de <br className="hidden md:block"/>
            <span className="text-zinc-500">Engenharia.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light tracking-wide">
            Pare de perder receita com plataformas lentas e instáveis. Inicie a reestruturação técnica do seu projeto com especialistas operacionais.
          </p>
          
          <div className="flex justify-center">
            <Magnetic strength={0.3}>
              <button 
                onClick={handleWhatsAppClick}
                className="group relative flex items-center justify-center gap-4 px-12 py-5 rounded-full bg-white text-black font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                {/* Background sliding effect */}
                <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                
                <span className="relative z-10">Agendar Auditoria Completa</span>
                <span className="relative z-10 material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </button>
            </Magnetic>
          </div>
        </FadeIn>

        {/* Small trust signals/tags below CTA */}
         <FadeIn delay={0.2} className="mt-20 pt-10 border-t border-white/5">
            <p className="text-zinc-500 text-xs tracking-widest uppercase mb-6 font-semibold">Tecnologias Auditadas & Dominadas</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale">
              {/* Using text representations as logos for a cleaner look */}
              <span className="font-bold text-xl tracking-tighter text-white">Next.js</span>
              <span className="font-bold text-xl tracking-tight text-emerald-500">Supabase</span>
              <span className="font-bold text-xl tracking-tighter text-blue-400">Tailwind</span>
              <span className="font-bold text-xl tracking-tighter text-blue-500">TypeScript</span>
              <span className="font-bold text-xl tracking-tighter text-white">AWS</span>
            </div>
         </FadeIn>

         <footer className="mt-24 text-center text-zinc-600 text-sm flex flex-col sm:flex-row items-center justify-between">
            <p>© {new Date().getFullYear()} Engenharia Digital. All rights reserved.</p>
            <a href="https://github.com/NiIder" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mt-4 sm:mt-0 flex items-center gap-2">
              GitHub Repository <span className="material-symbols-outlined text-[1rem]">open_in_new</span>
            </a>
         </footer>
      </div>
    </section>
  );
};

export default CallToAction;