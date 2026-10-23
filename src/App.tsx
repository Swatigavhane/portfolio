/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { TerminalConnect } from './components/TerminalConnect';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollY = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] selection:bg-[#4cd7f6]/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Container matching 1280px / 1440px viewport design */}
      <main className="relative">
        {/* Subtle grid pattern background overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* 1. Hero Section */}
        <Hero onOpenSchedule={() => setIsScheduleOpen(true)} />

        {/* 2. Metrics / KPI Strip */}
        <Metrics />

        {/* 3. Professional Experience */}
        <Experience />

        {/* 4. Featured Work & Case Studies */}
        <Projects />

        {/* 5. Skills & Technology Stack */}
        <Skills />

        {/* 6. Education & Credentials */}
        <Education />

        {/* 7. Let's Connect & Build (Terminal CLI) */}
        <TerminalConnect
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
