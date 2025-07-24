import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

// Sample townhouse data based on the reference image
const allTownhouses: ApartmentProps[] = [
  {
    id: "sheahan-townhouses",
    name: "Sheahan Townhouses",
    description: "Modern townhouses in a prime location with contemporary design and quality finishes.",
    price: 1350000,
    capacity: 3,
    size: 180,
    image: "/src/assets/sheahan-townhouses.jpg",
    location: "Latrobe Avenue, Alphington VIC 3078",
    features: ["Modern Kitchen", "Private Courtyard", "Split System Heating/Cooling", "Built-in Wardrobes"]
  },
  {
    id: "taylors-estate",
    name: "Taylors Estate",
    description: "Spacious family townhouses with generous living areas and outdoor spaces.",
    price: 655050,
    capacity: 4,
    size: 220,
    image: "/src/assets/luxury-beachfront-apartments.jpg",
    location: "1200 Taylors Road, Fraser Rise VIC 3336",
    features: ["Master Suite", "Multiple Living Areas", "Double Garage", "Low Maintenance Garden"]
  },
  {
    id: "tobias-avenue",
    name: "33 Tobias Avenue",
    description: "Premium townhouse in prestigious Glen Waverley with exceptional finishes.",
    price: 1700000,
    capacity: 4,
    size: 250,
    image: "/src/assets/apartment-luxury.jpg",
    location: "Glen Waverley VIC 3150",
    features: ["Designer Kitchen", "Premium Bathrooms", "Private Garden", "Double Garage"]
  },
  {
    id: "ferntree-gully-station",
    name: "30-32 Station St Ferntree Gully",
    description: "Contact agents for more information about this exclusive development.",
    price: 850000,
    capacity: 2,
    size: 150,
    image: "/src/assets/hero-modern.jpg",
    location: "30-32 Station Street, Ferntree Gully VIC 3156",
    features: ["Contact Required", "Prime Location", "Modern Design", "Quality Finishes"]
  },
  {
    id: "brunswick-townhouses",
    name: "Brunswick Modern Townhouses",
    description: "Contemporary townhouses with sustainable design and modern amenities.",
    price: 980000,
    capacity: 3,
    size: 190,
    image: "/src/assets/hero-cozy-room.jpg",
    location: "Brunswick VIC 3056",
    features: ["Sustainable Design", "Rooftop Terrace", "Modern Kitchen", "Secure Parking"]
  },
  {
    id: "richmond-heritage",
    name: "Richmond Heritage Townhouses",
    description: "Heritage-style townhouses combining classic charm with modern convenience.",
    price: 1250000,
    capacity: 3,
    size: 200,
    image: "/src/assets/amenities-pool.jpg",
    location: "Richmond VIC 3121",
    features: ["Heritage Features", "Modern Renovation", "Private Courtyard", "Wine Cellar"]
  }
];

export default function Townhouses() {
  const { t } = useLanguage();
  const [filteredTownhouses, setFilteredTownhouses] = useState<ApartmentProps[]>(allTownhouses);
  const [capacityFilter, setCapacityFilter] = useState<number | null>(null);
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([500000, 2000000]);

  // Extract unique locations for filter dropdown
  const locations = Array.from(new Set(allTownhouses.map(townhouse => 
    townhouse.location.split(',')[townhouse.location.split(',').length - 2]?.trim() || townhouse.location
  )));

  useEffect(() => {
    let filtered = allTownhouses;

    // Filter by capacity
    if (capacityFilter) {
      filtered = filtered.filter(townhouse => townhouse.capacity >= capacityFilter);
    }

    // Filter by location
    if (locationFilter) {
      filtered = filtered.filter(townhouse =>
        townhouse.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(townhouse =>
      townhouse.price >= priceRange[0] && townhouse.price <= priceRange[1]
    );

    setFilteredTownhouses(filtered);
  }, [capacityFilter, locationFilter, priceRange]);

  const handleCapacityFilter = (capacity: number) => {
    setCapacityFilter(capacityFilter === capacity ? null : capacity);
  };

  const resetFilters = () => {
    setCapacityFilter(null);
    setLocationFilter("");
    setPriceRange([500000, 2000000]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Premium Townhouses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Discover modern townhouses that combine space, style, and convenience
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Find Your Perfect Townhouse</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Input
                  placeholder="Search by location..."
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>

              {/* Capacity Filter Buttons */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Minimum Bedrooms</label>
                <div className="flex gap-2">
                  {[2, 3, 4, 5].map((capacity) => (
                    <Button
                      key={capacity}
                      variant={capacityFilter === capacity ? "default" : "outline"}
                      onClick={() => handleCapacityFilter(capacity)}
                      className="flex-1"
                    >
                      {capacity}+ {capacity === 1 ? 'Bedroom' : 'Bedrooms'}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <div className="flex items-end">
                <Button variant="outline" onClick={resetFilters} className="w-full">
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={2000000}
                min={500000}
                step={50000}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              {filteredTownhouses.length} Townhouses Available
            </h2>
          </div>

          {filteredTownhouses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTownhouses.map((townhouse) => (
                <ApartmentCard key={townhouse.id} apartment={townhouse} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No townhouses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results.
              </p>
              <Button onClick={resetFilters}>Reset All Filters</Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}