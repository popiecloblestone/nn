import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load heavy/below-the-fold components
const TechStack = React.lazy(() => import('./components/TechStack'));
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
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
    <div className="min-h-screen relative bg-background-dark">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 tech-grid pointer-events-none z-0 opacity-20"></div>



      <Header />
      <main className="relative z-10 pt-24 pb-16">
        <div className="gradient-blob top-0 left-1/2 -translate-x-1/2 opacity-40 mix-blend-screen"></div>

        <div className="fixed inset-0 pointer-events-none z-0 opacity-50">
          {/* Faint Background Logo */}
          {/* Bottom Right Logo Watermark */}
          <div className="absolute bottom-8 right-8 z-0 opacity-80 pointer-events-none">
            <img src="/logo.png" alt="" className="w-16 h-auto object-contain opacity-50" />
          </div>
          <Suspense fallback={null}>
            <BirdsCanvas className="w-full h-full" />
          </Suspense>
        </div>

        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <div id="tech-stack"><TechStack /></div>
          <div id="services"><Services /></div>
          <div id="about"><About /></div>
          <div id="portfolio"><Portfolio /></div>
          <Features />
          <div id="contact"><CallToAction /></div>
        </Suspense>
      </main>
    </div>
  );
}