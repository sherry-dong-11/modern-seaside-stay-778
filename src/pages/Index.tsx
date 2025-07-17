import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import PropertyCarouselCard from "@/components/PropertyCarouselCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, Building2, Star, Users, Award, CheckCircle2, Play, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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
        {/* Modern Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Cozy room interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          {/* Hero Content */}
          <div className="container relative z-10 text-center text-white">
            <div className="max-w-4xl mx-auto">
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white animate-fade-in">
                Find Your Perfect
                <span className="text-orange-400 block">New Home</span>
              </h1>
              
              <p style={{
              animationDelay: "200ms"
            }} className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in md:text-sm">
                Discover premium off-the-plan apartments, townhouses, and new developments across Australia
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{
              animationDelay: "400ms"
            }}>
                <div className="flex flex-col sm:flex-row gap-4 p-3 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input placeholder="Search by suburb, postcode..." className="pl-12 border-none text-foreground text-lg focus:ring-0" />
                  </div>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
              animationDelay: "600ms"
            }}>
                
                
              </div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute bottom-8 left-0 right-0 z-10">
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => <div key={index} className="glass-card p-4 text-center text-white">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Properties */}
        <section className="section-sm">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-4 md:text-4xl">
                Featured Properties
              </h2>
            </div>
            
            {/* Property Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <Carousel opts={{
              align: "start",
              loop: true
            }} className="w-full">
                <CarouselContent>
                  {featuredProperties.map(property => <CarouselItem key={property.id}>
                      <PropertyCarouselCard property={property} />
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-gray-200 shadow-lg" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-gray-200 shadow-lg" />
              </Carousel>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="btn-primary">
                <Building2 className="w-5 h-5 mr-2" />
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Explore States / Cities */}
        <section className="section bg-neutral-50 dark:bg-neutral-900">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-4 md:text-4xl">
                Explore States / Cities
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-gray-200 dark:border-gray-700 pb-2">
                  ▸ New South Wales
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Sydney</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Newcastle</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Wollongong</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-gray-200 dark:border-gray-700 pb-2">
                  ▸ Victoria
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Melbourne</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Geelong</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Ballarat</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-gray-200 dark:border-gray-700 pb-2">
                  ▸ Queensland
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Brisbane</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Gold Coast</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Sunshine Coast</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-gray-200 dark:border-gray-700 pb-2">
                  ▸ Western Australia
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Perth</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Fremantle</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Mandurah</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-gray-200 dark:border-gray-700 pb-2">
                  ▸ South Australia
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Adelaide</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Mount Gambier</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Whyalla</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-gray-200 dark:border-gray-700 pb-2">
                  ▸ Tasmania
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Hobart</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Launceston</li>
                  <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">- Devonport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="relative section bg-gradient-to-br from-primary-500 to-primary-600 text-white overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of satisfied buyers who found their perfect property with YEPHOME
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Building2 className="w-5 h-5 mr-2" />
                  Start Your Search
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Expert
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  No fees for buyers
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Expert guidance
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Verified properties
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-white blur-3xl" />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
}