import { ExperienceTimeline } from '@/components/sections/experience-timeline'
import { SectionHeader } from '@/components/sections/section-header'
import { SkillsGrid } from '@/components/sections/skills-grid'
import { profile } from '@/lib/site-data'

export function AboutPage() {
  return (
    <>
      <section className="page-section fade-in">
        <SectionHeader
          kicker="About"
          title="Background and approach"
          description={`${profile.shortBio} ${profile.longBio}`}
        />
      </section>

      <section className="page-section">
        <SectionHeader
          kicker="Experience"
          title="What I have built professionally"
          description="I enjoy improving systems that teams rely on every day: product interfaces, internal tooling, and data-driven workflows."
        />
        <ExperienceTimeline />
      </section>

      <section className="page-section">
        <SectionHeader
          kicker="Stack"
          title="Skills and technologies"
          description="The tools I reach for most often when building and shipping software."
        />
        <SkillsGrid />
      </section>
    </>
  )
}
