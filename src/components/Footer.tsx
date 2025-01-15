import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-start mb-4">
              <img 
                src="/lovable-uploads/c2a29b08-767a-471b-bd1c-f7cb4e0856ee.png" 
                alt="ProBound" 
                className="h-32 w-auto object-contain brightness-0 invert contrast-125" 
              />
            </div>
            <p className="text-gray-400 text-sm">AI Digital Workers for Sales and Customer Support</p>
            
            <div className="flex gap-4 mt-6">
              <Link to="https://www.linkedin.com/company/proboundai/" className="bg-[#1A1A1A] p-2 rounded-full hover:bg-[#9b87f5]">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <a href="mailto:founders@probound.ai" className="text-gray-400 hover:text-[#9b87f5]">founders@probound.ai</a>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <div className="flex flex-col space-y-2">
                <a href="https://docs.google.com/document/d/1mO6CnCVbuScd1eRn83CNRYO8ldPJ18PlX5XAF0M8xq4/edit?usp=sharing" 
                   className="text-gray-400 hover:text-[#9b87f5]">Privacy Policy</a>
                <a href="https://docs.google.com/document/d/1mO6CnCVbuScd1eRn83CNRYO8ldPJ18PlX5XAF0M8xq4/edit?usp=sharing" 
                   className="text-gray-400 hover:text-[#9b87f5]">Data Policy</a>
                <a href="https://docs.google.com/document/d/1mO6CnCVbuScd1eRn83CNRYO8ldPJ18PlX5XAF0M8xq4/edit?usp=sharing" 
                   className="text-gray-400 hover:text-[#9b87f5]">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            © {currentYear} probound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;