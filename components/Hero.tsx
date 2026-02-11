import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [button1Rotation, setButton1Rotation] = useState({ x: 0, y: 0 });
  const [button2Rotation, setButton2Rotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    setRotation: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = (
    setRotation: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    setRotation({ x: 0, y: 0 });
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556398159428', '_blank');
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex items-center justify-start px-8 lg:px-24 overflow-hidden">

      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto opacity-90 drop-shadow-lg" />
      </div>

      {/* Status Badge - Top Right */}
      <div className="absolute top-8 right-8 z-20 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/90 border border-cyan-400/50 text-sm font-medium text-slate-100 backdrop-blur-md shadow-lg shadow-cyan-500/20">
        <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse"></span>
        System Status: <span className="text-cyan-400 font-bold">Online</span>
      </div>

      {/* WhatsApp Connect Button - Right Side */}
      <button
        onClick={handleWhatsAppClick}
        className="absolute top-24 right-8 z-20 px-7 py-3 rounded-full bg-slate-900/90 border border-cyan-400/50 text-sm font-semibold text-slate-100 backdrop-blur-md hover:bg-slate-800/95 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20"
      >
        WhatsApp Connect
      </button>

      {/* Main Content - Left Aligned */}
      <div className="relative z-10 max-w-2xl pt-4">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-2xl">
          Transformo sua<br />
          presença digital em<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]">
            máquina de vendas
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mb-10 leading-relaxed font-light">
          Desenvolvimento web de alta performance.<br />
          Design moderno, código limpo e foco total<br />
          tam conversão.
        </p>

        {/* Circular Buttons */}
        <div className="flex gap-6 items-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseMove={(e) => handleMouseMove(e, setButton1Rotation)}
            onMouseLeave={() => handleMouseLeave(setButton1Rotation)}
            className="group relative flex flex-col items-center justify-center w-30 h-30 rounded-full bg-gradient-to-br from-cyan-400/50 via-cyan-500/35 to-cyan-600/25 border-[3px] border-cyan-300/80 hover:border-cyan-200 transition-all duration-700 hover:shadow-[0_0_70px_rgba(34,211,238,1),0_0_100px_rgba(34,211,238,0.6),inset_0_0_50px_rgba(34,211,238,0.2)]"
            style={{
              width: '120px',
              height: '120px',
              transform: `perspective(1200px) rotateX(${button1Rotation.x}deg) rotateY(${button1Rotation.y}deg) translateZ(15px) scale(${button1Rotation.x !== 0 || button1Rotation.y !== 0 ? 1.15 : 1})`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.7s ease, border-color 0.4s ease',
              boxShadow: '0 10px 40px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
            }}
          >
            {/* Animated rotating rings - Enhanced */}
            <div className="absolute inset-0 rounded-full border-[2.5px] border-cyan-300/40 animate-spin" style={{ animationDuration: '6s', transform: 'translateZ(-8px)' }}></div>
            <div className="absolute inset-0 rounded-full border-[2px] border-cyan-200/30 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse', transform: 'translateZ(-5px)' }}></div>
            <div className="absolute inset-[-3px] rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '15s', transform: 'translateZ(-2px)' }}></div>

            {/* Pulsing glow rings - Enhanced */}
            <div className="absolute inset-0 rounded-full bg-cyan-300/15 animate-pulse" style={{ transform: 'translateZ(0px) scale(1.3)', filter: 'blur(15px)', animationDuration: '2s' }}></div>
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-200/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(2px)' }}></div>

            {/* Inner glow effect */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-300/20 via-transparent to-transparent" style={{ transform: 'translateZ(5px)' }}></div>

            {/* Icon with enhanced styling */}
            <svg className="w-8 h-8 text-cyan-200 mb-1.5 drop-shadow-[0_0_14px_rgba(34,211,238,1)] group-hover:scale-125 group-hover:drop-shadow-[0_0_22px_rgba(34,211,238,1)] transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateZ(30px)', strokeWidth: 2.6 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[0.6rem] font-extrabold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] leading-tight text-center tracking-wide group-hover:tracking-wider transition-all duration-300" style={{ transform: 'translateZ(30px)', textShadow: '0 0 18px rgba(34,211,238,0.8)' }}>SOLICITAR<br />ORÇAMENTO</span>

            {/* Multiple decorative dots with enhanced animation */}
            <div className="absolute -bottom-2.5 -right-2.5 w-2.5 h-2.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,1)] animate-pulse" style={{ transform: 'translateZ(10px)', animationDuration: '1.5s' }}></div>
            <div className="absolute -top-2.5 -left-2.5 w-2 h-2 rounded-full bg-cyan-300/90 shadow-[0_0_12px_rgba(34,211,238,1)] animate-pulse" style={{ transform: 'translateZ(10px)', animationDelay: '0.75s', animationDuration: '1.5s' }}></div>
            <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.9)]" style={{ transform: 'translateZ(8px)' }}></div>

            {/* Enhanced 3D shine effect with animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(40px) rotate(45deg)' }}></div>

            {/* Radial gradient overlay - Premium quality */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-200/30 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(20px)' }}></div>

            {/* Outer glow halo */}
            <div className="absolute inset-[-8px] rounded-full bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-10px)' }}></div>
          </button>

          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseMove={(e) => handleMouseMove(e, setButton2Rotation)}
            onMouseLeave={() => handleMouseLeave(setButton2Rotation)}
            className="group relative flex flex-col items-center justify-center w-30 h-30 rounded-full bg-gradient-to-br from-cyan-400/50 via-cyan-500/35 to-cyan-600/25 border-[3px] border-cyan-300/80 hover:border-cyan-200 transition-all duration-700 hover:shadow-[0_0_70px_rgba(34,211,238,1),0_0_100px_rgba(34,211,238,0.6),inset_0_0_50px_rgba(34,211,238,0.2)]"
            style={{
              width: '120px',
              height: '120px',
              transform: `perspective(1200px) rotateX(${button2Rotation.x}deg) rotateY(${button2Rotation.y}deg) translateZ(15px) scale(${button2Rotation.x !== 0 || button2Rotation.y !== 0 ? 1.15 : 1})`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.7s ease, border-color 0.4s ease',
              boxShadow: '0 10px 40px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
            }}
          >
            {/* Animated rotating rings - Enhanced */}
            <div className="absolute inset-0 rounded-full border-[2.5px] border-cyan-300/40 animate-spin" style={{ animationDuration: '7s', transform: 'translateZ(-8px)' }}></div>
            <div className="absolute inset-0 rounded-full border-[2px] border-cyan-200/30 animate-spin" style={{ animationDuration: '11s', animationDirection: 'reverse', transform: 'translateZ(-5px)' }}></div>
            <div className="absolute inset-[-3px] rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '16s', transform: 'translateZ(-2px)' }}></div>

            {/* Pulsing glow rings - Enhanced */}
            <div className="absolute inset-0 rounded-full bg-cyan-300/15 animate-pulse" style={{ transform: 'translateZ(0px) scale(1.3)', filter: 'blur(15px)', animationDuration: '2.2s' }}></div>
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-200/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(2px)' }}></div>

            {/* Inner glow effect */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-300/20 via-transparent to-transparent" style={{ transform: 'translateZ(5px)' }}></div>

            {/* Icon with enhanced styling */}
            <svg className="w-8 h-8 text-cyan-200 mb-1.5 drop-shadow-[0_0_14px_rgba(34,211,238,1)] group-hover:scale-125 group-hover:drop-shadow-[0_0_22px_rgba(34,211,238,1)] transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateZ(30px)', strokeWidth: 2.6 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[0.6rem] font-extrabold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] leading-tight text-center tracking-wide group-hover:tracking-wider transition-all duration-300" style={{ transform: 'translateZ(30px)', textShadow: '0 0 18px rgba(34,211,238,0.8)' }}>VER<br />PORTFOLIO</span>

            {/* Multiple decorative dots with enhanced animation */}
            <div className="absolute -bottom-2.5 -right-2.5 w-2.5 h-2.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,1)] animate-pulse" style={{ transform: 'translateZ(10px)', animationDuration: '1.5s' }}></div>
            <div className="absolute -top-2.5 -left-2.5 w-2 h-2 rounded-full bg-cyan-300/90 shadow-[0_0_12px_rgba(34,211,238,1)] animate-pulse" style={{ transform: 'translateZ(10px)', animationDelay: '0.75s', animationDuration: '1.5s' }}></div>
            <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.9)]" style={{ transform: 'translateZ(8px)' }}></div>

            {/* Enhanced 3D shine effect with animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(40px) rotate(45deg)' }}></div>

            {/* Radial gradient overlay - Premium quality */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-200/30 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(20px)' }}></div>

            {/* Outer glow halo */}
            <div className="absolute inset-[-8px] rounded-full bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-10px)' }}></div>
          </button>
        </div>
      </div>

      {/* MASSIVE Cyan Glow Zone - RIGHT SIDE (This is the key element from the reference!) */}
      <div className="absolute top-0 right-0 w-2/5 h-full pointer-events-none">
        {/* Main cyan glow blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[900px] h-[900px] bg-gradient-to-br from-cyan-400/30 via-cyan-500/20 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-0 translate-x-1/4 w-[700px] h-[700px] bg-gradient-to-br from-cyan-300/25 via-cyan-400/15 to-transparent rounded-full blur-[100px]"></div>

        {/* Additional smaller glows for depth */}
        <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[90px]"></div>
      </div>

      {/* Enhanced Tech Circuit Lines - Matching Reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-[5]">
        {/* Main horizontal circuit lines */}
        <div className="absolute top-[20%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.4)]"></div>
        <div className="absolute top-[35%] right-0 w-4/5 h-[1px] bg-gradient-to-l from-cyan-400/60 via-cyan-500/40 to-transparent"></div>
        <div className="absolute top-[55%] left-0 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-500/20"></div>
        <div className="absolute bottom-[28%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.4)]"></div>
        <div className="absolute bottom-[15%] left-0 w-2/3 h-[1px] bg-gradient-to-r from-cyan-400/40 via-cyan-500/30 to-transparent"></div>

        {/* Vertical circuit lines */}
        <div className="absolute top-0 right-[18%] w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.4)]"></div>
        <div className="absolute top-0 right-[42%] w-[1px] h-3/4 bg-gradient-to-b from-cyan-400/60 via-cyan-500/40 to-transparent"></div>
        <div className="absolute bottom-0 right-[60%] w-[1px] h-1/2 bg-gradient-to-t from-cyan-400/50 via-cyan-500/30 to-transparent"></div>
        <div className="absolute top-0 left-[15%] w-[1px] h-2/3 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>

        {/* Corner circuit accents - More prominent */}
        <div className="absolute top-16 right-[25%] w-28 h-28 border-t-[3px] border-r-[3px] border-cyan-400/70 shadow-[0_0_18px_rgba(34,211,238,0.4)]"></div>
        <div className="absolute top-[38%] right-[12%] w-20 h-20 border-l-[2px] border-b-[2px] border-cyan-400/60"></div>
        <div className="absolute bottom-[32%] right-[20%] w-24 h-24 border-b-[3px] border-l-[3px] border-cyan-400/70 shadow-[0_0_18px_rgba(34,211,238,0.4)]"></div>
        <div className="absolute top-[25%] left-[8%] w-16 h-16 border-t-[2px] border-l-[2px] border-cyan-400/50"></div>

        {/* Circuit nodes (glowing dots at intersections) */}
        <div className="absolute top-[20%] right-[18%] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
        <div className="absolute top-[35%] right-[80%] w-2.5 h-2.5 rounded-full bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.9)]"></div>
        <div className="absolute bottom-[28%] right-[42%] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
        <div className="absolute bottom-[28%] left-0 w-2.5 h-2.5 rounded-full bg-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
        <div className="absolute top-[55%] left-[74%] w-2 h-2 rounded-full bg-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
        <div className="absolute bottom-[15%] left-[66%] w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.7)]"></div>

        {/* Additional small nodes for detail */}
        <div className="absolute top-[45%] right-[30%] w-1.5 h-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_6px_rgba(34,211,238,0.7)]"></div>
        <div className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 shadow-[0_0_6px_rgba(34,211,238,0.6)]"></div>
      </div>

      {/* Small decorative logo/icon in bottom right area */}
      <div className="absolute bottom-12 right-12 z-[5] opacity-40">
        <img src="/logo.png" alt="" className="w-16 h-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      </div>
    </section>
  );
};

export default Hero;