import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          You pay nothing until we<br />
          win for you.
        </h1>
      </div>
      
      {/* Practice area cards at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 transform translate-y-1/2">
            <div className="bg-card-dark p-6 text-card-dark-foreground">
              <h3 className="text-xl font-bold mb-2">Personal Injury Law</h3>
              <p className="text-sm opacity-90 mb-4">
                If you have been injured in an accident resulting from someone's negligence or intentional act, we can help you recover your damages including medical expenses, lost wages, pain and suffering, and more.
              </p>
              <div className="flex justify-end">
                <span className="text-law-gold">→</span>
              </div>
            </div>
            <div className="bg-card-dark p-6 text-card-dark-foreground">
              <h3 className="text-xl font-bold mb-2">Criminal Defense Law</h3>
              <p className="text-sm opacity-90 mb-4">
                If you have been charged with or are under investigation for a crime, don't speak to police without an attorney present. Call us at (214) 291-4815. We can help with all types of criminal defense cases.
              </p>
              <div className="flex justify-end">
                <span className="text-law-gold">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;