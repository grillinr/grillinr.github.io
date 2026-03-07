export type LinkItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  label: string;
  values: string[];
};

export type Experience = {
  company: string;
  summary: string;
};

export const profile = {
  name: "Nathan Grilliot",
  title: "Software Engineer & Computer Science at the University of Cincinnati",
  shortBio:
    "Computer Science student at the University of Cincinnati building practical tools across web, data, and systems.",
  longBio:
    "I enjoy building software that makes information easier to understand and use. My focus ranges from product-shaped web applications to data-heavy backend systems and developer tooling.",
};

export const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/grillinr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nathan-grilliot" },
  { label: "Email", href: "mailto:me@nathangrilliot.com" },
  { label: "Resume", href: "" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    values: [
      "Go",
      "TypeScript",
      "Rust",
      "C#",
      "SQL",
      "Python",
      "C++",
      "HTML",
      "CSS",
      "R",
    ],
  },
  {
    label: "Frameworks & Tools",
    values: [
      "React",
      "Angular",
      "Flask",
      "AWS",
      "Azure",
      "Docker",
      "Power BI",
      "Git",
    ],
  },
  {
    label: "Database Management",
    values: ["SQL", "Microsoft SQL Server", "PostgreSQL", "neo4j"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Medpace",
    summary:
      "Maintain complex web applications to manage quotes, proposals, and costs for internal business teams. Develop a design system used across the organization to improve user experience.",
  },
  {
    company: "ElectraMet",
    summary:
      "Built an internal product configuration tool, deploying updates with Docker and AWS EC2, and analyzing customer data with Pandas and SciKit Learn.",
  },
];

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Posts", to: "/posts" },
];
