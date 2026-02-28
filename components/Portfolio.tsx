import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    id: 1,
    category: 'E-Commerce SaaS',
    name: 'Bola da Vez 10',
    description: 'Plataforma completa de e-commerce e gestão. Arquitetura serverless com processamento seguro de pagamentos e escalabilidade automatizada.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS'],
    image: '/Captura de tela 2026-02-18 153819.png',
    href: 'https://boladavez10.com/',
    cta: 'Ver Projeto',
    reverse: false,
  },
  {
    id: 2,
    category: 'Plataforma Institucional',
    name: 'Sim Mais Seguros',
    description: 'Pipeline de captação de leads otimizado para o setor financeiro. SEO técnico profundo e fluxos de navegação focados em redução de abandono.',
    tags: ['React', 'SEO Integration'],
    image: '/Captura de tela 2026-02-18 153446.png',
    href: 'https://www.simmaisseguros.com/',
    cta: 'Ver Projeto',
    reverse: true,
  },
  {
    id: 3,
    category: 'High-Performance Gateway',
    name: 'Aires Films',
    description: 'Portal cinemático projetado para carregar mídias pesadas instantaneamente via Framer Motion e arquitetura Vite leve.',
    tags: ['Vite', 'Framer Motion'],
    image: '/Captura de tela 2026-02-18 154059.png',
    href: 'https://landin-page-aires-films.vercel.app/',
    cta: 'Ver Projeto',
    reverse: false,
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <FadeIn delay={0.1}>
      <div className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16 mb-28 last:mb-0`}>

        {/* Image */}
        <div ref={ref} className="w-full md:w-[55%] shrink-0">
          <div className="relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/6 h-[280px] sm:h-[360px]">
            <motion.img
              style={{ y }}
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-[120%] object-cover object-top"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-5">
          <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em]">
            {project.category}
          </p>
          <h3 className="text-3xl font-bold tracking-[-0.03em] text-white">
            {project.name}
          </h3>
          <p className="text-sm text-zinc-500 font-light leading-relaxed">
            {project.description}
          </p>
          <p className="text-xs text-zinc-700 font-mono">
            {project.tags.join(' · ')}
          </p>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-2 inline-flex items-center gap-2
              text-sm font-medium text-white
              hover:text-zinc-400 transition-colors duration-200
              group
            "
          >
            {project.cta}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </FadeIn>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section className="py-40 relative z-10" id="portfolio">
      <div className="max-w-5xl mx-auto px-8">

        <FadeIn className="mb-24">
          <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em] mb-6">
            Trabalhos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-white">
            Capacidades em produção.
          </h2>
        </FadeIn>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
