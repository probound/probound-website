
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
              src="/lovable-uploads/c2a29b08-767a-471b-bd1c-f7cb4e0856ee.png" 
              alt="ProBound" 
              className="h-10 w-auto object-contain brightness-0 invert" 
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/80 hover:text-primary">Workers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-popover p-2 rounded-md border border-border/40">
                      <Link 
                        to="/workers/kelly" 
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md"
                      >
                        Kelly
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/80 hover:text-primary">Use Cases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 bg-popover p-2 rounded-md border border-border/40">
                      <Link 
                        to="/use-cases/lead-qualification" 
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md"
                      >
                        Lead Qualification
                      </Link>
                      <Link 
                        to="/use-cases/customer-support" 
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md"
                      >
                        Customer Support
                      </Link>
                      <Link 
                        to="/use-cases/receptionists" 
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md"
                      >
                        Receptionists
                      </Link>
                      <Link 
                        to="/use-cases/dispatch-service" 
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md"
                      >
                        Dispatch Service
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/company" className="text-foreground/80 hover:text-primary">
              Company
            </Link>
            <a href="mailto:founders@probound.ai" className="text-foreground/80 hover:text-primary">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="default" className="gradient-bg hover:opacity-90" asChild>
              <a href="https://cal.com/kemiprobound/ai">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
