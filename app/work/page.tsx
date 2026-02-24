import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Coffee For Peace - Full Ecosystem',
    description: 'Complete operational, brand, and digital strategy for a social enterprise. Directed everything from company culture to digital presence, managing teams across operations, marketing, and community impact.',
    skills: ['Operations', 'Brand Strategy', 'Team Leadership', 'Community Building', 'Digital Strategy'],
    year: '2010 - Present',
    highlight: true,
  },
  {
    title: 'Kapeyapaan Platform',
    description: 'Web platform designed and developed for a social enterprise focused on community development. Built responsive interfaces for impact measurement, user engagement, and data visualization.',
    skills: ['React', 'Next.js', 'Web Design', 'UX/UI', 'Performance Optimization'],
    year: '2022',
  },

  {
    title: 'Dalaga Beauty E-commerce',
    description: 'Full-stack e-commerce solution including brand identity, product photography direction, and web platform. Focus on storytelling, clean design, and seamless user experience.',
    skills: ['E-commerce', 'Brand Design', 'Product Strategy', 'Web Development', 'Photography Direction'],
    year: '2023',
  },
  {
    title: 'Notes Flower Shop',
    description: 'Web presence and visual identity for a local flower shop. Emphasized craft, seasonality, and community connection through thoughtful design and photography.',
    skills: ['Web Design', 'Visual Identity', 'Local Commerce', 'Photography', 'Content Strategy'],
    year: '2022',
  },
  {
    title: 'Brand Consulting & Strategy',
    description: 'Ongoing consulting with social enterprises and purpose-driven brands. Provided strategic guidance on positioning, visual identity, brand architecture, and marketing strategy.',
    skills: ['Consulting', 'Brand Strategy', 'Positioning', 'Creative Direction', 'Market Research'],
    year: '2020 - Present',
  },
]

const caseStudies = [
  {
    company: 'Coffee For Peace',
    challenge: 'Scale a social enterprise from startup to a thriving 50+ person organization while maintaining culture and mission alignment.',
    solution: 'Built comprehensive operations framework, established clear leadership structure, developed brand strategy, and created systems for knowledge sharing and culture preservation.',
    impact: 'Grew revenue 3x, maintained strong team retention, expanded to multiple locations, built recognizable brand.',
    skills: ['Operations', 'Leadership', 'Strategy', 'Brand Building'],
  },
  {
    company: 'Dalaga Beauty',
    challenge: 'Launch e-commerce platform for beauty brand with minimal budget but high design expectations.',
    solution: 'Developed custom web platform using modern tech stack, created cohesive visual identity, directed product photography, and optimized for conversions.',
    impact: '40% conversion rate improvement, strong brand recognition in market, sustainable revenue model.',
    skills: ['E-commerce', 'Design', 'Development', 'Photography'],
  },
  {
    company: 'Multiple NGOs',
    challenge: 'Help mission-driven organizations communicate their impact and values effectively to stakeholders.',
    solution: 'Conducted research, developed positioning strategies, created visual identities, and built digital presence across platforms.',
    impact: 'Increased donor engagement, improved brand recognition, clearer stakeholder communication.',
    skills: ['Brand Strategy', 'Research', 'Design', 'Communication'],
  },
]

export const metadata = {
  title: 'Work | Byron Pantoja',
  description: 'Portfolio of Byron\'s work including social enterprises, web development, brand strategy, and creative projects.',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <p className="text-accent font-mono text-sm tracking-wide uppercase mb-6">
              Work & Projects
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
              Projects that demonstrate strategy, design, and impact.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A selection of work across web development, brand strategy, operations, and social enterprise. Each project reflects intentional design and a commitment to meaningful impact.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Case Studies
            </h2>

            <div className="space-y-8">
              {caseStudies.map((study, idx) => (
                <Card key={idx} className="p-8 border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {study.company}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                            Challenge
                          </h4>
                          <p className="text-foreground leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                            Solution
                          </h4>
                          <p className="text-foreground leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                          Impact
                        </h4>
                        <p className="text-foreground leading-relaxed mb-6">
                          {study.impact}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                          Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Services Offered
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Web Development',
                  description: 'Custom web applications built with modern tech stacks. React, Next.js, and full-stack solutions.',
                },
                {
                  title: 'Brand Strategy',
                  description: 'Positioning, visual identity, messaging frameworks, and brand architecture for mission-driven organizations.',
                },
                {
                  title: 'UI/UX Design',
                  description: 'User-centered design, responsive interfaces, design systems, and accessibility-first approach.',
                },
                {
                  title: 'Operations & Leadership',
                  description: 'Strategic planning, team leadership, process optimization, and organizational development.',
                },
                {
                  title: 'Digital Strategy',
                  description: 'Marketing strategy, content strategy, digital transformation, and growth planning.',
                },
                {
                  title: 'Consulting & Mentorship',
                  description: 'Strategic consulting for social enterprises and mentorship for emerging developers.',
                },
              ].map((service, idx) => (
                <Card key={idx} className="p-6 border-border hover:border-accent/50 transition-colors">
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in projects that align with my values. Let's talk about how I can help your organization.
            </p>
            <a
              href="mailto:hello@byronpantoja.com"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-medium rounded hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
