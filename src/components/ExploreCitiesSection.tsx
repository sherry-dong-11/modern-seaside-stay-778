import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const citiesData = [{
  id: 1,
  name: "Sydney",
  state: "New South Wales",
  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&crop=center"
}, {
  id: 2,
  name: "Melbourne",
  state: "Victoria",
  image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop&crop=center"
}, {
  id: 3,
  name: "Brisbane",
  state: "Queensland",
  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&crop=center"
}, {
  id: 4,
  name: "Perth",
  state: "Western Australia",
  image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&crop=center"
}, {
  id: 5,
  name: "Adelaide",
  state: "South Australia",
  image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&crop=center"
}, {
  id: 6,
  name: "Newcastle",
  state: "New South Wales",
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop&crop=center"
}, {
  id: 7,
  name: "Gold Coast",
  state: "Queensland",
  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&crop=center"
}, {
  id: 8,
  name: "Canberra",
  state: "ACT",
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop&crop=center"
}];
export default function ExploreCitiesSection() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Explore States & Cities
          </h2>
          <p className="text-muted-foreground">
            Discover premium properties across Australia's major cities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {citiesData.map(city => (
            <div 
              key={city.id} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square transition-all duration-500 hover:shadow-tech hover:scale-[1.02] card-premium"
            >
              {/* Full-bleed background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${city.image})` }} 
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
              
              {/* Location label overlay */}
              <div className="absolute top-6 left-6">
                <div className="glass-card px-3 py-1.5">
                  <span className="text-white text-sm font-medium">{city.state}</span>
                </div>
              </div>
              
              {/* Default city name */}
              <div className="absolute bottom-6 left-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {city.name}
                </h3>
              </div>
              
              {/* Dark gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <Button 
                  className="btn-primary text-lg px-8 py-4 rounded-full shadow-lg"
                >
                  Explore {city.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}