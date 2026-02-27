import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  speed = 40, 
  direction = 'left',
  className = ""
}) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -1035] : [-1035, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: speed,
        ease: "linear",
      },
    },
  };

  // Create enough repetition to ensure seamless loop
  const content = (
    <div className="flex whitespace-nowrap gap-8 items-center px-4">
      {[...Array(8)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-zinc-500 to-zinc-700 opacity-30 select-none">
            {text}
          </span>
          <span className="text-2xl text-emerald-500/50">✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={`w-full overflow-hidden bg-[#050505] py-8 border-y border-white/5 flex items-center ${className}`}>
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {content}
      </motion.div>
    </div>
  );
};
