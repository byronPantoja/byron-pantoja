'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  staggerChildren?: boolean
  staggerDelay?: number
}

export function ScrollReveal({
  children,
  className = '',
  staggerChildren = false,
  staggerDelay = 100,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      const el = ref.current
      if (!el) return
      el.classList.add('revealed')
      el.querySelectorAll('.image-reveal').forEach((child) =>
        child.classList.add('revealed')
      )
      if (staggerChildren) {
        const children = el.querySelectorAll('.scroll-reveal-child')
        children.forEach((child) => child.classList.add('revealed'))
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            entry.target
              .querySelectorAll('.image-reveal')
              .forEach((child) => child.classList.add('revealed'))

            if (staggerChildren) {
              const children = entry.target.querySelectorAll(
                '.scroll-reveal-child'
              )
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('revealed')
                }, index * staggerDelay)
              })
            }

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [staggerChildren, staggerDelay])

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  )
}
