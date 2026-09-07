'use client';

import React from 'react';
import CanvasBackground from '@/components/CanvasBackground';
import TelemetryHUD from '@/components/TelemetryHUD';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import PipelineVisualizer from '@/components/PipelineVisualizer';
import MetricsDashboard from '@/components/MetricsDashboard';
import ProjectsGrid from '@/components/ProjectsGrid';
import StackMatrix from '@/components/StackMatrix';
import TerminalShell from '@/components/TerminalShell';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080a0f] text-slate-100 relative selection:bg-brand-cobalt selection:text-white">
      {/* 3D Kubernetes Topology Mesh Background */}
      <CanvasBackground />

      {/* Sticky Telemetry HUD Bar */}
      <TelemetryHUD />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Education & Honours */}
      <Education />

      {/* Automated CI/CD & MLOps Pipeline Visualizer */}
      <PipelineVisualizer />

      {/* Live Cluster Observability HUD */}
      <MetricsDashboard />

      {/* Engineered Projects Matrix */}
      <ProjectsGrid />

      {/* Engineering Stack Matrix */}
      <StackMatrix />

      {/* Kubernetes CLI Terminal Shell */}
      <TerminalShell />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
