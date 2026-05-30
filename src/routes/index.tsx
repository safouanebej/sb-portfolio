import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CommandPalette } from "@/components/portfolio/CommandPalette";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safouane Bejaoui — AI & Software Engineer · Munich" },
      { name: "description", content: "Portfolio of Safouane Bejaoui — Junior Software Engineer and AI Engineer based in Munich. Building production-oriented AI systems, RAG pipelines, and autonomous agents." },
      { property: "og:title", content: "Safouane Bejaoui — AI & Software Engineer" },
      { property: "og:description", content: "Production-oriented AI systems, backend services, RAG pipelines, autonomous agents. CS @ TUM, Munich." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const open = () => setCmdOpen(true);
    window.addEventListener("openCommand", open);
    return () => window.removeEventListener("openCommand", open);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground">
      <Nav onOpenCommand={() => setCmdOpen(true)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </div>
  );
}
