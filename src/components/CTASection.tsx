import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-law-gold">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 max-w-3xl mx-auto">
          View our practice areas to learn more about the 
          services we provide to our community!
        </h2>
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-law-gold bg-transparent"
        >
          VIEW PRACTICE AREAS
        </Button>
      </div>
    </section>
  );
};

export default CTASection;