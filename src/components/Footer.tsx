
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-start mb-4">
              <h1 className="text-3xl font-bold gradient-text">probound</h1>
            </div>
            <p className="text-foreground/70 text-sm">Voice AI Agent for IT Support</p>
            
            <div className="flex gap-4 mt-6">
              <Link to="https://www.linkedin.com/company/proboundai/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/lovable-uploads/606fbc7c-68c5-486e-8ba4-ca136a131666.png" 
                  alt="LinkedIn" 
                  className="w-8 h-8 brightness-0 invert"
                />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <a href="mailto:founders@probound.ai" className="text-foreground/70 hover:text-primary">Email</a>
              <a href="https://cal.com/kemiprobound/ai" className="text-foreground/70 hover:text-primary">Book a Demo</a>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Links</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-foreground/70 hover:text-primary">Privacy Policy</Link>
                <Link to="/acceptable-use" className="text-foreground/70 hover:text-primary">Acceptable Use Policy</Link>
                <Link to="/terms" className="text-foreground/70 hover:text-primary">Terms of Service</Link>
                <Link to="/security" className="text-foreground/70 hover:text-primary">Security</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8">
          <p className="text-foreground/50 text-sm">
            © {currentYear} ProBound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
