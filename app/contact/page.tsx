import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:hello@byronpantoja.com',
    icon: Mail,
    description: 'Direct email for inquiries',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/byronpantoja',
    icon: Linkedin,
    external: true,
    description: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/byronpantoja',
    icon: Github,
    external: true,
    description: 'View code projects',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/byronpantoja',
    icon: Twitter,
    external: true,
    description: 'Follow for thoughts',
  },
]

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with React, Next.js, and modern technologies. From concept to deployment.',
    rate: 'Project-based',
  },
  {
    title: 'Brand Strategy',
    description: 'Strategic brand consulting including positioning, visual identity, and messaging frameworks.',
    rate: 'Consulting rate',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design including wireframing, prototyping, and design systems implementation.',
    rate: 'Project-based',
  },
  {
    title: 'Operations Consulting',
    description: 'Strategic planning, process optimization, and organizational development for social enterprises.',
    rate: 'Consulting rate',
  },
  {
    title: 'Mentorship',
    description: 'One-on-one mentorship for developers and designers looking to advance their skills.',
    rate: 'Hourly rate',
  },
  {
    title: 'Workshop & Speaking',
    description: 'Workshops on web development, brand strategy, and building mission-driven organizations.',
    rate: 'Custom rate',
  },
]

const responseTime = [
  { label: 'Email response', time: '24-48 hours' },
  { label: 'Project proposals', time: '3-5 business days' },
  { label: 'Consultation meetings', time: 'Within 1 week' },
  { label: 'Urgent matters', time: 'Contact for availability' },
]

export const metadata = {
  title: 'Contact | Byron Pantoja',
  description: 'Get in touch with Byron. Available for freelance projects, consulting, mentorship, and speaking engagements.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <p className="text-accent font-mono text-sm tracking-wide uppercase mb-6">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
              Let's talk about your project.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              I'm interested in working with teams and organizations building meaningful things. Whether you need web development, brand strategy, or mentorship—I'd love to hear about your vision.
            </p>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">
                  Contact Methods
                </h2>

                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 p-4 rounded border border-border hover:border-accent/50 transition-colors group"
                      >
                        <Icon className="text-accent mt-1 flex-shrink-0" size={20} />
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                        {link.external && (
                          <ExternalLink className="text-muted-foreground flex-shrink-0" size={16} />
                        )}
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Quick Facts */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">
                  Response Times
                </h2>

                <Card className="p-8 border-border">
                  <div className="space-y-6">
                    {responseTime.map((item, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide mb-2">
                          {item.label}
                        </p>
                        <p className="text-lg font-medium text-foreground">
                          {item.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded">
                  <p className="text-sm text-foreground">
                    <span className="font-bold">Note:</span> For urgent matters, please mention urgency in your initial contact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Services & Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Card key={idx} className="p-6 border-border hover:border-accent/50 transition-colors">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-accent font-mono">
                    {service.rate}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded">
              <h3 className="font-bold text-lg text-foreground mb-3">
                Rates & Availability
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                My rates are flexible based on project scope, timeline, and impact potential. I offer special rates for nonprofits and social enterprises. I typically work on project-based engagements but am open to retainer arrangements for ongoing work.
              </p>
              <p className="text-foreground leading-relaxed">
                Current availability: <span className="text-accent font-bold">Limited—accepting select projects</span>. For rush projects or specific timelines, please inquire directly.
              </p>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              How We Can Collaborate
            </h2>

            <div className="space-y-8">
              {[
                {
                  phase: 'Discovery',
                  description: 'Initial consultation to understand your goals, challenges, and vision. This helps me determine if we\'re a good fit and how I can best help.',
                },
                {
                  phase: 'Strategy',
                  description: 'Develop a comprehensive plan including timeline, deliverables, budget, and success metrics. I\'ll provide a detailed proposal.',
                },
                {
                  phase: 'Execution',
                  description: 'Work collaboratively on your project with regular check-ins, transparent communication, and iterative feedback.',
                },
                {
                  phase: 'Launch & Support',
                  description: 'Deliver final work, ensure smooth launch, and provide post-launch support and optimization.',
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold font-mono">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.phase}
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready to Start?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Send me an email with details about your project or what you're interested in discussing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="mailto:hello@byronpantoja.com">
                  <Mail className="mr-2" size={18} />
                  Send an Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <a href="https://calendly.com/byronpantoja" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
