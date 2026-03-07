import { ContentOverviewCard } from '@/components/content/content-overview-card'
import type { ContentEntry } from '@/lib/content'

type PostListItemProps = {
  entry: ContentEntry
}

export function PostListItem({ entry }: PostListItemProps) {
  return (
    <ContentOverviewCard entry={entry} href={`/blog/${entry.slug}`} ctaLabel="Read post" />
  )
}
