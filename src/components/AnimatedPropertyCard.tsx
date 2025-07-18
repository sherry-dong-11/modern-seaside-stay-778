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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract project name from property name (first word)
  const projectName = property.name.split(' ')[0].toUpperCase();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      {/* Large Format Full-Width Image */}
      <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
        <motion.img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Project Branding - Elegantly Centered */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 tracking-wider drop-shadow-lg">
              {projectName}
            </h3>
          </div>
        </motion.div>

        {/* Floating action buttons - minimal and refined */}
        <motion.div 
          className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100"
          initial={{ y: -20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Heart className="w-3.5 h-3.5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>

        {/* Premium badge - refined */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-orange-500/90 text-white backdrop-blur-sm border-0 text-xs px-2 py-1">
            New Release
          </Badge>
        </div>
      </div>
      
      {/* Bottom Detail Strip - Semi-transparent overlay with rounded bottom corners */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md rounded-t-2xl p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
      >
        {/* Property Name & Address */}
        <div className="mb-3">
          <h4 className="font-inter font-medium text-lg text-gray-900 mb-1 leading-tight">
            {property.name}
          </h4>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-orange-500" />
            <span className="text-sm font-light">{property.location}</span>
          </div>
        </div>
        
        {/* Icons Row & Price */}
        <div className="flex items-center justify-between">
          {/* Bedroom / Bathroom / Parking icons */}
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span className="text-sm font-light">{property.capacity}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span className="text-sm font-light">2</span>
            </div>
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4" />
              <span className="text-sm font-light">1</span>
            </div>
          </div>
          
          {/* Refined Price & Tag */}
          <div className="text-right">
            <p className="text-sm font-light text-gray-900 mb-0.5">
              from ${property.price.toLocaleString()}
            </p>
            <Badge variant="outline" className="text-xs px-2 py-0.5 border-gray-300 text-gray-600">
              Residential
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Subtle hover effect */}
      <motion.div
        className="absolute inset-0 border border-orange-200/0 rounded-2xl group-hover:border-orange-200/60 transition-all duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}