import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContentOverviewCard } from "@/components/content/content-overview-card";
import {
  MotionSection,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion/motion-primitives";
import { motion, useReducedMotion } from "framer-motion";
import { motionSpring } from "@/lib/motion";
import { Hero } from "@/components/sections/hero";
import { SubsectionHeader } from "@/components/sections/subsection-header";
import { Button } from "@/components/ui/button";
import { getPosts, getProjectPosts } from "@/lib/content";

export function HomePage() {
  const featured = getProjectPosts()
    .filter((project) => project.featured)
    .slice(0, 2);
  const latestPosts = getPosts().slice(0, 2);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Hero />

      <MotionSection className="page-section">
        <SubsectionHeader
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
            <Link to="/projects">
              All projects
              <motion.span
                className="inline-flex"
                transition={motionSpring}
                whileHover={
                  reduceMotion ? undefined : { x: 6, y: -4, rotate: -8 }
                }
              >
                <ArrowUpRight className="size-4" />
              </motion.span>
            </Link>
          </Button>
        </div>
      </MotionSection>

      <MotionSection className="page-section">
        <SubsectionHeader
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
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link to="/posts">
              All posts
              <motion.span
                className="inline-flex"
                transition={motionSpring}
                whileHover={
                  reduceMotion ? undefined : { x: 6, y: -4, rotate: -8 }
                }
              >
                <ArrowUpRight className="size-4" />
              </motion.span>
            </Link>
          </Button>
        </div>
      </MotionSection>
    </>
  );
}
