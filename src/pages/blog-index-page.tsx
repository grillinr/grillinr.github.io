import { PostListItem } from "@/components/blog/post-list-item";
import { SectionHeader } from "@/components/sections/section-header";
import { getPosts } from "@/lib/content";

export function BlogIndexPage() {
  const posts = getPosts();

  return (
    <section className="page-section fade-in">
      <SectionHeader
        title="Posts"
        description="Random thoughts, technical deep-dives, and lessons learned."
      />

      <div className="grid gap-4">
        {posts.map((entry) => (
          <PostListItem key={entry.slug} entry={entry} />
        ))}
      </div>
    </section>
  );
}
