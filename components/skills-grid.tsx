'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface SkillCategory {
  category: string
  skills: string[]
  highlight?: boolean
}

export function SkillsGrid({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <Card
          key={cat.category}
          className={`p-6 border-border hover:border-accent/50 transition-all ${
            cat.highlight ? 'bg-accent/5 border-accent/30' : ''
          }`}
        >
          <h3 className="text-lg font-bold text-foreground mb-4">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <Badge
                key={skill}
                variant={cat.highlight ? 'default' : 'secondary'}
                className={cat.highlight ? 'bg-accent text-accent-foreground' : ''}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
