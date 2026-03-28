import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Honors from './components/Honors';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-dark text-light grid-bg relative selection:bg-primary/30">
      <CustomCursor />
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-dark/80 to-dark pointer-events-none z-0"></div>
      <div className="relative z-10 font-sans">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Timeline />
          <Honors />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;