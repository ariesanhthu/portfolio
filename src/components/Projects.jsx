import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, subtitle, description, technologies, githubUrl, liveUrl, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    className="group glass-effect rounded-xl overflow-hidden shadow-md hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border hover:border-primary/50"
  >
    <div className="relative h-48 overflow-hidden shrink-0 border-b border-white/5">
      <img
        src={image || "https://via.placeholder.com/400x200"}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
      
      {/* HUD overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-secondary/50" />
      </div>

      <div className="absolute inset-0 bg-dark-card/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 backdrop-blur-sm">
        <p className="text-light text-sm text-center leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{description}</p>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 min-h-0 relative z-10 bg-dark-card/80">
      <h3 className="text-xl font-bold mb-1 text-light group-hover:text-primary transition-colors">{title}</h3>
      {subtitle && <p className="text-xs font-mono tracking-wider text-secondary mb-4 uppercase">{subtitle}</p>}
      <div className="flex flex-wrap gap-2 flex-1 items-start content-start">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-flex shrink-0 bg-dark-accent/50 text-light/80 border border-white/10 px-3 py-1 rounded-sm text-xs font-mono whitespace-nowrap group-hover:border-primary/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4 mt-6 border-t border-white/10 shrink-0">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-light transition-colors text-sm font-mono tracking-wider hover:shadow-[0_0_10px_#00f3ff] px-2 py-1 rounded"
        >
          <FaGithub size={16} /> [SRC]
        </a>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-light transition-colors text-sm font-mono tracking-wider ml-auto hover:shadow-[0_0_10px_#bc13fe] px-2 py-1 rounded"
          >
            <FaExternalLinkAlt size={14} /> [DEMO]
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
    <section className="section-padding bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">System Log</span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text pb-2">
            Selected Works
          </h2>
        </motion.div>
        
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
