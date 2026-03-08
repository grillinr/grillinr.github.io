import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ContentEntry } from "@/lib/content";
import { motionSpring } from "@/lib/motion";
import { cn, formatDate } from "@/lib/utils";

type ContentOverviewCardProps = {
  entry: ContentEntry;
  href: string;
  ctaLabel: string;
  className?: string;
};

export function ContentOverviewCard({
  entry,
  href,
  ctaLabel,
  className,
}: ContentOverviewCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Card className={cn("group flex h-full flex-col", className)}>
      <p className="m-0 text-xs uppercase tracking-wide text-[var(--fg-dim)]">
        {formatDate(entry.date)}
      </p>
      <h3 className="mb-0 mt-2 font-['Space_Grotesk','IBM_Plex_Sans',sans-serif] text-xl">
        {entry.title}
      </h3>
      <p className="mb-0 mt-2 text-[var(--fg-dim)]">{entry.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <Link
        to={href}
        className="link-accent mt-auto inline-flex items-center gap-1 pt-5 text-sm text-[var(--aqua)]"
      >
        {ctaLabel}
        <motion.span
          className="inline-flex"
          transition={motionSpring}
          whileHover={reduceMotion ? undefined : { x: 6, y: -4, rotate: -8 }}
        >
          <ArrowUpRight className="size-4" />
        </motion.span>
      </Link>
    </Card>
  );
}
