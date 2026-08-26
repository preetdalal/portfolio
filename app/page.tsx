import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AiMlSection from "@/components/AiMlSection";
import TechStack from "@/components/TechStack";
import DevOpsSection from "@/components/DevOpsSection";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-dark text-ink selection:bg-spring/25 selection:text-spring-light">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <AiMlSection />
      <TechStack />
      <DevOpsSection />
      <Education />
      <Contact />
    </main>
  );
}
