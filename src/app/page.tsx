'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import ProjectsGrid from '@/components/ProjectsGrid';
import StackMatrix from '@/components/StackMatrix';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base text-slate-300">
      {/* Navigation */}
      <Navbar />

      {/* Hero / About */}
      <Hero />

      {/* Education (ON TOP) */}
      <Education />

      {/* Projects */}
      <ProjectsGrid />

      {/* Skills & Awards */}
      <StackMatrix />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
