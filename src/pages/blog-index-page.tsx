import { ContentOverviewCard } from "@/components/content/content-overview-card";
import {
  MotionSection,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";
import { getPosts } from "@/lib/content";

export function BlogIndexPage() {
  const posts = getPosts();
  const publishedPosts = posts.filter((post) => !post.draft);

  return (
    <MotionSection className="page-section fade-in">
      <SectionHeader
        title="Posts"
        description="Random thoughts, technical deep-dives, and lessons learned."
      />
      {publishedPosts.length > 0 ? (
        <MotionStagger className="grid gap-4">
          {publishedPosts.map((entry) => (
            <MotionStaggerItem key={entry.slug}>
              <ContentOverviewCard
                entry={entry}
                href={`/posts/${entry.slug}`}
                ctaLabel="Read post"
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      ) : (
        <p className="mt-4 text-center text-lg text-[var(--fg-dim)]">
          No posts yet! Check back later.
        </p>
      )}
    </MotionSection>
  );
}
