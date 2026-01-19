'use client'

import { Menu, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: 'Graphic & Digital Design',
      description: 'Compelling visual systems that elevate brands and drive engagement across all platforms.',
    },
    {
      title: 'Video & Motion Production',
      description: 'Dynamic content that captures attention and communicates your message with impact.',
    },
    {
      title: 'Brand & Content Strategy',
      description: 'Strategic frameworks that align messaging with business goals for sustainable growth.',
    },
    {
      title: 'Copywriting',
      description: 'Persuasive, on-brand language that resonates with your audience and drives action.',
    },
    {
      title: 'Web Development',
      description: 'Scalable, performant digital experiences built on modern web technologies.',
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We immerse ourselves in your brand, market, and audience to uncover strategic insights.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We develop comprehensive frameworks that guide design and content decisions.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We craft cohesive creative systems that deliver clarity, consistency, and results.',
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0">
              <span className="text-xl md:text-2xl font-bold text-primary">DBP</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
              <a href="#process" className="text-sm hover:text-primary transition-colors">Process</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
              <button className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <a href="#services" className="block py-2 text-sm hover:text-primary">Services</a>
              <a href="#process" className="block py-2 text-sm hover:text-primary">Process</a>
              <a href="#contact" className="block py-2 text-sm hover:text-primary">Contact</a>
              <button className="w-full mt-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-muted text-muted-foreground text-xs font-semibold rounded-full">CREATIVE SYSTEMS</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            Design. Build. <span className="text-primary">Operate.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Partner with DBP to create scalable creative systems that drive clarity, consistency, and measurable growth across your digital platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3.5 border border-border text-foreground font-medium hover:bg-muted transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to your brand's unique needs and ambitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 border border-border hover:border-primary hover:bg-background transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured methodology that ensures every project delivers strategic value and creative excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-8">
                  <div className="text-6xl md:text-7xl font-bold text-primary opacity-10 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-4 w-8 h-0.5 bg-primary opacity-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg mb-8 opacity-90 text-balance">
            Let's explore how DBP can help you create a creative system that drives measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-primary-foreground text-primary font-medium hover:opacity-90 transition-opacity">
              Schedule a Call
            </button>
            <button className="px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-medium hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-xl font-bold text-primary">DBP</span>
              <p className="text-sm text-muted-foreground mt-2">
                Creative systems for clarity, consistency, and growth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 DBP Creative Systems. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
