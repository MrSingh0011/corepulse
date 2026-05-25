import { PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <p className="text-xs tech-badge text-zinc-500 mb-3">WHAT WE'VE BUILT</p>
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

      <div className="grid lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
