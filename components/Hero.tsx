import React, { useEffect, useState } from 'react';
import { TextReveal } from './TextReveal';
import { Magnetic } from './Magnetic';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5563981590428', '_blank');
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 lg:px-12 xl:px-24 overflow-hidden pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className={`flex flex-col items-start text-left transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          {/* Eyebrow / Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-zinc-300 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Disponível para Parcerias Técnicas
          </div>

          {/* Massive Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white tracking-tighter leading-[1.05] mb-8">
            <TextReveal delay={0.2} splitBy="words">Engenharia de Software</TextReveal>
            <br />
            <span className="text-zinc-500">
               <TextReveal delay={0.4} splitBy="words">sem Concessões.</TextReveal>
            </span>
          </h1>

          {/* Elegant Subtitle */}
          <p className="text-lg text-zinc-400 max-w-xl mb-10 font-light leading-relaxed tracking-wide">
            Arquitetamos infraestruturas de missão crítica e interfaces de altíssima conversão. Substituímos achismos por dados e entregamos plataformas preparadas para hiperescala.
          </p>

          {/* Minimalist Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <Magnetic strength={0.2}>
              <button
                onClick={handleWhatsAppClick}
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
              >
                <span>Agendar Auditoria de Código</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Right Visual/Data Column */}
        <div className={`hidden lg:block relative transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
           <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-white/5 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              
              {/* Analytical Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  <div className="ml-auto text-xs font-mono text-zinc-500">production_metrics.log</div>
                </div>
                
                <div className="font-mono text-sm space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500">System Core</span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500">LCP</span>
                    <span className="text-white">0.8s</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500">FID</span>
                    <span className="text-white">12ms</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500">CLS</span>
                    <span className="text-white">0.00</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/5">
                    <div className="bg-white/5 h-2 w-full rounded-full overflow-hidden">
                      <div className="bg-emerald-500 w-[98%] h-full rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                    </div>
                    <div className="text-right text-xs mt-1 text-zinc-600">Performance Index</div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Extreme subtle gradients to break the pitch black */}
      <div className="absolute top-0 right-0 w-1/3 h-screen pointer-events-none z-0">
        <div className="absolute top-0 right-[-20%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen pointer-events-none z-0">
        <div className="absolute bottom-[-10%] left-[-20%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[80px]"></div>
      </div>
    </section>
  );
};

export default Hero;