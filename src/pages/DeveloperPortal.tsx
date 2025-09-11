import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Shield, Globe, GitBranch, Terminal, Book, Download, ExternalLink, Cpu, Network, Lock } from "lucide-react";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

export default function DeveloperPortal() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Database,
      title: "Off-the-Plan Property Marketing",
      description: "Showcase your new developments on Australia's largest off-the-plan property platform",
      version: "Premium",
      status: "Active"
    },
    {
      icon: Globe,
      title: "Digital Marketing Solutions",
      description: "Comprehensive digital marketing services for property developers and agents",
      version: "Enterprise", 
      status: "Active"
    },
    {
      icon: Shield,
      title: "Lead Qualification System",
      description: "Advanced lead qualification with SMS verified contacts and buyer tracking",
      version: "Pro",
      status: "Active"
    },
    {
      icon: Zap,
      title: "Real-time Analytics Portal",
      description: "Live reporting dashboard for campaign insights and buyer interactions",
      version: "Analytics+",
      status: "Active"
    }
  ];

  const solutions = [
    {
      icon: Terminal,
      title: "Developer Portal Access",
      description: "Comprehensive portal for managing listings, leads, and campaign performance"
    },
    {
      icon: Code,
      title: "Content Creation Services",
      description: "Professional content and storytelling to showcase your developments"
    },
    {
      icon: GitBranch,
      title: "Market Insights Reports",
      description: "Industry research, market trends, and buyer behavior analytics"
    },
    {
      icon: Book,
      title: "Training & Support",
      description: "Comprehensive training programs and dedicated account management"
    }
  ];

  const advantages = [
    {
      icon: Cpu,
      title: "Targeted Audience",
      description: "100% of our audience is specifically looking for new apartments & townhouses"
    },
    {
      icon: Network,
      title: "Qualified Leads Only", 
      description: "Every lead comes with SMS verified contact details and buyer qualification"
    },
    {
      icon: Lock,
      title: "Pay-per-Lead Model",
      description: "Only pay when we connect you to qualified, interested property buyers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-sea/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <FadeInSection className="text-center max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
              <Code className="h-4 w-4 mr-2" />
              Developer Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              The best place to sell <span className="bg-gradient-to-r from-primary to-sea bg-clip-text text-transparent">new and off-the-plan property</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Showcase your projects on Australia's largest audience and platform dedicated to off-the-plan apartment and townhouse buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark px-8 py-4 text-lg font-semibold">
                <Code className="mr-3 h-6 w-6" />
                Log into Portal
                <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                <Book className="mr-3 h-6 w-6" />
                Audience & Services
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive marketing solutions for property developers and industry professionals
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-start justify-between">
                      <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <div className="flex items-center gap-2">
                        <Badge variant={service.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {service.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {service.version}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Book className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                      <Button variant="outline" size="sm">
                        <Terminal className="h-4 w-4 mr-2" />
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to successfully market and sell off-the-plan properties
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    <solution.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{solution.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-sea/5">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The established portals not getting it done? Here's why we're different.
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 hover:bg-background transition-colors">
                    <advantage.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Australia's #1 Off-the-Plan Property Marketplace</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join leading developers who trust our platform to showcase their projects
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeInSection>
              <Card className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <h3 className="text-lg font-semibold mb-2">Dedicated Audience</h3>
                <p className="text-muted-foreground">All visitors are specifically looking for new apartments & townhouses</p>
              </Card>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <Card className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <h3 className="text-lg font-semibold mb-2">Live Reporting</h3>
                <p className="text-muted-foreground">Real-time campaign insights and buyer interaction tracking</p>
              </Card>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <Card className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">SMS</div>
                <h3 className="text-lg font-semibold mb-2">Verified Leads</h3>
                <p className="text-muted-foreground">Every lead comes with verified contact details</p>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center">
            <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-sea/10 border-0">
              <CardContent className="p-0">
                <Code className="h-16 w-16 text-primary mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Showcase Your Development?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join Australia's leading property developers who trust our platform to connect with qualified buyers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark px-8 py-4 text-lg font-semibold">
                    <Code className="mr-3 h-6 w-6" />
                    Start for Free
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                    <Link to="/contact">Book a Demo</Link>
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