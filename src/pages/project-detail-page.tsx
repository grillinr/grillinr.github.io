import { Navigate, useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { getPostBySlug } from '@/lib/content'
import { formatDate } from '@/lib/utils'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getPostBySlug(slug) : undefined

  if (!project || project.type !== 'project') {
    return <Navigate to="/projects" replace />
  }

  const Component = project.Component

  return (
    <article className="page-section fade-in">
      <header className="mb-8">
        <p className="m-0 text-xs uppercase tracking-wide text-[var(--fg-dim)]">{formatDate(project.date)}</p>
        <h1 className="page-title mt-3">{project.title}</h1>
        <p className="lead mt-4">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </header>

      <div className="mdx-content">
        <Component />
      </div>
    </article>
  )
}
