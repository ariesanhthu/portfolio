import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, subtitle, description, technologies, githubUrl, liveUrl, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group glass-effect rounded-lg overflow-hidden shadow-md hover:shadow-primary/30 transition-all duration-300 glow-effect flex flex-col h-full"
  >
    <div className="relative h-48 overflow-hidden shrink-0">
      <img
        src={image || "https://via.placeholder.com/400x200"}
        alt={title}
        className="w-full h-full object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
        <p className="text-light/90 text-sm text-center leading-relaxed">{description}</p>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 min-h-0">
      <h3 className="text-xl font-bold mb-1 text-light">{title}</h3>
      {subtitle && <p className="text-sm text-primary mb-3">{subtitle}</p>}
      <div className="flex flex-wrap gap-2 flex-1 items-start content-start">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-flex shrink-0 bg-dark-accent text-light/80 px-3 py-1 rounded-full text-sm whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4 mt-4 border-t border-white/10 shrink-0">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm"
        >
          <FaGithub /> GitHub
        </a>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm ml-auto"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        ) : (
          <span />
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Agentic Stock Trading System (Stockie)",
      subtitle: "Tech Lead - AI | Team of 6",
      description: "Agentic trading with ADK; RAG & multi-agent LLM for market analysis; 90% test coverage, <5s latency.",
      technologies: ["ADK", "RAG", "LangChain", "LLM", "Multi-agent"],
      githubUrl: "https://github.com/ariesanhthu/adk-trading-chatbot",
      liveUrl: "https://www.univen-1111.duckdns.org/",
      image: "/stockie.jpg"
    },
    {
      title: "Shrimp Disease Detection System",
      subtitle: "Tech Lead - AI | Team of 5",
      description: "ConvNeXtTiny (0.92 acc), OpenCV, U2Net, Grad-CAM++; Python + Next.js deployed on Hugging Face.",
      technologies: ["TensorFlow/Keras", "OpenCV", "U2Net", "Grad-CAM++", "Next.js"],
      githubUrl: "https://github.com/ariesanhthu/YDCC_BietDoiPhuSa_ThuanThienAI",
      liveUrl: "https://ydcc-biet-doi-phu-sa-thuan-thien-ai.vercel.app/",
      image: "/ydcc.png"
    },
    {
      title: "Booking Tour",
      subtitle: "Fullstack | Freelance",
      description: "Tour booking platform for Blue Moon Travel; Next.js, MongoDB.",
      technologies: ["Next.js", "React", "TypeScript", "MongoDB"],
      githubUrl: "https://github.com/ariesanhthu/BMT_bookingtour",
      liveUrl: "https://www.bluemoontravel.com.vn",
      image: "https://raw.githubusercontent.com/ariesanhthu/ariesanhthu.github.io/refs/heads/main/Screenshot%20(1435).png"
    },
    {
      title: "AI-Powered Virtual Try-On Clothing Store",
      subtitle: "Tech Lead - Fullstack | Team size: 4",
      description: "E-commerce with AI virtual try-on; Next.js, Sanity CMS.",
      technologies: ["Next.js", "React", "TypeScript", "Sanity"],
      githubUrl: "https://github.com/ariesanhthu/vton-webstore",
      liveUrl: "https://vton-webstore.vercel.app",
      image: "https://raw.githubusercontent.com/ariesanhthu/ariesanhthu.github.io/refs/heads/main/Screenshot%20(1436).png"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
