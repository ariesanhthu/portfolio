import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LazyOnView from './components/LazyOnView';
import DeferredCursor from './components/DeferredCursor';

const Skills = lazy(() => import('./components/Skills'));
const Timeline = lazy(() => import('./components/Timeline'));
const Honors = lazy(() => import('./components/Honors'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-dark text-light grid-bg relative selection:bg-primary/30">
      <DeferredCursor />
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-dark/80 to-dark pointer-events-none z-0"></div>
      <div className="relative z-10 font-sans">
        <Navbar />
        <main>
          <Hero />
          <LazyOnView id="skills" minHeight="32vh">
            <Suspense fallback={null}>
              <Skills />
            </Suspense>
          </LazyOnView>
          <LazyOnView id="timeline" minHeight="40vh">
            <Suspense fallback={null}>
              <Timeline />
            </Suspense>
          </LazyOnView>
          <LazyOnView id="honors" minHeight="36vh">
            <Suspense fallback={null}>
              <Honors />
            </Suspense>
          </LazyOnView>
          <LazyOnView id="projects" minHeight="45vh">
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          </LazyOnView>
        </main>
        <LazyOnView id="contact" minHeight="22vh">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazyOnView>
      </div>
    </div>
  );
}

export default App;
