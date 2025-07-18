import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const citiesData = [{
  id: 1,
  name: "Sydney",
  state: "New South Wales",
  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center"
}, {
  id: 2,
  name: "Melbourne",
  state: "Victoria",
  image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=center"
}, {
  id: 3,
  name: "Brisbane",
  state: "Queensland",
  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop&crop=center"
}, {
  id: 4,
  name: "Perth",
  state: "Western Australia",
  image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop&crop=center"
}, {
  id: 5,
  name: "Adelaide",
  state: "South Australia",
  image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop&crop=center"
}, {
  id: 6,
  name: "Newcastle",
  state: "New South Wales",
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&crop=center"
}, {
  id: 7,
  name: "Gold Coast",
  state: "Queensland",
  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop&crop=center"
}, {
  id: 8,
  name: "Canberra",
  state: "ACT",
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&crop=center"
}];
export default function ExploreCitiesSection() {
  return <section className="bg-neutral-50 dark:bg-neutral-900 my-0 py-8 md:py-12">
      <div className="container px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {citiesData.map(city => <Card key={city.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img src={city.image} alt={`${city.name} cityscape`} className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                
                <div className="p-3 md:p-4">
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{city.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{city.state}</p>
                  
                  <Button variant="outline" size="sm" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors h-10 md:h-auto text-sm">
                    Explore {city.name}
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
}