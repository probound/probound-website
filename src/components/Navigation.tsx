import { Button } from "./ui/button";
import { Globe2, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <Globe2 className="w-8 h-8 text-[#0C7BCE]" />
            <span className="text-xl font-bold">probound</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Workers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-white p-2">
                      <Link 
                        to="/workers/kelly" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Kelly
                      </Link>
                      <Link 
                        to="/workers/james" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        James
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="#industry" className="text-gray-600 hover:text-[#0C7BCE]">
              Industry
            </a>
            <a href="#company" className="text-gray-600 hover:text-[#0C7BCE]">
              Company
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Log in</Button>
            <Button>Start free trial</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};