import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Container } from './Container'
import logo from '../../assets/rastotel-logo.png'

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg ${isActive ? 'text-sky-700 bg-sky-50' : 'text-gray-700 hover:text-sky-700 hover:bg-sky-50'}`
      }
    >
      {children}
    </NavLink>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <span className="inline-flex items-center bg-brand-navy px-3 py-2">
              <img src={logo} alt="Rastotel" className="h-8 w-auto" />
            </span>
          </Link>
          <nav className="hidden md:flex gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/solutions">Solutions</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/csr">CSR</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" aria-label="Menu" onClick={() => setOpen(v => !v)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3 flex flex-col gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/solutions">Solutions</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/csr">CSR</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
        )}
      </Container>
    </div>
  )
}
