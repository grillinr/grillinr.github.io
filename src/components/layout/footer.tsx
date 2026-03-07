import { links } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--nav-border)] py-8">
      <div className="container flex flex-col items-start justify-between gap-3 text-sm text-[var(--fg-dim)] md:flex-row md:items-center">
        <p className="m-0">Built with React, TypeScript, shadcn/ui, and MDX.</p>
        <div className="flex flex-wrap items-center gap-4">
          {links.map((linkItem) => (
            <a
              key={linkItem.label}
              href={linkItem.href}
              className="link-accent"
              target="_blank"
              rel="noreferrer"
            >
              {linkItem.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
