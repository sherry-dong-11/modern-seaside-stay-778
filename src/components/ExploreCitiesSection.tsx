import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const citiesData = [
  {
    id: 1,
    name: "Sydney",
    state: "New South Wales",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Melbourne",
    state: "Victoria", 
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Brisbane",
    state: "Queensland",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Perth",
    state: "Western Australia",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Adelaide",
    state: "South Australia",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Newcastle",
    state: "New South Wales",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Gold Coast",
    state: "Queensland",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Canberra",
    state: "ACT",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&crop=center"
  }
];

export default function ExploreCitiesSection() {
  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4 md:text-4xl">
            Explore States / Cities
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {citiesData.map((city) => (
            <Card key={city.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={city.image} 
                    alt={`${city.name} cityscape`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{city.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{city.state}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Explore {city.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}