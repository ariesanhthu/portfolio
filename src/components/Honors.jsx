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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-effect p-6 rounded-lg hover:border-primary/30 transition-colors"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <FaTrophy className="text-primary text-lg" />
          <span className="text-primary font-bold">{honor.title}</span>
        </div>
        <h3 className="text-xl font-bold text-light">{honor.event}</h3>
        <p className="text-light/60 text-sm mb-2">{honor.issuer}</p>
        <p className="text-light/80">{honor.description}</p>
      </div>
      {honor.certificate && (
        <a
          href={honor.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-primary hover:text-secondary transition-colors"
          aria-label="View certificate"
        >
          <FaExternalLinkAlt size={18} />
        </a>
      )}
    </div>
  </motion.div>
);

const Honors = () => {
  return (
    <section id="honors" className="section-padding bg-darker">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Honors & Awards
        </motion.h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {honors.map((honor, index) => (
            <HonorCard key={honor.event} honor={honor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
