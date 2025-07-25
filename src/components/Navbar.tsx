
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newHomeDropdownOpen, setNewHomeDropdownOpen] = useState(false);
  const [professionalsDropdownOpen, setProfessionalsDropdownOpen] = useState(false);
  const [newHomeHoverTimeout, setNewHomeHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [professionalsHoverTimeout, setProfessionalsHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const newHomeDropdownItems = [
    { name: "Apartments", path: "/apartments" },
    { name: "Townhouses", path: "/townhouses" },
    { name: "House & Land", path: "/house-land" }
  ];

  const professionalsDropdownItems = [
    { name: "For Developers", path: "/for-developers" },
    { name: "For Agents", path: "/for-agents" }
  ];

  const navLinks = [
    { name: "Sold", path: "/sold" },
    { name: "Virtual Tours", path: "/virtual-tours" },
    { name: "Insights", path: "/insights" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  // Determine text colors based on route and scroll state
  const isHomepage = location.pathname === "/";
  const getTextColor = () => {
    if (!isHomepage) return "text-foreground hover:text-primary";
    return scrolled ? "text-foreground hover:text-primary" : "text-white";
  };
  const getTextColorMobile = () => {
    if (!isHomepage) return "text-foreground hover:text-primary";
    return scrolled ? "text-foreground hover:text-primary" : "text-white hover:opacity-80";
  };
  
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/80 dark:bg-card/80 backdrop-blur-lg py-3 shadow-md" : "bg-transparent py-5")}>
      <nav className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/45e89a4e-b7de-45de-9bb3-c273d5f1e5c1.png" 
              alt="YEP" 
              className="h-8 w-auto transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {/* New Home Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => {
              if (newHomeHoverTimeout) clearTimeout(newHomeHoverTimeout);
              setNewHomeDropdownOpen(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => setNewHomeDropdownOpen(false), 150);
              setNewHomeHoverTimeout(timeout);
            }}
          >
            <button className={cn("font-medium transition-colors hover:opacity-80 flex items-center gap-1", getTextColor())}>
              New Home
              <ChevronDown className={cn("h-4 w-4 transition-transform", newHomeDropdownOpen && "rotate-180")} />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={cn(
                "absolute top-full left-0 mt-2 w-48 bg-white dark:bg-card rounded-lg shadow-lg border z-50 transition-all duration-200",
                newHomeDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
              )}
              onMouseEnter={() => {
                if (newHomeHoverTimeout) clearTimeout(newHomeHoverTimeout);
                setNewHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setNewHomeDropdownOpen(false), 150);
                setNewHomeHoverTimeout(timeout);
              }}
            >
              <ul className="py-2">
                {newHomeDropdownItems.map(item => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="block px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          
          {/* Other Nav Links */}
          {navLinks.map(link => (
            <li key={link.name} className="relative">
              <Link to={link.path} className={cn("font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full", getTextColorMobile())}>
                {link.name}
              </Link>
            </li>
          ))}
          
          {/* Professionals Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => {
              if (professionalsHoverTimeout) clearTimeout(professionalsHoverTimeout);
              setProfessionalsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => setProfessionalsDropdownOpen(false), 150);
              setProfessionalsHoverTimeout(timeout);
            }}
          >
            <button className={cn("font-medium transition-colors hover:opacity-80 flex items-center gap-1", getTextColor())}>
              Professionals
              <ChevronDown className={cn("h-4 w-4 transition-transform", professionalsDropdownOpen && "rotate-180")} />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={cn(
                "absolute top-full left-0 mt-2 w-48 bg-white dark:bg-card rounded-lg shadow-lg border z-50 transition-all duration-200",
                professionalsDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
              )}
              onMouseEnter={() => {
                if (professionalsHoverTimeout) clearTimeout(professionalsHoverTimeout);
                setProfessionalsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setProfessionalsDropdownOpen(false), 150);
                setProfessionalsHoverTimeout(timeout);
              }}
            >
              <ul className="py-2">
                {professionalsDropdownItems.map(item => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="block px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-2">
          <div className={cn("transition-colors", !isHomepage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white"))}>
            <LanguageSelector />
          </div>
          <div className={cn("transition-colors", !isHomepage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white"))}>
            <ThemeToggle />
          </div>
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link to="/login">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <div className={cn("transition-colors", !isHomepage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white"))}>
            <LanguageSelector />
          </div>
          <div className={cn("transition-colors", !isHomepage ? "text-foreground" : (scrolled ? "text-foreground" : "text-white"))}>
            <ThemeToggle />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={cn("rounded-full transition-colors", !isHomepage ? "text-foreground hover:text-primary" : (scrolled ? "text-foreground hover:text-primary" : "text-white hover:opacity-80"))}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("fixed inset-y-0 right-0 w-3/4 max-w-sm bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-end mb-8">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="space-y-6">
                {/* New Home Section */}
                <li>
                  <div className="text-lg font-medium mb-3">New Home</div>
                  <ul className="space-y-2 ml-4">
                    {newHomeDropdownItems.map(item => (
                      <li key={item.name}>
                        <Link 
                          to={item.path} 
                          className="text-base text-muted-foreground hover:text-primary transition-colors" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                
                {/* Other Nav Links */}
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
                
                {/* Professionals Section */}
                <li>
                  <div className="text-lg font-medium mb-3">Professionals</div>
                  <ul className="space-y-2 ml-4">
                    {professionalsDropdownItems.map(item => (
                      <li key={item.name}>
                        <Link 
                          to={item.path} 
                          className="text-base text-muted-foreground hover:text-primary transition-colors" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            
            <Button asChild className="w-full" variant="outline">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <User className="h-4 w-4 mr-2" />
                Login / Sign up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>;
}
