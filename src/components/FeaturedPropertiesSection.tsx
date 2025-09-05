import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Bed, Bath, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
interface FeaturedProperty {
  id: number;
  name: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  parking: number;
  type: string;
  price: string;
  image: string;
}
const featuredProperties: FeaturedProperty[] = [{
  id: 1,
  name: "Floret",
  address: "583 Ferntree Gully Road, Glen Waverley VIC 3150",
  bedrooms: "3-4",
  bathrooms: "2-3",
  parking: 2,
  type: "RESIDENTIAL",
  price: "from $1,250,000",
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&crop=center"
}, {
  id: 2,
  name: "The Luxe",
  address: "245 Collins Street, Melbourne VIC 3000",
  bedrooms: "2-3",
  bathrooms: "2",
  parking: 1,
  type: "APARTMENT",
  price: "from $850,000",
  image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop&crop=center"
}, {
  id: 3,
  name: "Harbour View",
  address: "88 Circular Quay West, Sydney NSW 2000",
  bedrooms: "3-4",
  bathrooms: "3",
  parking: 2,
  type: "PENTHOUSE",
  price: "from $2,850,000",
  image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&crop=center"
}, {
  id: 4,
  name: "Garden Terrace",
  address: "156 Toorak Road, South Yarra VIC 3141",
  bedrooms: "4-5",
  bathrooms: "3-4",
  parking: 3,
  type: "TOWNHOUSE",
  price: "from $1,650,000",
  image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop&crop=center"
}];
export default function FeaturedPropertiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);
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
    }, 5000);
    return () => {
      clearInterval(autoplay);
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);
  return <section className="py-20 bg-gradient-to-br from-background via-neutral-50/30 to-primary-50/20 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb)/0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(var(--primary-rgb)/0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-50/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary-100/50">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">
            Discover Our <span className="text-primary-600 font-medium">Featured Homes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked luxury properties that represent the pinnacle of modern living
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featuredProperties.map(property => <div key={property.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="group relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-primary-100/20">
                    {/* Image Container */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      
                      {/* Premium overlay with enhanced gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-5xl md:text-6xl font-light text-white tracking-wide text-center">
                          {property.name}
                        </h3>
                      </div>
                      
                      {/* Premium badge */}
                      <div className="absolute top-8 right-8">
                        <div className="bg-primary-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-primary-400/30">
                          Featured
                        </div>
                      </div>
                    </div>

                    {/* Premium Details Section */}
                    <div className="bg-gradient-to-br from-white to-neutral-50/50 p-8 border-t border-primary-100/20">
                      <div className="flex items-start justify-between flex-col sm:flex-row gap-4 sm:gap-6">
                        {/* Left Side - Property Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl font-semibold text-foreground mb-1">
                            {property.name}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4">
                            {property.address}
                          </p>
                          
                          {/* Amenities */}
                          <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Bed className="h-4 w-4" />
                              <span className="text-sm font-medium">{property.bedrooms}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath className="h-4 w-4" />
                              <span className="text-sm font-medium">{property.bathrooms}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Car className="h-4 w-4" />
                              <span className="text-sm font-medium">{property.parking}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Type & Price */}
                        <div className="flex flex-col sm:items-end items-start gap-3 sm:text-right text-left w-full sm:w-auto">
                          <Badge variant="secondary" className="bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 border border-primary-200/50 px-4 py-2 text-sm font-medium rounded-full shadow-sm">
                            {property.type}
                          </Badge>
                          <div className="sm:text-right text-left w-full">
                            <p className="text-3xl font-light text-primary-600 tracking-tight">
                              {property.price}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">Starting from</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button variant="outline" size="icon" onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-border/20 backdrop-blur-sm shadow-lg">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="icon" onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-border/20 backdrop-blur-sm shadow-lg">
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {scrollSnaps.map((_, index) => <button key={index} onClick={() => scrollTo(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-orange-600 scale-110" : "bg-muted hover:bg-muted-foreground/30"}`} />)}
          </div>
        </div>
      </div>
    </section>;
}