import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, companyUrl, description, achievements, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
    className="relative pl-10 md:pl-16 pb-12 last:pb-0 group"
  >
    <div className="absolute left-[calc(-7px)] top-2 w-4 h-4 rounded-full border-4 border-dark bg-primary z-20 group-hover:bg-secondary group-hover:border-secondary/20 transition-all duration-300 group-hover:shadow-[0_0_15px_#E8A0FF]" />
    
    <div className="glass-effect p-6 md:p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-white/5 group-hover:border-primary/50 relative overflow-hidden bg-dark-card/30">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <span className="inline-block text-xs md:text-sm text-primary font-mono tracking-wider font-bold mb-3 px-3 py-1 bg-primary/10 rounded-sm border border-primary/20">
        {year}
      </span>
      <h3 className="text-xl md:text-2xl font-bold mt-1 text-light group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-secondary font-medium mt-1">
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-light transition-colors hover:underline decoration-secondary/50 underline-offset-4">{company}</a>
        ) : (
          company
        )}
      </p>
      {description && <p className="mt-4 text-light/80 leading-relaxed font-mono text-sm">{description}</p>}
      {achievements && (
        <ul className="mt-4 space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="text-light/70 text-sm md:text-base flex items-start">
              <span className="text-primary mr-2 mt-1 shrink-0 text-xs">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const EducationItem = ({ year, title, school, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-10 last:pb-0 group"
  >
    {/* Simple minimalist timeline line for education */}
    <div className="absolute left-[0px] top-2 w-2 h-2 rounded-full bg-secondary group-hover:shadow-[0_0_10px_#E8A0FF] transition-shadow duration-300 z-10" />
    <div className="absolute left-[3px] top-4 bottom-[-8px] w-[1px] bg-white/10 group-last:hidden" />
    
    <span className="block text-xs md:text-sm text-primary font-mono tracking-wider mb-2">{year}</span>
    <h4 className="text-lg md:text-xl font-bold text-light group-hover:text-secondary transition-colors">{title}</h4>
    <p className="text-light/70 mt-1">{school}</p>
    {description && <p className="mt-3 text-secondary/80 font-mono text-sm px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-sm inline-block">{description}</p>}
  </motion.div>
);

const Timeline = () => {
  const experiences = [
    {
      year: 'Jun 2024 - Present',
      title: 'Web Developer',
      company: 'Blue Moonlight Travel & Environment CO., LTD',
      companyUrl: 'https://www.facebook.com/profile.php?id=61569547720275',
      achievements: [
        'Develop full-stack travel web systems using Next.js and MongoDB, including an AI chatbot powered by LangChain and retrieval-augmented generation (RAG).',
        'Build and integrate REST APIs to support tour search, itinerary planning, and customer interactions.',
        'Improve front-end and back-end performance, achieving ~1.8s Largest Contentful Paint (LCP) and sub-300ms API response time.',
        'Optimize MongoDB query performance by adding indexes and restructuring schemas to improve scalability.'
      ]
    }
  ];

  const education = [
    {
      year: '2023 - Present',
      title: 'BSc Information Technology',
      school: 'University of Science, VNUHCM',
      description: 'GPA: 3.3/4.0',
    },
    {
      year: '2020 - 2023',
      title: 'Specialized Informatics',
      school: 'Thoai Ngoc Hau High School for the Gifted',
      description: null,
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-darker relative">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">My Background</span>
          <h2 className="text-3xl md:text-5xl font-bold text-light pb-2 drop-shadow-md">
            Experience & Education
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Experience Section */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-light mb-8 flex items-center gap-3 font-mono">
              <span className="text-primary">{"//"}</span> WORK_EXPERIENCE
            </h3>
            <div className="relative pl-4 md:pl-0">
              <div className="absolute left-4 md:left-[0px] top-4 bottom-0 w-[2px] bg-dark-card border-x border-[0.5px] border-white/5" />
              <div className="absolute left-4 md:left-[0px] w-[2px] h-32 bg-gradient-to-b from-primary via-secondary to-transparent animate-pulse-slow top-0" />
              
              {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} index={index} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="lg:col-span-2">
             <h3 className="text-2xl font-bold text-light mb-8 flex items-center gap-3 font-mono">
              <span className="text-secondary">{"//"}</span> EDUCATION
            </h3>
            <div className="relative bg-dark-card/20 p-6 md:p-8 rounded-xl border border-white/5">
              {education.map((edu, index) => (
                <EducationItem key={index} {...edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
