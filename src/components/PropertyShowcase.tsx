import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, ArrowRight, MapPin, Star, Users } from "lucide-react";
import FuturisticCard from "./FuturisticCard";
import { ApartmentProps } from "./ApartmentCard";

interface PropertyShowcaseProps {
  properties: ApartmentProps[];
}

export default function PropertyShowcase({ properties }: PropertyShowcaseProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary-600 to-accent-gradient bg-clip-text text-transparent">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover premium properties with cutting-edge technology and personalized service
          </p>
        </motion.div>

        {/* Property carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {properties.map((property, index) => (
                <CarouselItem key={property.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <FuturisticCard delay={index * 0.1}>
                    <PropertyCard property={property} />
                  </FuturisticCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-white/20 shadow-xl backdrop-blur-xl" />
              <CarouselNext className="right-4 bg-white/90 hover:bg-white border-white/20 shadow-xl backdrop-blur-xl" />
            </motion.div>
          </Carousel>
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-gradient-to-r from-primary-500 to-accent-gradient hover:from-primary-600 hover:to-accent-gradient/90 text-white px-8 py-4 text-lg rounded-2xl shadow-xl">
              <Building2 className="w-6 h-6 mr-2" />
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: ApartmentProps }) {
  return (
    <div className="group">
      {/* Property image */}
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <motion.img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Price badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-primary-600 hover:bg-white font-semibold text-lg px-3 py-1">
            ${property.price.toLocaleString()}
          </Badge>
        </div>
        
        {/* Features overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 flex-wrap">
            {property.features.slice(0, 2).map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/20 text-white backdrop-blur-sm border-white/30"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Property details */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary-600 transition-colors">
          {property.name}
        </h3>
        
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location}</span>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {property.description}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{property.capacity} bed</span>
            <span>{property.size}m²</span>
          </div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="outline" size="sm" className="border-primary-200 text-primary-600 hover:bg-primary-50">
              View Details
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}