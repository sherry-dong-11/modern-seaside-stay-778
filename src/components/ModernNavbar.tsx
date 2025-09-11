import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import LoginDialog from "./LoginDialog";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
export default function ModernNavbar() {
  const {
    t
  } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newHomeDropdownOpen, setNewHomeDropdownOpen] = useState(false);
  const [professionalsDropdownOpen, setProfessionalsDropdownOpen] = useState(false);

  // Check if we're on a content page (not homepage)
  const isContentPage = location.pathname !== "/";
  const newHomeDropdownItems = [{
    name: "Apartments",
    path: "/apartments"
  }, {
    name: "Townhouses",
    path: "/townhouses"
  }, {
    name: "House & Land",
    path: "/house-land"
  }];
  const professionalsDropdownItems = [{
    name: "For Developers",
    path: "/for-developers"
  }, {
    name: "For Agents",
    path: "/for-agents"
  }];
  const navLinks = [{
    name: "Sold",
    path: "/sold"
  }, {
    name: "Virtual Tours",
    path: "/virtual-tours"
  }, {
    name: "Insights",
    path: "/insights"
  }, {
    name: "Developer Portal",
    path: "/developer-portal"
  }];
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);
  const navVariants = {
    hidden: {
      y: -100
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };
  const logoVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };
  return <motion.header variants={navVariants} initial="hidden" animate="visible" className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "bg-white/90 dark:bg-card/90 backdrop-blur-xl py-3 shadow-lg border-b border-white/20" : "bg-transparent py-6")}>
      <nav className="container flex justify-between items-center relative z-50">
        {/* Logo */}
        <motion.div variants={logoVariants} initial="initial" whileHover="hover" className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/45e89a4e-b7de-45de-9bb3-c273d5f1e5c1.png" alt="YEP" className="h-8 w-auto transition-all duration-300" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul className="hidden lg:flex space-x-4 items-center whitespace-nowrap" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2,
        duration: 0.6
      }}>
          {/* New Home Dropdown */}
          <motion.li className="relative" onHoverStart={() => setNewHomeDropdownOpen(true)} onHoverEnd={() => setNewHomeDropdownOpen(false)}>
            <motion.button className={cn("text-sm font-medium transition-all duration-300 flex items-center gap-1 py-2 px-3 rounded-lg relative overflow-hidden whitespace-nowrap", isContentPage ? "text-slate-900 hover:text-primary" : scrolled ? "text-slate-900 hover:text-primary" : "text-white hover:text-orange-300")} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-lg opacity-0" whileHover={{
              opacity: 1
            }} transition={{
              duration: 0.3
            }} />
              <span className="relative z-10">New Home</span>
              <motion.div animate={{
              rotate: newHomeDropdownOpen ? 180 : 0
            }} transition={{
              duration: 0.3
            }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {newHomeDropdownOpen && <motion.div initial={{
              opacity: 0,
              y: 10,
              scale: 0.95
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              y: 10,
              scale: 0.95
            }} transition={{
              duration: 0.2
            }} className="absolute top-full left-0 mt-2 w-56 bg-white/90 dark:bg-card/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                  <div className="py-2">
                    {newHomeDropdownItems.map((item, index) => <motion.div key={item.name} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1
                }}>
                        <Link to={item.path} className="block px-6 py-3 text-sm font-medium hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 transition-all duration-300 relative group">
                          <motion.div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-pink-500 scale-y-0 group-hover:scale-y-100 origin-bottom" transition={{
                      duration: 0.3
                    }} />
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      </motion.div>)}
                  </div>
                </motion.div>}
            </AnimatePresence>
          </motion.li>
          
          {/* Other Nav Links */}
          {navLinks.map((link, index) => <motion.li key={link.name} initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3 + index * 0.1
        }}>
              <Link to={link.path} className={cn("text-sm font-medium transition-all duration-300 py-2 px-3 rounded-lg relative overflow-hidden group whitespace-nowrap", isContentPage ? "text-slate-900 hover:text-primary" : scrolled ? "text-slate-900 hover:text-primary" : "text-white hover:text-orange-300")}>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100" transition={{
              duration: 0.3
            }} />
                <span className="relative z-10">{link.name}</span>
              </Link>
            </motion.li>)}
          
          {/* Professionals Dropdown */}
          <motion.li className="relative" onHoverStart={() => setProfessionalsDropdownOpen(true)} onHoverEnd={() => setProfessionalsDropdownOpen(false)} initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }}>
            <motion.button className={cn("text-sm font-medium transition-all duration-300 flex items-center gap-1 py-2 px-3 rounded-lg relative overflow-hidden whitespace-nowrap", isContentPage ? "text-slate-900 hover:text-primary" : scrolled ? "text-slate-900 hover:text-primary" : "text-white hover:text-orange-300")} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              
              
              <motion.div animate={{
              rotate: professionalsDropdownOpen ? 180 : 0
            }} transition={{
              duration: 0.3
            }}>
                
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {professionalsDropdownOpen && <motion.div initial={{
              opacity: 0,
              y: 10,
              scale: 0.95
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              y: 10,
              scale: 0.95
            }} transition={{
              duration: 0.2
            }} className="absolute top-full left-0 mt-2 w-56 bg-white/90 dark:bg-card/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                  <div className="py-2">
                    {professionalsDropdownItems.map((item, index) => <motion.div key={item.name} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1
                }}>
                        <Link to={item.path} className="block px-6 py-3 text-sm font-medium hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 transition-all duration-300 relative group">
                          <motion.div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-pink-500 scale-y-0 group-hover:scale-y-100 origin-bottom" transition={{
                      duration: 0.3
                    }} />
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      </motion.div>)}
                  </div>
                </motion.div>}
            </AnimatePresence>
          </motion.li>
        </motion.ul>

        {/* Right side actions */}
        <motion.div className="hidden lg:flex items-center space-x-4" initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.4,
        duration: 0.6
      }}>
          <div className={cn("transition-colors", isContentPage ? "text-slate-900" : scrolled ? "text-slate-900" : "text-white")}>
            <LanguageSelector />
          </div>
          <div className={cn("transition-colors", isContentPage ? "text-slate-900" : scrolled ? "text-slate-900" : "text-white")}>
            <ThemeToggle />
          </div>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <LoginDialog>
              <Button className="btn-primary">
                <User className="h-4 w-4 mr-2" />
                Login / Sign up
              </Button>
            </LoginDialog>
          </motion.div>
        </motion.div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-3">
          <div className={cn("transition-colors", isContentPage ? "text-slate-900" : scrolled ? "text-slate-900" : "text-white")}>
            <LanguageSelector />
          </div>
          <div className={cn("transition-colors", isContentPage ? "text-slate-900" : scrolled ? "text-slate-900" : "text-white")}>
            <ThemeToggle />
          </div>
          <motion.button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={cn("p-2 rounded-lg transition-colors", isContentPage ? "text-slate-900 hover:text-primary" : scrolled ? "text-slate-900 hover:text-primary" : "text-white hover:text-orange-300")} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <X className="h-6 w-6" />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <Menu className="h-6 w-6" />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 lg:hidden">
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div initial={{
          x: "100%"
        }} animate={{
          x: 0
        }} exit={{
          x: "100%"
        }} transition={{
          type: "spring",
          damping: 30,
          stiffness: 300
        }} className="absolute right-0 top-0 bottom-0 w-80 bg-white/95 dark:bg-card/95 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-8">
                  <motion.button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-muted transition-colors" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">New Home</h3>
                    <div className="space-y-2 ml-4">
                      {newHomeDropdownItems.map((item, index) => <motion.div key={item.name} initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 0.2 + index * 0.05
                  }}>
                          <Link to={item.path} className="block text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                            {item.name}
                          </Link>
                        </motion.div>)}
                    </div>
                  </div>
                  
                  {navLinks.map((link, index) => <motion.div key={link.name} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.3 + index * 0.05
              }}>
                      <Link to={link.path} className="block text-lg font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                        {link.name}
                      </Link>
                    </motion.div>)}
                  
                  <div>
                    
                    
                  </div>
                </motion.div>
                
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }}>
                  <LoginDialog>
                    <Button className="w-full btn-primary" onClick={() => setMobileMenuOpen(false)}>
                      <User className="h-4 w-4 mr-2" />
                      Login / Sign up
                    </Button>
                  </LoginDialog>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
}