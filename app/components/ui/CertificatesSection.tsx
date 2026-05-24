'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      issuer: 'Udemy',
      year: 2023,
      category: 'Development',
      skills: ['React', 'Node.js', 'MongoDB'],
      icon: '🎓',
    },
    {
      id: 2,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      year: 2024,
      category: 'AI/ML',
      skills: ['Python', 'TensorFlow', 'AI/ML'],
      icon: '🤖',
    },
    {
      id: 3,
      title: 'Next.js 14 Mastery',
      issuer: 'Zero to Fullstack',
      year: 2024,
      category: 'Frontend',
      skills: ['Next.js', 'React', 'TypeScript'],
      icon: '⚡',
    },
    {
      id: 4,
      title: '3D Web Development with Three.js',
      issuer: 'Udemy',
      year: 2024,
      category: '3D Graphics',
      skills: ['Three.js', 'WebGL', 'JavaScript'],
      icon: '🎮',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-cyan-500/5 pointer-events-none" />

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
            Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Professional credentials and continuous learning achievements
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
          className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Certificate Card */}
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col">
                {/* Icon and Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{cert.icon}</div>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-lg text-cyan-300 mb-1">
                  {cert.issuer}
                </p>

                {/* Category */}
                <p className="text-sm text-gray-400 mb-6">
                  {cert.category}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 font-medium hover:bg-green-500/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Continuously learning and staying updated with the latest technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};
