import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building2, Globe, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

export default function FuturisticNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newHomeDropdownOpen, setNewHomeDropdownOpen] = useState(false);
  const [professionalsDropdownOpen, setProfessionalsDropdownOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-2xl border-b border-primary-200/50 shadow-xl' 
          : 'bg-white/10 backdrop-blur-xl border-b border-white/20'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="relative"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-gradient rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-pink/20 rounded-xl blur-xl" />
              </motion.div>
              <span className={`text-2xl font-bold transition-colors ${
                scrolled ? 'text-primary-600' : 'text-white'
              }`}>YepHome</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* New Home Dropdown */}
            <div className="relative group">
              <motion.button
                className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                } backdrop-blur-xl`}
                whileHover={{ scale: 1.05 }}
              >
                <span>New Home</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
              >
                <div className="py-2">
                  {newHomeDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? `${scrolled ? 'text-primary-600 bg-primary-100' : 'text-white bg-white/20'} backdrop-blur-xl`
                      : `${scrolled ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50' : 'text-white/80 hover:text-white hover:bg-white/10'} backdrop-blur-xl`
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Professionals Dropdown */}
            <div className="relative group">
              <motion.button
                className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                } backdrop-blur-xl`}
                whileHover={{ scale: 1.05 }}
              >
                <span>Professionals</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
              >
                <div className="py-2">
                  {professionalsDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <LanguageSelector />
              <ThemeToggle />
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="sm" 
                className={`hidden md:inline-flex px-6 py-2 rounded-2xl font-semibold transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-gradient text-white hover:from-primary-600 hover:to-accent-gradient/90' 
                    : 'bg-white/20 text-white backdrop-blur-xl hover:bg-white/30 border border-white/30'
                }`}
              >
                Book Now
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: '80px' }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white/95 backdrop-blur-2xl border-l border-white/20 shadow-2xl"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">New Home</h3>
                    <div className="space-y-2 ml-4">
                      {newHomeDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block text-gray-600 hover:text-primary-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professionals</h3>
                    <div className="space-y-2 ml-4">
                      {professionalsDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block text-gray-600 hover:text-primary-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Button className="w-full bg-gradient-to-r from-primary-500 to-accent-gradient text-white rounded-2xl">
                    Book Now
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <LanguageSelector />
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
