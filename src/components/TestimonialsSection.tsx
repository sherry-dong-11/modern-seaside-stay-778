import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

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

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.testimonials.title}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t.testimonials.description}
          </motion.p>
        </div>
        
        {/* 2 Per Row Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="card-premium group hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col gap-6">
                {/* Header with Avatar and Rating */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden w-16 h-16 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 transition-colors duration-300 ${i < testimonial.rating ? "fill-primary text-primary" : "text-neutral-300"}`} 
                        />
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Third testimonial in full width if exists */}
        {testimonials.length > 2 && (
          <div className="mt-8">
            <motion.div 
              className="card-premium group hover:-translate-y-2 transition-all duration-500 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <div className="rounded-full overflow-hidden w-20 h-20 mb-4 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <img 
                      src={testimonials[2].avatar} 
                      alt={testimonials[2].name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 transition-colors duration-300 ${i < testimonials[2].rating ? "fill-primary text-primary" : "text-neutral-300"}`} 
                      />
                    ))}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground text-center md:text-left">{testimonials[2].name}</h4>
                  <p className="text-sm text-muted-foreground text-center md:text-left">{testimonials[2].location}</p>
                </div>
                
                <div className="flex-1 flex items-center">
                  <blockquote className="text-muted-foreground text-center md:text-left leading-relaxed">
                    "{testimonials[2].content}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}