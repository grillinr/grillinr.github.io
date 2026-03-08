import { MotionSection } from "@/components/motion/motion-primitives";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SectionHeader } from "@/components/sections/section-header";
import { SubsectionHeader } from "@/components/sections/subsection-header";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { profile } from "@/lib/site-data";

export function AboutPage() {
  return (
    <>
      <MotionSection className="page-section fade-in">
        <SectionHeader title="About" />
      </MotionSection>
      <MotionSection className="page-section fade-in">
        <SubsectionHeader
          title="Education & background"
          description={`${profile.shortBio} ${profile.longBio}`}
        />
      </MotionSection>

      <MotionSection className="page-section">
        <SubsectionHeader
          title="Professional experience"
          description="I enjoy improving systems that teams rely on every day: product interfaces, internal tooling, and data-driven workflows."
        />
        <ExperienceTimeline />
      </MotionSection>

      <MotionSection className="page-section">
        <SubsectionHeader
          title="Skills & technologies"
          description="Everything I've learned at school, work, and on my own."
        />
        <SkillsGrid />
      </MotionSection>
    </>
  );
}
