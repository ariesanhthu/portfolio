import React, { useState } from 'react';
import { motion } from 'framer-motion';

const allSkills = [
  'C++', 'Python', 'JavaScript', 
  'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'NumPy', 
  'LangChain', 'ADK', 
  'FastAPI', 'Docker', 'Next.js', 'React', 'MongoDB', 'Supabase'
];

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  // Duplicate more times to ensure seamless infinite scroll on larger screens
  const skillsRow = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section className="section-padding bg-dark relative border-y border-white/5 overflow-hidden">
      {/* Abstract light bursts */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-2 block">Tech Stack</span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text pb-2">
            Skills & Tools
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full py-8">
        {/* Transparent gradient masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <div
          className="overflow-hidden w-full flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`marquee-track flex ${isHovered ? 'marquee-pause' : ''}`}>
              <div className="marquee-content flex shrink-0 gap-4 md:gap-8 px-4 md:px-8">
                {skillsRow.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag whitespace-nowrap text-light/90 font-mono text-base md:text-lg font-medium px-6 py-3 rounded-md bg-dark-card border border-primary/20 transition-all duration-300 cursor-default hover:border-primary hover:text-dark hover:bg-primary shadow-[0_0_10px_rgba(0,243,255,0.0)] hover:shadow-[0_0_20px_rgba(0,243,255,0.8)] transform hover:-translate-y-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
