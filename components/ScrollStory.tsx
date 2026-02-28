import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { useLenis } from 'lenis/react';

const MESSAGES = [
  { eyebrow: '01 / 05', headline: 'Software não é custo.', sub: 'É infraestrutura — e toda empresa que cresce entende isso cedo.' },
  { eyebrow: '02 / 05', headline: 'Cada milissegundo perdido', sub: 'é receita que vai embora. Velocidade não é detalhe, é produto.' },
  { eyebrow: '03 / 05', headline: 'A diferença entre escalar e travar', sub: 'está nas decisões tomadas no início da arquitetura.' },
  { eyebrow: '04 / 05', headline: 'Construímos para o dia', sub: 'em que você decolar. Serverless, alta disponibilidade, zero downtime.' },
  { eyebrow: '05 / 05', headline: 'Prontos quando você quiser.', sub: 'Saracura Dev — engenharia de software sem concessões.' },
];

const RADIUS       = 110;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const STEP         = 1 / MESSAGES.length;

/* ── Slide ── */
interface SlideProps {
  msg: typeof MESSAGES[0];
  index: number;
  progress: MotionValue<number>;
  isLast: boolean;
}

const MessageSlide: React.FC<SlideProps> = ({ msg, index, progress, isLast }) => {
  const start     = index * STEP;
  const peak      = start + STEP * 0.4;
  const end       = (index + 1) * STEP;
  const opIn      = useTransform(progress, [start, peak], [0, 1]);
  const opOut     = isLast
    ? useTransform(progress, [peak, 1], [1, 1])
    : useTransform(progress, [peak, end], [1, 0]);
  const y         = useTransform(progress, [start, peak], [32, 0]);
  const opacity   = useTransform(
    [opIn, opOut],
    ([a, b]: number[]) => Math.min(a, b)
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center pointer-events-none select-none"
    >
      <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">{msg.eyebrow}</span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-white leading-none">
        {msg.headline}
      </h2>
      <p className="text-base text-zinc-500 font-light max-w-md leading-relaxed">{msg.sub}</p>
      {isLast && (
        <span className="mt-6 text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-700 animate-pulse">
          Continue rolando ↓
        </span>
      )}
    </motion.div>
  );
};

/* ── Main ── */
const ScrollStory: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRaw = useMotionValue(0);
  const progress    = useSpring(progressRaw, { stiffness: 70, damping: 22, restDelta: 0.001 });

  const [locked, setLocked]   = useState(false);
  const [done, setDone]       = useState(false);
  const [fading, setFading]   = useState(false);
  const accRef = useRef(0);

  const lenis = useLenis();

  const handleReset = () => {
    accRef.current = 0;
    progressRaw.set(0);
    setDone(false);
    setLocked(false);
    // Scroll back to the section
    if (wrapperRef.current) {
      lenis?.scrollTo(wrapperRef.current, { offset: 0, immediate: false, duration: 1.2 });
    }
  };

  /* Pause/resume Lenis when locked */
  useEffect(() => {
    if (!lenis) return;
    if (locked) {
      lenis.stop();
      document.documentElement.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [locked, lenis]);

  /* Intercept wheel (desktop) + touch (mobile) while locked */
  useEffect(() => {
    if (!locked) return;

    let touchStartY = 0;

    const advance = (delta: number) => {
      accRef.current = Math.max(0, Math.min(3000, accRef.current + delta));
      const p = accRef.current / 3000;
      progressRaw.set(p);

      if (p >= 1 && !done) {
        setDone(true);
        setLocked(false);
        setFading(true);
        // Fade out section, then smooth scroll to next
        setTimeout(() => {
          setFading(false);
          if (wrapperRef.current) {
            const rect   = wrapperRef.current.getBoundingClientRect();
            const target = window.scrollY + rect.top + rect.height;
            lenis?.scrollTo(target, { duration: 1.4, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
          }
        }, 700);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      advance(e.deltaY);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const delta = (touchStartY - e.touches[0].clientY) * 3;
      touchStartY = e.touches[0].clientY;
      advance(delta);
    };

    window.addEventListener('wheel',      onWheel,      { passive: false, capture: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false, capture: true });

    return () => {
      window.removeEventListener('wheel',      onWheel,     { capture: true });
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove, { capture: true });
    };
  }, [locked, done, lenis, progressRaw]);

  /* Detect section entering viewport → lock */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || done) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLocked(true);
        }
      },
      { threshold: 0.8 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [done]);

  /* Visual transforms */
  const ringRotation = useTransform(progress, [0, 1], [0, 340]);
  const dashOffset   = useTransform(progress, [0, 1], [CIRCUMFERENCE, 0]);
  const hintOpacity  = useTransform(progress, [0, 0.06], [1, 0]);

  return (
    <div
      ref={wrapperRef}
      className={`relative h-screen w-full bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}
    >

      {/* Wheel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.svg width="300" height="300" viewBox="0 0 300 300" style={{ rotate: ringRotation }} className="opacity-[0.07]" aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => {
            const angle  = (i / 60) * 360;
            const rad    = (angle * Math.PI) / 180;
            const isMaj  = i % 5 === 0;
            const inner  = isMaj ? 134 : 140;
            return (
              <line key={i}
                x1={150 + inner * Math.cos(rad)} y1={150 + inner * Math.sin(rad)}
                x2={150 + 148  * Math.cos(rad)} y2={150 + 148  * Math.sin(rad)}
                stroke="white" strokeWidth={isMaj ? 1.5 : 0.6}
              />
            );
          })}
        </motion.svg>

        <svg className="absolute" width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
          <circle cx="150" cy="150" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <motion.circle
            cx="150" cy="150" r={RADIUS}
            fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ rotate: '-90deg', transformOrigin: '150px 150px' }}
          />
        </svg>
      </div>

      {/* Reset button — appears after animation completes */}
      {done && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleReset}
          className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-200"
          aria-label="Repetir animação"
        >
          ↺ Repetir
        </motion.button>
      )}

      {/* Messages */}
      <div className="relative z-10 w-full">
        {MESSAGES.map((msg, i) => (
          <MessageSlide key={i} msg={msg} index={i} progress={progress} isLast={i === MESSAGES.length - 1} />
        ))}
      </div>

      {/* Hint — desktop: scroll arrow | mobile: swipe up finger */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
        aria-hidden="true"
      >
        {/* Mobile hint (hidden on hover-capable devices = desktop) */}
        <span className="flex flex-col items-center gap-2 md:hidden">
          <motion.span
            className="text-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          >
            👆
          </motion.span>
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-600">
            Deslize para cima
          </span>
        </span>

        {/* Desktop hint (hidden on mobile) */}
        <span className="hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-700">
            Role para continuar
          </span>
          <div className="w-px h-8 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white/40 h-full"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: [0.4, 0, 0.6, 1] }}
            />
          </div>
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollStory;
