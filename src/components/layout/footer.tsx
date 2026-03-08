import { links } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const iconByLabel = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Email: <FaEnvelope />,
    Resume: <FaFilePdf />,
  };

  return (
    <footer className="relative z-10 border-t border-[var(--nav-border)] py-8">
      <div className="container flex flex-col items-start justify-between gap-3 text-sm text-[var(--fg-dim)] md:flex-row md:items-center">
        <p className="m-0">
          Built with React, TypeScript, shadcn/ui, and MDX. Check it out{" "}
          <a
            href="https://github.com/grillinr/grillinr.github.io"
            className="link-primary"
          >
            here
          </a>
          !
        </p>
        <div className="flex flex-wrap items-center gap-4 text-lg">
          {links.map((linkItem) =>
            linkItem.href.startsWith("/") ? (
              <Link
                key={linkItem.label}
                to={linkItem.href}
                className="link-accent"
                aria-label={linkItem.label}
                title={linkItem.label}
              >
                {iconByLabel[linkItem.label as keyof typeof iconByLabel] ??
                  linkItem.label}
              </Link>
            ) : (
              <a
                key={linkItem.label}
                href={linkItem.href}
                className="link-accent"
                target="_blank"
                rel="noreferrer"
                aria-label={linkItem.label}
                title={linkItem.label}
              >
                {iconByLabel[linkItem.label as keyof typeof iconByLabel] ??
                  linkItem.label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
