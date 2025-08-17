import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-law-darker text-card-dark-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Working Hours */}
          <div>
            <div className="text-2xl font-bold text-law-gold mb-4">
              <div className="w-12 h-12 border-2 border-law-gold rounded-full flex items-center justify-center mb-4">
                SVR
              </div>
            </div>
            <h4 className="font-semibold mb-4">Working Hours</h4>
            <div className="space-y-2 text-sm">
              <p>Mon-Fri: 8 AM - 5 PM</p>
              <p>Saturday: 8 AM - 4 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Office */}
          <div>
            <h4 className="font-semibold mb-4">Office</h4>
            <div className="space-y-2 text-sm">
              <p>200 West Loop South Suite 340</p>
              <p>Houston, TX 77027</p>
              <p className="mt-4">info@svrlawfirm.com</p>
              <p className="mt-4">Office: 234-567-8901</p>
              <p>Fax: 800-340-4447</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2 text-sm">
              <p><a href="#" className="hover:text-law-gold transition-colors">Home</a></p>
              <p><a href="#" className="hover:text-law-gold transition-colors">Practice Areas</a></p>
              <p><a href="#" className="hover:text-law-gold transition-colors">About Us</a></p>
              <p><a href="#" className="hover:text-law-gold transition-colors">Contacts</a></p>
              <p><a href="#" className="hover:text-law-gold transition-colors">Free Consultation</a></p>
              <p><a href="#" className="hover:text-law-gold transition-colors">News</a></p>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="flex space-x-4 mb-4">
              <Facebook className="w-5 h-5 hover:text-law-gold cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-law-gold cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-law-gold cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-law-gold cursor-pointer transition-colors" />
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/0c8ae49c-b062-449f-8fb0-0f301a61d269.png" alt="US Flag" className="w-4 h-3" />
                <span>English</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/0c8ae49c-b062-449f-8fb0-0f301a61d269.png" alt="Spanish Flag" className="w-4 h-3" />
                <span>Español</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-law-dark mt-8 pt-8 text-center text-sm">
          <p>SVR Law Firm © 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;