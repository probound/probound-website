
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/c2a29b08-767a-471b-bd1c-f7cb4e0856ee.png" 
              alt="ProBound" 
              className="h-9 w-auto object-contain brightness-200 contrast-125" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu className="text-gray-300">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800 hover:text-white">Workers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-gray-900 border border-gray-800 p-2 rounded-md">
                      <Link 
                        to="/workers/kelly" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                      >
                        Kelly
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800 hover:text-white">Use Cases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-gray-900 border border-gray-800 p-2 rounded-md">
                      <Link 
                        to="/use-cases/lead-qualification" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                      >
                        Lead Qualification
                      </Link>
                      <Link 
                        to="/use-cases/customer-support" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                      >
                        Customer Support
                      </Link>
                      <Link 
                        to="/use-cases/receptionists" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                      >
                        Receptionists
                      </Link>
                      <Link 
                        to="/use-cases/dispatch-service" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                      >
                        Dispatch Service
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/company" className="text-gray-300 hover:text-white">
              Company
            </Link>
            <a href="mailto:founders@probound.ai" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full" asChild>
              <a href="https://cal.com/kemiprobound/ai">
                Launch Taalk
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
