import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Shield, Globe, GitBranch, Terminal, Book, Download, ExternalLink, Cpu, Network, Lock, Calendar, ChevronDown, Headphones, Building, Users, Target, BarChart3, TrendingUp, TrendingDown, Eye } from "lucide-react";
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
        <div className="container mx-auto px-4 py-12 pb-8">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6 text-left py-[27px] md:text-5xl">Our Services</h2>
          </FadeInSection>
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Side - Text Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-bold mb-6 md:text-3xl">Real-Time Reporting</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground">
                      Our audience is actively searching for new apartments, townhouses, and house & land projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground">
                      Our live reporting shows who is engaging with your project and what they're interested in
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground">
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
                <div className="bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border border-primary/10 animate-fade-in overflow-hidden w-full max-w-full p-3 sm:p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 lg:mb-6 gap-2">
                    <div className="w-full sm:w-auto">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground truncate">Project Overview</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Welcome back. Here's what's happening with your projects.</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white flex-shrink-0 bg-orange-500 px-2 py-1 rounded-md hover:bg-orange-600 transition-colors cursor-pointer">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="whitespace-nowrap">View Report</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full text-center">
                    {/* Total Projects */}
                    <div className="bg-card border rounded-lg p-2 sm:p-3 min-w-0 w-full flex flex-col justify-between h-full">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-orange-100 rounded flex-shrink-0">
                            <Building className="h-3 w-3 text-orange-600" />
                          </div>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground leading-tight">Total Projects</span>
                      </div>
                      <div className="mt-auto">
                        <div className="text-lg sm:text-xl font-bold text-foreground">12</div>
                      </div>
                    </div>

                    {/* Leads This Month */}
                    <div className="bg-card border rounded-lg p-2 sm:p-3 min-w-0 w-full flex flex-col justify-between h-full">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-green-100 rounded flex-shrink-0">
                            <Users className="h-3 w-3 text-green-600" />
                          </div>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground leading-tight">New Leads Acquired</span>
                      </div>
                      <div className="mt-auto">
                        <div className="text-lg sm:text-xl font-bold text-foreground">248</div>
                      </div>
                    </div>

                    {/* Conversion Rate */}
                    <div className="bg-card border rounded-lg p-2 sm:p-3 min-w-0 w-full flex flex-col justify-between h-full">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-yellow-100 rounded flex-shrink-0">
                            <Target className="h-3 w-3 text-yellow-600" />
                          </div>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground leading-tight">Conversion Rate</span>
                      </div>
                      <div className="mt-auto">
                        <div className="text-lg sm:text-xl font-bold text-foreground">12.3%</div>
                      </div>
                    </div>

                    {/* Active Campaigns */}
                    <div className="bg-card border rounded-lg p-2 sm:p-3 min-w-0 w-full flex flex-col justify-between h-full">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-blue-100 rounded flex-shrink-0">
                            <BarChart3 className="h-3 w-3 text-blue-600" />
                          </div>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground leading-tight">Active Campaigns</span>
                      </div>
                      <div className="mt-auto">
                        <div className="text-lg sm:text-xl font-bold text-foreground">8</div>
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
      <section className="relative overflow-hidden py-[8px]">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-primary/5 via-sea/10 to-background/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb)/0.1),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center py-[63px]">
              <div className="w-full">
                <div className="bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border border-primary/10 overflow-x-hidden group hover:shadow-2xl sm:hover:scale-[1.02] transition-all duration-500">
                  <div className="p-4 sm:p-6">
                    {/* Enhanced header with status badges */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <h3 className="text-sm sm:text-base md:text-xl font-bold text-foreground">Lead Management</h3>
                      </div>
                      <div className="flex gap-1 sm:gap-2 flex-wrap">
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transition-colors text-xs">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                          Live
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                          342 Today
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Enhanced stats section */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg group-hover:shadow-md transition-all duration-300">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 animate-fade-in">87</div>
                        <div className="text-xs text-green-600/70">New Leads</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg group-hover:shadow-md transition-all duration-300">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 animate-fade-in" style={{
                        animationDelay: '0.2s'
                      }}>94%</div>
                        <div className="text-xs text-blue-600/70">Qualified</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg group-hover:shadow-md transition-all duration-300">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 animate-fade-in" style={{
                        animationDelay: '0.4s'
                      }}>23</div>
                        <div className="text-xs text-orange-600/70">Converting</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <div className="w-full space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm font-medium border-b pb-2 text-muted-foreground">
                          <span>DATE</span>
                          <span>BUYER</span>
                          <span>STATUS</span>
                        </div>
                        {[{
                        date: '10/09',
                        name: 'Emma Wilson',
                        status: 'Hot',
                        color: 'red'
                      }, {
                        date: '10/09',
                        name: 'James Chen',
                        status: 'Warm',
                        color: 'orange'
                      }, {
                        date: '09/09',
                        name: 'Sarah Kim',
                        status: 'Hot',
                        color: 'red'
                      }, {
                        date: '09/09',
                        name: 'Michael Ross',
                        status: 'Cold',
                        color: 'blue'
                      }, {
                        date: '08/09',
                        name: 'Lisa Chang',
                        status: 'Warm',
                        color: 'orange'
                      }, {
                        date: '08/09',
                        name: 'David Smith',
                        status: 'Hot',
                        color: 'red'
                      }].map((lead, i) => <div key={i} className="flex justify-between items-center py-2 border-b last:border-b-0 animate-fade-in hover:bg-muted/30 transition-colors rounded px-1 sm:px-2" style={{
                        animationDelay: `${i * 0.1}s`
                      }}>
                            <span className="text-xs sm:text-sm font-medium w-12 sm:w-16 flex-shrink-0">{lead.date}</span>
                            <span className="text-xs sm:text-sm blur-sm flex-1 text-center truncate px-1">{lead.name}</span>
                            <Badge variant="secondary" className={`text-xs px-1 sm:px-2 py-0.5 sm:py-1 flex-shrink-0 ${lead.color === 'red' ? 'bg-red-100 text-red-700' : lead.color === 'orange' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                              {lead.status}
                            </Badge>
                          </div>)}
                      </div>
                      
                      <div className="w-full bg-gradient-to-br from-primary/5 to-sea/5 p-3 sm:p-4 rounded-lg border border-primary/20 backdrop-blur-sm">
                        <div className="flex items-start gap-2 sm:gap-4">
                          <div className="relative flex-shrink-0">
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-sea rounded-full flex items-center justify-center animate-pulse shadow-lg">
                              <span className="text-white text-xs sm:text-sm font-bold">B</span>
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white animate-bounce"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 sm:gap-2 mb-1 flex-wrap">
                              <h4 className="font-semibold text-xs sm:text-sm">Buyer</h4>
                              <Badge className="bg-red-100 text-red-700 text-xs">Hot Lead</Badge>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground truncate">buyer@email.com</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">+61 412 345 678</p>
                            <div className="mt-2 sm:mt-3 space-y-1">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                <span className="text-xs text-muted-foreground truncate">First Home Buyer</span>
                              </div>
                              <div className="flex items-center gap-1 sm:gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                <span className="text-xs text-muted-foreground truncate">Budget: $750K - $850K</span>
                              </div>
                              <div className="flex items-center gap-1 sm:gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                                <span className="text-xs text-muted-foreground truncate">2 Bed / 2 Bath / 1 Car</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center mt-4 sm:mt-6">
                          <div className="flex gap-1 sm:gap-2">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs px-2 sm:px-3 py-1">
                              Contact
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs px-2 sm:px-3 py-1">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-bold mb-6 md:text-3xl text-2xl">High-Intent Leads</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-base">
                      Get verified buyer enquiries with real intent
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-base">
                      Every YepHome lead is AI-qualified and contact-ready
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-base">
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
      <section className="relative overflow-hidden py-[34px]">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-primary/5 via-sea/10 to-background/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(var(--sea-rgb)/0.1),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Enhanced Website Mockup */}
              <div>
                <div className="bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border border-sea/10 overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                  <div className="p-6">
                    {/* Enhanced header with status badges */}
                    <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">Custom Website</h3>
                      </div>
                    </div>
                    
                    {/* Enhanced browser mockup with realistic content */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors cursor-pointer"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 transition-colors cursor-pointer"></div>
                        </div>
                        <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-muted-foreground border shadow-sm">
                          <span className="text-green-600">🔒</span> yourproject.com.au
                        </div>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 bg-slate-300 rounded hover:bg-slate-400 transition-colors cursor-pointer"></div>
                          <div className="w-4 h-4 bg-slate-300 rounded hover:bg-slate-400 transition-colors cursor-pointer"></div>
                        </div>
                      </div>
                      
                      {/* Realistic website content with scroll animation */}
                      <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                        <div className="space-y-0">
                          {/* Hero section mockup */}
                          <div className="relative h-24 bg-gradient-to-r from-primary to-sea p-4 flex items-center justify-center">
                            <div className="text-white text-lg font-bold animate-fade-in">YOUR PROJECT</div>
                            <div className="absolute top-2 right-2 w-16 h-3 bg-white/20 rounded animate-pulse"></div>
                          </div>
                          
                          {/* Content sections */}
                          <div className="p-4 space-y-3">
                            {/* Navigation */}
                            <div className="flex gap-2 justify-center">
                              <div className="h-2 bg-primary/30 rounded px-3 animate-pulse text-xs"></div>
                              <div className="h-2 bg-muted rounded px-3 animate-pulse" style={{
                              animationDelay: '0.1s'
                            }}></div>
                              <div className="h-2 bg-muted rounded px-3 animate-pulse" style={{
                              animationDelay: '0.2s'
                            }}></div>
                              <div className="h-2 bg-muted rounded px-3 animate-pulse" style={{
                              animationDelay: '0.3s'
                            }}></div>
                            </div>
                            
                            {/* Image gallery */}
                            <div className="grid grid-cols-3 gap-1">
                              <div className="h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded animate-pulse hover:scale-105 transition-transform cursor-pointer" style={{
                              animationDelay: '0.2s'
                            }}></div>
                              <div className="h-8 bg-gradient-to-br from-green-100 to-green-200 rounded animate-pulse hover:scale-105 transition-transform cursor-pointer" style={{
                              animationDelay: '0.4s'
                            }}></div>
                              <div className="h-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded animate-pulse hover:scale-105 transition-transform cursor-pointer" style={{
                              animationDelay: '0.6s'
                            }}></div>
                            </div>
                            
                            {/* Text content */}
                            <div className="space-y-1">
                              <div className="h-2 bg-muted rounded animate-pulse"></div>
                              <div className="h-2 bg-muted rounded w-4/5 animate-pulse" style={{
                              animationDelay: '0.2s'
                            }}></div>
                              
                            </div>
                            
                            {/* Interactive buttons */}
                            <div className="flex gap-1 justify-center pt-2">
                              <div className="h-4 bg-gradient-to-r from-primary to-primary/80 rounded px-4 animate-pulse hover:scale-105 transition-transform cursor-pointer text-xs flex items-center text-white font-medium">Book Tour</div>
                              <div className="h-4 bg-gradient-to-r from-sea to-sea/80 rounded px-4 animate-pulse hover:scale-105 transition-transform cursor-pointer" style={{
                              animationDelay: '0.2s'
                            }}></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Scroll indicator */}
                        <div className="flex justify-center p-2">
                          <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                            <div className="w-3 h-full bg-primary rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Text Content */}
              <div>
                <h2 className="font-bold mb-6 md:text-3xl text-2xl">Branded Project Websites</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-base">
                      Seamlessly connect it with YepHome to boost exposure and capture more enquiries
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-base">
                      Drive buyer engagement with a professional online presence tailored to your development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-base">
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