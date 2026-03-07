import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { links, profile } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="page-section fade-in">
      <h1 className="page-title">{profile.name}</h1>
      <p className="mt-4 text-xl text-[var(--gruvbox-bright-blue)] md:text-2xl">
        {profile.title}
      </p>
      <p className="lead mt-5">{profile.shortBio}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button variant="secondary" asChild>
          <Link to="/projects">
            Explore projects <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <a href={links.find((item) => item.label === "Resume")?.href ?? "#"}>
            Resume <FileText className="size-4" />
          </a>
        </Button>
      </div>

      <div className="hero-grid mt-10">
        <Card className="p-4">
          <p className="mb-2 text-sm text-[var(--fg-dim)]">Current Focus</p>
          <p className="m-0 text-sm text-[var(--fg-main)]">
            Building useful software across full stack web, data systems, and
            developer tooling.
          </p>
        </Card>
        <Card className="p-4">
          <p className="mb-2 text-sm text-[var(--fg-dim)]">Open To</p>
          <div className="flex flex-wrap gap-2">
            <Badge>Software Engineering</Badge>
            <Badge>Product Engineering</Badge>
            <Badge>Data Platforms</Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
