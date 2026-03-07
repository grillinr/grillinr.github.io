import { ContentOverviewCard } from "@/components/content/content-overview-card";
import { MotionSection, MotionStagger, MotionStaggerItem } from "@/components/motion/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";
import { getPosts } from "@/lib/content";

export function BlogIndexPage() {
  const posts = getPosts();

  return (
    <MotionSection className="page-section fade-in">
      <SectionHeader
        title="Posts"
        description="Random thoughts, technical deep-dives, and lessons learned."
      />

      <MotionStagger className="grid gap-4">
        {posts.map((entry) => (
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
  );
}
