import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpItem, motionDuration, motionEase, staggerContainer } from '@/lib/motion'

type SectionHeaderProps = {
  kicker?: string
  title: string
  description?: string
}

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <header className="mb-6 md:mb-8">
        {kicker ? <span className="kicker">{kicker}</span> : null}
        <h1 className="page-title">{title}</h1>
        {description ? <p className="lead mt-4">{description}</p> : null}
      </header>
    )
  }

  return (
    <motion.header
      className="mb-6 md:mb-8"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {kicker ? (
        <motion.span
          className="kicker"
          variants={fadeUpItem}
          transition={{ duration: motionDuration.fast, ease: motionEase }}
        >
          {kicker}
        </motion.span>
      ) : null}
      <motion.h1 className="page-title" variants={fadeUpItem}>
        {title}
      </motion.h1>
      {description ? (
        <motion.p className="lead mt-4" variants={fadeUpItem}>
          {description}
        </motion.p>
      ) : null}
    </motion.header>
  )
}
