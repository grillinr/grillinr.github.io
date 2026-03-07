import { Card } from '@/components/ui/card'
import { experiences } from '@/lib/site-data'

export function ExperienceTimeline() {
  return (
    <div className="grid gap-4">
      {experiences.map((item) => (
        <Card key={item.company}>
          <p className="m-0 font-['Space_Grotesk','IBM_Plex_Sans',sans-serif] text-lg">{item.company}</p>
          <p className="mb-0 mt-2 text-[var(--fg-dim)]">{item.summary}</p>
        </Card>
      ))}
    </div>
  )
}
