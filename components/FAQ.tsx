import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Como funciona a otimização de performance?',
    answer: 'Nossa arquitetura prioriza o Server-First, utilizando React Server Components e Edge Computing. O processamento pesado ocorre nos nossos nós globais, enviando ao navegador apenas o HTML essencial. O resultado é um LCP quase instantâneo, vital para retenção e SEO.',
  },
  {
    question: 'Qual o impacto real na taxa de conversão?',
    answer: 'Sistemas genéricos sofrem com fricção — lentidão, layout shift, formulários complexos. Nossa engenharia remove milissegundos críticos da jornada. Clientes reportam aumentos de 15% a 40% na conversão direta pela otimização de performance.',
  },
  {
    question: 'O sistema escala para picos de tráfego?',
    answer: 'Absolutamente. Utilizamos infraestrutura Serverless (Supabase + Vercel) acoplada a estratégias avançadas de cache. Sua plataforma mantém a mesma resposta de 50ms independentemente da carga, inclusive em Black Friday.',
  },
  {
    question: 'Vocês cuidam da segurança dos dados?',
    answer: 'Segurança é implementada no core. Row-Level Security (RLS) diretamente no PostgreSQL garante que nenhum dado vaze, com sanitização rigorosa de inputs e proteção contra DDoS em nível de borda.',
  },
  {
    question: 'Como funciona a migração de sistema legado?',
    answer: 'Atuamos de forma cirúrgica: mapeamos dependências do sistema atual, replicamos as lógicas vitais em ambiente de staging e garantimos transição sem downtime perceptível nem perda de indexação.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-40 relative z-10 bg-black" id="faq">
      <div className="max-w-3xl mx-auto px-8">

        <div className="mb-20">
          <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.3em] mb-6">
            Perguntas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-white">
            O que você precisa saber.
          </h2>
        </div>

        <div className="border-t border-white/[0.06]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-white/6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-7 text-left"
                  aria-expanded={isOpen ? 'true' : 'false'}
                >
                  <span className={`text-base font-medium tracking-[-0.01em] transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                    {faq.question}
                  </span>

                  <span className={`ml-6 shrink-0 text-lg leading-none transition-all duration-300 ${isOpen ? 'text-white rotate-45' : 'text-zinc-700'}`}>
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-sm text-zinc-500 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
