import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const honors = [
  {
    title: 'Finalist (Top 30/1500)',
    event: 'Univentures 2025',
    issuer: 'Block71',
    description: 'Selected among top 30 teams from 1,500+ participants in the startup competition.',
  },
  {
    title: '1st Place',
    event: 'HCMUS AI Innovation 2024',
    issuer: 'FIT-HCMUS, Bosch Global Software Technologies',
    description: 'Led development of AI-powered smart glasses for hazard detection and accessibility support for the visually impaired.',
    certificate: 'https://drive.google.com/file/d/1xUu-OouSO3AVMGXpQg6U3ysiNLti4szt/view?usp=sharing',
  },
  {
    title: '7th Place - Final Round',
    event: 'SoICT Hackathon 2024',
    issuer: 'SoICT - HUST',
    description: 'Led development of a violence-aware surveillance system; built dataset and trained classification model for behavior recognition.',
    certificate: 'https://drive.google.com/file/d/16OszI5Mi_DqtvwJw9JHQN8cYqjiwwQ48/view?usp=sharing',
  },
];

const HonorCard = ({ honor, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
    className="glass-effect p-6 md:p-8 rounded-xl hover:border-secondary/50 hover:bg-dark-accent/30 transition-all duration-300 relative group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="flex flex-col md:flex-row items-start justify-between gap-4 relative z-10">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <FaTrophy className="text-secondary text-xl drop-shadow-[0_0_8px_#bc13fe] animate-pulse-slow" />
          <span className="text-secondary font-mono tracking-wider font-bold drop-shadow-[0_0_2px_#bc13fe]">{honor.title}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-light group-hover:text-primary transition-colors duration-300 mt-2">{honor.event}</h3>
        <p className="text-light/50 font-mono text-sm mb-4 border-b border-white/5 pb-2 inline-block">{honor.issuer}</p>
        <p className="text-light/80 leading-relaxed">{honor.description}</p>
      </div>
      {honor.certificate && (
        <a
          href={honor.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-dark hover:scale-110 hover:shadow-[0_0_15px_#00f3ff] transition-all duration-300 mt-4 md:mt-0"
          aria-label="View certificate"
          title="View certificate"
        >
          <FaExternalLinkAlt size={16} />
        </a>
      )}
    </div>
  </motion.div>
);

const Honors = () => {
  return (
    <section className="section-padding bg-darker relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-darker to-darker pointer-events-none" />
      
      <div className="container-width relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-2 block">Achievements</span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text pb-2">
            Honors & Awards
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {honors.map((honor, index) => (
            <HonorCard key={honor.event} honor={honor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
