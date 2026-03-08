import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'

export function SiteShell() {
  return (
    <div className="app-shell">
      <div className="grain-overlay" />
      <Navbar />
      <main className="container relative z-10 py-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
