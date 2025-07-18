import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Car, MapPin } from "lucide-react";
import { ApartmentProps } from "@/components/ApartmentCard";
import { motion } from "framer-motion";
import { useState } from "react";

interface PropertyCarouselCardProps {
  property: ApartmentProps;
}

export default function PropertyCarouselCard({
  property
}: PropertyCarouselCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{
        boxShadow: isHovered 
          ? "0 20px 50px -12px rgba(0, 0, 0, 0.25)" 
          : "0 4px 20px -2px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Enhanced full-width image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <motion.img 
          src={property.image} 
          alt={property.name} 
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Enhanced property details strip */}
      <motion.div 
        className="p-6"
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          {/* Left side - Project name and address */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-foreground mb-1">{property.name}</h4>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              <span className="text-xs">{property.location}</span>
            </div>
          </div>
          
          {/* Right side - Icons, badge and price */}
          <div className="flex items-center gap-4">
            {/* Bedroom, bathroom, parking icons */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Bed className="w-3 h-3 mr-1" />
                <span>{property.capacity}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-3 h-3 mr-1" />
                <span>2</span>
              </div>
              <div className="flex items-center">
                <Car className="w-3 h-3 mr-1" />
                <span>1</span>
              </div>
            </div>
            
            {/* Enhanced badge and price */}
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300 text-xs px-3 py-1.5 rounded-full">
                  Residential
                </Badge>
              </motion.div>
              <motion.p 
                className="text-sm font-semibold text-orange-500"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                from ${property.price.toLocaleString()}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}