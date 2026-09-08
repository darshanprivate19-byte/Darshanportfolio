/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { SkillsSection } from './components/SkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { BeyondEditingSection } from './components/BeyondEditingSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ShowreelModal } from './components/ShowreelModal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('top');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isReelOpen, setIsReelOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('top');
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'services', 'work', 'skills', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#131315] text-[#e5e1e4] selection:bg-[#ff5722] selection:text-[#541200] overflow-x-hidden">
      {/* Global Cinematic Film Grain Texture Layer */}
      <div className="film-grain fixed inset-0 pointer-events-none z-40 opacity-40" />

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenReel={() => setIsReelOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20">
        <HeroSection
          onOpenReel={() => setIsReelOpen(true)}
          onNavigate={handleNavigate}
        />
        <AboutSection />
        <ServicesSection />
        <WorkSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <ProcessSection />
        <BeyondEditingSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ShowreelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />
    </div>
  );
}
