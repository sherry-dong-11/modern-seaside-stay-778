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

const featuredProperties: FeaturedProperty[] = [
  {
    id: 1,
    name: "Floret",
    address: "583 Ferntree Gully Road, Glen Waverley VIC 3150",
    bedrooms: "3-4",
    bathrooms: "2-3",
    parking: 2,
    type: "RESIDENTIAL",
    price: "from $1,250,000",
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
    price: "from $850,000",
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
    price: "from $2,850,000",
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
    price: "from $1,650,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop&crop=center"
  }
];

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
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className="font-bold mb-2 sm:mb-4"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}
          >
            Featured Properties
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
          >
            Discover our handpicked selection of premium properties
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featuredProperties.map((property) => (
                <div key={property.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Property Name Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                      <div className="absolute top-8 left-8">
                        <h3 className="text-4xl font-light text-white tracking-wide drop-shadow-lg">
                          {property.name}
                        </h3>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="bg-white p-4 sm:p-6">
                      <div className="space-y-4">
                        {/* Property Name & Address */}
                        <div>
                          <h4 
                            className="font-semibold text-foreground mb-2"
                            style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}
                          >
                            {property.name}
                          </h4>
                          <p 
                            className="text-muted-foreground mb-4 line-clamp-2"
                            style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                          >
                            {property.address}
                          </p>
                        </div>
                          
                        {/* Amenities */}
                        <div className="flex items-center gap-4 sm:gap-6 text-muted-foreground flex-wrap">
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

                        {/* Type & Price */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/20">
                          <Badge 
                            variant="secondary" 
                            className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-3 py-1 text-xs font-medium"
                          >
                            {property.type}
                          </Badge>
                          <div className="text-right">
                            <p 
                              className="font-semibold text-orange-600"
                              style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
                            >
                              {property.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-border/20 backdrop-blur-sm shadow-lg w-10 h-10 sm:w-12 sm:h-12"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-border/20 backdrop-blur-sm shadow-lg w-10 h-10 sm:w-12 sm:h-12"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-orange-600 scale-110"
                    : "bg-muted hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}