import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Car, MapPin } from "lucide-react";
import { ApartmentProps } from "@/components/ApartmentCard";

interface PropertyCarouselCardProps {
  property: ApartmentProps;
}

export default function PropertyCarouselCard({
  property
}: PropertyCarouselCardProps) {
  return (
    <div className="card-property-default group relative overflow-hidden cursor-pointer">
      {/* Full-width image without overlays */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Compact property details strip */}
      <div className="p-4">
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
            
            {/* Badge and price on same line */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300 text-xs px-2 py-1">
                Residential
              </Badge>
              <p className="text-sm font-semibold text-orange-500">
                from ${property.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}