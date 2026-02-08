import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-8">
          Tecnologias que impulsionam o futuro
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 group">
            <svg
              className="h-8 w-auto text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
              <circle cx="12" cy="12" fill="currentColor" r="2"></circle>
              <ellipse
                cx="12"
                cy="12"
                fill="none"
                rx="7"
                ry="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                transform="rotate(45 12 12)"
              ></ellipse>
              <ellipse
                cx="12"
                cy="12"
                fill="none"
                rx="7"
                ry="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                transform="rotate(-45 12 12)"
              ></ellipse>
            </svg>
            <span className="font-semibold text-lg hidden sm:block group-hover:text-blue-500 transition-colors dark:text-slate-300">
              React
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <svg
              className="h-8 w-auto text-slate-900 dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 14h-1.5l-3.5-4.5v4.5H9V8h1.5l3.5 4.5V8H16v8z"></path>
            </svg>
            <span className="font-semibold text-lg hidden sm:block group-hover:text-slate-900 dark:group-hover:text-white transition-colors dark:text-slate-300">
              Next.js
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <svg
              className="h-6 w-auto text-sky-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
            <span className="font-semibold text-lg hidden sm:block group-hover:text-sky-500 transition-colors dark:text-slate-300">
              Tailwind
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <svg
              className="h-7 w-auto text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.3622 9.87322C21.1685 9.47197 20.7628 9.21397 20.3172 9.21397H13.6234L15.3533 3.16016C15.5398 2.50741 15.0506 1.84997 14.3722 1.84997C14.0759 1.84997 13.7915 1.96197 13.5786 2.16484L3.10708 12.1648C2.76677 12.4893 2.68458 12.9978 2.90083 13.4111C3.11708 13.8243 3.56896 14.0531 4.03771 13.9843L10.2815 13.064L8.52833 19.3331C8.35052 19.9686 8.81802 20.6025 9.47521 20.6402C9.7924 20.6583 10.0986 20.5361 10.3205 20.2978L21.2293 8.63116C21.4655 8.37834 21.5561 8.02678 21.3622 7.62553V9.87322Z"></path>
            </svg>
            <span className="font-semibold text-lg hidden sm:block group-hover:text-green-500 transition-colors dark:text-slate-300">
              Supabase
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;