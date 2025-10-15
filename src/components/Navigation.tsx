
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/f71772bf-2889-40ba-aff5-99a078681e0a.png" 
              alt="ProBound" 
              className="h-24 sm:h-32 md:h-40 w-auto object-contain" 
              style={{ height: "clamp(96px, 20vw, 160px)" }}
            />
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="default" className="gradient-bg hover:opacity-90 text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-2.5 font-semibold shadow-lg shadow-primary/20" asChild>
              <a href="https://outlook.office365.com/book/ProBoundBookingPage@probound.ai/">
                Book a demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
