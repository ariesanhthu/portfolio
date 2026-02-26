import React, { useState } from 'react';
import { motion } from 'framer-motion';

const allSkills = [
  'C++', 'Python', 'TypeScript', 'SQL',
  'TensorFlow', 'Keras', 'OpenCV', 'ADK', 'RAG', 'LangChain',
  'Next.js', 'React', 'Node.js', 'MongoDB', 'Supabase', 'Vercel',
  'Leadership', 'Problem Solving',
];

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const skillsRow = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Skills
        </motion.h2>
      </div>

      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`marquee-track flex ${isHovered ? 'marquee-pause' : ''}`}>
            <div className="marquee-content flex shrink-0 gap-8">
              {skillsRow.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag whitespace-nowrap text-light/90 text-lg font-medium px-6 py-3 rounded-full bg-dark-accent/80 border border-white/10 transition-colors duration-300 cursor-default hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="marquee-content flex shrink-0 gap-8" aria-hidden="true">
              {skillsRow.map((skill, index) => (
                <span
                  key={`dup-${index}`}
                  className="skill-tag whitespace-nowrap text-light/90 text-lg font-medium px-6 py-3 rounded-full bg-dark-accent/80 border border-white/10 transition-colors duration-300 cursor-default hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  {skill}
                </span>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
