import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2">
          {/* Consider a sharp typographic logo if image is blurry */}
          <img src="/logo.png" alt="Saracura" className="h-6 w-auto object-contain brightness-0 invert opacity-100" />
          <span className="text-white font-bold tracking-tighter text-lg hidden sm:block">SARACURA<span className="text-zinc-500 font-light">DEV</span></span>
        </div>
        <button
          onClick={() => window.open('https://wa.me/5563981590428', '_blank')}
          className="hidden md:flex items-center gap-3 text-black transition-all duration-300 text-sm font-semibold tracking-wide bg-white hover:bg-zinc-200 px-6 py-2 rounded-full border border-white/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Iniciar Projeto
        </button>
      </div>
    </header>
  );
};

export default Header;