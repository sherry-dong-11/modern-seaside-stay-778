import { Heart, Bed, Bath, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sheahanTownhousesImage from "@/assets/sheahan-townhouses.jpg";
interface PropertyItem {
  id: string;
  name: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  price: string;
  image: string;
  isContactAgent?: boolean;
}
const apartmentProperties: PropertyItem[] = [{
  id: "apt1",
  name: "640 Bourke St",
  address: "640 Bourke Street, Melbourne, VIC, 3000",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  price: "from A$640,000",
  image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
}, {
  id: "apt2",
  name: "Atlas Melbourne",
  address: "383 La Trobe Street, Melbourne, VIC, 3000",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  price: "from A$399,000",
  image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
}, {
  id: "apt3",
  name: "Tempo",
  address: "2-4 Bruce Street, Box Hill, VIC, 3128",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  price: "from A$401,000",
  image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop"
}, {
  id: "apt4",
  name: "BLVD - Melbourne Square Stage 2",
  address: "19 Hoff Boulevard, Southbank, VIC, 3006",
  bedrooms: 1,
  bathrooms: 1,
  parking: 1,
  price: "from A$524,000",
  image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
}];
const townhouseProperties: PropertyItem[] = [{
  id: "th1",
  name: "Floret",
  address: "583 Ferntree Gully Road, Glen Waverley, VIC, 3150",
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  price: "from A$1,375,000",
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
}, {
  id: "th2",
  name: "Olea",
  address: "44 Kambrook Road, Caulfield North, VIC, 3161",
  bedrooms: 2,
  bathrooms: 1,
  parking: 1,
  price: "from A$769,000",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
}, {
  id: "th3",
  name: "Amara",
  address: "Alvina Street & Sinclair Street, Oakleigh South, VIC",
  bedrooms: 4,
  bathrooms: 3,
  parking: 2,
  price: "Contact agents",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  isContactAgent: true
}, {
  id: "th4",
  name: "Sheahan Townhouses",
  address: "Latrobe Avenue, Alphington, VIC, 3078",
  bedrooms: 2,
  bathrooms: 1,
  parking: 0,
  price: "from A$1,350,000",
  image: sheahanTownhousesImage
}];
const houseLandProperties: PropertyItem[] = [{
  id: "hl1",
  name: "Windermere Estate - Mambourin",
  address: "275 Greens Road, Mambourin, VIC, 3024",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  price: "Contact agents",
  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
  isContactAgent: true
}, {
  id: "hl2",
  name: "Mungala by the Sea",
  address: "Beatts Road, Forrest Beach, QLD, 4850",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  price: "Contact agents",
  image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
  isContactAgent: true
}, {
  id: "hl3",
  name: "Orana Estate - Urbane House and Land",
  address: "1 Fresco Place, Clyde North, VIC, 3978",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  price: "from A$708,409",
  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
}, {
  id: "hl4",
  name: "Mambourin Estate - Urbane House and Land",
  address: "2 Surround Drive, Mambourin, VIC, 3024",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  price: "from A$642,690",
  image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop"
}];
const PropertyCard = ({
  property
}: {
  property: PropertyItem;
}) => {
  return <Card className="card-property-orange group cursor-pointer h-full flex flex-col overflow-hidden">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img src={property.image} alt={property.name} className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <button className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-colors">
            <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500" />
          </button>
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1 space-y-3">
            <h3 className="font-semibold text-lg text-foreground">{property.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem] leading-relaxed">{property.address}</p>
            
            <div className="h-6 flex items-center">
              {(property.bedrooms > 0 || property.bathrooms > 0 || property.parking > 0) && <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {property.bedrooms > 0 && <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.bedrooms}</span>
                    </div>}
                  {property.bathrooms > 0 && <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms}</span>
                    </div>}
                  {property.parking > 0 && <div className="flex items-center gap-1">
                      <Car className="w-4 h-4" />
                      <span>{property.parking}</span>
                    </div>}
                </div>}
            </div>
          </div>
          
          <div className="pt-4 border-t border-border/20 mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-medium">Price</span>
              <span className="font-semibold text-orange-500 text-right truncate max-w-[60%]">
                {property.price}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};
const CategorySection = ({
  title,
  properties
}: {
  title: string;
  properties: PropertyItem[];
}) => {
  return <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <Button variant="ghost" className="text-orange-500 hover:text-orange-600 p-0">
          Show all
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map(property => <PropertyCard key={property.id} property={property} />)}
      </div>
    </div>;
};
export default function FeaturedCategoriesSection() {
  return <section className="section-bg-gradient-1 py-[35px]">
      <div className="container mx-auto px-4">
        <CategorySection title="New Apartments" properties={apartmentProperties} />
        <CategorySection title="New Townhouses" properties={townhouseProperties} />
        <CategorySection title="House & Land" properties={houseLandProperties} />
      </div>
    </section>;
}