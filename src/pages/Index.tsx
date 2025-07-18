import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ModernHeroSection from "@/components/ModernHeroSection";
import { FloatingStats } from "@/components/FloatingStats";
import { AnimatedCard, GlassCard } from "@/components/AnimatedCard";
import { FadeInSection } from "@/components/FadeInSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExploreCitiesSection from "@/components/ExploreCitiesSection";
import FeaturedCategoriesSection from "@/components/FeaturedCategoriesSection";
import { HomeLoanCalculatorSection } from "@/components/HomeLoanCalculatorSection";
import { LatestNewsSection } from "@/components/LatestNewsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import PropertyCarouselCard from "@/components/PropertyCarouselCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, BookOpen, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import luxuryApartment from "@/assets/apartment-luxury.jpg";
import poolAmenities from "@/assets/amenities-pool.jpg";

// Featured properties data inspired by YEPHOME
const featuredProperties: ApartmentProps[] = [{
  id: "1",
  name: "BLVD Melbourne Square",
  description: "Premium off-the-plan apartments in Melbourne's most sought-after location with stunning city views.",
  price: 650000,
  capacity: 2,
  size: 65,
  image: luxuryApartment,
  location: "Southbank, Melbourne",
  features: ["Smart Home Tech", "Premium Finishes", "City Views", "Concierge", "Pool", "Gym"]
}, {
  id: "2",
  name: "Oasis Residence",
  description: "Contemporary living spaces designed for modern lifestyles with resort-style amenities.",
  price: 750000,
  capacity: 3,
  size: 85,
  image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  location: "South Melbourne",
  features: ["Rooftop Garden", "Premium Appliances", "Storage", "Parking", "Balcony", "Air Conditioning"]
}, {
  id: "3",
  name: "Floret Townhouses",
  description: "Luxury townhouses offering spacious living with private courtyards and premium finishes.",
  price: 890000,
  capacity: 4,
  size: 120,
  image: poolAmenities,
  location: "Glen Waverley",
  features: ["Private Courtyard", "Double Garage", "Designer Kitchen", "Master Suite", "Study", "Powder Room"]
}];

// Keep stats in FloatingStats component now
export default function Index() {
  const {
    t
  } = useLanguage();
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Modern Animated Hero Section */}
        <ModernHeroSection />
        
        {/* Floating Stats Section */}
        <section className="py-16 relative">
          <div className="container">
            <FloatingStats />
          </div>
        </section>
        
        {/* Featured Properties */}
        <FadeInSection className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Properties</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover premium properties with cutting-edge amenities and stunning designs
              </p>
            </motion.div>
            
            {/* Property Carousel */}
            <div className="relative max-w-6xl mx-auto mb-12">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {featuredProperties.map((property, index) => (
                    <CarouselItem key={property.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <AnimatedCard delay={index * 0.1} className="h-full">
                        <PropertyCarouselCard property={property} />
                      </AnimatedCard>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-card/90 backdrop-blur-sm hover:bg-card border-border/50 shadow-xl" />
                <CarouselNext className="right-4 bg-card/90 backdrop-blur-sm hover:bg-card border-border/50 shadow-xl" />
              </Carousel>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="gradient" className="rounded-full px-8 py-4 text-lg">
                  <Building2 className="w-5 h-5 mr-2" />
                  View All Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </FadeInSection>
        
        {/* Explore States / Cities */}
        <FadeInSection direction="left">
          <ExploreCitiesSection />
        </FadeInSection>
        
        {/* Featured Categories */}
        <FadeInSection direction="right" delay={0.2}>
          <FeaturedCategoriesSection />
        </FadeInSection>
        
        {/* Home Loan Calculator */}
        <FadeInSection direction="up" delay={0.1}>
          <HomeLoanCalculatorSection />
        </FadeInSection>
        
        {/* Latest News */}
        <FadeInSection direction="left" delay={0.3}>
          <LatestNewsSection />
        </FadeInSection>
        
        {/* Testimonials */}
        <FadeInSection direction="up" delay={0.2}>
          <TestimonialsSection />
        </FadeInSection>
        
        {/* CTA Section */}
        <FadeInSection className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-cyan-500/20" />
          
          {/* Floating background elements */}
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          <div className="container relative z-10">
            <GlassCard className="max-w-4xl mx-auto">
              <div className="text-center p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
                >
                  Ready to Find Your <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Dream Home?</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                >
                  Start your journey with expert guidance and cutting-edge tools
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="gradient" className="rounded-full px-8 py-4">
                      <BookOpen className="w-5 h-5 mr-2" />
                      New Build Purchase Guide
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="hero" className="rounded-full px-8 py-4">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat with AI Expert
                    </Button>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                >
                  {["No fees for buyers", "Expert guidance", "Verified properties"].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </GlassCard>
          </div>
        </FadeInSection>
      </main>
      
      <Footer />
    </div>;
}