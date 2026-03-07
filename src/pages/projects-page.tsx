import { SectionHeader } from '@/components/sections/section-header'
import { ProjectCard } from '@/components/projects/project-card'
import { getProjectPosts } from '@/lib/content'

export function ProjectsPage() {
  const projects = getProjectPosts()

  return (
    <section className="page-section fade-in">
      <SectionHeader
        kicker="Projects"
        title="Products, prototypes, and systems"
        description="Each project entry links to a markdown/MDX page so you can publish deep dives and progress notes over time."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
