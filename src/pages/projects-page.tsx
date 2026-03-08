import { ContentOverviewCard } from "@/components/content/content-overview-card";
import {
  MotionSection,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";
import { getProjectPosts } from "@/lib/content";

export function ProjectsPage() {
  const projects = getProjectPosts();

  return (
    <MotionSection className="page-section fade-in">
      <SectionHeader
        title="Projects"
        description="Each project entry links to a markdown/MDX page so you can publish deep dives and progress notes over time."
      />

      <MotionStagger className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <MotionStaggerItem key={project.slug}>
            <ContentOverviewCard
              entry={project}
              href={`/projects/${project.slug}`}
              ctaLabel="Read project post"
            />
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </MotionSection>
  );
}
