'use client'

import Link from 'next/link'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@byronpantoja.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', external: true },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', external: true },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', external: true },
  ]

  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-lg">Byron Pantoja</h3>
            <p className="text-muted-foreground text-sm">
              Web developer & brand strategist crafting intentional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold">Navigate</h4>
            <div className="flex flex-col gap-2">
              <a href="/work" className="text-sm text-foreground hover:text-accent transition-colors">
                Work
              </a>
              <a href="/skills" className="text-sm text-foreground hover:text-accent transition-colors">
                Skills
              </a>
              <a href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="/contact" className="text-sm text-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-foreground hover:text-accent transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Byron Pantoja. All rights reserved.</p>
          <p className="text-xs">Crafted with intention. No polish required.</p>
        </div>
      </div>
    </footer>
  )
}
