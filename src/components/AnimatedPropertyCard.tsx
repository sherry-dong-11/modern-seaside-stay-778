import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Car, Heart, Share2, Eye } from "lucide-react";
import { ApartmentProps } from "@/components/ApartmentCard";
interface AnimatedPropertyCardProps {
  property: ApartmentProps;
  index: number;
}
export default function AnimatedPropertyCard({
  property,
  index
}: AnimatedPropertyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });

  // Extract project name from property name (first word)
  const projectName = property.name.split(' ')[0].toUpperCase();
  const projectSubtitle = property.name.split(' ').slice(1).join(' ').toUpperCase();
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 60,
    scale: 0.95
  }} animate={isInView ? {
    opacity: 1,
    y: 0,
    scale: 1
  } : {}} transition={{
    duration: 0.7,
    delay: index * 0.15,
    ease: [0.16, 1, 0.3, 1]
  }} whileHover={{
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
      {/* Large Format Full-Width Image */}
      <div className="relative h-96 md:h-[32rem] lg:h-[36rem] overflow-hidden">
        <motion.img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" initial={{
        scale: 1.05
      }} animate={{
        scale: 1
      }} transition={{
        duration: 1.2,
        ease: "easeOut"
      }} />
        
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Project Branding - Centered like OASIS RESIDENCES */}
        <motion.div className="absolute inset-0 flex items-center justify-center" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: index * 0.15 + 0.3,
        duration: 0.6
      }}>
          <div className="text-center">
            <h3 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.2em] mb-2">
              {projectName}
            </h3>
            {projectSubtitle && <p className="font-inter text-lg md:text-xl font-light text-white/90 tracking-[0.15em]">
                {projectSubtitle}
              </p>}
          </div>
        </motion.div>

        {/* Floating action buttons - minimal and refined */}
        <motion.div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100" initial={{
        y: -20,
        opacity: 0
      }} whileHover={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.3
      }}>
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Heart className="w-4 h-4" />
          </motion.button>
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Share2 className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Bottom Detail Strip - Exactly like the reference */}
      <motion.div className="bg-white p-4 flex items-center justify-between" initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      delay: index * 0.15 + 0.4,
      duration: 0.6
    }}>
        {/* Left side - Property Name & Address */}
        <div className="flex-1">
          <h4 className="font-inter font-medium text-lg text-gray-900 mb-1">
            {property.name}
          </h4>
          <p className="text-sm text-gray-600 font-light">
            {property.location}
          </p>
        </div>
        
        {/* Center - Icons */}
        <div className="flex items-center gap-6 mx-8">
          <div className="flex flex-col items-center">
            <Bed className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600 font-light">1-{property.capacity}</span>
          </div>
          <div className="flex flex-col items-center">
            <Bath className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600 font-light">1-2</span>
          </div>
          <div className="flex flex-col items-center">
            <Car className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600 font-light">0-2</span>
          </div>
        </div>
        
        {/* Right side - Tag & Price */}
        <div className="flex items-center gap-4">
          <Badge className="bg-orange-500 text-white text-xs px-3 py-1 font-medium">
            RESIDENTIAL
          </Badge>
          <div className="text-right">
            <p className="text-lg font-medium text-orange-500">
              from ${property.price.toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Subtle hover effect */}
      <motion.div initial={{
      opacity: 0
    }} whileHover={{
      opacity: 1
    }} className="absolute inset-0 border border-orange-200/0 rounded-xl group-hover:border-orange-200/60 transition-all duration-300 bg-slate-50" />
    </motion.div>;
}