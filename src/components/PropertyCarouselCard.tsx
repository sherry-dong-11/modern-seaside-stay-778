import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Car, MapPin } from "lucide-react";
import { ApartmentProps } from "@/components/ApartmentCard";

interface PropertyCarouselCardProps {
  property: ApartmentProps;
}

export default function PropertyCarouselCard({ property }: PropertyCarouselCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
      {/* Full-width image - increased height for better image-to-text ratio */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay project name in serif font */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-wide">
            {property.name.toUpperCase()}
          </h3>
        </div>
      </div>
      
      {/* Property details below */}
      <div className="p-6 space-y-4">
        {/* Name and address */}
        <div>
          <h4 className="text-xl font-semibold text-foreground mb-2">{property.name}</h4>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>
        
        {/* Icons for beds, baths, parking */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-2" />
            <span>{property.capacity} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-2" />
            <span>2 baths</span>
          </div>
          <div className="flex items-center">
            <Car className="w-4 h-4 mr-2" />
            <span>1 parking</span>
          </div>
        </div>
        
        {/* Property type pill and price */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300">
            Residential
          </Badge>
          <div className="text-right">
            <p className="text-lg font-semibold text-muted-foreground">
              from ${property.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}