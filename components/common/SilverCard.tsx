'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface SilverCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SilverCard({ children, className = '', delay = 0 }: SilverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('silver-border', 'silver-glow-animate')
            }, delay)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [delay])

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  )
}
