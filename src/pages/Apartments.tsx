
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, RotateCcw, Bed, DollarSign, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample apartments data (will use translations from context)
const allApartments: ApartmentProps[] = [
  {
    id: "1",
    name: "Deluxe Sea View Suite",
    description: "Luxurious suite with panoramic sea views, modern amenities, and a private balcony.",
    price: 180,
    capacity: 2,
    size: 45,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Balcony"]
  },
  {
    id: "2",
    name: "Premium Family Apartment",
    description: "Spacious apartment ideal for families, with full kitchen and stunning coastal views.",
    price: 250,
    capacity: 4,
    size: 75,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    location: "Second row",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Washing Machine"]
  },
  {
    id: "3",
    name: "Executive Beach Studio",
    description: "Elegant studio with direct beach access, modern design, and premium finishes.",
    price: 150,
    capacity: 2,
    size: 35,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchenette", "Bathroom", "Air Conditioning", "TV"]
  },
  {
    id: "4",
    name: "Luxury Penthouse Suite",
    description: "Exclusive top-floor suite with expansive terrace and panoramic sea views.",
    price: 350,
    capacity: 4,
    size: 90,
    image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&h=600&fit=crop",
    location: "Beachfront",
    features: ["Wi-Fi", "Full Kitchen", "2 Bathrooms", "Air Conditioning", "TV", "Terrace", "Jacuzzi"]
  },
  {
    id: "5",
    name: "Classic Double Room",
    description: "Comfortable hotel room with modern amenities and partial sea views.",
    price: 120,
    capacity: 2,
    size: 28,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    location: "Hotel building",
    features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Mini Fridge"]
  },
  {
    id: "6",
    name: "Garden View Apartment",
    description: "Peaceful apartment surrounded by lush gardens, just a short walk from the beach.",
    price: 160,
    capacity: 3,
    size: 55,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop",
    location: "Garden area",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Terrace"]
  },
];

export default function Apartments() {
  const { t } = useLanguage();
  const [filteredApartments, setFilteredApartments] = useState<ApartmentProps[]>(allApartments);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("Apartment");
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = allApartments;
    
    // Filter by search query
    if (searchQuery.trim()) {
      result = result.filter(apt => 
        apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by capacity
    if (capacityFilter !== "all") {
      const capacity = parseInt(capacityFilter);
      result = result.filter(apt => apt.capacity >= capacity);
    }
    
    // Filter by price
    if (priceFilter !== "all") {
      const maxPrice = parseInt(priceFilter);
      result = result.filter(apt => apt.price <= maxPrice);
    }
    
    setFilteredApartments(result);
  }, [searchQuery, capacityFilter, priceFilter]);
  
  // Get unique locations for filter
  const locations = ["all", ...new Set(allApartments.map(apt => apt.location))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.apartments.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.apartments.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute top-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 border-b bg-gray-50 dark:bg-gray-900/20">
          <div className="container">
            <div className="flex flex-wrap items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {/* Search Input */}
              <div className="flex-1 min-w-[280px] relative">
                <Input
                  type="text"
                  placeholder="Suburb, Postcode Or Region"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-12 h-12 text-base bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                />
                <Button 
                  size="sm"
                  className="absolute right-1 top-1 h-10 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Property Type Filter */}
              <Button
                variant={propertyType === "Apartment" ? "default" : "outline"}
                className={`h-12 px-6 text-base ${
                  propertyType === "Apartment" 
                    ? "bg-teal-500 hover:bg-teal-600 text-white border-teal-500" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={() => setPropertyType("Apartment")}
              >
                Apartment
              </Button>
              
              {/* Bed Filter */}
              <Select value={capacityFilter} onValueChange={setCapacityFilter}>
                <SelectTrigger className="h-12 px-4 min-w-[120px] border-gray-300 dark:border-gray-600">
                  <Bed className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Bed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any beds</SelectItem>
                  <SelectItem value="1">1+ beds</SelectItem>
                  <SelectItem value="2">2+ beds</SelectItem>
                  <SelectItem value="3">3+ beds</SelectItem>
                  <SelectItem value="4">4+ beds</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Price Filter */}
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="h-12 px-4 min-w-[120px] border-gray-300 dark:border-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any price</SelectItem>
                  <SelectItem value="150">Under $150</SelectItem>
                  <SelectItem value="200">Under $200</SelectItem>
                  <SelectItem value="300">Under $300</SelectItem>
                </SelectContent>
              </Select>
              
              {/* More Filters */}
              <Button
                variant="outline"
                className="h-12 px-4 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
              </Button>
              
              {/* Reset Button */}
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setPropertyType("Apartment");
                  setCapacityFilter("all");
                  setPriceFilter("all");
                }}
                className="h-12 px-4 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
            
            {/* Results count */}
            <div className="mt-4">
              <p className="text-muted-foreground text-sm">
                Showing {filteredApartments.length} of {allApartments.length} properties
              </p>
            </div>
          </div>
        </section>
        
        {/* Apartments Grid */}
        <section className="section">
          <div className="container">
            {filteredApartments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApartments.map((apartment, index) => (
                  <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <ApartmentCard apartment={apartment} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">{t.apartments.filters.noMatch}</h3>
                <p className="text-muted-foreground mb-6">{t.apartments.filters.adjustFilters}</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setPropertyType("Apartment");
                    setCapacityFilter("all");
                    setPriceFilter("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
