import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { ProjectCard } from '@/components/project-card'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { SkillsGrid } from '@/components/skills-grid'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Mail, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Coffee For Peace',
    description: 'Directed operations, culture, and strategy for a social enterprise dedicated to coffee and social impact. Built brand, managed teams, and scaled impact across multiple initiatives.',
    skills: ['Operations', 'Brand Strategy', 'Team Leadership', 'Social Impact'],
    year: '2010 - Present',
    highlight: true,
  },
  {
    title: 'Kapeyapaan Platform',
    description: 'Web platform for a social enterprise. Designed and developed user-facing features focused on accessibility and impact measurement.',
    skills: ['React', 'Web Design', 'UX/UI', 'Social Impact'],
    year: '2022',
  },

  {
    title: 'Dalaga Beauty',
    description: 'E-commerce site and brand identity for a beauty brand. Focused on clean design, product storytelling, and conversion optimization.',
    skills: ['E-commerce', 'Brand Design', 'Web Development', 'Product Strategy'],
    year: '2023',
  },
  {
    title: 'Notes Flower Shop',
    description: 'Web presence and visual identity for a local flower shop. Emphasized craft, seasonality, and community connection.',
    skills: ['Web Design', 'Visual Identity', 'Local Commerce', 'Photography'],
    year: '2022',
  },
  {
    title: 'Brand Strategy Consulting',
    description: 'Ongoing consulting work with social enterprises and purpose-driven brands on strategy, positioning, and visual identity.',
    skills: ['Consulting', 'Brand Strategy', 'Positioning', 'Creative Direction'],
    year: '2020 - Present',
  },
]

const experienceItems = [
  {
    title: 'Director of Operations & Culture',
    company: 'Coffee For Peace',
    period: '2010 - Present',
    description: 'Built and scaled social enterprise from concept to thriving organization. Directed operations, shaped company culture, managed teams, and drove strategic initiatives.',
    highlights: [
      'Grew organization from startup to 50+ employees',
      'Led brand strategy and visual identity development',
      'Managed cross-functional teams across operations, marketing, and social impact',
      'Scaled social enterprise model to multiple locations',
    ],
    skills: ['Leadership', 'Operations', 'Strategy', 'Brand Building', 'Team Management'],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Independent',
    period: '2020 - Present',
    description: 'Designed and developed web experiences for social enterprises, local businesses, and purpose-driven brands. Focus on intentional design and accessible technology.',
    highlights: [
      'Built 15+ custom web projects for mission-driven clients',
      'Specialize in responsive design and user experience',
      'Collaborated with brands on digital strategy',
      'Mentored junior developers on best practices',
    ],
    skills: ['React', 'Next.js', 'Web Design', 'UX/UI', 'JavaScript', 'CSS'],
  },
  {
    title: 'Brand Strategist',
    company: 'Various Social Enterprises',
    period: '2015 - Present',
    description: 'Provided strategic brand consulting to social enterprises and nonprofits. Helped define positioning, visual identity, and marketing strategy.',
    highlights: [
      'Developed brand strategies for 10+ organizations',
      'Created visual identity systems and design guidelines',
      'Guided brand positioning and messaging frameworks',
      'Designed marketing campaigns and digital presence',
    ],
    skills: ['Brand Strategy', 'Positioning', 'Visual Design', 'Marketing', 'Communication'],
  },
]

const skillCategories = [
  {
    category: 'Web Development',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    highlight: true,
  },
  {
    category: 'Design',
    skills: ['UI/UX', 'Visual Identity', 'Brand Strategy', 'Responsive Design', 'Accessibility', 'Design Systems'],
  },
  {
    category: 'Operations',
    skills: ['Project Management', 'Team Leadership', 'Strategic Planning', 'Process Optimization', 'Budget Management'],
  },
  {
    category: 'Brand & Creative',
    skills: ['Brand Strategy', 'Creative Direction', 'Copywriting', 'Campaign Design', 'Marketing Strategy'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Figma', 'Git', 'Vercel', 'Firebase', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Collaboration', 'Strategic Thinking', 'Mentorship'],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Work Section */}
        <section id="work" className="py-20 md:py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Recent Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A selection of projects showcasing strategy, design, and development across various industries and impact areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                14+ years building, leading, and creating across operations, brand strategy, and web development.
              </p>
            </div>

            <ExperienceTimeline items={experienceItems} />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Skills & Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A diverse skill set spanning technology, design, operations, and creative strategy.
              </p>
            </div>

            <SkillsGrid categories={skillCategories} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
                  About Byron
                </h2>

                <div className="space-y-6 text-lg text-foreground leading-relaxed">
                  <p>
                    I'm a web developer and brand strategist with over 14 years of experience building intentional digital experiences and scaling social enterprises. My background is rooted in the coffee industry, where I directed operations, shaped culture, and built brand strategy for Coffee For Peace.
                  </p>

                  <p>
                    Throughout my career, I've worked across disciplines—from leading teams and managing complex operations to designing brand identities and developing web platforms. I believe in intentional design, authentic storytelling, and technology that serves a purpose beyond commerce.
                  </p>

                  <p>
                    When I'm not coding or strategizing, I'm usually exploring the intersection of design, culture, and social impact. I'm passionate about mentoring emerging talent and helping mission-driven organizations tell their stories effectively.
                  </p>

                  <p className="text-muted-foreground italic">
                    "Craft intentional experiences. No polish required."
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-card border border-border p-6 rounded">
                  <h4 className="font-bold mb-4 text-foreground">Quick Facts</h4>
                  <ul className="space-y-3 text-sm text-foreground">
                    <li className="flex gap-3">
                      <span className="text-accent">▸</span>
                      <span>Based in Davao City, PH</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">▸</span>
                      <span>14+ years in social enterprise</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">▸</span>
                      <span>Web developer since 2020</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">▸</span>
                      <span>Coffee enthusiast & explorer</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">▸</span>
                      <span>Mentors emerging developers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Let's Work Together
              </h2>

              <p className="text-lg text-muted-foreground mb-12">
                I'm always interested in projects that align with my values. Whether you need a website, brand strategy consultation, or someone to help scale your social enterprise—let's talk.
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
                  <a href="https://linkedin.com/in/byronpantoja" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={18} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>

              <Separator className="my-12" />

              <p className="text-sm text-muted-foreground">
                Available for freelance projects, consulting, and mentorship opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
