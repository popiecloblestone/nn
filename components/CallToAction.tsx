import React from 'react';
import FadeIn from './FadeIn';
import { Magnetic } from './Magnetic';

const CallToAction: React.FC = () => {
  return (
    <section className="relative z-10 bg-black" id="contact">
      <div className="apple-divider" />

      <div className="max-w-3xl mx-auto px-8 py-40 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-[-0.04em] text-white leading-none mb-8">
            Pronto para construir algo extraordinário?
          </h2>
          <p className="text-base text-zinc-500 font-light max-w-lg mx-auto mb-14 leading-relaxed">
            Pare de perder receita com plataformas lentas e instáveis. Inicie a reestruturação técnica com especialistas.
          </p>

          <Magnetic strength={0.2}>
            <button
              onClick={() => window.open('https://wa.me/5563981590428', '_blank')}
              className="
                group inline-flex items-center gap-3
                px-12 py-4 rounded-full
                bg-white text-black
                text-sm font-semibold tracking-wide
                transition-all duration-300
                hover:bg-zinc-100 hover:scale-[1.02]
              "
            >
              Agendar Auditoria
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </Magnetic>
        </FadeIn>

        {/* Tech credits — mono, all zinc */}
        <FadeIn delay={0.2}>
          <div className="mt-24 pt-10 border-t border-white/6 flex flex-wrap justify-center items-center gap-8">
            {['Next.js', 'Supabase', 'Tailwind', 'TypeScript', 'Vercel'].map((tech) => (
              <span key={tech} className="text-xs font-mono text-zinc-700 tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/6 py-8 px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Saracura Dev. Todos os direitos reservados.
          </p>
          <a
            href="https://github.com/NiIder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors duration-200"
          >
            GitHub →
          </a>
        </div>
      </footer>
    </section>
  );
};

export default CallToAction;