import { useEffect } from "react";
import PacasoNavbar from "@/components/PacasoNavbar";
import ModernFooter from "@/components/ModernFooter";
import PacasoHeroSection from "@/components/PacasoHeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExploreCitiesSection from "@/components/ExploreCitiesSection";
import FeaturedCategoriesSection from "@/components/FeaturedCategoriesSection";
import { HomeLoanCalculatorSection } from "@/components/HomeLoanCalculatorSection";
import { LatestNewsSection } from "@/components/LatestNewsSection";
import AnimatedPropertyCard from "@/components/AnimatedPropertyCard";
import FadeInSection from "@/components/FadeInSection";
import { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Star, Users, Award, CheckCircle2, BookOpen, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

// Platform statistics
const stats = [{
  number: "50,000+",
  label: "Properties Listed",
  icon: Building2
}, {
  number: "25,000+",
  label: "Happy Buyers",
  icon: Users
}, {
  number: "98%",
  label: "Satisfaction Rate",
  icon: Star
}, {
  number: "500+",
  label: "Developer Partners",
  icon: Award
}];
export default function Index() {
  const { t } = useLanguage();
  const propertiesRef = useRef(null);
  const isPropertiesInView = useInView(propertiesRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PacasoNavbar />
      
      <main className="flex-1">
        {/* Pacaso Hero Section */}
        <PacasoHeroSection />
        
        {/* Featured Properties */}
        <section id="featured" ref={propertiesRef} className="py-16 md:py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <FadeInSection className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isPropertiesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                <Star className="w-4 h-4 fill-current" />
                Featured Properties
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Premium Off-The-Plan Properties
              </h2>
              <p className="text-sm text-muted-foreground mx-auto whitespace-nowrap">
                Discover exclusive new developments with modern designs, premium finishes, and unbeatable locations
              </p>
            </FadeInSection>
            
            
            {/* Single Property Carousel */}
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {featuredProperties.map((property, index) => (
                    <CarouselItem key={property.id}>
                      <AnimatedPropertyCard 
                        property={property} 
                        index={0} // Always 0 since we're showing one at a time
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            
            <FadeInSection className="text-center" delay={0.6}>
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/apartments">
                    <Building2 className="w-5 h-5 mr-2" />
                    View All Properties
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </FadeInSection>
          </div>
        </section>
        
        {/* Explore States / Cities */}
        <FadeInSection>
          <ExploreCitiesSection />
        </FadeInSection>
        
        {/* Featured Categories */}
        <FadeInSection>
          <FeaturedCategoriesSection />
        </FadeInSection>
        
        {/* Home Loan Calculator */}
        <FadeInSection>
          <HomeLoanCalculatorSection />
        </FadeInSection>
        
        {/* Latest News */}
        <FadeInSection>
          <LatestNewsSection />
        </FadeInSection>
        
        {/* Testimonials */}
        <FadeInSection>
          <TestimonialsSection />
        </FadeInSection>
        
        {/* CTA Section */}
        <FadeInSection>
          <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-24">
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container relative z-10">
              <motion.div 
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Ready to Start?</span>
                </motion.div>

                <motion.h2 
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Ready to Find Your Dream Home?
                </motion.h2>
                
                <motion.p
                  className="text-xl text-gray-300 mb-12 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Join thousands of satisfied buyers who found their perfect property with us
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <BookOpen className="w-5 h-5 mr-2" />
                      New Build Purchase Guide
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat with AI Expert
                    </Button>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {[
                    { icon: CheckCircle2, text: "No fees for buyers" },
                    { icon: CheckCircle2, text: "Expert guidance" },
                    { icon: CheckCircle2, text: "Verified properties" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <feature.icon className="w-8 h-8 text-green-400 mb-3" />
                      <span className="text-gray-300 font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        </FadeInSection>
      </main>
      
      <ModernFooter />
    </div>
  );
}