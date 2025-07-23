
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Maximize, MapPin, Bath, Coffee, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <div 
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl bg-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={apartment.image} 
          alt={translatedName}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
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
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {/* Hot badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500 text-white text-sm font-medium">
            🔥 Hot
          </div>
        </div>
        
        {/* Price */}
        <div>
          <span className="text-xl font-bold text-foreground">From ${apartment.price.toLocaleString()}</span>
        </div>
        
        {/* Amenities */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>1 - {apartment.capacity}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>1 - 2</span>
          </div>
          <div className="flex items-center">
            <Coffee className="h-4 w-4 mr-1" />
            <span>0 - 1</span>
          </div>
        </div>
        
        {/* Full address */}
        <div className="text-muted-foreground">
          <p>{apartment.location}</p>
        </div>
        
        <div className="pt-2">
          <Button asChild className="btn-primary w-full">
            <Link to={`/apartments/${apartment.id}`}>{t.apartments.filters.viewDetails}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
