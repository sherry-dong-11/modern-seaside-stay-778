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

  const apis = [
    {
      icon: Database,
      title: "Property Data API",
      description: "Access comprehensive property listings, pricing data, and market analytics",
      version: "v2.1",
      status: "Active"
    },
    {
      icon: Globe,
      title: "Location Services API",
      description: "Geocoding, mapping, and neighborhood data services",
      version: "v1.8", 
      status: "Active"
    },
    {
      icon: Shield,
      title: "Authentication API",
      description: "Secure user authentication and authorization management",
      version: "v3.0",
      status: "Beta"
    },
    {
      icon: Zap,
      title: "Real-time Updates API",
      description: "WebSocket connections for live property updates and notifications",
      version: "v1.5",
      status: "Active"
    }
  ];

  const tools = [
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Command line interface for rapid development and deployment"
    },
    {
      icon: Code,
      title: "SDK Libraries",
      description: "Pre-built libraries for JavaScript, Python, PHP, and .NET"
    },
    {
      icon: GitBranch,
      title: "Code Samples",
      description: "Ready-to-use code examples and integration templates"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides, tutorials, and API reference"
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: "High Performance",
      description: "99.9% uptime with sub-100ms response times globally"
    },
    {
      icon: Network,
      title: "Scalable Infrastructure", 
      description: "Auto-scaling architecture to handle any volume of requests"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption"
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
              Build the future of <span className="bg-gradient-to-r from-primary to-sea bg-clip-text text-transparent">property technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Powerful APIs, comprehensive tools, and detailed documentation to integrate property data and services into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark px-8 py-4 text-lg font-semibold">
                <Code className="mr-3 h-6 w-6" />
                Get API Keys
                <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                <Book className="mr-3 h-6 w-6" />
                View Documentation
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* APIs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Available APIs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Robust, well-documented APIs that power modern property applications
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apis.map((api, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-start justify-between">
                      <api.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <div className="flex items-center gap-2">
                        <Badge variant={api.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {api.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {api.version}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{api.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed mb-4">{api.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Book className="h-4 w-4 mr-2" />
                        Docs
                      </Button>
                      <Button variant="outline" size="sm">
                        <Terminal className="h-4 w-4 mr-2" />
                        Try It
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Developer Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, test, and deploy applications quickly
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    <tool.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-3">{tool.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tool.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-sea/5">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade infrastructure built for modern applications
            </p>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 hover:bg-background transition-colors">
                    <feature.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quick Start</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with our APIs in minutes
            </p>
          </FadeInSection>
          
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <Card className="bg-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Terminal className="h-5 w-5 mr-2" />
                    Property Search API Example
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Initialize the API client
const yepApi = new YEPPropertyAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Search for properties
const properties = await yepApi.properties.search({
  location: 'Sydney, NSW',
  propertyType: 'apartment',
  priceRange: { min: 500000, max: 1000000 },
  bedrooms: { min: 2 }
});

console.log(\`Found \${properties.length} properties\`);
properties.forEach(property => {
  console.log(\`\${property.address} - $\${property.price}\`);
});`}</code>
                  </pre>
                </CardContent>
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
                  Ready to Start Building?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of developers already building amazing property applications with our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark px-8 py-4 text-lg font-semibold">
                    <Code className="mr-3 h-6 w-6" />
                    Get Started Free
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                    <Link to="/contact">Contact Sales</Link>
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