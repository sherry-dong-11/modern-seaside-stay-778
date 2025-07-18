
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Maximize, MapPin, Bath, Coffee, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export interface ApartmentProps {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  location: string;
  features: string[];
}

export default function ApartmentCard({ apartment }: { apartment: ApartmentProps }) {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  // Use translated name and description if available
  const translatedName = language !== 'en' && t.apartmentDescriptions[apartment.id]?.name 
    ? t.apartmentDescriptions[apartment.id].name 
    : apartment.name;
    
  const translatedDescription = language !== 'en' && t.apartmentDescriptions[apartment.id]?.description 
    ? t.apartmentDescriptions[apartment.id].description 
    : apartment.description;
  
  return (
    <motion.div 
      className="rounded-2xl overflow-hidden shadow-lg bg-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{
        boxShadow: isHovered 
          ? "0 25px 60px -12px rgba(0, 0, 0, 0.15), 0 8px 30px -8px rgba(0, 0, 0, 0.1)" 
          : "0 4px 20px -2px rgba(0, 0, 0, 0.08)"
      }}
    >
      <div className="relative overflow-hidden h-64">
        <motion.img 
          src={apartment.image} 
          alt={translatedName}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6"
          animate={{
            background: isHovered 
              ? "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))"
              : "linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))"
          }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h3 className="text-white text-xl font-bold mb-1">{translatedName}</h3>
            <div className="flex items-center text-white/80 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{apartment.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{apartment.capacity} {apartment.capacity === 1 ? 
                  t.apartments.filters.guests : t.apartments.filters.guests}</span>
              </div>
              <div className="flex items-center">
                <Maximize className="h-4 w-4 mr-1" />
                <span>{apartment.size} m²</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground line-clamp-2">{translatedDescription}</p>
        
        <div className="flex flex-wrap gap-2">
          {apartment.features.slice(0, 3).map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
            >
              {feature === "Bathroom" && <Bath className="h-3.5 w-3.5 mr-1" />}
              {feature === "Kitchen" && <Coffee className="h-3.5 w-3.5 mr-1" />}
              {feature === "Wi-Fi" && <Wifi className="h-3.5 w-3.5 mr-1" />}
              <span>{feature}</span>
            </div>
          ))}
          {apartment.features.length > 3 && (
            <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              +{apartment.features.length - 3} {t.apartments.filters.more}
            </div>
          )}
        </div>
        
        <div className="flex items-end justify-between pt-2">
          <div>
            <span className="text-xl font-bold">${apartment.price}</span>
            <span className="text-muted-foreground text-sm"> / {t.booking.summary.night}</span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="btn-primary">
              <Link to={`/apartments/${apartment.id}`}>{t.apartments.filters.viewDetails}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
