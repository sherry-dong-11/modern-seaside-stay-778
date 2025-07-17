import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, Building2, TrendingUp, Star, Users, Award, CheckCircle2, Play, Bot, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-modern.jpg";
import luxuryApartment from "@/assets/apartment-luxury.jpg";
import poolAmenities from "@/assets/amenities-pool.jpg";

// Featured properties data inspired by YEPHOME
const featuredProperties: ApartmentProps[] = [
  {
    id: "1",
    name: "BLVD Melbourne Square",
    description: "Premium off-the-plan apartments in Melbourne's most sought-after location with stunning city views.",
    price: 650000,
    capacity: 2,
    size: 65,
    image: luxuryApartment,
    location: "Southbank, Melbourne",
    features: ["Smart Home Tech", "Premium Finishes", "City Views", "Concierge", "Pool", "Gym"]
  },
  {
    id: "2", 
    name: "Oasis Residence",
    description: "Contemporary living spaces designed for modern lifestyles with resort-style amenities.",
    price: 750000,
    capacity: 3,
    size: 85,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    location: "South Melbourne",
    features: ["Rooftop Garden", "Premium Appliances", "Storage", "Parking", "Balcony", "Air Conditioning"]
  },
  {
    id: "3",
    name: "Floret Townhouses",
    description: "Luxury townhouses offering spacious living with private courtyards and premium finishes.",
    price: 890000,
    capacity: 4,
    size: 120,
    image: poolAmenities,
    location: "Glen Waverley",
    features: ["Private Courtyard", "Double Garage", "Designer Kitchen", "Master Suite", "Study", "Powder Room"]
  }
];

// Platform statistics
const stats = [
  { number: "50,000+", label: "Properties Listed", icon: Building2 },
  { number: "25,000+", label: "Happy Buyers", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Star },
  { number: "500+", label: "Developer Partners", icon: Award }
];

// Key features
const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI-Powered Search",
    description: "Find your perfect home with our intelligent recommendation engine"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Market Insights",
    description: "Real-time market data and investment insights to guide your decisions"
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Verified Listings",
    description: "All properties are verified and come with detailed information"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Support",
    description: "Our team of property experts guide you through every step"
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Modern Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage}
              alt="Modern apartments"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 hero-gradient opacity-80" />
          </div>
          
          {/* Hero Content */}
          <div className="container relative z-10 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Star className="w-4 h-4 mr-2" />
                Australia's #1 AI-Powered New Home Platform
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Find Your Perfect
                <span className="text-gradient block">New Home</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
                Discover premium off-the-plan apartments, townhouses, and new developments across Australia with our AI-powered search
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                    <Input 
                      placeholder="Search by suburb, postcode or developer..." 
                      className="pl-12 bg-transparent border-none text-white placeholder:text-white/60 focus:ring-0 text-lg"
                    />
                  </div>
                  <Button size="lg" className="btn-primary px-8">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="btn-primary">
                  <Building2 className="w-5 h-5 mr-2" />
                  Browse Properties
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary">
                  <Bot className="w-5 h-5 mr-2" />
                  Chat with AI
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute bottom-8 left-0 right-0 z-10">
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-4 text-center text-white">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Properties */}
        <section className="section-sm">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Featured Properties</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Premium New Developments
              </h2>
              <p className="text-xl text-muted-foreground">
                Handpicked properties from Australia's most trusted developers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property, index) => (
                <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                  <ApartmentCard apartment={property} />
                </div>
              ))}
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
        
        {/* Key Features */}
        <section className="section bg-neutral-50 dark:bg-neutral-900">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Why Choose YEPHOME</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Future of Property Search
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience next-generation property discovery powered by artificial intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="card-modern text-center p-8 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
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
    </div>
  );
}
