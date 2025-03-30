
import { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";

const integrations = [
  {
    name: "Cal.com",
    logo: "/lovable-uploads/77282a53-323b-4514-bfb8-1f9b113c327e.png",
  },
  {
    name: "GoHighLevel",
    logo: "https://www.gohighlevel.com/favicon.ico",
  },
  {
    name: "Google Calendar",
    logo: null, // We'll use the Lucide icon instead
    icon: Calendar,
  },
  {
    name: "Salesforce",
    logo: "https://www.salesforce.com/favicon.ico",
  },
  {
    name: "HubSpot",
    logo: "https://www.hubspot.com/favicon.ico",
  },
  {
    name: "Pipedrive",
    logo: "https://www.pipedrive.com/favicon.ico",
  },
];

export const IntegrationsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled the width of one item
      // This creates a seamless infinite scroll effect
      const firstItemWidth = scrollContainer.querySelector('.integration-item')?.clientWidth || 0;
      if (scrollPosition >= firstItemWidth) {
        scrollPosition = 0;
        // Move the first item to the end
        const firstItem = scrollContainer.firstElementChild;
        if (firstItem) {
          scrollContainer.appendChild(firstItem.cloneNode(true));
          scrollContainer.removeChild(firstItem);
        }
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <section className="py-20 bg-secondary/10 relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-10"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/20 rounded-full text-sm text-primary bg-primary/5">
            <span>Integrations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Seamlessly Integrate With Your Tech Stack
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            With native and external connectivity to any CRM, telephony, automation platform, and database, 
            building and deploying phone agents has never been easier.
          </p>
        </div>
        
        <div className="relative mt-16 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
          >
            {/* Duplicate the array to ensure continuous scrolling */}
            {[...integrations, ...integrations].map((integration, index) => (
              <div 
                key={index} 
                className="integration-item flex-shrink-0 p-6 bg-background rounded-xl border border-border/40 hover:card-glow transition-all duration-300 min-w-[230px]"
              >
                <div className="flex items-center justify-center h-16 mb-4">
                  {integration.logo ? (
                    <img 
                      src={integration.logo} 
                      alt={`${integration.name} logo`} 
                      className="h-12 w-auto object-contain"
                      onError={(e) => {
                        // Fallback for images that fail to load
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/100?text=" + integration.name;
                      }}
                    />
                  ) : integration.icon ? (
                    <integration.icon className="h-12 w-12 text-primary" />
                  ) : null}
                </div>
                <p className="text-center font-semibold">{integration.name}</p>
              </div>
            ))}
          </div>
          
          {/* Gradient fades on sides to hide scroll edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/integrations" 
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            View all integrations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
