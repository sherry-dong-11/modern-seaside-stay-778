import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const newsArticles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    date: "16th July 2025",
    headline: "First look: Holdmark plans another 1,000 new apartments in Melrose Park masterplan"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
    date: "15th July 2025", 
    headline: "Fortis doubles down on Brisbane, files boutique apartment plans on Hamilton's Racecourse Road"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    date: "15th July 2025",
    headline: "Marriott Street Terraces at Surry Hills Village offer 'perfect balance between bustle and privacy'"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop",
    date: "15th July 2025",
    headline: "Shaping a sustainable future: Development Victoria sets new standards in sustainability"
  }
];

export function LatestNewsSection() {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Latest News
            </h2>
            <p className="text-muted-foreground">
              Insights on off-the-plan apartments and townhouses
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/90 self-center sm:self-auto">
            Browse all news
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <Card key={article.id} className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
              <CardContent className="p-0">
                {/* Article Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.headline}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                {/* Article Content */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    {article.date}
                  </p>
                  <h3 className="text-base font-medium leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-3">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}