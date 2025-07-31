
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/f71772bf-2889-40ba-aff5-99a078681e0a.png" 
              alt="ProBound" 
              className="h-160 w-auto object-contain" 
              style={{ height: "160px" }}
            />
          </Link>
          

          <div className="flex items-center gap-4">
            <Button variant="default" className="gradient-bg hover:opacity-90" asChild>
              <a href="https://cal.com/kemiprobound/ai">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
