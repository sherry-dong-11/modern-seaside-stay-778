import { useEffect, useRef } from "react";

const partners = [
  { name: "SoftBank" },
  { name: "RMIT University" }, 
  { name: "MAB Corporation" },
  { name: "CBRE Group" },
  { name: "Colliers International" },
  { name: "Frasers Property" },
  { name: "Brady Property" },
  { name: "Mirvac Group" },
  { name: "Lendlease" },
  { name: "Stockland" },
  { name: "Dexus Property" },
  { name: "Charter Hall" },
];

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Slower speed for smoother animation

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled past the first set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            TRUSTED <span className="text-orange-500">PARTNERS</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Partnering with Australia's leading property developers and industry leaders
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ width: 'max-content' }}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-md group cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-md group cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;