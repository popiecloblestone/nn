import React, { Suspense } from 'react';
import Hero from './components/Hero';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';

// Lazy load heavy/below-the-fold components
const TechStack = React.lazy(() => import('./components/TechStack'));
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Plans = React.lazy(() => import('./components/Plans'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Features = React.lazy(() => import('./components/Features'));
const CallToAction = React.lazy(() => import('./components/CallToAction'));
const BirdsCanvas = React.lazy(() => import('./components/BirdsCanvas'));
const FAQ = React.lazy(() => import('./components/FAQ'));

// Loading Fallback
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="flex gap-2">
      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
      <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-75"></div>
      <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-150"></div>
    </div>
  </div>
);

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen relative overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
        <CustomCursor />
        {/* Background Grain Texture */}
        <div className="fixed inset-0 bg-grain pointer-events-none z-50 mix-blend-overlay opacity-50"></div>

        {/* Pure Black Background */}
        <div className="fixed inset-0 bg-black z-0"></div>

        {/* Sharp Tech Grid Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}>
          {/* Subtle vignette over the grid */}
          <div className="absolute inset-0 bg-radial-[50%_50%_at_50%_50%] from-transparent to-black pointer-events-none" />
        </div>

        {/* Flying Birds Background (Keeping but blending cleanly) */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20 mix-blend-screen grayscale">
          <Suspense fallback={null}>
            <BirdsCanvas className="w-full h-full" />
          </Suspense>
        </div>

        <main className="relative z-10 w-full overflow-hidden">
          <Hero />

          <Suspense fallback={<SectionLoader />}>
            <div id="tech-stack"><TechStack /></div>
            <div id="services"><Services /></div>
            <div id="about"><About /></div>
            <div id="portfolio"><Portfolio /></div>
            <Features />
            <div id="plans"><Plans /></div>
            <div id="faq"><FAQ /></div>
            <div id="contact"><CallToAction /></div>
          </Suspense>
        </main>
      </div>
    </SmoothScroll>
  );
}