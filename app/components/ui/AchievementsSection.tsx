'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: '🏆',
      title: 'Technical Lead',
      description: 'Leading Coder\'s Space community & driving innovative projects',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: '🎓',
      title: 'CUTM Scholar',
      description: 'Pursuing excellence at Centurion University of Technology & Management',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '⚡',
      title: 'Full-Stack Expert',
      description: 'Mastery in modern frontend & powerful backend technologies',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🎯',
      title: 'Problem Solver',
      description: 'Delivering scalable solutions with clean, efficient code',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🚀',
      title: 'Innovation Focus',
      description: 'AI/ML integration & cutting-edge web technologies',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: '👥',
      title: 'Team Player',
      description: 'Collaborative mindset with strong communication skills',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center w-full mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-6">
            Achievements & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Building amazing solutions with passion and precision
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ translateY: -10 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} rounded-xl blur opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-400/20 rounded-xl p-8 h-full hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
