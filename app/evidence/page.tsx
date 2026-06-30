import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { evidenceProjects } from "@/data/portfolio";

export const metadata = {
  title: "Technical Evidence | AI Adoption Portfolio",
};

export default function EvidencePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Technical Evidence"
            subtitle="Built, deployed, and monitored in production."
            description="A portfolio of technical work demonstrating the full AI adoption lifecycle — from concept to deployed, production-monitored systems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
