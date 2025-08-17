import { Button } from "@/components/ui/button";
import wrongfulDeathImg from "@/assets/wrongful-death.jpg";
import carAccidentsImg from "@/assets/car-accidents.jpg";
import truckAccidentsImg from "@/assets/truck-accidents.jpg";
import slipFallImg from "@/assets/slip-fall.jpg";
import dwiDuiImg from "@/assets/dwi-dui.jpg";
import domesticViolenceImg from "@/assets/domestic-violence.jpg";

const practiceAreas = [
  {
    title: "Wrongful Death",
    subtitle: "Read More",
    image: wrongfulDeathImg,
    link: "#"
  },
  {
    title: "Car Accidents", 
    subtitle: "Read More",
    image: carAccidentsImg,
    link: "#"
  },
  {
    title: "18-Wheeler Accidents",
    subtitle: "Read More", 
    image: truckAccidentsImg,
    link: "#"
  },
  {
    title: "Slip and Fall",
    subtitle: "Read More",
    image: slipFallImg,
    link: "#"
  },
  {
    title: "DWI/DUI",
    subtitle: "Read More",
    image: dwiDuiImg,
    link: "#"
  },
  {
    title: "Domestic Violence",
    subtitle: "Read More",
    image: domesticViolenceImg,
    link: "#"
  }
];

const WelcomeSection = () => {
  return (
    <section className="bg-background">
      {/* Welcome content */}
      <div className="py-20">
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
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-2">
                  ABOUT US
                </Button>
                <Button variant="outline" className="border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-2">
                  PRACTICE AREAS
                </Button>
              </div>
            </div>
            <div className="text-foreground">
              <p className="mb-4">
                At SVR Law Firm, we focus on delivering superior legal strategies for personal injury actions and felony and misdemeanor criminal defense across the State of Texas. With years of trial experience and a commitment to achieving the best possible results, we live earned a reputation for excellence.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Please note that each individual case is unique and past results do not guarantee future outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Areas - directly connected with no spacing */}
      <div className="bg-law-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-6 gap-0">
            {practiceAreas.map((area, index) => (
              <div key={index} className="relative overflow-hidden group cursor-pointer border-r border-law-darker last:border-r-0">
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${area.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{area.title}</h3>
                    <p className="text-xs opacity-90">{area.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;