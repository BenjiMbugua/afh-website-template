'use client'

import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealAs = 'div' | 'section' | 'article' | 'li' | 'aside'

interface RevealProps {
  as?: RevealAs
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  amount?: number
}

const components = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  aside: motion.aside,
}

export function Reveal({
  as = 'div',
  children,
  className,
  style,
  delay = 0,
  amount = 0.18,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const Component = components[as]

  if (shouldReduceMotion) {
    return <Component className={className} style={style}>{children}</Component>
  }

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  )
}
