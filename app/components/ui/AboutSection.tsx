'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GitHubStats {
  totalStars: number;
  followers: number;
  publicRepos: number;
}

interface LinkedInStats {
  connectionsCount: number;
  recommendationCount: number;
}

export const AboutSection = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats>({
    totalStars: 0,
    followers: 0,
    publicRepos: 0,
  });
  const [linkedinStats, setLinkedInStats] = useState<LinkedInStats>({
    connectionsCount: 0,
    recommendationCount: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [githubRes, linkedinRes] = await Promise.all([
          fetch('/api/github'),
          fetch('/api/linkedin-stats'),
        ]);

        if (githubRes.ok) {
          const data = await githubRes.json();
          setGithubStats({
            totalStars: data.totalStars,
            followers: data.followers,
            publicRepos: data.publicRepos,
          });
        }

        if (linkedinRes.ok) {
          const data = await linkedinRes.json();
          setLinkedInStats({
            connectionsCount: data.connectionsCount,
            recommendationCount: data.recommendationCount,
          });
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS', 'JavaScript', 'Three.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools & Platforms', items: ['Git', 'AWS', 'Vercel', 'Firebase', 'GitHub Actions'] },
    { category: 'Specializations', items: ['AI/ML Integration', '3D Web', 'Full-Stack Development', 'UI/UX Design', 'NLP'] },
  ];

  return (
    <section id="about" className="w-full py-24 bg-black relative overflow-hidden">
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
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">Get to know my background and expertise</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-5">Full-Stack Developer</h3>
                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
                  I am a Full-Stack Developer specializing in building robust, scalable digital platforms. As a student at{' '}
                  <span className="text-cyan-400 font-semibold">Centurion University of Technology and Management (CUTM)</span>
                  {' '}and the technical lead for <span className="text-cyan-400 font-semibold">Coder's Space</span>, I direct
                  collaborative teams to engineer innovative software solutions. My technical foundation bridges modern frontend
                  frameworks—including Next.js, React, and TypeScript—with powerful backend architectures powered by Node.js
                  and MongoDB. I am driven by a commitment to seamless system design and delivering high-impact user experiences.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {[
                { label: 'Projects', value: '10+', icon: '🚀' },
                { label: 'Technologies', value: '20+', icon: '⚙️' },
                { label: 'Professional Network', value: isLoading ? '...' : `${linkedinStats.connectionsCount}+`, icon: '🔗' },
                { label: 'Passion Level', value: '∞', icon: '❤️' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: false }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-black/40 backdrop-blur-lg border border-cyan-400/20 rounded-lg p-7 text-center hover:border-cyan-400/40 hover:scale-105 transition-all duration-300">
                    <p className="text-3xl mb-2">{stat.icon}</p>
                    <p className="text-3xl sm:text-4xl font-bold text-cyan-400">{stat.value}</p>
                    <p className="text-base sm:text-lg text-gray-300 font-semibold">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="relative flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-black rounded-2xl p-1 overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-auto aspect-[3/4] object-cover rounded-xl border border-cyan-500/20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 via-transparent to-green-500/20 flex items-center justify-center" style={{display: 'none'}} id="fallback">
                  <div className="text-center">
                    <p className="text-cyan-400 font-semibold text-xl">Your Profile Photo</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Add profile.jpeg to public folder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-12 text-center w-full">
            Skills & Technologies
          </h3>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/40 backdrop-blur-lg border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-colors">
                  <h4 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-5 group-hover:text-green-400 transition-colors">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, sidx) => (
                      <motion.span
                        key={sidx}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-base sm:text-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors cursor-default font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
