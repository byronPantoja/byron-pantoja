'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl">
          {/* Preheading */}
          <p className="text-accent font-mono text-sm tracking-wide uppercase mb-6">
            Web Developer & Brand Strategist
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-pretty">
            Craft intentional digital experiences that resonate.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Over 14 years directing operations and culture at Coffee For Peace. Freelance web development, brand strategy, and creative direction for brands that matter.
          </p>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="/work">
                View Work
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <a href="/contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
