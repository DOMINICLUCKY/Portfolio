'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Particle System Component
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);

  useEffect(() => {
    if (!pointsRef.current) return;

    const positions = new Float32Array(1500);
    for (let i = 0; i < 1500 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    pointsRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  useFrame(() => {
    if (pointsRef.current && pointsRef.current.rotation) {
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.05}
        color="#00ff88"
        sizeAttenuation
        transparent
      />
    </points>
  );
}

// Canvas Scene
function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 75 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ParticleSystem />
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
    </Canvas>
  );
}

// Hero Component
export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-green-400 mb-8 drop-shadow-lg leading-tight">
            Adarsh Mund
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-300 font-light tracking-widest mb-6">
            Full-Stack Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed px-4">
            Building intelligent, immersive web experiences with cutting-edge
            technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center mt-14 pointer-events-auto flex-wrap px-4">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg sm:text-xl rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Work
            </button>
            <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold text-lg sm:text-xl rounded-lg transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-cyan-400 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
