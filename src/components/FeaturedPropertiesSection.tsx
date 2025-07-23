import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Bed, Bath, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface FeaturedProperty {
  id: number;
  name: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  parking: number;
  type: string;
  price: number;
  image: string;
}

const featuredProperties: FeaturedProperty[] = [
  {
    id: 1,
    name: "Floret",
    address: "583 Ferntree Gully Road, Glen Waverley VIC 3150",
    bedrooms: "3-4",
    bathrooms: "2-3",
    parking: 2,
    type: "RESIDENTIAL",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "The Luxe",
    address: "245 Collins Street, Melbourne VIC 3000",
    bedrooms: "2-3",
    bathrooms: "2",
    parking: 1,
    type: "APARTMENT",
    price: 850000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Harbour View",
    address: "88 Circular Quay West, Sydney NSW 2000",
    bedrooms: "3-4",
    bathrooms: "3",
    parking: 2,
    type: "PENTHOUSE",
    price: 2850000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Garden Terrace",
    address: "156 Toorak Road, South Yarra VIC 3141",
    bedrooms: "4-5",
    bathrooms: "3-4",
    parking: 3,
    type: "TOWNHOUSE",
    price: 1650000,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop&crop=center"
  }
];

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span>
      from ${count.toLocaleString()}
    </span>
  );
};

export default function FeaturedPropertiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    // Auto-play functionality
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full px-4 py-2 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Premium Selection
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties with cutting-edge amenities
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 lg:gap-8">
              {featuredProperties.map((property, index) => (
                <motion.div 
                  key={property.id} 
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer h-[500px]"
                    onMouseEnter={() => setHoveredCard(property.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Full-size Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredCard === property.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                      <motion.div 
                        className="absolute inset-0 bg-black/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === property.id ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* Property Name & Type - Top Overlay */}
                    <div className="absolute top-6 left-6 right-6 z-10">
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ 
                          opacity: hoveredCard === property.id ? 0.9 : 1,
                          y: hoveredCard === property.id ? -5 : 0 
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <Badge className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white border-0 px-3 py-1 text-xs font-medium mb-4 backdrop-blur-sm">
                          {property.type}
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg tracking-tight">
                          {property.name}
                        </h3>
                      </motion.div>
                    </div>

                    {/* Property Details - Bottom Overlay with Glassmorphism */}
                    <div className="absolute bottom-0 left-0 right-0 z-10">
                      <motion.div
                        className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border-t border-white/20 p-6"
                        initial={{ y: 0, opacity: 0.9 }}
                        animate={{ 
                          y: hoveredCard === property.id ? -10 : 0,
                          opacity: hoveredCard === property.id ? 1 : 0.9 
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.p 
                          className="text-white/90 text-sm mb-4 font-medium"
                          initial={{ opacity: 0.8 }}
                          animate={{ opacity: hoveredCard === property.id ? 1 : 0.8 }}
                        >
                          {property.address}
                        </motion.p>
                        
                        {/* Amenities */}
                        <div className="flex items-center gap-6 text-white/80 mb-4">
                          <div className="flex items-center gap-2">
                            <Bed className="h-4 w-4" />
                            <span className="text-sm font-medium">{property.bedrooms}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="h-4 w-4" />
                            <span className="text-sm font-medium">{property.bathrooms}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4" />
                            <span className="text-sm font-medium">{property.parking}</span>
                          </div>
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between">
                          <div className="text-[#FF6A00] text-xl md:text-2xl font-bold">
                            <AnimatedCounter value={property.price} />
                          </div>
                          
                          <AnimatePresence>
                            {hoveredCard === property.id && (
                              <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Button 
                                  size="sm"
                                  className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white border-0 rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                  View Property
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 h-12 w-12 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 h-12 w-12 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div 
            className="flex justify-center mt-12 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-3 w-3 rounded-full transition-all duration-500 ${
                  index === selectedIndex
                    ? "bg-[#FF6A00] scale-125 shadow-lg"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}