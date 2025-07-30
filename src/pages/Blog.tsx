import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
const categories = [{
  id: "all",
  label: "All",
  active: true
}, {
  id: "blog",
  label: "Blog",
  active: false
}, {
  id: "press",
  label: "Press Releases",
  active: false
}, {
  id: "stories",
  label: "Customer Stories",
  active: false
}];
const blogPosts = [{
  id: 1,
  title: "Introducing YEPHOME Analytics: Turn Complex Property Data into Actionable Intelligence",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  category: "blog",
  date: "August 15, 2024",
  bgColor: "bg-gradient-to-br from-sky-100 to-blue-100"
}, {
  id: 2,
  title: "Mastering Property Markets: Industry Experts Share their Winning Strategies",
  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
  category: "blog",
  date: "August 14, 2024",
  bgColor: "bg-white"
}, {
  id: 3,
  title: "Announcing YEPHOME's $31 Million Series B Funding",
  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
  category: "press",
  date: "August 13, 2024",
  bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
  isDark: true
}, {
  id: 4,
  title: "The Future of Property Investment: AI-Powered Market Analysis",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  category: "blog",
  date: "August 12, 2024",
  bgColor: "bg-gradient-to-br from-orange-50 to-sand-100"
}, {
  id: 5,
  title: "Success Story: How Melbourne Buyers Found Their Dream Home in 30 Days",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  category: "stories",
  date: "August 11, 2024",
  bgColor: "bg-white"
}, {
  id: 6,
  title: "YEPHOME Partners with Leading Australian Banks for Seamless Home Loans",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  category: "press",
  date: "August 10, 2024",
  bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
}];
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="min-h-screen flex flex-col">
      <ModernNavbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header Section */}
          <div className="mb-12">
            {/* Category Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => <Button key={category.id} variant={activeCategory === category.id ? "default" : "outline"} className={`rounded-full px-6 py-2 ${activeCategory === category.id ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`} onClick={() => setActiveCategory(category.id)}>
                    {category.label}
                  </Button>)}
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 w-64 rounded-full border-slate-200 focus:border-primary" />
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl text-slate-900 mb-4 md:text-3xl font-semibold">
              {activeCategory === "all" ? "Latest News and Blogs" : activeCategory === "blog" ? "Blog" : activeCategory === "press" ? "Press Releases" : "Customer Stories"}
            </h1>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => <Card key={post.id} className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${post.bgColor}`}>
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-3 leading-tight group-hover:text-primary transition-colors ${post.isDark ? "text-white" : "text-slate-900"}`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-sm ${post.isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {post.date}
                  </p>
                </div>
              </Card>)}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > 6 && <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-3 border-slate-200 hover:bg-slate-50">
                Load More Articles
              </Button>
            </div>}
        </div>
      </main>
      
      <ModernFooter />
    </div>;
}