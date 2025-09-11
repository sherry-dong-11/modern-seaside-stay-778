import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Shield, Globe, GitBranch, Terminal, Book, Download, ExternalLink, Cpu, Network, Lock, Calendar, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";
export default function DeveloperPortal() {
  const {
    t
  } = useLanguage();
  const services = [{
    icon: Database,
    title: "Off-the-Plan Property Marketing",
    description: "Showcase your new developments on Australia's largest off-the-plan property platform",
    version: "Premium",
    status: "Active"
  }, {
    icon: Globe,
    title: "Digital Marketing Solutions",
    description: "Comprehensive digital marketing services for property developers and agents",
    version: "Enterprise",
    status: "Active"
  }, {
    icon: Shield,
    title: "Lead Qualification System",
    description: "Advanced lead qualification with SMS verified contacts and buyer tracking",
    version: "Pro",
    status: "Active"
  }, {
    icon: Zap,
    title: "Real-time Analytics Portal",
    description: "Live reporting dashboard for campaign insights and buyer interactions",
    version: "Analytics+",
    status: "Active"
  }];
  const solutions = [{
    icon: Terminal,
    title: "Developer Portal Access",
    description: "Comprehensive portal for managing listings, leads, and campaign performance"
  }, {
    icon: Code,
    title: "Content Creation Services",
    description: "Professional content and storytelling to showcase your developments"
  }, {
    icon: GitBranch,
    title: "Market Insights Reports",
    description: "Industry research, market trends, and buyer behavior analytics"
  }, {
    icon: Book,
    title: "Training & Support",
    description: "Comprehensive training programs and dedicated account management"
  }];
  const advantages = [{
    icon: Cpu,
    title: "Targeted Audience",
    description: "100% of our audience is specifically looking for new apartments & townhouses"
  }, {
    icon: Network,
    title: "Qualified Leads Only",
    description: "Every lead comes with SMS verified contact details and buyer qualification"
  }, {
    icon: Lock,
    title: "Pay-per-Lead Model",
    description: "Only pay when we connect you to qualified, interested property buyers"
  }];
  return <div className="min-h-screen bg-background">
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-sea/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <FadeInSection className="text-center max-w-5xl mx-auto">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              The best place to sell <span className="bg-gradient-to-r from-primary to-sea bg-clip-text text-transparent">new and off-the-plan property</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Showcase your projects on Australia's largest audience and platform dedicated to off-the-plan apartment and townhouse buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark px-8 py-4 text-lg font-semibold">
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

      {/* Live Reporting Service */}
      <section className="bg-muted/30 py-0">
        <div className="container mx-auto px-[28px] pt-16 pb-4 py-[43px]">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 py-0 text-left md:text-4xl">Our Services</h2>
          </FadeInSection>
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Buyers looking for established property are less likely to purchase off-the-plan
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      All of Apartments.com.au's audience is looking specifically for new apartment & townhouses
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Access live reporting for real time campaign insights
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark">
                    Start for free
                  </Button>
                  <Button variant="outline">
                    Book a demo →
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="bg-background rounded-xl shadow-lg p-6 border">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Reporting</h3>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg font-medium">SUMMARY</span>
                      <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-lg font-medium cursor-pointer hover:bg-muted/80">PROJECTS</span>
                      <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-lg font-medium cursor-pointer hover:bg-muted/80">LEADS</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                      <Select defaultValue="urban-village">
                        <SelectTrigger className="w-full bg-background border-muted">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-muted shadow-lg z-50">
                          <SelectItem value="urban-village">Urban Village + 5 projects</SelectItem>
                          <SelectItem value="city-central">City Central + 3 projects</SelectItem>
                          <SelectItem value="harbour-view">Harbour View + 7 projects</SelectItem>
                          <SelectItem value="riverside">Riverside Development + 2 projects</SelectItem>
                          <SelectItem value="all-projects">All Projects</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Select defaultValue="current-quarter">
                        <SelectTrigger className="w-full bg-background border-muted">
                          <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-muted shadow-lg z-50">
                          <SelectItem value="current-quarter">16/06/2023 - 16/08/2023</SelectItem>
                          <SelectItem value="last-quarter">16/03/2023 - 15/06/2023</SelectItem>
                          <SelectItem value="last-6-months">16/02/2023 - 16/08/2023</SelectItem>
                          <SelectItem value="this-year">01/01/2023 - 31/12/2023</SelectItem>
                          <SelectItem value="custom">Custom Date Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    {/* Dynamic Bar Chart */}
                    <div className="relative h-40 flex items-end justify-center gap-3 px-4">
                      <div className="flex flex-col items-center gap-1">
                        <div 
                          className="w-12 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm animate-grow-up"
                          style={{
                            height: '80px',
                            animationDelay: '0s'
                          }}
                        ></div>
                        <div className="text-xs text-muted-foreground">Q1</div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1">
                        <div 
                          className="w-12 bg-gradient-to-t from-orange-400 to-yellow-500 rounded-t-sm animate-grow-up"
                          style={{
                            height: '45px',
                            animationDelay: '0.3s'
                          }}
                        ></div>
                        <div className="text-xs text-muted-foreground">Q1</div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1">
                        <div 
                          className="w-12 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm animate-grow-up"
                          style={{
                            height: '120px',
                            animationDelay: '0.6s'
                          }}
                        ></div>
                        <div className="text-xs text-muted-foreground">Q2</div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1">
                        <div 
                          className="w-12 bg-gradient-to-t from-orange-400 to-yellow-500 rounded-t-sm animate-grow-up"
                          style={{
                            height: '60px',
                            animationDelay: '0.9s'
                          }}
                        ></div>
                        <div className="text-xs text-muted-foreground">Q2</div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1">
                        <div 
                          className="w-12 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm animate-grow-up"
                          style={{
                            height: '95px',
                            animationDelay: '1.2s'
                          }}
                        ></div>
                        <div className="text-xs text-muted-foreground">Q3</div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1">
                        <div 
                          className="w-12 bg-gradient-to-t from-orange-400 to-yellow-500 rounded-t-sm animate-grow-up"
                          style={{
                            height: '35px',
                            animationDelay: '1.5s'
                          }}
                        ></div>
                        <div className="text-xs text-muted-foreground">Q3</div>
                      </div>
                    </div>
                    
                    {/* Dynamic Pie Chart */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          {/* Blue section (50%) */}
                          <path
                            d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z"
                            fill="rgb(59 130 246)"
                            className="opacity-0 animate-fade-in"
                            style={{
                              animationDelay: '0.5s',
                              animationFillMode: 'forwards'
                            }}
                          />
                          {/* Pink section (30%) */}
                          <path
                            d="M 50 50 L 90 50 A 40 40 0 0 1 62 86 Z"
                            fill="rgb(236 72 153)"
                            className="opacity-0 animate-fade-in"
                            style={{
                              animationDelay: '1s',
                              animationFillMode: 'forwards'
                            }}
                          />
                          {/* Orange section (20%) */}
                          <path
                            d="M 50 50 L 62 86 A 40 40 0 0 1 50 10 Z"
                            fill="rgb(251 146 60)"
                            className="opacity-0 animate-fade-in"
                            style={{
                              animationDelay: '1.5s',
                              animationFillMode: 'forwards'
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Lead Management Service */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-background rounded-xl shadow-lg border overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex gap-1">
                        <div className="w-1 h-8 bg-primary rounded-full animate-pulse"></div>
                        <div className="w-1 h-8 bg-primary/60 rounded-full animate-pulse" style={{
                        animationDelay: '0.2s'
                      }}></div>
                        <div className="w-1 h-8 bg-primary/40 rounded-full animate-pulse" style={{
                        animationDelay: '0.4s'
                      }}></div>
                        <div className="w-1 h-8 bg-primary/20 rounded-full animate-pulse" style={{
                        animationDelay: '0.6s'
                      }}></div>
                        <div className="w-1 h-8 bg-primary/10 rounded-full animate-pulse" style={{
                        animationDelay: '0.8s'
                      }}></div>
                      </div>
                      <h3 className="text-xl font-semibold">Leads</h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm font-medium border-b pb-2">
                        <span>DATE</span>
                        <span>BUYER</span>
                        <span>CONTACT</span>
                      </div>
                      {[...Array(6)].map((_, i) => <div key={i} className="flex justify-between items-center py-2 border-b last:border-b-0 animate-fade-in" style={{
                      animationDelay: `${i * 0.2}s`
                    }}>
                          <div className="w-16 h-3 bg-muted rounded animate-pulse"></div>
                          <div className="w-20 h-3 bg-muted rounded animate-pulse"></div>
                          <div className="w-24 h-3 bg-muted rounded animate-pulse"></div>
                        </div>)}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 border-t">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-sm font-bold">LL</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Leady Leaderson</h4>
                        <p className="text-sm text-muted-foreground">leady_l@leadmail.com</p>
                        <p className="text-sm text-muted-foreground">+614 888 888</p>
                        <p className="text-sm text-muted-foreground">Next home buyer</p>
                        <p className="text-sm text-muted-foreground">1 Bed / 1 Bath / 1 Car</p>
                        <p className="text-sm text-muted-foreground">72m² / $685,000</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-bounce">
                        <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Is your cost per lead getting out of control?
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Reduce the risk on your marketing investment
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Every Apartments.com.au lead comes with an SMS verified phone number
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Track buyer interactions so you contact at the perfect time
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-primary to-sea hover:from-primary-dark hover:to-sea-dark">
                    Start for free
                  </Button>
                  <Button variant="outline">
                    Book a demo →
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
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
            {solutions.map((solution, index) => <FadeInSection key={index} delay={index * 0.1}>
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
              </FadeInSection>)}
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
            {advantages.map((advantage, index) => <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 hover:bg-background transition-colors">
                    <advantage.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </FadeInSection>)}
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
    </div>;
}