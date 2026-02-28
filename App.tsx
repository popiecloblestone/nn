import React, { Suspense, useState, useCallback } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Hero from './components/Hero';
import Header from './components/Header';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';

// Lazy load below-the-fold components
const TechStack  = React.lazy(() => import('./components/TechStack'));
const Services   = React.lazy(() => import('./components/Services'));
const About      = React.lazy(() => import('./components/About'));
const AboutMe    = React.lazy(() => import('./components/AboutMe'));
const Plans      = React.lazy(() => import('./components/Plans'));
const Portfolio  = React.lazy(() => import('./components/Portfolio'));
const Features   = React.lazy(() => import('./components/Features'));
const CallToAction = React.lazy(() => import('./components/CallToAction'));
const BirdsCanvas  = React.lazy(() => import('./components/BirdsCanvas'));
const FAQ          = React.lazy(() => import('./components/FAQ'));
const ScrollStory  = React.lazy(() => import('./components/ScrollStory'));

const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="flex gap-1.5">
      <div className="w-1 h-1 rounded-full bg-zinc-700 animate-pulse" />
      <div className="w-1 h-1 rounded-full bg-zinc-700 animate-pulse delay-75" />
      <div className="w-1 h-1 rounded-full bg-zinc-700 animate-pulse delay-150" />
    </div>
  </div>
);

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <SmoothScroll>
      <div className="min-h-screen relative overflow-x-hidden bg-black text-white">

        {/* Intro Animation Overlay */}
        {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}

        <CustomCursor />

        {/* Subtle grain texture — very faint */}
        <div className="fixed inset-0 bg-grain pointer-events-none z-50 mix-blend-overlay" />

        {/* Flying Birds — barely visible, pure atmosphere */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen grayscale">
          <Suspense fallback={null}>
            <BirdsCanvas className="w-full h-full" />
          </Suspense>
        </div>

        <Header />

        <main className="relative z-10 w-full overflow-hidden">
          <Hero />

          <Suspense fallback={<SectionLoader />}>
            {/* HOOK — scroll-driven narrative before any section */}
            <ScrollStory />
            {/* INTEREST — who I am builds immediate trust */}
            <div id="about-me"><AboutMe /></div>

            {/* INTEREST — what we do */}
            <div id="services"><Services /></div>

            {/* DESIRE — proof of work */}
            <div id="portfolio"><Portfolio /></div>

            {/* DESIRE — credibility metrics */}
            <div id="about"><About /></div>

            {/* DESIRE — why we're different */}
            <Features />

            {/* CREDIBILITY — professional stack */}
            <div id="tech-stack"><TechStack /></div>

            {/* ACTION — pricing */}
            <div id="plans"><Plans /></div>

            {/* OBJECTION HANDLING */}
            <div id="faq"><FAQ /></div>

            {/* FINAL PUSH */}
            <CallToAction />
          </Suspense>
        </main>
      </div>
    </SmoothScroll>
  );
}