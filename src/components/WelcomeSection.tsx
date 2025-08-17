import { Button } from "@/components/ui/button";

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-law-gold mb-2 tracking-wider">
              WELCOME TO SVR LAW FIRM
            </p>
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              Experienced Legal<br />
              Representation You Can Trust
            </h2>
            <div className="flex space-x-4">
              <Button variant="default" className="bg-law-gold hover:bg-law-gold-dark text-white">
                ABOUT US
              </Button>
              <Button variant="outline" className="border-law-gold text-law-gold hover:bg-law-gold hover:text-white">
                PRACTICE AREAS
              </Button>
            </div>
          </div>
          <div className="text-foreground">
            <p className="mb-4">
              At SVR Law Firm, we focus on delivering superior legal strategies for personal injury actions and felony and misdemeanor criminal defense across the State of Texas. With years of trial experience and a commitment to achieving the best possible results, we live earned a reputation for excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;