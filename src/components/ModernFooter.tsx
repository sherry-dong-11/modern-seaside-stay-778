import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function ModernFooter() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container pt-20 pb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <img 
                  src="/lovable-uploads/ec1d0529-2ae8-4481-8329-b97ea749e03f.png" 
                  alt="YEPHOME" 
                  className="h-10 w-auto mb-6 brightness-0 invert"
                />
                <p className="text-gray-300 leading-relaxed mb-6">
                  Australia's premier platform for off-the-plan properties. 
                  Discover your dream home with cutting-edge technology and expert guidance.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About us</span>
                </Link>
                <Link 
                  to="/faq" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">FAQ's</span>
                </Link>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", name: "Facebook" },
                  { icon: Instagram, href: "#", name: "Instagram" },
                  { icon: Twitter, href: "#", name: "Twitter" }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-white hover:bg-orange-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6 relative">
                {t.footer.quickLinks}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "New Home", path: "/apartments" },
                  { name: "Sold", path: "/sold" },
                  { name: "Virtual Tours", path: "/virtual-tours" },
                  { name: "Insights", path: "/insights" },
                  { name: "Professionals", path: "/for-developers" }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6 relative">
                {t.footer.contact}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
              </h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 mt-1 group-hover:bg-orange-500/30 transition-colors">
                    <MapPin className="w-3 h-3 text-orange-400" />
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Level 12, 120 Collins Street<br />
                    Melbourne, VIC 3000<br />
                    Australia
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 group-hover:bg-orange-500/30 transition-colors">
                    <Phone className="w-3 h-3 text-orange-400" />
                  </div>
                  <a href="tel:+61381234567" className="text-gray-300 hover:text-white transition-colors text-sm">
                    +61 3 8123 4567
                  </a>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mr-4 group-hover:bg-orange-500/30 transition-colors">
                    <Mail className="w-3 h-3 text-orange-400" />
                  </div>
                  <a href="mailto:info@yephome.com.au" className="text-gray-300 hover:text-white transition-colors text-sm">
                    info@yephome.com.au
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6 relative">
                {t.footer.newsletter}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {t.footer.newsletterDesc}
              </p>
              
              <motion.form 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder={t.footer.yourEmail}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/15 transition-all duration-300"
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {t.footer.subscribe}
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bottom section */}
        <motion.div 
          className="border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="container py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                &copy; {currentYear} YEPHOME. All rights reserved.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
              >
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span className="group-hover:underline underline-offset-4 decoration-orange-500">
                    Privacy Policy
                  </span>
                </Link>
                <Link 
                  to="/terms-conditions" 
                  className="text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span className="group-hover:underline underline-offset-4 decoration-orange-500">
                    Terms & Conditions
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}