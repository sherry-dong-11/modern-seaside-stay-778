import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";
import australianHouse1 from "@/assets/australian-house-1.jpg";
import australianHouse2 from "@/assets/australian-house-2.jpg";
import australianHouse3 from "@/assets/australian-house-3.jpg";

// House & Land data based on the reference image
const allApartments: ApartmentProps[] = [{
  id: "officer-central",
  name: "Officer Central - Urbane House and Land",
  description: "Modern house and land packages in the growing Officer community with quality construction.",
  price: 750000,
  capacity: 4,
  size: 200,
  image: australianHouse1,
  location: "45 Rix Road, Officer VIC 3809",
  features: ["3-4 Bedrooms", "1-2 Bathrooms", "1-2 Car Space", "House & Land Package", "Modern Design"]
}, {
  id: "minta-estate",
  name: "Minta Estate - Urbane House and Land",
  description: "Premium house and land packages in established Berwick with family-friendly amenities.",
  price: 692404,
  capacity: 4,
  size: 220,
  image: australianHouse2,
  location: "67 Soldiers Road, Berwick VIC 3806",
  features: ["3-4 Bedrooms", "1-2 Bathrooms", "1-2 Car Space", "Family Community", "Quality Finishes"]
}, {
  id: "hillgrove-rockbank",
  name: "Hillgrove - Rockbank",
  description: "Contact agents for more information about this exclusive house and land development.",
  price: 850000,
  capacity: 4,
  size: 250,
  image: australianHouse3,
  location: "Greenpoint Drive, Rockbank VIC 3335",
  features: ["Contact Required", "New Development", "Modern Architecture", "Family Oriented"]
}, {
  id: "warehouse-maughan",
  name: "Warehouse - 1 Maughan Way",
  description: "Unique warehouse conversion opportunity in Cranbourne West. Contact agents for details.",
  price: 950000,
  capacity: 3,
  size: 180,
  image: australianHouse1,
  location: "1 Maughan Way, Cranbourne West VIC 3977",
  features: ["Contact Required", "Unique Property", "Industrial Style", "Investment Opportunity"]
}, {
  id: "cranbourne-estate",
  name: "Cranbourne Family Estate",
  description: "Spacious family homes in growing Cranbourne with modern amenities and community facilities.",
  price: 720000,
  capacity: 4,
  size: 210,
  image: australianHouse2,
  location: "Cranbourne VIC 3977",
  features: ["4 Bedrooms", "2 Bathrooms", "2 Car Space", "Community Hub", "Modern Kitchen"]
}, {
  id: "pakenham-springs",
  name: "Pakenham Springs",
  description: "Contemporary house and land packages in vibrant Pakenham with excellent connectivity.",
  price: 680000,
  capacity: 3,
  size: 190,
  image: australianHouse3,
  location: "Pakenham VIC 3810",
  features: ["3-4 Bedrooms", "2 Bathrooms", "2 Car Space", "Train Station Nearby", "Shopping Centers"]
}];
export default function HouseLand() {
  const {
    t
  } = useLanguage();
  const [filteredApartments, setFilteredApartments] = useState<ApartmentProps[]>(allApartments);
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([650000, 1000000]);
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
        
        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            {/* Main Filter Bar */}
            <div className="flex flex-wrap gap-3 items-center animate-fade-in">
              {/* Location Search Bar */}
              <div className="flex-1 min-w-[280px] relative">
                <div className="relative flex">
                  <input type="text" placeholder="Suburb, Postcode Or Region" className="flex-1 h-12 px-4 bg-gray-50 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  <button className="h-12 px-4 bg-[#FF6A00] hover:bg-[#E55A00] text-white rounded-r-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Property Type Toggle */}
              <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  Apartment
                </button>
                <button className="px-4 py-3 text-sm font-medium bg-[#FF6A00] text-white">
                  House
                </button>
                <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  Townhouse
                </button>
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
                <button onClick={() => {
                setCapacityFilter("all");
                setLocationFilter("all");
                setPriceRange([650000, 1000000]);
              }} className="h-12 px-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow flex items-center gap-2">
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
                  {locations.filter(loc => loc !== "all").map(location => <SelectItem key={location} value={location}>{location}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Section */}
            <div className="mt-6 max-w-sm animate-fade-in [animation-delay:200ms]">
              <label className="block text-sm font-medium mb-2">
                {t.apartments.filters.priceRange}: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <Slider defaultValue={[650000, 1000000]} min={650000} max={1000000} step={10000} value={priceRange} onValueChange={setPriceRange} className="my-4" />
            </div>
            
            {/* Results Summary */}
            <div className="flex justify-between items-center mt-4 animate-fade-in [animation-delay:300ms]">
              <p className="text-muted-foreground">
                {t.apartments.filters.showing} {filteredApartments.length} {t.apartments.filters.of} {allApartments.length} {t.apartments.filters.accommodations}
              </p>
            </div>
          </div>
        </section>
        
        {/* Properties Grid */}
        <section className="section py-[25px]">
          <div className="container">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  House & Land For Sale & other Off the Plan Properties nearby
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {filteredApartments.length} out of {allApartments.length} projects available on Yephome
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-48 border-gray-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Sort by Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredApartments.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
              setPriceRange([650000, 1000000]);
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