import { ArrowRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/motion/motion-primitives";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motionSpring } from "@/lib/motion";
import { links, profile } from "@/lib/site-data";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const resumeLink =
    links.find((item) => item.label === "Resume")?.href ?? "/resume";

  return (
    <MotionStagger className="page-section fade-in">
      <MotionStaggerItem>
        <div className="hero-heading">
          <img
            className="hero-image"
            src="/profile.jpg"
            alt={profile.name}
            onError={(event) => {
              event.currentTarget.src = "/profile-placeholder.svg";
            }}
          />
          <h1 className="page-title">{profile.name}</h1>
        </div>
      </MotionStaggerItem>

      <MotionStaggerItem>
        <p className="mt-4 text-xl text-[var(--gruvbox-bright-blue)] md:text-2xl">
          {profile.title}
        </p>
      </MotionStaggerItem>

      <MotionStaggerItem>
        <p className="lead mt-5">{profile.shortBio}</p>
      </MotionStaggerItem>

      <MotionStaggerItem>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
            transition={motionSpring}
          >
            <Button variant="secondary" asChild>
              <Link to="/projects">
                Explore projects <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
            transition={motionSpring}
          >
            <Button variant="secondary" asChild>
              <Link to={resumeLink}>
                Resume <FileText className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </MotionStaggerItem>

      <MotionStaggerItem>
        <div className="hero-grid mt-10">
          <Card className="p-4">
            <p className="mb-2 text-sm text-[var(--fg-dim)]">What I'm up to</p>
            <p className="m-0 text-sm text-[var(--fg-main)]">
              Software engineer at Medpace building out our design system.
              Working on{" "}
              <Link to="/projects/nq" className="link-accent">
                NQ
              </Link>{" "}
              and{" "}
              <Link to="/projects/devbits" className="link-accent">
                DevBits
              </Link>{" "}
              in my free time.
            </p>
          </Card>
        </div>
      </MotionStaggerItem>
    </MotionStagger>
  );
}
