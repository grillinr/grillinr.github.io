import { Link } from "react-router-dom";
import { ContentOverviewCard } from "@/components/content/content-overview-card";
import { MotionSection, MotionStagger, MotionStaggerItem } from "@/components/motion/motion-primitives";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/sections/section-header";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { Button } from "@/components/ui/button";
import { getPosts, getProjectPosts } from "@/lib/content";

export function HomePage() {
  const featured = getProjectPosts()
    .filter((project) => project.featured)
    .slice(0, 2);
  const latestPosts = getPosts().slice(0, 2);

  return (
    <>
      <Hero />

      <MotionSection className="page-section">
        <SectionHeader
          title="Featured projects"
          description="Some of my best work, showcasing a range of technical challenges and solutions across different domains."
        />
        <MotionStagger className="grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <MotionStaggerItem key={project.slug}>
              <ContentOverviewCard
                entry={project}
                href={`/projects/${project.slug}`}
                ctaLabel="Read project post"
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link to="/projects">View all projects</Link>
          </Button>
        </div>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionHeader
          title="Experience"
          description="Everything I've learned at school, work, and on my own."
        />
        <SkillsGrid />
      </MotionSection>

      <MotionSection className="page-section">
        <SectionHeader
          title="Recent posts"
          description="Random thoughts, technical deep-dives, and lessons learned."
        />
        <MotionStagger className="grid gap-4 md:grid-cols-2">
          {latestPosts.map((entry) => (
            <MotionStaggerItem key={entry.slug}>
              <ContentOverviewCard
                entry={entry}
                href={`/posts/${entry.slug}`}
                ctaLabel="Read post"
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </MotionSection>
    </>
  );
}
