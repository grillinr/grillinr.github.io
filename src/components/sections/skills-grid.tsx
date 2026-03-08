import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaAws, FaRProject, FaLinux } from "react-icons/fa";
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
  SiArchlinux,
} from "react-icons/si";
import { TbBrandAzure, TbSql } from "react-icons/tb";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion/motion-primitives";
import { Card } from "@/components/ui/card";
import { motionSpring } from "@/lib/motion";
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
  Linux: FaLinux,
  Arch: SiArchlinux,
};

const categoryColorMap: Record<string, string> = {
  Languages: "text-[var(--purple)]",
  "Frameworks & tools": "text-[var(--aqua)]",
  "Database management": "text-[var(--orange)]",
};

export function SkillsGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionStagger className="grid gap-4 md:grid-cols-3">
      {skillGroups.map((group) => (
        <MotionStaggerItem key={group.label}>
          <Card className="skill-card relative z-0 h-full hover:z-30 focus-within:z-30">
            <h3 className="m-0 font-['Space_Grotesk','IBM_Plex_Sans',sans-serif] text-lg">
              {group.label}
            </h3>
            <ul className="mb-0 mt-4 flex list-none flex-wrap gap-3 p-0">
              {group.values.sort().map((value) => {
                const Icon = techIconMap[value];
                const categoryColor =
                  categoryColorMap[group.label] ?? "text-[var(--fg-dim)]";

                return (
                  <li
                    key={value}
                    aria-label={value}
                    className="skill-tooltip"
                    data-tooltip={value}
                  >
                    {Icon ? (
                      <motion.span
                        className="inline-flex"
                        whileHover={
                          reduceMotion
                            ? undefined
                            : { y: -5, scale: 1.08, rotate: -3 }
                        }
                        transition={motionSpring}
                      >
                        <Icon
                          className={`h-6 w-6 transition-colors duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:text-[var(--yellow)] md:h-7 md:w-7 ${categoryColor}`}
                        />
                      </motion.span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </Card>
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}
