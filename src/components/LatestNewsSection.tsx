import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const newsArticles = [{
  id: 1,
  image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
  date: "16th July 2025",
  headline: "Nationwide Rent Report Released: Melbourne Apartment Rents Surge — Only $5 Less Than Houses!"
}, {
  id: 2,
  image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
  date: "15th July 2025",
  headline: "Energy-Efficient Homes in Australia Selling at Up to 23.8% Premium"
}, {
  id: 3,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
  date: "15th July 2025",
  headline: "Victoria May Scrap Stamp Duty for First-Home Buyers Next Year – Major Drop in Property Purchase Costs"
}, {
  id: 4,
  image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop",
  date: "14th July 2025",
  headline: "Great News for Victorian Homebuyers: Stamp Duty Discount Extended Another 12 Months"
}];
export function LatestNewsSection() {
  const navigate = useNavigate();
  const handleBrowseAllNews = () => {
    navigate("/blog");
  };
  return <section className="py-6 bg-gray-50/50">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-foreground mb-2 text-3xl font-semibold">
              Latest News
            </h2>
            <p className="text-muted-foreground">Insights into the Australian new development & real estate market</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/90 self-center sm:self-auto" onClick={handleBrowseAllNews}>
            Browse all news
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map(article => <Card key={article.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-sm hover:-translate-y-1">
              <CardContent className="p-0">
                {/* Article Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={article.image} alt={article.headline} className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Article Content */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    {article.date}
                  </p>
                  <h3 className="text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-3 font-semibold">
                    {article.headline}
                  </h3>
                  
                  {/* Read More on Hover */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-primary text-sm font-medium inline-flex items-center">
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
}