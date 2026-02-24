'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  skills: string[]
  year?: string
  href?: string
  highlight?: boolean
}

export function ProjectCard({
  title,
  description,
  skills,
  year,
  href,
  highlight = false,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {title}
          </h3>
          {year && (
            <p className="text-sm text-muted-foreground mt-1 font-mono">
              {year}
            </p>
          )}
        </div>
      </div>

      <p className="text-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant={highlight ? 'default' : 'secondary'}
            className={highlight ? 'bg-accent text-accent-foreground' : ''}
          >
            {skill}
          </Badge>
        ))}
      </div>

      {href && (
        <div className="mt-6 flex items-center gap-2 text-accent font-medium text-sm group">
          Learn more
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="block group"
      >
        <Card className={`p-6 border-border hover:border-accent/50 transition-all cursor-pointer ${
          highlight ? 'bg-card border-2' : ''
        }`}>
          {content}
        </Card>
      </a>
    )
  }

  return (
    <Card className={`p-6 border-border ${highlight ? 'bg-card border-2' : ''}`}>
      {content}
    </Card>
  )
}
