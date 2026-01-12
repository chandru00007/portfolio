import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const animationVariants: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  "scale": {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  "blur": {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={animationVariants[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for animating children in sequence
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = "",
  once = true,
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger item for use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
