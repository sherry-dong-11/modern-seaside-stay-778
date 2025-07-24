import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Lightbulb, 
  Heart, 
  Users, 
  MapPin, 
  Building, 
  Compass, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: "Thoughtful Development",
      description: "Every community we create is designed with intention, considering how spaces bring people together and enhance daily life."
    },
    {
      icon: Lightbulb,
      title: "Intelligent Tools",
      description: "We leverage cutting-edge technology to streamline your journey, making property discovery and selection effortless."
    },
    {
      icon: Compass,
      title: "Clear Information",
      description: "Transparency is at our core. We provide comprehensive, honest information to help you make informed decisions."
    },
    {
      icon: Sparkles,
      title: "Inspiring Journey",
      description: "Finding your new home should feel exciting, not overwhelming. We make every step of the process inspiring and enjoyable."
    }
  ];

  const achievements = [
    { number: "50+", label: "Communities Across Australia" },
    { number: "15K+", label: "Happy Residents" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const locations = [
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast"
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-sea/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <FadeInSection className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Connecting Communities Across Australia
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              We're here to <span className="bg-gradient-to-r from-primary to-sea bg-clip-text text-transparent">connect people</span> with thoughtfully developed communities
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Using intelligent tools and clear information to make the journey to your new home feel inspiring.
            </p>
            <Button asChild variant="heroSolid" size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/25 px-12 py-4 text-lg font-semibold">
              <Link to="/apartments">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                  Explore Communities
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-4xl mx-auto">
            <Target className="h-16 w-16 text-primary mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're here to connect people with thoughtfully developed communities across Australia. 
              Using intelligent tools and clear information to make the journey to your new home feel inspiring.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Thoughtful Communities</h3>
                <p className="text-muted-foreground text-sm">Carefully planned spaces that foster connection and wellbeing</p>
              </div>
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Smart Technology</h3>
                <p className="text-muted-foreground text-sm">Intelligent tools that simplify your property search</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Inspiring Experience</h3>
                <p className="text-muted-foreground text-sm">Making your journey to a new home feel exciting and effortless</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values shape every decision we make and every community we develop, 
              ensuring your experience is exceptional from start to finish.
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    <value.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-sea/5">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Building communities that matter, one home at a time
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <FadeInSection key={index} delay={index * 0.1} className="text-center">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 hover:bg-background transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Across Australia</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From vibrant city centres to peaceful coastal communities, we're creating 
              thoughtfully developed spaces in Australia's most desirable locations.
            </p>
          </FadeInSection>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {locations.map((location, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <MapPin className="h-3 w-3 mr-2" />
                  {location}
                </Badge>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Find Communities Near You
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Our Communities?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Intelligent Design</h3>
                    <p className="text-muted-foreground">Every aspect of our communities is thoughtfully planned to enhance your lifestyle and foster meaningful connections.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Transparent Process</h3>
                    <p className="text-muted-foreground">No hidden fees, no surprises. We provide clear, comprehensive information throughout your journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground">Our relationship doesn't end at move-in. We're here to support you throughout your residency.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Focus</h3>
                    <p className="text-muted-foreground">We create spaces where neighbours become friends and communities thrive.</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection direction="right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Australian community" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center">
            <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-sea/10 border-0">
              <CardContent className="p-0">
                <Users className="h-16 w-16 text-primary mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Find Your Community?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let us help you discover a thoughtfully developed community where you'll love to call home. 
                  Your inspiring journey starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Phone className="h-5 w-5" />
                    <span>1800 SETPOINT</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="h-5 w-5" />
                    <span>hello@setpoint.com.au</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="heroSolid" size="lg">
                    <Link to="/apartments">Explore Communities</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Get In Touch</Link>
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