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
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('forward');
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('backward');
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  return <section className="bg-muted py-4 sm:py-6 lg:py-8">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <h2 className="text-3xl mb-2 md:text-3xl font-semibold">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[300px]">
            {testimonials.map((testimonial, index) => {
              let slideClass = '';
              if (activeIndex === index) {
                slideClass = "opacity-100 translate-x-0 z-10";
              } else if (direction === 'forward') {
                // For forward direction, previous slides go left, next slides go right
                slideClass = index < activeIndex ? "opacity-0 -translate-x-full z-0" : "opacity-0 translate-x-full z-0";
              } else {
                // For backward direction, previous slides go right, next slides go left
                slideClass = index > activeIndex ? "opacity-0 translate-x-full z-0" : "opacity-0 -translate-x-full z-0";
              }
              
              return (
                <div key={testimonial.id} className={cn("absolute inset-0 glass-card p-4 sm:p-6 md:p-8 lg:p-10 transition-all duration-500", slideClass)}>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 h-full">
                  <div className="flex flex-col items-center md:items-start shrink-0">
                    <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 border-2 border-primary">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`h-3 w-3 sm:h-4 sm:w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />)}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-center md:text-left">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex-1 flex items-center min-h-0">
                    <blockquote className="italic text-muted-foreground text-sm sm:text-base text-center md:text-left leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-between mt-8">
            <button onClick={prevTestimonial} className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors" disabled={isAnimating}>
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setDirection(index > activeIndex ? 'forward' : 'backward');
              setActiveIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }} className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
            
            <button onClick={nextTestimonial} className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors" disabled={isAnimating}>
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>;
}