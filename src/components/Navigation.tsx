import { Button } from "./ui/button";
import { Globe2, Users, Building2, Briefcase } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Globe2 className="w-8 h-8 text-[#0C7BCE]" />
            <span className="text-xl font-bold">ProBound.ai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#agents" className="flex items-center gap-2 text-gray-600 hover:text-[#0C7BCE]">
              <Users className="w-4 h-4" />
              Agents
            </a>
            <a href="#industry" className="flex items-center gap-2 text-gray-600 hover:text-[#0C7BCE]">
              <Building2 className="w-4 h-4" />
              Industry
            </a>
            <a href="#company" className="flex items-center gap-2 text-gray-600 hover:text-[#0C7BCE]">
              <Briefcase className="w-4 h-4" />
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