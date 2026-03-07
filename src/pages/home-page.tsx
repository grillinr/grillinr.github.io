import { Link } from "react-router-dom";
import { Hero } from "@/components/sections/hero";
import { PostListItem } from "@/components/blog/post-list-item";
import { SectionHeader } from "@/components/sections/section-header";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { getPosts, getProjectPosts } from "@/lib/content";

export function HomePage() {
  const featured = getProjectPosts()
    .filter((project) => project.featured)
    .slice(0, 2);
  const latestPosts = getPosts().slice(0, 2);

  return (
    <>
      <Hero />

      <section className="page-section">
        <SectionHeader
          title="Featured projects"
          description="Some of my best work, showcasing a range of technical challenges and solutions across different domains."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link to="/projects">View all projects</Link>
          </Button>
        </div>
      </section>

      <section className="page-section">
        <SectionHeader
          title="Experience"
          description="Everything I've learned at school, work, and on my own."
        />
        <SkillsGrid />
      </section>

      <section className="page-section">
        <SectionHeader
          title="Recent posts"
          description="Random thoughts, technical deep-dives, and lessons learned."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {latestPosts.map((entry) => (
            <PostListItem key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </>
  );
}
