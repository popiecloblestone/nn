import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Sobre Mim',  href: '#about-me'  },
  { label: 'Serviços',   href: '#services'  },
  { label: 'Trabalhos',  href: '#portfolio' },
  { label: 'Planos',     href: '#plans'     },
  { label: 'FAQ',        href: '#faq'       },
];

const Header: React.FC = () => {
  const [visible, setVisible]       = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState('');

  // Fade-in on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Backdrop on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          px-6 md:px-8 h-16
          flex items-center justify-between
          transition-all duration-500 ease-out
          ${visible ? 'opacity-100' : 'opacity-0'}
          ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'}
        `}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src="/logo.png"
            alt="Saracura Dev"
            className="h-5 w-auto object-contain brightness-0 invert"
          />
          <span className="text-white font-semibold tracking-[-0.03em] text-sm hidden sm:block">
            Saracura<span className="text-zinc-600 font-light">Dev</span>
          </span>
        </a>

        {/* Desktop Nav — centered */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Navegação principal">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`
                  px-4 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-200
                  ${activeSection === id
                    ? 'text-white bg-white/8'
                    : 'text-zinc-500 hover:text-white'}
                `}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Right: CTA + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open('https://wa.me/5563981590428', '_blank')}
            className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Iniciar Projeto →
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Abrir menu"
            aria-expanded={menuOpen ? 'true' : 'false'}
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed inset-0 z-40 flex flex-col justify-center items-center
          bg-black transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          md:hidden
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-2" aria-label="Menu mobile">
          {navLinks.map(({ label, href }, i) => (
            <motion.button
              key={href}
              onClick={() => handleNav(href)}
              className="text-3xl font-bold tracking-[-0.04em] text-white/80 hover:text-white py-3 transition-colors duration-200"
              initial={{ opacity: 0, y: 12 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.3, delay: menuOpen ? i * 0.05 : 0 }}
            >
              {label}
            </motion.button>
          ))}

          <motion.button
            onClick={() => { setMenuOpen(false); window.open('https://wa.me/5563981590428', '_blank'); }}
            className="mt-8 px-8 py-3 rounded-full bg-white text-black text-sm font-semibold tracking-wide"
            initial={{ opacity: 0, y: 12 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.3, delay: menuOpen ? navLinks.length * 0.05 : 0 }}
          >
            Iniciar Projeto →
          </motion.button>
        </nav>
      </div>
    </>
  );
};

export default Header;
