import { Button } from "./ui/button";
import { Globe2, ChevronDown } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-24 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/c2a29b08-767a-471b-bd1c-f7cb4e0856ee.png" 
              alt="ProBound" 
              className="h-36 w-auto object-contain brightness-100 contrast-125" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary">Workers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-white p-2">
                      <Link 
                        to="/workers/kelly" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary rounded-md"
                      >
                        Kelly
                      </Link>
                      <Link 
                        to="/workers/james" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary rounded-md"
                      >
                        James
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/company" className="text-gray-600 hover:text-primary">
              Company
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary">
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScf5acG-weGSYuYsJ8PN1b81VJofJ9-PDJ7b4fapY2m4KVQVw/viewform?usp=sf_link">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};