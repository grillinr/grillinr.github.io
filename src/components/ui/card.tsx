import {
  motion,
  type HTMLMotionProps,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 140,
    damping: 18,
    mass: 0.8,
  });

  const springY = useSpring(rotateY, {
    stiffness: 140,
    damping: 18,
    mass: 0.8,
  });

  const handlePointerMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const intensity = 8;

    rotateX.set((0.5 - y) * intensity);
    rotateY.set((x - 0.5) * intensity);
    event.currentTarget.style.setProperty("--spotlight-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y * 100}%`);
  };

  const handlePointerLeave: MouseEventHandler<HTMLDivElement> = (event) => {
    rotateX.set(0);
    rotateY.set(0);
    event.currentTarget.style.setProperty("--spotlight-x", "50%");
    event.currentTarget.style.setProperty("--spotlight-y", "50%");
  };

  return (
    <motion.div
      className={cn(
        "surface rounded-2xl border border-[var(--border)] p-5 hover:border-[var(--gruvbox-bright-blue)] hover:bg-[var(--surface-hover)] hover:shadow-[0_24px_42px_var(--shadow-lift)] focus-within:border-[var(--gruvbox-bright-blue)] focus-within:bg-[var(--surface-hover)] focus-within:shadow-[0_24px_42px_var(--shadow-lift)] md:p-6",
        className,
      )}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX: springX,
              rotateY: springY,
              transformPerspective: 1100,
              transformStyle: "preserve-3d",
            }
      }
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.018 }}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      transition={{ type: "spring", stiffness: 150, damping: 19, mass: 0.85 }}
      {...props}
    />
  );
}
