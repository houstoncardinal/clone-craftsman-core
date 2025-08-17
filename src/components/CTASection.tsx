import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-law-gold">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
          View our practice areas to learn more about the 
          services we provide to our community!
        </h2>
        <Button 
          variant="outline" 
          className="border-2 border-white text-white hover:bg-white hover:text-law-gold bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-300"
        >
          VIEW PRACTICE AREAS
        </Button>
      </div>
    </section>
  );
};

export default CTASection;