import { useEffect } from "react";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import ModernHeroSection from "@/components/ModernHeroSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
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
  const {
    t
  } = useLanguage();
  const propertiesRef = useRef(null);
  const isPropertiesInView = useInView(propertiesRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <ModernNavbar />
      
      <main className="flex-1 pt-20">
        {/* Modern Hero Section */}
        <ModernHeroSection />
        
        {/* Featured Properties */}
        <FadeInSection>
          <FeaturedPropertiesSection />
        </FadeInSection>
        
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
          <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-12">
            {/* Background effects */}
            <div className="absolute inset-0 py-[24px] my-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Ready to Start?</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Find Your Dream Home?
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  Join thousands of satisfied buyers who found their perfect property with us
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <div>
                    
                  </div>
                  <div>
                    <Button size="lg" variant="outline" className="border-border text-foreground backdrop-blur-sm text-lg font-semibold rounded-full bg-zinc-100 mx-0 px-[37px] py-[31px]">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat with AI Expert
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {[{
                  icon: CheckCircle2,
                  text: "No fees for buyers"
                }, {
                  icon: CheckCircle2,
                  text: "Expert guidance"
                }, {
                  icon: CheckCircle2,
                  text: "Verified properties"
                }].map((feature, index) => {})}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      
      <ModernFooter />
    </div>;
}