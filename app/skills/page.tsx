import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SkillsGrid } from '@/components/skills-grid'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    category: 'Web Development',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Node.js', 'Express'],
    highlight: true,
  },
  {
    category: 'Frontend Design',
    skills: ['UI/UX Design', 'Responsive Design', 'Accessibility (WCAG)', 'Design Systems', 'Figma', 'Prototyping'],
  },
  {
    category: 'Backend & Databases',
    skills: ['PostgreSQL', 'Firebase', 'Supabase', 'REST APIs', 'GraphQL', 'Authentication'],
  },
  {
    category: 'Operations & Leadership',
    skills: ['Project Management', 'Team Leadership', 'Strategic Planning', 'Process Optimization', 'Budget Management', 'Organizational Development'],
  },
  {
    category: 'Brand & Creative',
    skills: ['Brand Strategy', 'Visual Identity', 'Creative Direction', 'Copywriting', 'Campaign Design', 'Messaging', 'Art Direction'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git/GitHub', 'Vercel', 'Figma', 'Adobe Creative Suite', 'Notion', 'Airtable', 'Analytics Tools'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Collaboration', 'Strategic Thinking', 'Mentorship', 'Adaptability', 'Critical Thinking'],
  },
  {
    category: 'Consulting & Strategy',
    skills: ['Market Research', 'Competitive Analysis', 'Stakeholder Management', 'Change Management', 'Growth Strategy', 'Impact Measurement'],
  },
]

const experienceItems = [
  {
    title: 'Managing Director, Kapeyapaan Coffee Roasting Service & Digital Strategist, Coffee For Peace',
    company: 'Coffee For Peace',
    period: '2010 - Present | 14 years',
    description: 'Founded and scaled social enterprise from concept to thriving 50+ person organization. Built company culture, managed operations, directed brand strategy, and led cross-functional teams.',
    highlights: [
      'Managed end-to-end roastery operations — roasting, packaging, label design, and client relationships for both B2B wholesale and retail café sales',
      'Organized cupping sessions, roasting workshops, and farm-to-cup presentations hosted at cafés and partner organizations across Davao',
      'Designed the brand identity system — visual guidelines, packaging, merchandise, and digital content (now transitioning this to the team)',
      'Run a 3-person roastery operation and consult with CFP managers on technology and digital strategy',
      'Built operational systems across coffee processing, e-commerce, shipping logistics, and café menu engineering',
      'Earned dual Q Arabica and Q Robusta certifications (first in Mindanao) and served as National Judge for the Philippine Coffee Quality Competition',
    ],
    skills: ['Roastery Operations', 'Brand & Visual Identity', 'Web Development', 'Community Building', 'Technical Training', 'Process Design'],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Independent Contractor',
    period: '2020 - Present | 4 years',
    description: 'Designed and developed 15+ web projects for social enterprises, local businesses, and purpose-driven brands. Specialized in responsive design, user experience, and accessible technology.',
    highlights: [
      'Built websites and e-commerce platforms using NextJS, React, WordPress, Shopify, and AI tools',
      'Evaluated platform options for each client based on budget, skill level, and business needs',
      'Designed brand identities, logos, and visual systems alongside web builds',
      'Authored technical documentation for project handoffs',
      'Worked with clients across Philippines and Canada — beauty studios, flower shops, real estate, and social enterprise',
      'Self-taught developer who learns by shipping real projects for real businesses',
    ],
    skills: ['React', 'Next.js', 'Web Design', 'UX/UI', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'AI'],
  },
  {
    title: 'Brand Strategist & Consultant',
    company: 'Various Organizations',
    period: '2015 - Present | 8+ years',
    description: 'Provided strategic brand consulting to 10+ social enterprises, nonprofits, and purpose-driven organizations. Developed positioning, visual identity, and marketing strategy.',
    highlights: [
      'Developed comprehensive brand strategies from positioning to identity',
      'Created visual identity systems and design guidelines',
      'Guided brand positioning and messaging frameworks',
      'Designed marketing campaigns across digital and print',
      'Conducted market research and competitive analysis',
      'Trained internal teams on brand implementation',
    ],
    skills: ['Brand Strategy', 'Positioning', 'Visual Design', 'Marketing', 'Communication', 'Research'],
  },
]

const competencies = [
  {
    title: 'Strategic Thinking',
    description: 'Ability to see the big picture, identify opportunities, and develop long-term plans that align with organizational goals.',
  },
  {
    title: 'Technical Proficiency',
    description: 'Strong foundation in modern web development with continuous learning and adaptation to emerging technologies.',
  },
  {
    title: 'Creative Problem Solving',
    description: 'Approach challenges from multiple angles, develop innovative solutions, and implement with attention to detail.',
  },
  {
    title: 'Leadership & Mentorship',
    description: 'Experience leading teams, developing talent, and creating environments where others can succeed.',
  },
  {
    title: 'Stakeholder Management',
    description: 'Ability to communicate effectively with diverse stakeholders, manage expectations, and build trust.',
  },
  {
    title: 'Impact Orientation',
    description: 'Driven by measurable outcomes and social impact, ensuring technology and strategy serve a purpose.',
  },
]

export const metadata = {
  title: 'Skills & Experience | Byron Pantoja',
  description: 'Byron\'s technical skills, experience, and expertise across web development, brand strategy, and operations.',
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <p className="text-accent font-mono text-sm tracking-wide uppercase mb-6">
              Skills & Experience
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
              Technical expertise across development, design, and operations.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              14+ years of experience building organizations, leading teams, and creating digital solutions. A diverse skill set spanning technology, design, operations, and creative strategy.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Core Competencies
            </h2>
            <SkillsGrid categories={skillCategories} />
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Professional Experience
            </h2>
            <ExperienceTimeline items={experienceItems} />
          </div>
        </section>

        {/* Key Competencies */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Key Competencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competencies.map((comp, idx) => (
                <Card key={idx} className="p-6 border-border">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {comp.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {comp.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Learning */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
              Learning & Development
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-border">
                <h3 className="font-bold text-foreground mb-4">Current Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>Advanced React patterns and performance optimization</span>
                  </li>
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>Full-stack development with modern backend solutions</span>
                  </li>
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>AI/ML integration in web applications</span>
                  </li>
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>Accessibility and inclusive design practices</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="font-bold text-foreground mb-4">Continuous Learning</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>Regular professional development courses</span>
                  </li>
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>Active in developer communities and meetups</span>
                  </li>
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>Mentoring emerging developers</span>
                  </li>
                  <li className="flex gap-2 text-foreground">
                    <span className="text-accent">▸</span>
                    <span>Contributing to open source projects</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Available For
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Freelance Projects', 'Consulting', 'Mentorship', 'Full-time Opportunities', 'Advisory Roles', 'Speaking Engagements'].map((item) => (
                <Badge key={item} className="bg-accent text-accent-foreground px-4 py-2">
                  {item}
                </Badge>
              ))}
            </div>
            <p className="text-lg text-muted-foreground">
              Always interested in meaningful work that aligns with my values and creates positive impact.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
