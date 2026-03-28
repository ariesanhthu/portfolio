import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {
  prefetchTimeline,
  prefetchHonors,
  prefetchProjects,
  prefetchFooter,
} from '../prefetchSections';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-4 transition-all duration-500 pointer-events-none flex justify-center">
      <div 
        className={`pointer-events-auto flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'bg-darker/80 backdrop-blur-md shadow-[0_0_20px_rgba(208,255,164,0.1)] border border-primary/20 rounded-full px-6 md:px-10 py-3 mx-4 w-full md:w-auto' 
            : 'bg-transparent px-8 py-4 w-full container-width'
        }`}
      >
        <Link to="hero" smooth={true} className="cursor-pointer mr-auto md:mr-12">
          <h1 className="text-xl font-bold text-light hover:text-primary transition-colors drop-shadow-md">Aris</h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono text-sm tracking-wide">
          <Link
            to="timeline"
            smooth={true}
            onMouseEnter={prefetchTimeline}
            onFocus={prefetchTimeline}
            className="cursor-pointer text-light/90 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            EXPERIENCE
          </Link>
          <Link
            to="honors"
            smooth={true}
            onMouseEnter={prefetchHonors}
            onFocus={prefetchHonors}
            className="cursor-pointer text-light/90 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            ACHIEVEMENTS
          </Link>
          <Link
            to="projects"
            smooth={true}
            onMouseEnter={prefetchProjects}
            onFocus={prefetchProjects}
            className="cursor-pointer text-light/90 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            PROJECTS
          </Link>
          <Link
            to="contact"
            smooth={true}
            onMouseEnter={prefetchFooter}
            onFocus={prefetchFooter}
            className="cursor-pointer border border-primary/50 text-primary px-4 py-1.5 rounded-sm hover:bg-primary hover:text-darker transition-all duration-300 shadow-[0_0_10px_rgba(208,255,164,0)] hover:shadow-[0_0_10px_rgba(208,255,164,0.3)]"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;