import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Car, Heart, Share2, Eye } from "lucide-react";
import { ApartmentProps } from "@/components/ApartmentCard";

interface AnimatedPropertyCardProps {
  property: ApartmentProps;
  index: number;
}

export default function AnimatedPropertyCard({ property, index }: AnimatedPropertyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      {/* Image container with overlay effects */}
      <div className="relative h-80 overflow-hidden">
        <motion.img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating action buttons */}
        <motion.div 
          className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100"
          initial={{ x: 50, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Heart className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Premium badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-orange-500/90 text-white backdrop-blur-sm border-0">
            New Release
          </Badge>
        </div>

        {/* Price tag */}
        <motion.div 
          className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2">
            <p className="text-sm font-semibold text-gray-900">
              from ${property.price.toLocaleString()}
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Content section */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {property.name}
          </h3>
          
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">{property.location}</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
            {property.description}
          </p>
          
          {/* Property features */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{property.capacity}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Car className="w-4 h-4" />
                <span>1</span>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {property.size}m²
            </div>
          </div>
          
          {/* Features tags */}
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.5 + idx * 0.1 }}
                className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hover effect border */}
      <motion.div
        className="absolute inset-0 border-2 border-primary/50 rounded-3xl opacity-0 group-hover:opacity-100"
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}