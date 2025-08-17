import { Button } from "@/components/ui/button";
import { Phone, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-law-darker border-b border-law-dark">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-law-dark">
          <div className="flex items-center space-x-4">
            <span className="text-card-dark-foreground">Call SVR Law Firm</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/0c8ae49c-b062-449f-8fb0-0f301a61d269.png" alt="US Flag" className="w-4 h-3" />
              <span className="text-card-dark-foreground">English</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/0c8ae49c-b062-449f-8fb0-0f301a61d269.png" alt="Spanish Flag" className="w-4 h-3" />
              <span className="text-card-dark-foreground">Español</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-law-gold mr-8">
              <div className="w-12 h-12 border-2 border-law-gold rounded-full flex items-center justify-center">
                SVR
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-card-dark-foreground hover:text-law-gold transition-colors">Home</a>
              <a href="#" className="text-card-dark-foreground hover:text-law-gold transition-colors">Practice Areas</a>
              <a href="#" className="text-card-dark-foreground hover:text-law-gold transition-colors">About</a>
              <a href="#" className="text-card-dark-foreground hover:text-law-gold transition-colors">Contact</a>
              <a href="#" className="text-card-dark-foreground hover:text-law-gold transition-colors">Free Consultation</a>
              <a href="#" className="text-card-dark-foreground hover:text-law-gold transition-colors">Temp Ting Win</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-card-dark-foreground">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">(234) 567-8901</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;