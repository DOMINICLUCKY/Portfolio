'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/app/data/projects';

interface CardProps {
  project: (typeof projects)[0];
  index: number;
}

const FloatingCard: React.FC<CardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;

    cardRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'completed':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group h-full bg-black/30 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-cyan-400/50 overflow-hidden flex flex-col"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/50 group-hover:via-transparent group-hover:to-cyan-500/50 opacity-0 group-hover:opacity-20 transition-all duration-300 blur-xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with status and year */}
          <div className="flex justify-between items-start mb-3 gap-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              {project.title}
            </h3>
            <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap flex-shrink-0 ${getStatusColor(project.status)}`}>
              {project.status === 'live' ? '🔴 Live' : project.status === 'completed' ? '✓ Done' : '⏳ WIP'}
            </span>
          </div>

          {/* Meta info - Category and Year */}
          <div className="flex gap-2 mb-3">
            <span className="text-xs text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-xs text-gray-400 px-2 py-1">{project.year}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
              Key Features
            </p>
            <div className="flex flex-wrap gap-2">
              {project.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2 bg-gray-700/50 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 text-sm text-center"
            >
              GitHub
            </motion.a>
            {project.liveUrl && project.liveUrl !== '#' ? (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm"
              >
                View Live
              </motion.a>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled
                className="flex-1 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-gray-200 font-semibold rounded-lg transition-all duration-300 text-sm opacity-70 cursor-not-allowed"
              >
                Coming Soon
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectCards = () => {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center w-full mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-6">
            Featured Projects
          </h2>
          <div className="flex justify-center mb-8">
            <p className="text-sm sm:text-base md:text-lg text-cyan-300/70 max-w-2xl font-medium tracking-wide leading-loose text-center px-6">
              Cutting-edge full-stack solutions crafted with modern technologies
            </p>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {['FinTech', 'Logistics & AI', 'Gaming', 'Sustainability'].map((cat, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all cursor-pointer"
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FloatingCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
