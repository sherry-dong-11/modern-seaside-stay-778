import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}
const testimonials: Testimonial[] = [{
  id: 1,
  name: "Sophia Martinez",
  location: "New York, USA",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  content: "My family and I had the most wonderful stay at MareSereno. The apartment was immaculate, with breathtaking sea views. The staff went above and beyond to make our vacation special.",
  rating: 5
}, {
  id: 2,
  name: "Marco Rossi",
  location: "Rome, Italy",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
  content: "Absolutely perfect location, steps away from the beach. The apartment had everything we needed and more. The modern amenities combined with the traditional coastal charm created a truly magical experience.",
  rating: 5
}, {
  id: 3,
  name: "Emma Johnson",
  location: "London, UK",
  avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=150&h=150&fit=crop&crop=faces",
  content: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces.",
  rating: 4
}];
export default function TestimonialsSection() {
  const {
    t
  } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="section-sm bg-soft-grey">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card">
                    <div className="flex items-start mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-neutral-200"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-charcoal text-lg mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {testimonial.location}
                        </p>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 fintech-card p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5 text-charcoal" />
          </button>
          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 fintech-card p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5 text-charcoal" />
          </button>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setActiveIndex(index);
                  }
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === activeIndex
                    ? "bg-orange"
                    : "bg-neutral-300 hover:bg-neutral-400"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}