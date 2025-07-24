import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Home, Calendar, MapPin, Phone, Mail } from "lucide-react";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const { t } = useLanguage();

  const stats = [
    { icon: Home, number: "500+", label: "Properties Managed" },
    { icon: Users, number: "10K+", label: "Happy Customers" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Calendar, number: "24/7", label: "Customer Support" }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/lovable-uploads/45e89a4e-b7de-45de-9bb3-c273d5f1e5c1.png",
      description: "With over 15 years in real estate, Sarah leads our vision of making quality housing accessible to everyone."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/lovable-uploads/656753f9-a816-4923-ae1b-085d43457414.png",
      description: "Michael ensures smooth operations and exceptional service delivery across all our properties."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Director",
      image: "/lovable-uploads/76685c20-ccdc-4df4-90d5-dfe3498fbbf6.png",
      description: "Emily leads our customer-first approach, ensuring every resident feels at home."
    },
    {
      name: "David Kim",
      role: "Property Development Manager",
      image: "/lovable-uploads/ec1d0529-2ae8-4481-8329-b97ea749e03f.png",
      description: "David oversees our expansion and ensures all properties meet our high standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-sea bg-clip-text text-transparent">
              About Our Story
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're passionate about creating exceptional living experiences through premium properties, 
              innovative technology, and unmatched customer service.
            </p>
            <Badge variant="secondary" className="mb-8">
              Trusted Since 2009
            </Badge>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={index * 0.1} className="text-center">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <img 
                src="/lovable-uploads/45e89a4e-b7de-45de-9bb3-c273d5f1e5c1.png" 
                alt="Our mission" 
                className="rounded-lg shadow-lg"
              />
            </FadeInSection>
            <FadeInSection direction="right">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe everyone deserves a place they can truly call home. Our mission is to provide 
                exceptional rental properties that combine comfort, convenience, and community. Through 
                innovative technology and personalized service, we make the rental experience seamless 
                and enjoyable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Quality properties in prime locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Dedicated customer support team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="h-5 w-5 text-primary" />
                  <span>Transparent and fair pricing</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team is dedicated to providing you with exceptional service 
              and making your rental experience extraordinary.
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center">
            <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-sea/5">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Home?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let our team help you discover the perfect rental property that meets all your needs. 
                  Contact us today to get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>hello@rentalcompany.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Downtown Office Center</span>
                  </div>
                </div>
                <div className="mt-8 space-x-4">
                  <Button asChild variant="heroSolid" size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/apartments">View Properties</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}