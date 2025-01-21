import { Button } from "./ui/button";
import { Globe2, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/c2a29b08-767a-471b-bd1c-f7cb4e0856ee.png" 
              alt="ProBound" 
              className="h-24 w-auto object-contain brightness-100 contrast-125" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Workers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-white dark:bg-gray-950 p-2">
                      <Link 
                        to="/workers/kelly" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      >
                        Kelly
                      </Link>
                      <Link 
                        to="/workers/james" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      >
                        James
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/company" className="text-sm font-medium hover:text-primary">
              Company
            </Link>
            <a href="mailto:founders@probound.ai" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:founders@probound.ai">
                Schedule Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-4 border-t dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/workers/kelly"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Kelly
              </Link>
              <Link 
                to="/workers/james"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                James
              </Link>
              <Link 
                to="/company"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </Link>
              <a 
                href="mailto:founders@probound.ai"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full" size="sm" asChild>
                <a href="mailto:founders@probound.ai">
                  Schedule Demo
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};