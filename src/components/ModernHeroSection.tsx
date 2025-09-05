import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, ChevronDown, Star, Building2, Users, Award, Crown, Diamond } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/luxury-beachfront-apartments.jpg";

const stats = [{
  number: "50,000+",
  label: "Luxury Properties",
  icon: Building2
}, {
  number: "25,000+",
  label: "Elite Clients",
  icon: Users
}, {
  number: "98%",
  label: "Premium Satisfaction",
  icon: Star
}, {
  number: "500+",
  label: "Exclusive Partners",
  icon: Award
}];

const floatingElements = Array.from({
  length: 20
}, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  delay: Math.random() * 8,
  duration: Math.random() * 15 + 20,
  x: Math.random() * 100,
  y: Math.random() * 100
}));

export default function ModernHeroSection() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section 
      ref={containerRef} 
      className="relative min-h-screen flex items-start justify-center overflow-hidden -mt-20 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-32" 
      style={{ opacity }}
    >
      {/* Enhanced Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y, scale }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        
        {/* Premium gradient overlay with mouse interaction */}
        <motion.div 
          className="absolute inset-0" 
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(251, 191, 36, 0.15) 0%, 
                  rgba(255, 106, 0, 0.3) 25%,
                  rgba(0, 188, 212, 0.2) 50%,
                  rgba(0,0,0,0.7) 75%, 
                  rgba(0,0,0,0.85) 100%)`
          }} 
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(251, 191, 36, 0.15) 0%, 
                  rgba(255, 106, 0, 0.3) 25%,
                  rgba(0, 188, 212, 0.2) 50%,
                  rgba(0,0,0,0.7) 75%, 
                  rgba(0,0,0,0.85) 100%)`
          }} 
          transition={{ duration: 0.3 }} 
        />
        
        {/* Additional luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
      </motion.div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingElements.map(element => (
          <motion.div 
            key={element.id} 
            className="absolute rounded-full backdrop-blur-sm border border-gold/20" 
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
              background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.1), rgba(255, 106, 0, 0.1), rgba(0, 188, 212, 0.1))'
            }} 
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }} 
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }} 
          />
        ))}
      </div>

      {/* Premium Hero Content */}
      <div className="container relative z-20 text-center text-white">
        <motion.div 
          className="max-w-6xl mx-auto" 
          initial={{ opacity: 0, y: 80 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Luxury badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white/95 text-base font-semibold mb-10 backdrop-blur-xl border border-gold/30 relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(251, 191, 36, 0.25) 0%, rgba(255, 106, 0, 0.2) 50%, rgba(0, 188, 212, 0.25) 100%)',
              boxShadow: '0 12px 40px 0 rgba(251, 191, 36, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <Crown className="h-6 w-6 text-gold" />
            <span>Exclusive Luxury Real Estate Platform</span>
            <Diamond className="h-5 w-5 text-sea" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: [-200, 300] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </motion.div>

          {/* Premium main heading with luxury effects */}
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-10 leading-tight">
            {["Discover", "Luxury", "Living"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 120, rotateY: 60, rotateX: 30 }}
                animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.3,
                  duration: 1.2,
                  ease: "easeOut"
                }}
                className="inline-block mr-6 text-luxury relative"
                style={{
                  textShadow: '0 6px 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(255, 106, 0, 0.3), 0 0 100px rgba(0, 188, 212, 0.2)'
                }}
              >
                {word}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold via-primary to-sea opacity-30 blur-2xl"
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            ))}
          </motion.h1>

          {/* Premium description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-16 max-w-5xl mx-auto leading-relaxed font-light"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            Experience the pinnacle of luxury real estate. Discover breathtaking properties with 
            <span className="text-gold font-medium"> exclusive amenities</span>, 
            <span className="text-sea font-medium"> architectural excellence</span>, and 
            <span className="text-primary font-medium"> unparalleled sophistication</span> 
            in every detail.
          </motion.p>

          {/* Ultra-premium search bar */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative group">
              <motion.div 
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-50"
                style={{
                  background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.6), rgba(255, 106, 0, 0.5), rgba(0, 188, 212, 0.6))'
                }}
                animate={{ 
                  background: [
                    'linear-gradient(45deg, rgba(251, 191, 36, 0.6), rgba(255, 106, 0, 0.5), rgba(0, 188, 212, 0.6))',
                    'linear-gradient(135deg, rgba(0, 188, 212, 0.6), rgba(251, 191, 36, 0.5), rgba(255, 106, 0, 0.6))',
                    'linear-gradient(225deg, rgba(255, 106, 0, 0.6), rgba(0, 188, 212, 0.5), rgba(251, 191, 36, 0.6))'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex items-center backdrop-blur-2xl rounded-3xl p-4 border border-white/40 bg-gradient-to-r from-white/15 via-white/10 to-white/15">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/30 to-primary/30 border border-gold/40 mr-6">
                  <Search className="h-6 w-6 text-gold" />
                </div>
                <Input
                  placeholder="Search exclusive properties, prime locations, luxury amenities..."
                  className="flex-1 bg-transparent border-0 text-white placeholder:text-white/70 focus:outline-none focus:ring-0 text-xl py-6 px-4 font-medium"
                />
                <Button size="lg" className="btn-luxury ml-4 px-10 py-6 text-lg">
                  <Crown className="h-6 w-6 mr-3" />
                  Discover Luxury
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium floating stats */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 1.2 }}
        className="absolute bottom-8 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: 3 + index * 0.2,
                  duration: 1 
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -12,
                  rotateY: 8,
                  rotateX: 5
                }}
                className="text-center group cursor-pointer"
              >
                <div 
                  className="relative p-8 md:p-10 rounded-3xl backdrop-blur-2xl border transition-all duration-700 hover:border-gold/60 overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.15), rgba(255, 106, 0, 0.1), rgba(0, 188, 212, 0.15))'
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 bg-gradient-to-br from-gold/25 to-primary/25 border border-gold/40 group-hover:border-gold/60"
                    >
                      <stat.icon className="h-10 w-10 text-gold group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                    <motion.div 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-500"
                      style={{
                        textShadow: '0 2px 10px rgba(251, 191, 36, 0.3)'
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-base md:text-lg text-white/90 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" 
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0 }} 
              className="relative max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden" 
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Premium video content would be embedded here</p>
                </div>
              </div>
              <button 
                onClick={() => setIsVideoPlaying(false)} 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}