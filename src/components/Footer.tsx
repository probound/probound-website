import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="bg-primary-500 inline-block p-2 rounded-lg mb-4">
              <span className="text-xl">+</span>
            </div>
            <p className="text-gray-400 text-sm">
              This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-white text-sm">Features</Link></li>
                <li><Link to="/integrations" className="text-gray-400 hover:text-white text-sm">Integrations</Link></li>
                <li><Link to="/career" className="text-gray-400 hover:text-white text-sm">Career</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-3">
                <li><Link to="/product" className="text-gray-400 hover:text-white text-sm">Product detail</Link></li>
                <li><Link to="/cart" className="text-gray-400 hover:text-white text-sm">Cart</Link></li>
                <li><Link to="/checkout" className="text-gray-400 hover:text-white text-sm">Checkout</Link></li>
                <li><Link to="/order" className="text-gray-400 hover:text-white text-sm">Order confirmation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-3">
                <li><Link to="/demo" className="text-gray-400 hover:text-white text-sm">Request a demo</Link></li>
                <li><Link to="/signin" className="text-gray-400 hover:text-white text-sm">Sign in</Link></li>
                <li><Link to="/signup" className="text-gray-400 hover:text-white text-sm">Sign up</Link></li>
                <li><Link to="/reset-password" className="text-gray-400 hover:text-white text-sm">Reset password</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            ProBound © {currentYear}. All rights reserved.
            <span className="mx-4">·</span>
            <Link to="/privacy" className="hover:text-white">Privacy notice</Link>
            <span className="mx-4">·</span>
            <Link to="/legal" className="hover:text-white">Legal</Link>
            <span className="mx-4">·</span>
            <button className="hover:text-white">Cookie settings</button>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link to="https://facebook.com" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="https://twitter.com" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="https://instagram.com" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="https://youtube.com" className="text-gray-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </Link>
            <select className="bg-black text-gray-400 hover:text-white border-none focus:outline-none text-sm">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;