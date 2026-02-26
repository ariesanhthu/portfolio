import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, companyUrl, description, achievements }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
  >
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full glow-effect" />
    <div className="glass-effect p-6 rounded-lg shadow-md hover:shadow-primary/20 transition-all duration-300">
      <span className="text-sm text-primary font-semibold">{year}</span>
      <h3 className="text-xl font-bold mt-2 text-light">{title}</h3>
      <p className="text-light/70 font-medium">
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{company}</a>
        ) : (
          company
        )}
      </p>
      {description && <p className="mt-2 text-light/80">{description}</p>}
      {achievements && (
        <ul className="mt-2 list-disc pl-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-light/80 mt-1">{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const Timeline = () => {
  const experiences = [
    {
      year: 'Jun 2024 - Present',
      title: 'Web Developer (Freelance)',
      company: 'Blue Moonlight Travel & Environment CO., LTD',
      companyUrl: 'https://www.facebook.com/profile.php?id=61569547720275',
      description: 'Built and deployed fullstack applications with Next.js and MongoDB, including REST APIs and AI integrations. Achieved ~1.8s LCP and sub-300ms API response time. Optimized MongoDB queries via indexing and schema design.',
    },
    {
      year: '2020 - 2023',
      title: 'Specialized Informatics',
      company: 'Thoai Ngoc Hau High School for the Gifted',
      description: null,
    },
    {
      year: '2023 - Present',
      title: 'Information Technology',
      company: 'University of Science, VNUHCM',
      description: 'GPA: 3.3/4.0',
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-darker">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Experience & Education
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
