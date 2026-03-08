import type { Transition, Variants } from 'framer-motion'

export const motionDuration = {
  fast: 0.28,
  base: 0.52,
  slow: 0.76,
}

export const motionEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const motionSpring = {
  type: 'spring' as const,
  stiffness: 160,
  damping: 18,
  mass: 0.7,
}

export const sectionTransition: Transition = {
  duration: motionDuration.base,
  ease: motionEase,
}

export const viewportOnce = {
  once: true,
  amount: 0.2,
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
}
