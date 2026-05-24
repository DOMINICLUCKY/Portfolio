'use client';

import { HeroSection } from './components/3d/HeroSection';
import { ProjectCards } from './components/3d/ProjectCards';
import { AboutSection } from './components/ui/AboutSection';
import { AchievementsSection } from './components/ui/AchievementsSection';
import { WhyHireMeSection } from './components/ui/WhyHireMeSection';
import { CTASection } from './components/ui/CTASection';
import { ContactSection } from './components/ui/ContactSection';

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      
      {/* Master Container - Responsive Padding */}
      <main className="w-full max-w-[1400px] mx-auto pl-3 md:pl-4 pr-20 md:pr-[100px] lg:pr-[120px] overflow-hidden flex flex-col gap-y-16 md:gap-y-24">
        <ProjectCards />
        <AboutSection />
        <AchievementsSection />
        <WhyHireMeSection />
        <CTASection />
        <ContactSection />
      </main>
    </div>
  );
}
