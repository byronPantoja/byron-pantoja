import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { WorkSection } from '@/components/WorkSection'
import { AboutSection } from '@/components/AboutSection'
import { ApproachSection } from '@/components/ApproachSection'
import { ContactFooter } from '@/components/ContactFooter'

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ApproachSection />
        <ContactFooter />
      </main>
    </div>
  )
}
