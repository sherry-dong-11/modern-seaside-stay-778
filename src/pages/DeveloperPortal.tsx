import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Shield, Globe, GitBranch, Terminal, Book, Download, ExternalLink, Cpu, Network, Lock, Calendar, ChevronDown, Headphones } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import FadeInSection from "@/components/FadeInSection";
import PartnersSection from "@/components/PartnersSection";
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
              The smartest way to market and sell <span className="bg-gradient-to-r from-primary to-sea bg-clip-text text-transparent">new developments</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto md:text-xl">
              Showcase your projects on YepHome — Australia's data-driven platform that connects you with serious off-the-plan buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                Log into Portal
                <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                <Headphones className="mr-3 h-6 w-6" />
                Customer Support
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Partners Section */}
      <FadeInSection>
        <PartnersSection />
      </FadeInSection>

      {/* Live Reporting Service */}
      <section className="bg-muted/30 py-0">
        <div className="container mx-auto px-[28px] pt-16 pb-4 py-[43px]">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 py-0 text-left md:text-5xl">Our Services</h2>
          </FadeInSection>
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Side - Text Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6 md:text-3xl">Real-Time Reporting</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Unlike buyers of established homes, YepHome's audience is actively searching for new apartments, townhouses, and house & land projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Our live reporting shows who is engaging with your project and what they're interested in
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Gain real-time insights into campaign performance and buyer demand to drive faster sales
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    Start for free
                  </Button>
                  <Button variant="outline">
                    Book a demo →
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Reporting Module */}
              <div className="order-1 lg:order-2">
                <div className="bg-background rounded-xl shadow-lg p-6 border">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
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
                      <h3 className="font-bold text-xl">Reporting</h3>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg font-medium">SUMMARY</span>
                      <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-lg font-medium cursor-pointer hover:bg-muted/80">PROJECTS</span>
                      <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-lg font-medium cursor-pointer hover:bg-muted/80">LEADS</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                      <div className="w-full bg-background border border-muted rounded-md px-3 py-2 flex items-center justify-between">
                        <span className="text-sm">640 Bourke st</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="w-full bg-background border border-muted rounded-md px-3 py-2 flex items-center justify-between">
                        <span className="text-sm">10/08/2025 - 10/09/2025</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 ml-8">
                    {/* Dynamic Bar Chart */}
                    <div className="relative h-40 flex items-end justify-center gap-4 px-2 py-4 ml-4">
                      {/* Q1 Group */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-end gap-0">
                          <div className="w-10 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm animate-grow-up" style={{
                          height: '80px',
                          animationDelay: '0s'
                        }}></div>
                          <div className="w-10 bg-gradient-to-t from-orange-400 to-yellow-500 rounded-t-sm animate-grow-up" style={{
                          height: '45px',
                          animationDelay: '0.3s'
                        }}></div>
                        </div>
                        
                      </div>
                      
                      {/* Q2 Group */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-end gap-0">
                          <div className="w-10 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm animate-grow-up" style={{
                          height: '120px',
                          animationDelay: '0.6s'
                        }}></div>
                          <div className="w-10 bg-gradient-to-t from-orange-400 to-yellow-500 rounded-t-sm animate-grow-up" style={{
                          height: '60px',
                          animationDelay: '0.9s'
                        }}></div>
                        </div>
                        
                      </div>
                      
                      {/* Q3 Group */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-end gap-0">
                          <div className="w-10 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm animate-grow-up" style={{
                          height: '95px',
                          animationDelay: '1.2s'
                        }}></div>
                          <div className="w-10 bg-gradient-to-t from-orange-400 to-yellow-500 rounded-t-sm animate-grow-up" style={{
                          height: '35px',
                          animationDelay: '1.5s'
                        }}></div>
                        </div>
                        
                      </div>
                    </div>
                    
                    {/* Dynamic Pie Chart */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Blue section (50%) - 180 degrees */}
                          <path d="M 50,50 L 50,10 A 40,40 0 1,1 50,90 Z" fill="rgb(59 130 246)" className="opacity-0 animate-fade-in" style={{
                          animationDelay: '0.5s',
                          animationFillMode: 'forwards'
                        }} />
                          {/* Pink section (30%) - 108 degrees */}
                          <path d="M 50,50 L 50,90 A 40,40 0 0,1 11.27,69.44 Z" fill="rgb(236 72 153)" className="opacity-0 animate-fade-in" style={{
                          animationDelay: '1s',
                          animationFillMode: 'forwards'
                        }} />
                          {/* Orange section (20%) - 72 degrees */}
                          <path d="M 50,50 L 11.27,69.44 A 40,40 0 0,1 50,10 Z" fill="rgb(251 146 60)" className="opacity-0 animate-fade-in" style={{
                          animationDelay: '1.5s',
                          animationFillMode: 'forwards'
                        }} />
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
      <section className="py-20 bg-gradient-to-br from-primary/5 via-sea/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="group">
                <div className="bg-background rounded-xl shadow-xl border border-primary/10 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:scale-[1.02]">
                  {/* Header with enhanced animations */}
                  <div className="bg-gradient-to-r from-primary/10 to-sea/10 p-6 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-10 bg-gradient-to-t from-primary to-primary/60 rounded-full animate-pulse"></div>
                          <div className="w-2 h-10 bg-gradient-to-t from-sea to-sea/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-10 bg-gradient-to-t from-primary/60 to-primary/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-sea bg-clip-text text-transparent">Leads Dashboard</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-muted-foreground">Live Updates</span>
                          </div>
                        </div>
                      </div>
                      {/* Stats badges */}
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          <span className="animate-pulse">●</span> 23 Active
                        </Badge>
                        <Badge variant="outline" className="border-sea/30 text-sea">
                          +12 Today
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex gap-6">
                      {/* Left side - Lead list with enhanced animations */}
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between text-xs font-semibold text-muted-foreground border-b pb-2 uppercase tracking-wide">
                          <span>Date</span>
                          <span>Contact</span>
                          <span>Status</span>
                        </div>
                        {[
                          { name: "Sarah Chen", email: "s.chen@email.com", status: "Hot", color: "bg-red-500", date: "Oct 12" },
                          { name: "Michael Wong", email: "m.wong@email.com", status: "Warm", color: "bg-orange-500", date: "Oct 11" },
                          { name: "Emma Davis", email: "e.davis@email.com", status: "New", color: "bg-blue-500", date: "Oct 11" },
                          { name: "James Liu", email: "j.liu@email.com", status: "Qualified", color: "bg-green-500", date: "Oct 10" },
                          { name: "Lisa Park", email: "l.park@email.com", status: "Hot", color: "bg-red-500", date: "Oct 10" }
                        ].map((lead, i) => (
                          <div key={i} className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group/lead animate-fade-in border border-transparent hover:border-primary/10" style={{animationDelay: `${i * 0.1}s`}}>
                            <span className="text-sm font-medium text-muted-foreground group-hover/lead:text-foreground transition-colors">{lead.date}</span>
                            <div className="text-center">
                              <div className="text-sm font-semibold group-hover/lead:text-primary transition-colors">{lead.name}</div>
                              <div className="text-xs text-muted-foreground">{lead.email}</div>
                            </div>
                            <Badge className={`${lead.color} text-white text-xs px-2 py-1 group-hover/lead:scale-110 transition-transform`}>
                              {lead.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      
                      {/* Right side - Enhanced lead detail card */}
                      <div className="w-80 bg-gradient-to-br from-muted/50 to-muted/30 p-5 rounded-xl border border-primary/10 shadow-inner">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-sea rounded-full flex items-center justify-center animate-pulse flex-shrink-0 shadow-lg">
                            <span className="text-white text-sm font-bold">SC</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-foreground">Sarah Chen</h4>
                            <p className="text-sm text-primary font-medium">s.chen@email.com</p>
                            <p className="text-sm text-muted-foreground">+61 400 123 456</p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Badge className="bg-red-500 text-white text-xs">Hot Lead</Badge>
                            <Badge variant="outline" className="text-xs border-primary/30">Verified</Badge>
                          </div>
                        </div>
                        
                        {/* Enhanced lead details */}
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-muted-foreground">First-time Home Buyer</span>
                          </div>
                          <div className="bg-background/60 rounded-lg p-3 space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Preference:</span>
                              <span className="text-sm text-primary">2 Bed / 2 Bath</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Budget:</span>
                              <span className="text-sm text-green-600 font-semibold">$720,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Size:</span>
                              <span className="text-sm">85m² min</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced action button */}
                        <div className="flex justify-center">
                          <Button size="sm" className="bg-gradient-to-r from-primary to-sea hover:from-primary/90 hover:to-sea/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                            Contact Now
                            <div className="ml-2 w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent group-hover:translate-x-1 transition-transform"></div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 md:text-3xl">High-Intent Leads</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Get verified buyer enquiries with real intent
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Every YepHome lead is AI-qualified and contact-ready
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Track buyer interests and reach out at the right moment
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
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

      {/* Custom Website Service */}
      <section className="py-20 bg-gradient-to-br from-sea/5 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Enhanced Website Mockup */}
              <div className="group">
                <div className="bg-background rounded-xl shadow-xl border border-sea/10 overflow-hidden hover:shadow-2xl hover:border-sea/20 transition-all duration-500 hover:scale-[1.02]">
                  {/* Header with enhanced design */}
                  <div className="bg-gradient-to-r from-sea/10 to-primary/10 p-6 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-10 bg-gradient-to-t from-sea to-sea/60 rounded-full animate-pulse"></div>
                          <div className="w-2 h-10 bg-gradient-to-t from-primary to-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-10 bg-gradient-to-t from-sea/60 to-sea/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold bg-gradient-to-r from-sea to-primary bg-clip-text text-transparent">Website Builder</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mr-1"></div>
                              Live
                            </Badge>
                          </div>
                        </div>
                      </div>
                      {/* Performance indicators */}
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-sea/30 text-sea text-xs">99% Uptime</Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">Fast Load</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Enhanced Browser mockup */}
                    <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl p-5 shadow-inner border border-primary/10">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer"></div>
                        </div>
                        <div className="flex-1 bg-background rounded-lg px-4 py-2 text-sm text-muted-foreground shadow-inner border border-muted/50 flex items-center gap-2">
                          <Lock className="w-3 h-3 text-green-500" />
                          <span className="font-mono">yourproject.com.au</span>
                          <Badge variant="secondary" className="ml-auto text-xs bg-green-100 text-green-700">Secure</Badge>
                        </div>
                      </div>
                      
                      {/* Enhanced Website content mockup with scroll simulation */}
                      <div className="bg-background rounded-xl p-5 space-y-4 shadow-lg border border-primary/5 max-h-80 overflow-hidden relative group/content">
                        {/* Hero section */}
                        <div className="space-y-3">
                          <div className="h-8 bg-gradient-to-r from-primary via-sea to-primary rounded-lg animate-pulse shadow-sm"></div>
                          <div className="grid grid-cols-4 gap-3">
                            <div className="h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg animate-pulse shadow-sm hover:shadow-md transition-shadow" style={{animationDelay: '0.1s'}}></div>
                            <div className="h-20 bg-gradient-to-br from-sea/20 to-sea/10 rounded-lg animate-pulse shadow-sm hover:shadow-md transition-shadow" style={{animationDelay: '0.2s'}}></div>
                            <div className="h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg animate-pulse shadow-sm hover:shadow-md transition-shadow" style={{animationDelay: '0.3s'}}></div>
                            <div className="h-20 bg-gradient-to-br from-sea/20 to-sea/10 rounded-lg animate-pulse shadow-sm hover:shadow-md transition-shadow" style={{animationDelay: '0.4s'}}></div>
                          </div>
                        </div>
                        
                        {/* Content sections */}
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <div className="h-4 bg-gradient-to-r from-muted to-muted/70 rounded animate-pulse"></div>
                            <div className="h-4 bg-gradient-to-r from-muted to-muted/70 rounded w-4/5 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                            <div className="h-4 bg-gradient-to-r from-muted to-muted/70 rounded w-3/5 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          </div>
                          
                          {/* Interactive buttons */}
                          <div className="flex gap-3 pt-2">
                            <div className="h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg px-6 animate-pulse shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                              <span className="text-white text-sm font-medium">View Apartments</span>
                            </div>
                            <div className="h-10 bg-gradient-to-r from-sea to-sea/80 rounded-lg px-6 animate-pulse shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{animationDelay: '0.2s'}}>
                              <span className="text-white text-sm font-medium">Book Inspection</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional content that appears to scroll */}
                        <div className="space-y-3 opacity-70">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-16 bg-gradient-to-br from-muted/60 to-muted/40 rounded-lg animate-pulse"></div>
                            <div className="h-16 bg-gradient-to-br from-muted/60 to-muted/40 rounded-lg animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-muted/60 rounded animate-pulse"></div>
                            <div className="h-3 bg-muted/60 rounded w-3/4 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          </div>
                        </div>
                        
                        {/* Scroll indicator */}
                        <div className="absolute right-2 top-2 bottom-2 w-1 bg-muted/30 rounded-full">
                          <div className="w-full h-8 bg-primary/60 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Code preview panel */}
                      <div className="mt-4 bg-gray-900 rounded-lg p-4 text-xs text-green-400 font-mono shadow-inner">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-300">Deploying...</span>
                          <Badge variant="secondary" className="ml-auto bg-green-900 text-green-200 text-xs">97% Complete</Badge>
                        </div>
                        <div className="space-y-1 opacity-70">
                          <div>✓ Building optimized bundle...</div>
                          <div>✓ Compressing assets...</div>
                          <div className="animate-pulse">→ Deploying to CDN...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Text Content */}
              <div>
                <h2 className="text-3xl font-bold mb-6 md:text-3xl">Branded Project Websites</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Seamlessly connect it with YepHome to boost exposure and capture more enquiries
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Drive buyer engagement with a professional online presence tailored to your development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Stand out from competitors with a dedicated website that showcases your project's unique features
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
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

      {/* Why Choose Us */}
      

      {/* Success Stories */}
      

      {/* CTA Section */}
      

      <ModernFooter />
    </div>;
}