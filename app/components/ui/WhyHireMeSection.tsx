'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhyHireMeSection = () => {
  const reasons = [
    {
      number: '01',
      title: 'End-to-End Solutions',
      description: 'From UI design to database architecture, I deliver complete, production-ready applications',
      features: ['Frontend', 'Backend', 'Database', 'Deployment'],
    },
    {
      number: '02',
      title: 'Modern Tech Stack',
      description: 'Latest technologies and best practices for scalable, maintainable code',
      features: ['React/Next.js', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      number: '03',
      title: 'Quick Delivery',
      description: 'Efficient development process without compromising on quality',
      features: ['Fast Turnaround', 'Clean Code', 'Well Documented', 'Testing'],
    },
    {
      number: '04',
      title: 'Innovation Focus',
      description: 'AI/ML integration, 3D web experiences, and cutting-edge features',
      features: ['AI Integration', '3D Graphics', 'Real-time Updates', 'Optimization'],
    },
  ];

  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-green-500/5 pointer-events-none" />

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
            Why Hire Me?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Here's what I bring to your team
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-10 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                    {reason.title}
                  </h3>
                  <div className="text-5xl font-bold text-cyan-500/30 group-hover:text-cyan-400/50 transition-colors">
                    {reason.number}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {reason.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {reason.features.map((feature, fidx) => (
                    <motion.span
                      key={fidx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
