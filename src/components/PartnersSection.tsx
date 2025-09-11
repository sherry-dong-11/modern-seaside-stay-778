import { useEffect, useRef } from "react";

const partners = [
  {
    name: "SoftBank",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/SoftBank-Logo.png",
  },
  {
    name: "RMIT University", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/RMIT_University_Logo.svg/1200px-RMIT_University_Logo.svg.png",
  },
  {
    name: "MAB",
    logo: "https://www.mab.com.au/wp-content/uploads/2021/03/MAB-Logo-Blue.png",
  },
  {
    name: "CBRE",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/CBRE-Logo.png",
  },
  {
    name: "Colliers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Colliers_International_logo.svg/1200px-Colliers_International_logo.svg.png",
  },
  {
    name: "Frasers Property",
    logo: "https://www.frasersproperty.com.au/content/dam/frasers-property/corporate-sites/australia/images/general/FP_Logo_Horizontal_RGB.png",
  },
  {
    name: "Brady",
    logo: "https://www.bradypropertygroup.com.au/wp-content/uploads/2021/02/Brady-Property-Group-Logo.png",
  },
  {
    name: "Mirvac",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mirvac_logo.svg/1200px-Mirvac_logo.svg.png",
  },
];

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    if (scrollWidth <= clientWidth) return;

    let scrollPosition = 0;
    const scrollStep = 1;
    const scrollDelay = 30;

    const scroll = () => {
      scrollPosition += scrollStep;
      
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, scrollDelay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            OUR <span className="text-primary">PARTNERS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading property developers, financial institutions, and technology companies
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap"
            style={{ width: 'fit-content' }}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-card rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-card rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;