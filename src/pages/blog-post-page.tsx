import { Navigate, useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { getPostBySlug } from '@/lib/content'
import { formatDate } from '@/lib/utils'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post || post.type !== 'post') {
    return <Navigate to="/blog" replace />
  }

  const Component = post.Component

  return (
    <article className="page-section fade-in">
      <header className="mb-8">
        <p className="m-0 text-xs uppercase tracking-wide text-[var(--fg-dim)]">{formatDate(post.date)}</p>
        <h1 className="page-title mt-3">{post.title}</h1>
        <p className="lead mt-4">{post.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
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
