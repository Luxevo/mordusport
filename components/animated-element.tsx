'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3
}

export default function AnimatedElement({ children, className = '', delay }: AnimatedElementProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const delayClass = delay ? `scroll-fade-in-delay-${delay}` : ''

  return (
    <div
      ref={elementRef}
      className={`scroll-fade-in ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
