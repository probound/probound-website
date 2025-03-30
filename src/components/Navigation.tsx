
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c2a29b08-767a-471b-bd1c-f7cb4e0856ee.png" 
              alt="ProBound" 
              className="h-12 w-auto object-contain" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base hover:text-primary">Workers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-white p-2 rounded-lg shadow-lg">
                      <Link 
                        to="/workers/kelly" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      >
                        Kelly
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base hover:text-primary">Use Cases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-white p-2 rounded-lg shadow-lg">
                      <Link 
                        to="/use-cases/lead-qualification" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      >
                        Lead Qualification
                      </Link>
                      <Link 
                        to="/use-cases/customer-support" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      >
                        Customer Support
                      </Link>
                      <Link 
                        to="/use-cases/receptionists" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      >
                        Receptionists
                      </Link>
                      <Link 
                        to="/use-cases/dispatch-service" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      >
                        Dispatch Service
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/company" className="text-base text-gray-600 hover:text-primary">
              Company
            </Link>
            <a href="mailto:founders@probound.ai" className="text-base text-gray-600 hover:text-primary">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <Button className="rounded-full px-6" asChild>
              <a href="https://cal.com/kemiprobound/ai">
                Schedule Demo
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <Link to="/workers/kelly" className="py-2 text-base text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Workers
            </Link>
            <Link to="/use-cases" className="py-2 text-base text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Use Cases
            </Link>
            <Link to="/company" className="py-2 text-base text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Company
            </Link>
            <a href="mailto:founders@probound.ai" className="py-2 text-base text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <Button className="w-full rounded-full mt-4" asChild>
              <a href="https://cal.com/kemiprobound/ai">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
