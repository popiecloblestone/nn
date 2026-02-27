import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Como funciona a otimização de performance?",
    answer: "Nossa arquitetura prioriza o 'Server-First', utilizando React Server Components e Edge Computing. Isso significa que o processamento pesado ocorre nos nossos nós globais, enviando para o navegador do usuário apenas o HTML essencial. O resultado é um tempo de carregamento (LCP) quase instantâneo, vital para retenção e SEO."
  },
  {
    question: "Qual o impacto real na taxa de conversão?",
    answer: "Sistemas genéricos sofrem com fricção (lentidão, layout shift, formulários complexos). Nossa engenharia remove milissegundos críticos da jornada de compra. Clientes reportam aumentos de 15% a 40% na conversão direta apenas pela otimização de performance e implementação de fluxos 'Frictionless Checkout'."
  },
  {
    question: "O sistema é escalável para picos de tráfego?",
    answer: "Absolutamente. Utilizamos infraestrutura Serverless (Supabase e Vercel) acoplada a estratégias avançadas de cache (Redis, CDN Edge). Sua plataforma não apenas sobrevive a eventos como Black Friday, mas mantém a mesma resposta de 50ms independentemente da carga."
  },
  {
    question: "Vocês cuidam da segurança dos dados operacionais?",
    answer: "A segurança é estabelecida no core da aplicação. Implementamos Row-Level Security (RLS) direto no PostgreSQL para garantir que nenhum dado vaze, além de sanitização rigorosa de inputs e proteção contra DDoS em nível de borda."
  },
  {
    question: "Como é o processo de migração de um sistema legado?",
    answer: "Atuamos de forma cirúrgica. Mapeamos as dependências do seu sistema atual, replicamos as lógicas vitais em ambientes de staging da nova stack e garantimos que a transição ocorra sem downtime perceptível ou perda de indexação (SEO)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  return (
    <section className="relative py-32 bg-black overflow-hidden z-10 w-full" id="faq">
      {/* Background Tech Details */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`
      }}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-mono text-white/70 tracking-wider">KNOWLEDGE BASE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Consultas <span className="text-white/40 italic">Técnicas</span>
          </h2>
          <p className="text-white/50 font-mono text-sm max-w-xl">
            // RESPOSTAS DIRETAS SOBRE NOSSA ENGENHARIA, PERFORMANCE E ARQUITETURA.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isOpen ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                {/* Subtle spotlight effect for active item */}
                {isOpen && (
                  <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>
                )}

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-white/30 hidden md:block">
                      0{index + 1}
                    </span>
                    <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`relative w-6 h-6 shrink-0 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-black border-white' : 'text-white/50'}`}>
                    <motion.svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Horizontal line (always visible) */}
                      <path d="M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                      {/* Vertical line (hides when open to form a minus) */}
                      <motion.path 
                        d="M6 2V10" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="square"
                        animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${index}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 pl-6 md:pl-16">
                        <p className="text-white/60 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
