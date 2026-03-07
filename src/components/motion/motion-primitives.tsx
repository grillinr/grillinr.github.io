import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpItem, staggerContainer, viewportOnce } from '@/lib/motion'

type MotionProps = {
  children: ReactNode
  className?: string
}

export function MotionSection({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <section className={className}>{children}</section>
  }

  return (
    <motion.section
      className={className}
      variants={fadeUpItem}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.section>
  )
}

export function MotionStagger({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  )
}

export function MotionStaggerItem({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={fadeUpItem}>
      {children}
    </motion.div>
  )
}
