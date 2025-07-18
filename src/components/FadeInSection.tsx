import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const directionVariants = {
  up: { opacity: 0, y: 40 },
  down: { opacity: 0, y: -40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
};

export function FadeInSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}