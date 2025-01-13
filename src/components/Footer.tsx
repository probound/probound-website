import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#4ADE80] w-8 h-8 rounded flex items-center justify-center">
                <span className="text-black text-xl font-bold">+</span>
              </div>
              <span className="text-xl font-bold">viralhooks</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Curated with 🔥 from Pitch Liew</p>
            <p className="text-gray-400 text-sm">By Creators, For Creators</p>
            
            <div className="flex gap-4 mt-6">
              <Link to="https://instagram.com" className="bg-[#1A1A1A] p-2 rounded-full hover:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="https://twitter.com" className="bg-[#1A1A1A] p-2 rounded-full hover:bg-gray-800">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="https://youtube.com" className="bg-[#1A1A1A] p-2 rounded-full hover:bg-gray-800">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link to="https://facebook.com" className="bg-[#1A1A1A] p-2 rounded-full hover:bg-gray-800">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <p className="text-gray-400">hello@viralhooks.ai</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white">Cookies Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            © {currentYear} Viralhooks AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;