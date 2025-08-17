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

const PracticeAreas = () => {
  return (
    <section className="py-16 bg-law-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-6 gap-0">{/* Single row with 6 columns */}
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
    </section>
  );
};

export default PracticeAreas;