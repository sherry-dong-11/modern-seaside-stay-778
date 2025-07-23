import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroModern from "@/assets/hero-modern.jpg";

export default function PacasoHeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${heroModern})`,
          transform: `translateY(${backgroundY}px)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-start text-left px-4">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Subtitle */}
            <motion.span 
              className="inline-block text-white/90 text-lg font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.hero.subtitle}
            </motion.span>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.title}
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-white/90 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t.hero.description}
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary-600 text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 group"
              >
                <Link to="/apartments">
                  {t.hero.exploreApartments}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a 
          href="#featured" 
          className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity group"
        >
          <span className="text-sm mb-3 font-medium tracking-wide">{t.hero.scrollDown || "Scroll Down"}</span>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}