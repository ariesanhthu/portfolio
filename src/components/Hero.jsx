import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding">
      <div className="container-width grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Nguyễn Anh Thư</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-light/70 mb-6">
            Student at VNUHCM, University of Science
          </h2>
          <p className="text-light/80 mb-8">
            AI & Web Developer — passionate about building fullstack applications, AI/ML systems, and computer vision.
            Studying Information Technology at <a href="https://hcmus.edu.vn/" target="_blank" className="text-primary hover:text-secondary transition-colors">University of Science - VNUHCM</a>
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors glow-effect"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="relative w-full max-w-[400px] mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-75 animate-pulse"></div>
            <img
              src="/avatar.png"
              alt="Nguyễn Anh Thư"
              className="rounded-full w-full h-auto object-cover relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;