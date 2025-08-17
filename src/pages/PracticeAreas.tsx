import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Shield, Scale, Users, Heart, Car, Truck, User, Dog } from "lucide-react";
import { SEOHead, SEOConfigs } from "@/components/SEOHead";
import { LawFirmSchema } from "@/components/SchemaMarkup";
import slipFallImage from "@/assets/slip-fall.jpg";

const PracticeAreas = () => {
  const [hoveredPersonalInjury, setHoveredPersonalInjury] = useState<string | null>("Car Accidents");
  const [hoveredCriminalDefense, setHoveredCriminalDefense] = useState<string | null>("DWI/DUI");

  const personalInjuryAreas = [
    {
      name: "Car Accidents",
      image: "/caraccident.jpg",
      description: "Protecting your rights",
      link: "/practice-areas/car-accidents",
      icon: Car
    },
    {
      name: "18-Wheeler Accidents",
      image: "/18wheeler.png",
      description: "Complex truck accident cases",
      link: "/practice-areas/truck-accidents",
      icon: Truck
    },
    {
      name: "Slip and Fall",
      image: slipFallImage,
      description: "Premises liability claims",
      link: "/practice-areas/slip-fall",
      icon: User
    },
    {
      name: "Wrongful Death",
      image: "/wrongfuldeath.jpg",
      description: "Seeking justice for families",
      link: "/practice-areas/wrongful-death",
      icon: Heart
    },
    {
      name: "Catastrophic Injury",
      image: "/catastrophic.jpg",
      description: "Fighting for severe injury victims",
      link: "/practice-areas/catastrophic-injury",
      icon: Shield
    },
    {
      name: "Dog Bites",
      image: "/practice-areas-dog-bites.jpg",
      description: "Representing dog attack victims",
      link: "/practice-areas/dog-bites",
      icon: Dog
    }
  ];

  const criminalDefenseAreas = [
    {
      name: "DWI/DUI",
      image: "/dui.png",
      description: "Criminal defense expertise",
      link: "/practice-areas/dwi-dui",
      icon: Car
    },
    {
      name: "Drug Possession",
      image: "/drugpossession.png",
      description: "Strategic defense strategies",
      link: "/practice-areas/drug-possession",
      icon: Shield
    },
    {
      name: "Weapon Cases",
      image: "/weaponcharges.jpg",
      description: "Defending weapon possession charges",
      link: "/practice-areas/weapon-cases",
      icon: Shield
    },
    {
      name: "Theft & Robbery",
      image: "/practice-areas-theft-robbery.jpg",
      description: "Protecting rights in property crimes",
      link: "/practice-areas/theft-robbery",
      icon: Shield
    },
    {
      name: "Domestic Violence",
      image: "/domestic.jpg",
      description: "Protecting your future",
      link: "/practice-areas/domestic-violence",
      icon: Heart
    },
    {
      name: "Assault",
      image: "/practice-areas-assault.jpg",
      description: "Defending your rights",
      link: "/practice-areas/assault",
      icon: Shield
    },
    {
      name: "Non-Disclosure & Expunctions",
      image: "/practice-areas-non-disclosure-expunctions.jpg",
      description: "Clearing criminal records",
      link: "/practice-areas/non-disclosure-expunctions",
      icon: Scale
    }
  ];

  const PracticeAreaSection = ({ 
    title, 
    subtitle,
    areas, 
    hoveredService, 
    setHoveredService, 
    defaultService,
    sectionColor = "bg-gradient-to-br from-gray-50 to-white",
    isLast = false
  }: {
    title: string;
    subtitle: string;
    areas: Array<{name: string; image: string; description: string; link: string; icon: any}>;
    hoveredService: string | null;
    setHoveredService: (service: string | null) => void;
    defaultService: string;
    sectionColor?: string;
    isLast?: boolean;
  }) => (
    <section className={`pt-20 ${isLast ? 'pb-0' : 'pb-20'} ${sectionColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
        
        <div 
          className="relative w-full bg-cover bg-center bg-no-repeat transition-all duration-700 shadow-2xl"
          style={{ 
            backgroundImage: hoveredService 
              ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${areas.find(area => area.name === hoveredService)?.image})`
              : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${areas.find(area => area.name === defaultService)?.image})`
          }}
        >
          {/* Mobile: Single column, full width, vertical stacking */}
          <div className="flex flex-col md:hidden w-full">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Link 
                  key={index} 
                  to={area.link}
                  className="relative w-full h-56 bg-black/20 border-b border-gray-700 last:border-b-0 hover:bg-black/10 transition-all duration-500 cursor-pointer group"
                  onMouseEnter={() => setHoveredService(area.name)}
                  onMouseLeave={() => setHoveredService(defaultService)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 text-law-gold mr-3" />
                      <h3 className="text-white font-bold text-xl mb-0 group-hover:text-law-gold transition-colors">
                        {area.name}
                      </h3>
                    </div>
                    <p className="text-white/90 text-base group-hover:text-law-gold transition-colors mb-4">
                      {area.description}
                    </p>
                    <div className="flex items-center text-law-gold group-hover:text-white transition-colors">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Desktop: Horizontal banner with equal cards */}
          <div className="hidden md:flex w-full">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Link 
                  key={index} 
                  to={area.link}
                  className="relative flex-1 h-80 bg-black/20 border-r border-gray-700 last:border-r-0 hover:bg-black/10 transition-all duration-500 cursor-pointer group"
                  onMouseEnter={() => setHoveredService(area.name)}
                  onMouseLeave={() => setHoveredService(defaultService)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <h3 className="text-white font-bold text-xl mb-4 group-hover:text-law-gold transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-white/90 text-lg group-hover:text-law-gold transition-colors mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex items-center text-law-gold group-hover:text-white transition-colors">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...SEOConfigs.practiceAreas} />
      <LawFirmSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Practice Areas
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive legal services for personal injury victims and criminal defense clients throughout Texas
            </p>
          </div>
        </div>
      </section>

      {/* Personal Injury Law Section */}
      <PracticeAreaSection
        title="Personal Injury Law"
        subtitle="Our primary focus is advocating for those who have been injured in accidents. We help you recover the compensation you deserve through aggressive representation and proven strategies."
        areas={personalInjuryAreas}
        hoveredService={hoveredPersonalInjury}
        setHoveredService={setHoveredPersonalInjury}
        defaultService="Car Accidents"
        sectionColor="bg-gradient-to-br from-gray-50 to-white"
      />

      {/* Criminal Defense Law Section */}
      <PracticeAreaSection
        title="Criminal Defense Law"
        subtitle="Strategic representation to protect your rights and freedom. We develop robust defense strategies for all types of charges with experienced criminal defense attorney."
        areas={criminalDefenseAreas}
        hoveredService={hoveredCriminalDefense}
        setHoveredService={setHoveredCriminalDefense}
        defaultService="DWI/DUI"
        sectionColor="bg-gradient-to-br from-white to-gray-50"
        isLast={true}
      />

      <Footer />
    </div>
  );
};

export default PracticeAreas; 