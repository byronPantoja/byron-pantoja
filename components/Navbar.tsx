'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'WORK', href: '/#work' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'DISPATCH', href: '/dispatch' },
  { label: 'CONTACT', href: '/#contact' },
]

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > 100 && currentY > lastScrollY)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="backdrop-blur-md bg-[#0C0C0C]/80 px-6 md:px-12 py-5 flex justify-between items-center">
        {/* Name */}
        <a
          href="/"
          className="font-narrator text-[#F5F5F0] text-sm md:text-base font-medium tracking-[0.05em]"
        >
          Byron Pantoja
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-engineer text-[0.7rem] tracking-[0.15em] text-[#F5F5F0] hover:text-[#C4A882] transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1px] bg-[#F5F5F0] transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1px] bg-[#F5F5F0] transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1px] bg-[#F5F5F0] transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-md px-6 pb-8 pt-4 border-t border-[rgba(245,245,240,0.08)]">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="font-engineer text-xs tracking-[0.15em] text-[#F5F5F0] hover:text-[#C4A882] transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
