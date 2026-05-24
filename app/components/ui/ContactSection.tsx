'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const socialIcons = [
    {
      name: 'GitHub',
      url: 'https://github.com/DOMINICLUCKY',
      icon: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adarsh-mund-443139353',
      icon: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      url: 'mailto:adarshmund07@gmail.com',
      icon: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      color: 'hover:text-red-400',
    },
  ];

  return (
    <section id="contact" className="w-full py-24 bg-black relative overflow-hidden">
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
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity" />
            <form onSubmit={handleSubmit} className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-10 space-y-8 hover:border-cyan-400/40 transition-colors">
              {/* Name Input */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-cyan-400 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-black/40 backdrop-blur border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors text-lg"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-cyan-400 mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-black/40 backdrop-blur border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors text-lg"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-cyan-400 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-black/40 backdrop-blur border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors resize-none text-lg"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-black font-bold text-lg sm:text-xl rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Social Icons */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-7 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6">
                  Connect With Me
                </h3>
                <div className="flex gap-8">
                  {socialIcons.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-400 transition-colors duration-300 ${social.color} hover:drop-shadow-[0_0_10px_currentColor]`}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-10 space-y-10 hover:border-cyan-400/40 transition-colors">
                <div className="border-l-2 border-cyan-500/50 pl-4 hover:border-cyan-400 transition-colors">
                  <p className="text-base text-gray-400 mb-2 font-semibold">📧 Email</p>
                  <a href="mailto:adarshmund07@gmail.com" className="text-cyan-400 font-bold text-lg hover:text-green-400 transition-colors break-all">
                    adarshmund07@gmail.com
                  </a>
                </div>
                <div className="border-l-2 border-cyan-500/50 pl-4 hover:border-cyan-400 transition-colors">
                  <p className="text-base text-gray-400 mb-2 font-semibold">📱 Phone</p>
                  <a href="tel:9348964693" className="text-cyan-400 font-bold text-lg hover:text-green-400 transition-colors">
                    +91 9348964693
                  </a>
                </div>
                <div className="border-l-2 border-cyan-500/50 pl-4 hover:border-cyan-400 transition-colors">
                  <p className="text-base text-gray-400 mb-2 font-semibold">📍 Location</p>
                  <p className="text-cyan-400 font-bold text-lg">
                    Bhubaneswar, India
                  </p>
                </div>
                <div className="border-l-2 border-green-500/50 pl-4 hover:border-green-400 transition-colors">
                  <p className="text-base text-gray-400 mb-2 font-semibold">Status</p>
                  <p className="text-green-400 font-bold text-lg flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    Open for Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="text-gray-300 text-base sm:text-lg space-y-4">
              <p className="flex items-start gap-3">
                <span className="text-2xl mt-1">✨</span>
                <span>Passionate about building scalable, AI-powered applications that solve real-world problems</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl mt-1">🚀</span>
                <span>Always exploring new technologies, frameworks, and innovative development practices</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl mt-1">🤝</span>
                <span>Love collaborating with talented developers and learning from amazing teams worldwide</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl mt-1">💡</span>
                <span>Open to exciting opportunities, freelance projects, and technical collaborations</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
