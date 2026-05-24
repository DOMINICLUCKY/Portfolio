'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-green-500/10 pointer-events-none" />
      
      {/* Animated blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse opacity-50" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-green-500/50 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-12 sm:p-16 text-center hover:border-cyan-400/60 transition-all duration-300">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-6"
            >
              Ready to Build Something Amazing?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Let's collaborate on your next project and bring your vision to life
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg"
              >
                Get in Touch
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/adarsh-mund-443139353"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-black/40 backdrop-blur border-2 border-cyan-400/50 text-cyan-400 font-bold rounded-xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg"
              >
                Connect on LinkedIn
              </motion.a>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="mt-16 pt-12 border-t border-cyan-400/20 flex justify-around flex-wrap gap-8"
            >
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Clients', value: 'Happy' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-400">{stat.value}</p>
                  <p className="text-gray-400 text-lg mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
