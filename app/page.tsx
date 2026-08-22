import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import DevOpsSection from "@/components/DevOpsSection";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <DevOpsSection />
      <Education />
      <Contact />
    </main>
  );
}
