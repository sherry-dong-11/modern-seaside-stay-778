import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExploreCitiesSection from "@/components/ExploreCitiesSection";
import FeaturedCategoriesSection from "@/components/FeaturedCategoriesSection";
import { HomeLoanCalculatorSection } from "@/components/HomeLoanCalculatorSection";
import { LatestNewsSection } from "@/components/LatestNewsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import PropertyCarouselCard from "@/components/PropertyCarouselCard";
import MotionWrapper from "@/components/MotionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, Building2, Star, Users, Award, CheckCircle2, Play, Phone, Mail, BookOpen, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-cozy-room.jpg";
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
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Parallax effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Enhanced Modern Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{
              y: scrollY * 0.5,
            }}
          >
            <motion.img 
              src={heroImage} 
              alt="Cozy room interior" 
              className="w-full h-full object-cover scale-110"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
          
          {/* Enhanced Hero Content */}
          <motion.div className="container relative z-10 text-center text-white">
            <div className="max-w-4xl mx-auto">
              
              <motion.h1 
                className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Find Your Perfect
                <motion.span 
                  className="text-gradient bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  New Home
                </motion.span>
              </motion.h1>
              
              
              
              {/* Enhanced Search Bar */}
              <motion.div 
                className="max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input placeholder="Search by suburb, postcode..." className="pl-12 border-none text-foreground text-lg focus:ring-0 bg-transparent" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 shadow-lg hover:shadow-xl">
                      <Search className="w-5 h-5 mr-2" />
                      Search
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              
            </div>
          </motion.div>
          
          {/* Enhanced Floating Stats */}
          <motion.div 
            className="absolute bottom-8 left-0 right-0 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="glass-card p-6 text-center text-white rounded-2xl hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                    </motion.div>
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-white/90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Enhanced Featured Properties */}
        <MotionWrapper animation="fadeInUp" className="section-sm">
          <div className="container">
            {/* Property Carousel */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <Carousel opts={{
                align: "start",
                loop: true
              }} className="w-full">
                <CarouselContent>
                  {featuredProperties.map(property => (
                    <CarouselItem key={property.id}>
                      <PropertyCarouselCard property={property} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CarouselPrevious className="left-4 bg-white/95 hover:bg-white border-gray-200 shadow-xl hover:shadow-2xl backdrop-blur-sm" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CarouselNext className="right-4 bg-white/95 hover:bg-white border-gray-200 shadow-xl hover:shadow-2xl backdrop-blur-sm" />
                </motion.div>
              </Carousel>
            </div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="btn-primary px-8 py-4 text-lg">
                  <Building2 className="w-6 h-6 mr-3" />
                  View All Properties
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </MotionWrapper>
        
        {/* Enhanced Sections with Motion */}
        <MotionWrapper animation="fadeInUp" delay={0.2}>
          <ExploreCitiesSection />
        </MotionWrapper>
        
        <MotionWrapper animation="fadeInUp" delay={0.1}>
          <FeaturedCategoriesSection />
        </MotionWrapper>
        
        <MotionWrapper animation="slideInLeft" delay={0.2}>
          <HomeLoanCalculatorSection />
        </MotionWrapper>
        
        <MotionWrapper animation="fadeInUp" delay={0.3}>
          <LatestNewsSection />
        </MotionWrapper>
        
        <MotionWrapper animation="slideInRight" delay={0.2}>
          <TestimonialsSection />
        </MotionWrapper>
        
        {/* Enhanced CTA Section */}
        <MotionWrapper animation="fadeInUp" className="relative bg-gradient-to-br from-primary-500 to-primary-600 text-white overflow-hidden section-sm">
          <motion.div 
            className="container relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ready to Find Your Dream Home?
              </motion.h2>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="secondary" className="px-8 py-4 text-orange-500 bg-white/95 hover:bg-white shadow-xl hover:shadow-2xl backdrop-blur-sm">
                    <BookOpen className="w-5 h-5 mr-2" />
                    New Build Purchase Guide
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="px-8 py-4 border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-xl hover:shadow-2xl">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with AI Expert
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {[
                  "No fees for buyers",
                  "Expert guidance", 
                  "Verified properties"
                ].map((text, index) => (
                  <motion.div 
                    key={text}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    {text}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Enhanced Background decorations */}
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-full opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-white blur-3xl" />
          </motion.div>
        </MotionWrapper>
      </main>
      
      <Footer />
    </div>;
}