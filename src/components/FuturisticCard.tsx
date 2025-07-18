import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FuturisticCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hover?: boolean;
}

export default function FuturisticCard({ 
  children, 
  delay = 0, 
  className = "", 
  hover = true 
}: FuturisticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`relative group ${className}`}
    >
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-pink/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
}

export function FuturisticSection({ 
  children, 
  className = "",
  background = "gradient"
}: { 
  children: ReactNode; 
  className?: string;
  background?: "gradient" | "dark" | "light";
}) {
  const bgStyles = {
    gradient: "bg-gradient-to-br from-primary-500/10 to-accent-pink/5",
    dark: "bg-neutral-900",
    light: "bg-white"
  };

  return (
    <section className={`relative py-20 overflow-hidden ${bgStyles[background]} ${className}`}>
      {/* Animated background elements */}
      {background === "gradient" && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ top: "20%", left: "10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ bottom: "20%", right: "10%" }}
          />
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}