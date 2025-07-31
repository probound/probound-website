
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
            <Button variant="outline" className="text-sm sm:text-base px-3 sm:px-4 py-2" asChild>
              <a href="https://app.probound.ai/auth/sign-in">
                Sign in
              </a>
            </Button>
            <Button variant="default" className="gradient-bg hover:opacity-90 text-sm sm:text-base px-3 sm:px-4 py-2" asChild>
              <a href="https://app.probound.ai/auth/sign-up">
                Start for free
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
