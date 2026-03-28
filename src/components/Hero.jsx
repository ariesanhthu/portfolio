import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-width grid md:grid-cols-2 gap-8 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-primary font-mono text-sm uppercase tracking-widest"
          >
            AI ENGINEER
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <br/><span className="gradient-text">Nguyễn Anh Thư</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-light/70 mb-6 font-mono tracking-wide">
            Student at VNUHCM, University of Science
          </h2>
          <p className="text-light/80 mb-8 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            Third-year IT student focused on Computer Vision, with hands-on experience building deep learning models, LLM applications, and AI-powered web systems for real-world use cases.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => setShowCV(true)}
              className="bg-primary/10 text-primary border border-primary px-8 py-3 rounded-none hover:bg-primary hover:text-dark transition-all duration-300 glow-effect font-mono tracking-wider shadow-[0_0_15px_rgba(208,255,164,0.3)] hover:shadow-[0_0_25px_rgba(208,255,164,0.6)]"
            >
              [ VIEW_CV ]
            </button>
            <a
              href="#contact"
              className="border border-secondary/50 text-secondary bg-secondary/5 px-8 py-3 rounded-none hover:bg-secondary hover:text-dark transition-all duration-300 font-mono tracking-wider hover:shadow-[0_0_25px_rgba(232,160,255,0.4)]"
            >
              [ CONTACT_ME ]
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-full max-w-[350px] aspect-square animate-float mx-auto">
            {/* Futuristic decorative frames */}
            <div 
              className="absolute -inset-4 border-2 border-primary/40 opacity-50 animate-[spin_20s_linear_infinite]" 
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
            />
            <div 
              className="absolute -inset-8 border-2 border-secondary/40 opacity-30 animate-[spin_30s_linear_infinite_reverse]" 
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
            />
            
            {/* Outer glow */}
            <div className="absolute inset-0 bg-primary/30 blur-2xl animate-pulse-slow rounded-full"></div>
            
            <img
              src="/avatar2.jpg"
              alt="Nguyễn Anh Thư"
              className="w-full h-full object-cover relative z-10 transition-transform duration-500 hover:scale-105"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            />
          </div>
        </motion.div>
      </div>

      {/* CV Modal PDF Viewer */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-darker/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] glass-effect rounded-2xl flex flex-col overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(208,255,164,0.2)]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-dark-card/80">
                <h3 className="text-lg md:text-xl font-bold font-mono tracking-wider text-light flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  SYSTEM_LOG: CV.PDF
                </h3>
                <div className="flex items-center gap-2 md:gap-4">
                  <a
                    href="/cv/cv.pdf"
                    download="Nguyen_Anh_Thu_CV.pdf"
                    className="flex items-center gap-2 text-dark bg-primary hover:bg-light px-3 md:px-4 py-2 rounded-sm font-mono tracking-wider transition-colors text-xs md:text-sm shadow-[0_0_10px_rgba(208,255,164,0.4)]"
                  >
                    <FaDownload /> <span className="hidden md:inline">DOWNLOAD</span>
                  </a>
                  <button
                    onClick={() => setShowCV(false)}
                    className="text-light/50 hover:text-secondary transition-colors p-2 hover:bg-white/5 rounded-full"
                    title="Close Screen"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>
              
              {/* Modal PDF Body */}
              <div className="flex-1 w-full bg-darker/50 p-2 md:p-6 overflow-hidden">
                {/* Fallback for browsers that don't support iframe PDF natively */}
                <object
                  data="/cv/cv.pdf#toolbar=0"
                  type="application/pdf"
                  className="w-full h-full rounded-lg border border-white/5 bg-light"
                >
                  <div className="flex flex-col items-center justify-center h-full text-light/70 p-8 text-center bg-dark-card rounded-lg">
                    <p className="mb-4">It seems your browser doesn't support the inline PDF viewer.</p>
                    <a href="/cv/cv.pdf" download="Nguyen_Anh_Thu_CV.pdf" className="text-primary hover:underline font-mono">
                      Click here to download the PDF directly.
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;