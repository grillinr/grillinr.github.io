import type { ComponentType } from "react";

type MdxModule = {
  default: ComponentType;
  frontmatter?: {
    title?: string;
    date?: string;
    summary?: string;
    tags?: string[];
    type?: "project" | "post";
    featured?: boolean;
    draft?: boolean;
  };
};

export type ContentEntry = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  type: "project" | "post";
  featured: boolean;
  draft: boolean;
  Component: ComponentType;
};

const modules = import.meta.glob<MdxModule>("../content/**/*.mdx", {
  eager: true,
});

export const contentEntries: ContentEntry[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()?.replace(".mdx", "") ?? "post";
    const frontmatter = mod.frontmatter ?? {};

    return {
      slug,
      title: frontmatter.title ?? slug,
      date: frontmatter.date ?? "",
      summary: frontmatter.summary ?? "",
      tags: frontmatter.tags ?? [],
      type: frontmatter.type ?? "post",
      featured: frontmatter.featured ?? false,
      draft: frontmatter.draft ?? false,
      Component: mod.default,
    };
  })
  .filter((entry) => !entry.draft)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string) {
  return contentEntries.find((entry) => entry.slug === slug);
}

export function getPosts() {
  return contentEntries.filter((entry) => entry.type === "post");
}

export function getProjectPosts() {
  return contentEntries.filter((entry) => entry.type === "project");
}
