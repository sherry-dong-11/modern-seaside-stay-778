import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PacasoNavbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              scrolled || !isHome 
                ? "bg-primary text-white" 
                : "bg-white text-primary"
            }`}>
              <span className="font-bold text-lg">Y</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              scrolled || !isHome
                ? "text-neutral-900 dark:text-white"
                : "text-white"
            }`}>
              YEPHOME
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: t.nav.apartments, href: "/apartments" },
              { label: t.nav.gallery, href: "/gallery" },
              { label: t.nav.amenities, href: "/amenities" },
              { label: t.nav.contact, href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative font-medium text-sm tracking-wide transition-colors group ${
                  scrolled || !isHome
                    ? "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative">
              <LanguageSelector />
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Login/Signup Button */}
            <Button 
              asChild
              className="bg-primary hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg"
            >
              <Link to="/contact">
                <User className="w-4 h-4 mr-2" />
                Login / Signup
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled || !isHome
                ? "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="container py-6">
              <nav className="space-y-4">
                {[
                  { label: t.nav.apartments, href: "/apartments" },
                  { label: t.nav.gallery, href: "/gallery" },
                  { label: t.nav.amenities, href: "/amenities" },
                  { label: t.nav.contact, href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors py-2 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center space-x-4">
                  <LanguageSelector />
                  <ThemeToggle />
                </div>
                
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <User className="w-4 h-4 mr-2" />
                    Login / Signup
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}