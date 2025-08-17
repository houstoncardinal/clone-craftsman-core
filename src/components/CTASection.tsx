import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-law-gold">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-white mb-6 lg:mb-0 lg:mr-8 leading-tight">
            View our practice areas to learn more about the services we provide to our community!
          </h2>
          <Link to="/practice-areas">
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-law-gold bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-300 whitespace-nowrap shadow-lg"
            >
              VIEW PRACTICE AREAS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;