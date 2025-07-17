import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Car, MapPin } from "lucide-react";
import { ApartmentProps } from "@/components/ApartmentCard";
interface PropertyCarouselCardProps {
  property: ApartmentProps;
}
export default function PropertyCarouselCard({
  property
}: PropertyCarouselCardProps) {
  return <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
      {/* Large-format full-width image */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Project branding overlay - elegantly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-white text-5xl md:text-7xl font-light tracking-[0.15em] uppercase opacity-90">
              {property.name.split(' ')[0]}
            </h3>
            {property.name.split(' ').length > 1 && (
              <h4 className="text-white/80 text-2xl md:text-3xl font-light tracking-[0.1em] uppercase mt-2">
                {property.name.split(' ').slice(1).join(' ')}
              </h4>
            )}
          </div>
        </div>
        
        {/* Bottom card detail strip */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Semi-transparent overlay bar with rounded top corners */}
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-white/20 rounded-t-3xl p-6">
            {/* Name and address */}
            <div className="mb-4">
              <h4 className="text-xl font-light text-foreground mb-1 tracking-wide">{property.name}</h4>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 opacity-70" />
                <span className="text-sm font-light">{property.location}</span>
              </div>
            </div>
            
            {/* Icons for beds, baths, parking - minimalist style */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-2 opacity-70" />
                <span className="font-light">{property.capacity}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-2 opacity-70" />
                <span className="font-light">2</span>
              </div>
              <div className="flex items-center">
                <Car className="w-4 h-4 mr-2 opacity-70" />
                <span className="font-light">1</span>
              </div>
            </div>
            
            {/* Property type pill and refined price */}
            <div className="flex items-center justify-between">
              <Badge 
                variant="secondary" 
                className="bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300 px-4 py-1.5 rounded-full font-light text-xs tracking-wide"
              >
                Residential
              </Badge>
              <div className="text-right">
                <p className="text-lg font-light text-foreground tracking-wide">
                  <span className="text-sm opacity-70">from </span>
                  <span className="text-orange-500 font-medium">${property.price.toLocaleString()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}