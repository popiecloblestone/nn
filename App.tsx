import React, { Suspense } from 'react';
import Hero from './components/Hero';

// Lazy load heavy/below-the-fold components
const TechStack = React.lazy(() => import('./components/TechStack'));
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Plans = React.lazy(() => import('./components/Plans'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Features = React.lazy(() => import('./components/Features'));
const CallToAction = React.lazy(() => import('./components/CallToAction'));
const BirdsCanvas = React.lazy(() => import('./components/BirdsCanvas'));


// Loading Fallback
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Main Background with Gradient - Brighter lighting */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 z-0"></div>

      {/* Tech Grid Pattern Overlay - More visible */}
      <div className="fixed inset-0 opacity-30 z-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Flying Birds Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
        <Suspense fallback={null}>
          <BirdsCanvas className="w-full h-full" />
        </Suspense>
      </div>

      {/* Enhanced Glow Effects - Brighter */}
      <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/12 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-300/8 rounded-full blur-3xl z-0 pointer-events-none"></div>

      {/* Logo Watermark */}
      <div className="fixed bottom-8 right-8 z-0 opacity-10 pointer-events-none">
        <img src="/logo.png" alt="" className="w-16 h-auto object-contain" />
      </div>

      <main className="relative z-10">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <div id="tech-stack"><TechStack /></div>
          <div id="services"><Services /></div>
          <div id="about"><About /></div>
          <div id="portfolio"><Portfolio /></div>
          <Features />
          <div id="plans"><Plans /></div>
          <div id="contact"><CallToAction /></div>
        </Suspense>
      </main>
    </div>
  );
}