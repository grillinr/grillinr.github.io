import { motion, useReducedMotion } from "framer-motion";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

type SubsectionHeaderProps = {
  title: string;
  description?: string;
};

export function SubsectionHeader({ title, description }: SubsectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <header className="mb-5 md:mb-6">
        <h2 className="m-0 font-['Space_Grotesk','IBM_Plex_Sans',sans-serif] text-3xl leading-tight md:text-4xl">
          {title}
        </h2>
        {description ? <p className="lead mt-3">{description}</p> : null}
      </header>
    );
  }

  return (
    <motion.header
      className="mb-5 md:mb-6"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="m-0 font-['Space_Grotesk','IBM_Plex_Sans',sans-serif] text-3xl leading-tight md:text-4xl"
        variants={fadeUpItem}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p className="lead mt-3" variants={fadeUpItem}>
          {description}
        </motion.p>
      ) : null}
    </motion.header>
  );
}
