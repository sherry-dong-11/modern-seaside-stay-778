import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
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
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl py-3 shadow-2xl border-b border-border/50" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="container flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Link to="/" className="flex items-center">
            <motion.img 
              src="/lovable-uploads/45e89a4e-b7de-45de-9bb3-c273d5f1e5c1.png" 
              alt="YEP" 
              className="h-10 w-auto transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex space-x-8 items-center"
        >
          {/* Nav Links */}
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              <Link 
                to={link.path} 
                className={cn(
                  "font-medium transition-all duration-300 relative group",
                  scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex items-center space-x-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="gradient" className="rounded-full px-6">
              <Link to="/booking">{t.nav.bookNow}</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}