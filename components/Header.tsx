import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Saracura DEV Logo" className="h-16 w-auto object-contain" />
          </div>
          <button
            onClick={() => window.open('https://wa.me/5563981590428', '_blank')}
            className="hidden md:flex items-center gap-2 text-slate-300 hover:text-primary transition-colors text-sm font-mono border border-transparent hover:border-primary/30 px-4 py-2 rounded-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            WhatsApp_Connect
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;