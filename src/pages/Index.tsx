import { useEffect } from "react";
import { motion } from "framer-motion";
import FuturisticNavbar from "@/components/FuturisticNavbar";
import Footer from "@/components/Footer";
import FuturisticHero from "@/components/FuturisticHero";
import PropertyShowcase from "@/components/PropertyShowcase";
import { FuturisticSection } from "@/components/FuturisticCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExploreCitiesSection from "@/components/ExploreCitiesSection";
import FeaturedCategoriesSection from "@/components/FeaturedCategoriesSection";
import { HomeLoanCalculatorSection } from "@/components/HomeLoanCalculatorSection";
import { LatestNewsSection } from "@/components/LatestNewsSection";
import { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BookOpen, MessageCircle } from "lucide-react";
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

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FuturisticNavbar />
      
      <main className="flex-1">
        {/* Futuristic Hero Section */}
        <FuturisticHero />
        
        {/* Featured Properties */}
        <PropertyShowcase properties={featuredProperties} />
        
        {/* Enhanced sections with futuristic styling */}
        <FuturisticSection>
          <ExploreCitiesSection />
        </FuturisticSection>
        
        <FuturisticSection background="light">
          <FeaturedCategoriesSection />
        </FuturisticSection>
        
        <FuturisticSection>
          <HomeLoanCalculatorSection />
        </FuturisticSection>
        
        <FuturisticSection background="light">
          <LatestNewsSection />
        </FuturisticSection>
        
        <FuturisticSection>
          <TestimonialsSection />
        </FuturisticSection>
        
        {/* Futuristic CTA Section */}
        <section className="relative bg-gradient-to-br from-primary-500 via-accent-gradient to-accent-pink text-white overflow-hidden py-20">
          {/* Animated background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ top: "20%", right: "20%" }}
            />
            <motion.div
              className="absolute w-64 h-64 bg-accent-pink/20 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 0.8, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ bottom: "20%", left: "20%" }}
            />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to Find Your
                <span className="block bg-gradient-to-r from-white to-accent-pink bg-clip-text text-transparent">
                  Dream Home?
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Start your journey with personalized guidance and cutting-edge technology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90 px-8 py-4 text-lg rounded-2xl font-semibold">
                    <BookOpen className="w-6 h-6 mr-2" />
                    New Build Purchase Guide
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-xl hover:bg-white/20 px-8 py-4 text-lg rounded-2xl">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Chat with AI Expert
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-8 text-white/80"
              >
                {[
                  "No fees for buyers",
                  "Expert guidance", 
                  "Verified properties"
                ].map((text, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    <span className="text-lg">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}