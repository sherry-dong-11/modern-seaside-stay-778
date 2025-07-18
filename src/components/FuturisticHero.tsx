import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, Users, Star, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { number: "50,000+", label: "Properties Listed", icon: Building2 },
  { number: "25,000+", label: "Happy Buyers", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Star },
  { number: "500+", label: "Developer Partners", icon: Award }
];

const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, type: "spring", damping: 25 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative"
  >
    {children}
  </motion.div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-gradient to-accent-pink opacity-90" />
    
    {/* Animated orbs */}
    <motion.div
      className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -50, 100, 0],
        scale: [1, 1.2, 0.8, 1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ top: "10%", left: "10%" }}
    />
    <motion.div
      className="absolute w-64 h-64 bg-accent-pink/20 rounded-full blur-2xl"
      animate={{
        x: [0, -100, 50, 0],
        y: [0, 50, -100, 0],
        scale: [1, 0.8, 1.2, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ top: "60%", right: "15%" }}
    />
    
    {/* Grid lines */}
    <svg className="absolute inset-0 w-full h-full opacity-10">
      <defs>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default function FuturisticHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="container relative z-10 text-center text-white py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Find Your Perfect
              <motion.span 
                className="block bg-gradient-to-r from-white to-accent-pink bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                New Home
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Discover premium properties with cutting-edge technology and personalized service
            </motion.p>
          </motion.div>

          {/* Futuristic search bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="relative p-2 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-6 w-6" />
                  <Input 
                    placeholder="Search by suburb, postcode..." 
                    className="pl-12 bg-white/10 border-none text-white placeholder:text-white/60 text-lg h-14 rounded-2xl focus:ring-2 focus:ring-white/30" 
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-white to-white/90 text-primary-600 hover:from-white/90 hover:to-white/80 rounded-2xl font-semibold text-lg">
                    <Search className="w-6 h-6 mr-2" />
                    Search Properties
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-xl hover:bg-white/20 px-8 py-4 text-lg rounded-2xl">
                <Building2 className="w-6 h-6 mr-2" />
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating stats cards */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <FloatingCard key={index} delay={1.5 + index * 0.1}>
                <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-2xl text-center text-white border border-white/20 shadow-xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}