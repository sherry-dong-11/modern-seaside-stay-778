import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample apartments data (will use translations from context)
const allApartments: ApartmentProps[] = [{
  id: "1",
  name: "Deluxe Sea View Suite",
  description: "Luxurious suite with panoramic sea views, modern amenities, and a private balcony.",
  price: 180,
  capacity: 2,
  size: 45,
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
  location: "Beachfront",
  features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Balcony"]
}, {
  id: "2",
  name: "Premium Family Apartment",
  description: "Spacious apartment ideal for families, with full kitchen and stunning coastal views.",
  price: 250,
  capacity: 4,
  size: 75,
  image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  location: "Second row",
  features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Washing Machine"]
}, {
  id: "3",
  name: "Executive Beach Studio",
  description: "Elegant studio with direct beach access, modern design, and premium finishes.",
  price: 150,
  capacity: 2,
  size: 35,
  image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
  location: "Beachfront",
  features: ["Wi-Fi", "Kitchenette", "Bathroom", "Air Conditioning", "TV"]
}, {
  id: "4",
  name: "Luxury Penthouse Suite",
  description: "Exclusive top-floor suite with expansive terrace and panoramic sea views.",
  price: 350,
  capacity: 4,
  size: 90,
  image: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&h=600&fit=crop",
  location: "Beachfront",
  features: ["Wi-Fi", "Full Kitchen", "2 Bathrooms", "Air Conditioning", "TV", "Terrace", "Jacuzzi"]
}, {
  id: "5",
  name: "Classic Double Room",
  description: "Comfortable hotel room with modern amenities and partial sea views.",
  price: 120,
  capacity: 2,
  size: 28,
  image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
  location: "Hotel building",
  features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Mini Fridge"]
}, {
  id: "6",
  name: "Garden View Apartment",
  description: "Peaceful apartment surrounded by lush gardens, just a short walk from the beach.",
  price: 160,
  capacity: 3,
  size: 55,
  image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop",
  location: "Garden area",
  features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Terrace"]
}];
export default function Apartments() {
  const {
    t
  } = useLanguage();
  const [filteredApartments, setFilteredApartments] = useState<ApartmentProps[]>(allApartments);
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([100, 350]);
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = allApartments;

    // Filter by capacity
    if (capacityFilter !== "all") {
      const capacity = parseInt(capacityFilter);
      result = result.filter(apt => apt.capacity >= capacity);
    }

    // Filter by location
    if (locationFilter !== "all") {
      result = result.filter(apt => apt.location === locationFilter);
    }

    // Filter by price range
    result = result.filter(apt => apt.price >= priceRange[0] && apt.price <= priceRange[1]);
    setFilteredApartments(result);
  }, [capacityFilter, locationFilter, priceRange]);

  // Get unique locations for filter
  const locations = ["all", ...new Set(allApartments.map(apt => apt.location))];
  return <div className="min-h-screen flex flex-col">
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
        <section className="py-8 border-b">
          <div className="container">
            {/* Main Filter Bar */}
            <div className="flex flex-wrap gap-3 items-start animate-fade-in">
              {/* Location Search Bar */}
              <div className="flex-1 min-w-[280px] relative">
                <div className="relative flex">
                  <input
                    type="text"
                    placeholder="Suburb, Postcode Or Region"
                    className="flex-1 h-12 px-4 bg-gray-50 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button className="h-12 px-4 bg-[#FF6A00] hover:bg-[#E55A00] text-white rounded-r-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Property Type and Price Range Section */}
              <div className="flex flex-col gap-3">
                {/* Property Type Toggle */}
                <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button className="px-4 py-3 text-sm font-medium bg-[#FF6A00] text-white">
                    Apartment
                  </button>
                  <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                    House
                  </button>
                  <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                    Townhouse
                  </button>
                </div>

                {/* Price Range Section */}
                <div className="w-64">
                  <label className="block text-sm font-medium mb-2">
                    {t.apartments.filters.priceRange}: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider 
                    defaultValue={[100, 350]} 
                    min={100} 
                    max={350} 
                    step={10} 
                    value={priceRange} 
                    onValueChange={setPriceRange} 
                    className="my-2" 
                  />
                </div>
              </div>

              {/* Filter Buttons Row */}
              <div className="flex gap-2 items-center">
                {/* Bed Filter */}
                <button className="h-12 px-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#2E2E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                  </svg>
                  <span className="text-sm font-medium text-[#2E2E2E]">Bed</span>
                </button>

                {/* Price Filter */}
                <button className="h-12 px-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#2E2E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-sm font-medium text-[#2E2E2E]">Price</span>
                </button>

                {/* More Filters */}
                <button className="h-12 px-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#2E2E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-[#2E2E2E]">More Filters</span>
                </button>

                {/* Reset Button */}
                <button 
                  onClick={() => {
                    setCapacityFilter("all");
                    setLocationFilter("all");
                    setPriceRange([100, 350]);
                  }}
                  className="h-12 px-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-[#2E2E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-sm font-medium text-[#2E2E2E]">Reset</span>
                </button>

                {/* Map Button */}
                <button className="h-12 px-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#2E2E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-[#2E2E2E]">Map</span>
                </button>
              </div>
            </div>

            {/* Legacy Filters (Hidden but functional) */}
            <div className="hidden">
              <Select value={capacityFilter} onValueChange={setCapacityFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.apartments.filters.guests} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.apartments.filters.anyGuests}</SelectItem>
                  <SelectItem value="1">{t.apartments.filters.onePlus}</SelectItem>
                  <SelectItem value="2">{t.apartments.filters.twoPlus}</SelectItem>
                  <SelectItem value="3">{t.apartments.filters.threePlus}</SelectItem>
                  <SelectItem value="4">{t.apartments.filters.fourPlus}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.apartments.filters.location} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.apartments.filters.allLocations}</SelectItem>
                  {locations.filter(loc => loc !== "all").map(location => 
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
            
            {/* Results Summary */}
            <div className="flex justify-between items-center mt-4 animate-fade-in [animation-delay:300ms]">
              <p className="text-muted-foreground">
                {t.apartments.filters.showing} {filteredApartments.length} {t.apartments.filters.of} {allApartments.length} {t.apartments.filters.accommodations}
              </p>
            </div>
          </div>
        </section>
        
        {/* Apartments Grid */}
        <section className="section">
          <div className="container">
            {filteredApartments.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApartments.map((apartment, index) => <div key={apartment.id} className="animate-fade-in" style={{
              animationDelay: `${(index + 1) * 100}ms`
            }}>
                    <ApartmentCard apartment={apartment} />
                  </div>)}
              </div> : <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">{t.apartments.filters.noMatch}</h3>
                <p className="text-muted-foreground mb-6">{t.apartments.filters.adjustFilters}</p>
                <Button variant="outline" onClick={() => {
              setCapacityFilter("all");
              setLocationFilter("all");
              setPriceRange([100, 350]);
            }}>
                  {t.apartments.filters.resetFilters}
                </Button>
              </div>}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
}