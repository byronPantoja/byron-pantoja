import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const values = [
  {
    title: 'Intentional Design',
    description: 'Every pixel, every word, every decision should serve a purpose. No unnecessary polish—just authentic, meaningful design.',
  },
  {
    title: 'Social Impact',
    description: 'Technology should serve people and purpose. I\'m committed to projects that create positive change.',
  },
  {
    title: 'Craftsmanship',
    description: 'Attention to detail matters. Whether code or design, I approach every project with care and rigor.',
  },
  {
    title: 'Transparency',
    description: 'Clear communication, honest feedback, and transparent processes build better outcomes.',
  },
  {
    title: 'Continuous Learning',
    description: 'The tech and design landscapes evolve constantly. I stay curious and committed to growth.',
  },
  {
    title: 'Community',
    description: 'Strong communities matter. I believe in mentoring, collaboration, and lifting others up.',
  },
]

const timeline = [
  {
    year: '2010',
    title: 'Coffee For Peace Founded',
    description: 'Started Coffee For Peace with a vision of social enterprise and impact. Began directing operations and building culture from day one.',
  },
  {
    year: '2012-2015',
    title: 'Scaled to Multi-location Operation',
    description: 'Grew Coffee For Peace across multiple locations. Developed systems, hired team, and established brand identity.',
  },
  {
    year: '2015',
    title: 'Brand Strategy Work Begins',
    description: 'Started consulting with other social enterprises on brand strategy and positioning.',
  },
  {
    year: '2018',
    title: 'Operations Peak',
    description: 'Coffee For Peace reached 50+ team members. Established comprehensive operations frameworks and culture practices.',
  },
  {
    year: '2020',
    title: 'Transition to Web Development',
    description: 'Began formal education in web development. Started building custom web solutions for mission-driven organizations.',
  },
  {
    year: '2022-Present',
    title: 'Full-Stack Practice',
    description: 'Balancing ongoing leadership at Coffee For Peace with freelance web development and brand consulting.',
  },
]

const influences = [
  'David Bowie - Constant reinvention and artistic integrity',
  'Paul Rand - Design philosophy and clarity',
  'Tarkovsky - Slow cinema and intentional pacing',
  'Fight Club - Anti-establishment aesthetics',
  'Spider-Verse - Experimental design and visual language',
  'Twitter\'s early design - Constraint-driven innovation',
]

export const metadata = {
  title: 'About | Byron Pantoja',
  description: 'Byron\'s story: 14 years in social enterprise, brand strategy, and web development. Learn about his values, journey, and approach.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <p className="text-accent font-mono text-sm tracking-wide uppercase mb-6">
              About Byron
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
              Building intentional experiences across tech, brand, and operations.
            </h1>
          </div>
        </section>

        {/* Main Story */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8 text-lg leading-relaxed">
                <p className="text-foreground">
                  I'm a web developer and brand strategist with over 14 years of experience building meaningful digital experiences. My journey started in the coffee industry, where I directed operations and shaped culture for Coffee For Peace—a social enterprise dedicated to positive impact.
                </p>

                <p className="text-foreground">
                  Those years taught me the value of intentional design, authentic leadership, and the power of community. I learned that the best organizations are built on clear values, transparent communication, and a commitment to something bigger than profit. Whether managing teams, developing brand strategy, or writing code—the principles remain the same.
                </p>

                <p className="text-foreground">
                  In 2020, I formally transitioned into web development. I spent years consulting on brand strategy and managing operations, but I wanted to understand the full stack of building digital products. Now I combine 14 years of business acumen with technical skills to create web experiences that matter.
                </p>

                <p className="text-foreground">
                  My work spans social enterprises, local businesses, and purpose-driven brands. I specialize in helping organizations translate their values into digital presence and product strategy. Every project reflects my belief that technology should serve people, not the other way around.
                </p>

                <p className="text-foreground italic text-muted-foreground">
                  "Design with purpose. Build with intention. Lead with empathy."
                </p>
              </div>

              <div>
                <Card className="p-6 border-border sticky top-20">
                  <h3 className="font-bold text-foreground mb-4">Quick Profile</h3>
                  <div className="space-y-4 text-sm text-foreground">
                    <div>
                      <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-1">Location</p>
                      <p>Davao City, PH</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-1">Experience</p>
                      <p>14+ years in social enterprise</p>
                      <p className="text-muted-foreground text-xs mt-1">4+ years web development</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-1">Availability</p>
                      <p>Freelance projects, consulting, mentorship</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-1">Interests</p>
                      <p className="text-xs leading-relaxed">Coffee, design, social impact, mentorship, philosophy, indie cinema</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <Card key={idx} className="p-6 border-border hover:border-accent/50 transition-colors">
                  <h3 className="font-bold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              My Journey
            </h2>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <p className="text-accent font-bold text-2xl font-mono">
                      {item.year}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Influences */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Influences & Inspiration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {influences.map((influence, idx) => (
                <Card key={idx} className="p-4 border-border">
                  <p className="text-foreground leading-relaxed">
                    <span className="text-accent font-bold">▸ </span>
                    {influence}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Philosophy
            </h2>

            <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
              <Card className="p-8 border-border bg-card/50">
                <p className="text-foreground mb-4">
                  <strong>On Design:</strong> Good design is invisible. It solves problems, serves users, and gets out of the way. Polish for polish's sake is noise. I believe in intentional, asymmetric layouts with generous whitespace. High contrast. Authentic materials. Design that breathes.
                </p>

                <p className="text-foreground mb-4">
                  <strong>On Technology:</strong> Technology is a tool, not the goal. The most important question isn't "what can I build?" but "what should I build?" I'm interested in tech that serves people and creates positive impact.
                </p>

                <p className="text-foreground">
                  <strong>On Business:</strong> Organizations are made of people. Culture, values, and transparent communication matter more than any metric. Profit matters, but it shouldn't be the north star. Purpose-driven organizations build better products and retain better talent.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Let's Create Something Meaningful
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in projects that align with my values. If you're building something intentional, I'd love to talk.
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
