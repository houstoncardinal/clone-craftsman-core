import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Working Hours */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/svr.jpeg" 
                alt="SVR LAW" 
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
            <h4 className="font-semibold mb-4 text-white">Working Hours</h4>
            <div className="space-y-2 text-sm text-white">
              <p>Mon-Fri: 9 AM - 5 PM</p>
              <p>Saturday: 9 AM - 5 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Office */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Office</h4>
            <div className="space-y-2 text-sm text-white">
              <p>2100 West Loop South Suite 1510</p>
              <p>Houston, TX 77027</p>
              <p className="mt-4">info@svrlawfirm.com</p>
              <p className="mt-4">Office: 281-249-9835</p>
              <p>Fax: 832-346-3442</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Links</h4>
            <div className="space-y-2 text-sm">
              <p><Link to="/" className="text-white hover:text-law-gold transition-colors">Home</Link></p>
              <p><Link to="/practice-areas" className="text-white hover:text-law-gold transition-colors">Practice Areas</Link></p>
              <p><Link to="/about" className="text-white hover:text-law-gold transition-colors">About Us</Link></p>
              <p><Link to="/contact" className="text-white hover:text-law-gold transition-colors">Contact</Link></p>
              <p><Link to="/free-consultation" className="text-white hover:text-law-gold transition-colors">Free Consultation</Link></p>
              <p><a href="#" className="text-white hover:text-law-gold transition-colors">News</a></p>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/SVRLaw/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook className="w-4 h-4 text-black" />
              </a>
              <a href="https://maps.app.goo.gl/f6oNZibXsTYcqp8M6" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xs font-bold">G</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇺🇸</span>
                <span className="text-white">English</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇲🇽</span>
                <span className="text-white">Español</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-left text-sm">
          <p className="text-white">SVR Law Firm © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;