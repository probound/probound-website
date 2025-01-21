import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-start mb-4">
              <h1 className="text-3xl font-bold">probound</h1>
            </div>
            <p className="text-muted-foreground text-sm">AI Digital Workers for Sales and Customer Support</p>
            
            <div className="flex gap-4 mt-6">
              <Link 
                to="https://www.linkedin.com/company/proboundai/" 
                className="bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <a 
                href="mailto:founders@probound.ai" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                founders@probound.ai
              </a>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://docs.google.com/document/d/1mO6CnCVbuScd1eRn83CNRYO8ldPJ18PlX5XAF0M8xq4/edit?usp=sharing" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://docs.google.com/document/d/1mO6CnCVbuScd1eRn83CNRYO8ldPJ18PlX5XAF0M8xq4/edit?usp=sharing" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Data Policy
                </a>
                <a 
                  href="https://docs.google.com/document/d/1mO6CnCVbuScd1eRn83CNRYO8ldPJ18PlX5XAF0M8xq4/edit?usp=sharing" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm">
            © {currentYear} probound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;