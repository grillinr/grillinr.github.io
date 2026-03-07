import { ContentOverviewCard } from '@/components/content/content-overview-card'
import type { ContentEntry } from '@/lib/content'

type ProjectCardProps = {
  project: ContentEntry
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ContentOverviewCard
      entry={project}
      href={`/projects/${project.slug}`}
      ctaLabel="Read project post"
      className="group transition-transform duration-200 hover:-translate-y-0.5"
    />
  )
}
