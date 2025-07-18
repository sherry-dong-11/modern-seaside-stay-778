import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
}

export function AnimatedCard({ 
  children, 
  className = "", 
  delay = 0,
  hoverScale = 1.02 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({ 
  children, 
  className = "", 
  delay = 0 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.03,
        rotateX: 5,
        rotateY: 5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`relative group ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl p-6">
        {children}
      </div>
    </motion.div>
  );
}