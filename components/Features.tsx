import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const Features: React.FC = () => {
  return (
    <section className="py-32 relative z-10 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col mb-20 md:mb-32 max-w-3xl">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
              [ 02 // Fundamentos Arq. ]
            </span>
            <h2 className="text-4xl md:text-7xl font-semibold text-white tracking-[-0.05em] leading-[0.9]">
              ENGENHARIA <br/> DE PRECISÃO.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          
          {/* Main Focus Feature - Spans massive area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-8 flex flex-col justify-between border-t border-l border-white/8 p-8 md:p-16 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/1 group-hover:bg-white/3 transition-colors duration-700" />
            
            <div className="flex justify-between items-start mb-24 relative z-10">
              <span className="text-sm font-mono text-white/40">F.01</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-500" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-medium text-white tracking-[-0.03em] mb-6 w-full md:w-4/5">
                Performance de Borda (Edge)
              </h3>
              <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed w-full md:w-3/4">
                Distribuição global em infraestrutura Edge para latência mínima. Monitoramento contínuo de Web Vitals visando estabilidade métrica absoluta e tempo de resposta em sub-segundos reais.
              </p>
            </div>
            {/* Architectural accent lines */}
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-white/10 pointer-events-none" />
          </motion.div>

          {/* Supporting Features Container */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 border-t border-white/8 p-8 flex flex-col justify-between group"
            >
              <span className="text-xs font-mono text-zinc-500 mb-12 block group-hover:text-white transition-colors duration-300">
                F.02 // TIPAGEM
              </span>
              <div>
                <h4 className="text-xl font-medium text-white tracking-[-0.02em] mb-4">
                  Arquitetura de Componentes
                </h4>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Design Systems empresariais em TypeScript e Tailwind. Governança rígida de UI para escalabilidade e controle de débito técnico.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 border-t border-white/8 p-8 flex flex-col justify-between group bg-white/2"
            >
              <span className="text-xs font-mono text-zinc-500 mb-12 block group-hover:text-white transition-colors duration-300">
                F.03 // DADOS
              </span>
              <div>
                <h4 className="text-xl font-medium text-white tracking-[-0.02em] mb-4">
                  Engenharia de Conversão
                </h4>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Desenvolvimento guiado por testes multivariados e análise heurística. Remoção de fricção estrutural visando ROI direto.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;