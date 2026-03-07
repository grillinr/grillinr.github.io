import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { navigation, profile } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-nav">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="font-['Space_Grotesk','IBM_Plex_Sans',sans-serif] text-lg font-semibold">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm text-[var(--fg-dim)] transition-colors hover:text-[var(--fg-main)]',
                  isActive && 'bg-[#fabd2f1f] text-[var(--yellow)]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </div>

      {isOpen && (
        <nav className="container flex flex-col gap-1 pb-4 md:hidden">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm text-[var(--fg-dim)] transition-colors hover:text-[var(--fg-main)]',
                  isActive && 'bg-[#fabd2f1f] text-[var(--yellow)]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
