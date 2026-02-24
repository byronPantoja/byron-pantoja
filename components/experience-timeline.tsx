'use client'

import { Badge } from '@/components/ui/badge'

interface TimelineItemProps {
  title: string
  company: string
  period: string
  description: string
  highlights?: string[]
  skills?: string[]
}

export function ExperienceTimeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="space-y-12">
      {items.map((item, index) => (
        <div key={index} className="relative pl-0 md:pl-8">
          {/* Timeline dot */}
          <div className="absolute left-0 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>

          {/* Timeline line */}
          {index !== items.length - 1 && (
            <div className="absolute left-2 top-8 w-0.5 h-24 bg-border hidden md:block"></div>
          )}

          {/* Content */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <span className="text-sm text-muted-foreground font-mono">
                {item.period}
              </span>
            </div>

            <p className="text-secondary-foreground font-medium mb-3">
              {item.company}
            </p>

            <p className="text-foreground leading-relaxed mb-4">
              {item.description}
            </p>

            {item.highlights && item.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 mb-4 text-foreground text-sm">
                {item.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}

            {item.skills && item.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
