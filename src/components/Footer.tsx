import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
export default function Footer() {
  const {
    t
  } = useLanguage();
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms] mx-[8px]">
            <img src="/lovable-uploads/ec1d0529-2ae8-4481-8329-b97ea749e03f.png" alt="YEPHOME" className="h-8 w-auto mb-4" />
            <div className="flex flex-col space-y-3">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-base">
                About us
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors text-base">
                FAQ's
              </Link>
            </div>
            <div className="flex space-x-4 my-[40px] mx-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms] mx-[8px]">
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 mx-[4px]">
              {[{
              name: "New Home",
              path: "/apartments"
            }, {
              name: "Sold",
              path: "/sold"
            }, {
              name: "Virtual Tours",
              path: "/virtual-tours"
            }, {
              name: "Insights",
              path: "/insights"
            }, {
              name: "Professionals",
              path: "/for-developers"
            }].map(link => <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms] mx-[8px]">
            <h4 className="text-xl font-bold mb-4 mx-0 my-0 px-0">{t.footer.contact}</h4>
            <ul className="space-y-3 mx-0">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Level 12, 120 Collins Street<br />
                  Melbourne, VIC 3000<br />
                  Australia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+61 3 8123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@yephome.com.au</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms] mx-[5px]">
            <h4 className="text-xl font-bold mb-4">{t.footer.newsletter}</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.newsletterDesc}
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder={t.footer.yourEmail} className="rounded-md px-4 py-2 bg-muted text-foreground" required />
              <button type="submit" className="btn-primary mt-2">
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2025 YEPHOME. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}