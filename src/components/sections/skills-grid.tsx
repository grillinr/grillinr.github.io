import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaRProject, FaAws } from "react-icons/fa";
import {
  SiAngular,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDotnet,
  SiFlask,
  SiGit,
  SiGo,
  SiHtml5,
  SiNeo4J,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRust,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAzure, TbSql } from "react-icons/tb";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/site-data";

const techIconMap: Record<string, IconType> = {
  Go: SiGo,
  TypeScript: SiTypescript,
  Rust: SiRust,
  "C#": SiDotnet,
  SQL: TbSql,
  Python: SiPython,
  "C++": SiCplusplus,
  HTML: SiHtml5,
  CSS: SiCss,
  R: FaRProject,
  React: SiReact,
  Angular: SiAngular,
  Flask: SiFlask,
  AWS: FaAws,
  Azure: TbBrandAzure,
  Docker: SiDocker,
  Git: SiGit,
  "Microsoft SQL Server": DiMsqlServer,
  PostgreSQL: SiPostgresql,
  neo4j: SiNeo4J,
};

const categoryColorMap: Record<string, string> = {
  Languages: "text-[var(--purple)]",
  "Frameworks & Tools": "text-[var(--aqua)]",
  "Database Management": "text-[var(--orange)]",
};

export function SkillsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {skillGroups.map((group) => (
        <Card key={group.label} className="h-full">
          <h3 className="m-0 font-['Space_Grotesk','IBM_Plex_Sans',sans-serif] text-lg">
            {group.label}
          </h3>
          <ul className="mb-0 mt-4 flex list-none flex-wrap gap-3 p-0">
            {group.values.map((value) => {
              const Icon = techIconMap[value];
              const categoryColor =
                categoryColorMap[group.label] ?? "text-[var(--fg-dim)]";

              return (
                <li key={value} aria-label={value} title={value}>
                  {Icon ? (
                    <Icon
                      className={`h-6 w-6 md:h-7 md:w-7 ${categoryColor}`}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Card>
      ))}
    </div>
  );
}
