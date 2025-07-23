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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured Properties
          </h2>
          <p className="text-neutral-400">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featuredProperties.map((property) => (
                <div key={property.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="group relative bg-neutral-800 rounded-2xl overflow-hidden shadow-tech hover:shadow-primary transition-all duration-500 hover:scale-[1.02]">
                    {/* Image Container - Edge to Edge */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Property Name Overlay */}
                      <div className="absolute top-8 left-8">
                        <h3 className="text-4xl font-light text-white tracking-wide drop-shadow-lg">
                          {property.name}
                        </h3>
                      </div>

                      {/* Hover CTA */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Button className="btn-primary text-lg px-8 py-4 rounded-full shadow-lg">
                          Explore Property
                        </Button>
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-8 left-8">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                          <span className="text-white text-sm font-medium">{property.address}</span>
                        </div>
                      </div>
                    </div>

                    {/* Overlay Details Section */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        {/* Amenities */}
                        <div className="flex items-center gap-6 text-white/80">
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
                        <div className="flex flex-col items-end gap-2">
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 text-xs font-medium"
                          >
                            {property.type}
                          </Badge>
                          <p className="text-2xl font-semibold text-primary">
                            {property.price}
                          </p>
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-neutral-800/90 hover:bg-neutral-700 border-neutral-600 backdrop-blur-sm shadow-lg text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-neutral-800/90 hover:bg-neutral-700 border-neutral-600 backdrop-blur-sm shadow-lg text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary scale-110 shadow-lg shadow-primary/50"
                    : "bg-neutral-600 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}