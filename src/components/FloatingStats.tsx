import { motion } from "framer-motion";
import { Building2, Users, Star, Award } from "lucide-react";

const stats = [
  {
    number: "50,000+",
    label: "Properties Listed",
    icon: Building2
  },
  {
    number: "25,000+",
    label: "Happy Buyers", 
    icon: Users
  },
  {
    number: "98%",
    label: "Satisfaction Rate",
    icon: Star
  },
  {
    number: "500+",
    label: "Developer Partners",
    icon: Award
  }
];

export function FloatingStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
            </motion.div>
            <motion.div 
              className="text-3xl font-bold text-foreground mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-sm text-muted-foreground font-medium">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}