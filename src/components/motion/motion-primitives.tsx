import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpItem, staggerContainer } from '@/lib/motion'

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
      animate="show"
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
      animate="show"
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
