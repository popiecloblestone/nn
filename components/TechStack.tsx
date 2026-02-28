import React from 'react';
import FadeIn from './FadeIn';

const stack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'];

const TechStack: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="apple-divider" />

      <div className="max-w-5xl mx-auto px-8 py-16 text-center">
        <FadeIn>
          <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em] mb-12">
            Stack
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {stack.map((tech, i) => (
              <span
                key={tech}
                className="text-zinc-500 text-sm font-medium tracking-wide hover:text-zinc-200 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="apple-divider" />
    </section>
  );
};

export default TechStack;