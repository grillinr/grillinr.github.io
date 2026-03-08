import { Menu } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { fadeUpItem, motionDuration, motionEase, staggerContainer } from '@/lib/motion'
import { navigation, profile } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const reduceMotion = useReducedMotion()

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
                  'nav-link rounded-md px-3 py-2 text-sm text-[var(--fg-dim)] transition-colors hover:bg-[var(--nav-link-hover)] hover:text-[var(--fg-main)]',
                  isActive && 'bg-[var(--nav-link-active)] text-[var(--yellow)]',
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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            className="absolute inset-x-0 top-full overflow-hidden border-b border-[var(--nav-border)] bg-[var(--nav-bg)] [backdrop-filter:blur(10px)] md:hidden"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? {} : { opacity: 1, height: 'auto' }}
            exit={reduceMotion ? {} : { opacity: 0, height: 0 }}
            transition={{ duration: motionDuration.slow, ease: motionEase }}
          >
            <div className="container pb-4">
              <motion.div className="flex flex-col gap-1" variants={staggerContainer} initial="hidden" animate="show">
                {navigation.map((item) => (
                  <motion.div key={item.to} variants={fadeUpItem}>
                    <NavLink
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'nav-link rounded-md px-3 py-2 text-sm text-[var(--fg-dim)] transition-colors hover:bg-[var(--nav-link-hover)] hover:text-[var(--fg-main)]',
                          isActive && 'bg-[var(--nav-link-active)] text-[var(--yellow)]',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
