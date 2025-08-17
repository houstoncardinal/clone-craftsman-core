import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Lock, Heart, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const CriminalDefense = () => {
  const practiceAreas = [
    {
      name: "Weapon Cases",
      icon: Shield,
      description: "Defending weapon possession charges with strategic legal representation.",
      link: "/practice-areas/weapon-cases"
    },
    {
      name: "Theft & Robbery",
      icon: Lock,
      description: "Protecting rights in property crimes and theft-related charges.",
      link: "/practice-areas/theft-robbery"
    },
    {
      name: "Non-Disclosure & Expunctions",
      icon: FileText,
      description: "Clearing criminal records and helping clients move forward with their lives.",
      link: "/practice-areas/non-disclosure-expunctions"
    },
    {
      name: "DWI/DUI",
      icon: Car,
      description: "Aggressive DWI defense strategies to protect your driving privileges and future.",
      link: "/practice-areas/dwi-dui"
    },
    {
      name: "Drug Possession",
      icon: Shield,
      description: "Strategic drug charge defense to minimize penalties and protect your rights.",
      link: "/practice-areas/drug-possession"
    },
    {
      name: "Domestic Violence",
      icon: Heart,
      description: "Sensitive domestic violence defense with compassionate legal representation.",
      link: "/practice-areas/domestic-violence"
    },
    {
      name: "Assault",
      icon: User,
      description: "Defending assault charges of all levels with experienced criminal defense.",
      link: "/practice-areas/assault"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Criminal Defense Law
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              SVR Law Firm provides strong, dedicated criminal defense for individuals facing serious charges in Houston and throughout Texas. Trust our team to protect your future with expert legal representation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Protecting Your Rights in the Texas Criminal Justice System
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SVR Law Firm, located in Houston, specializes in delivering exceptional criminal defense to individuals across Texas. With extensive courtroom experience and a thorough understanding of the Texas criminal justice system, our firm is committed to providing personalized and effective legal representation.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Being accused of a crime can be overwhelming. With Sanah Roopani as your advocate, you will have a dedicated attorney fighting for your rights. Whether you are facing misdemeanor or felony charges, SVR Law Firm develops robust defense strategies to achieve the best possible outcome for your case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                    About us
                  </Button>
                </Link>
                <Link to="/practice-areas">
                  <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                    Practice Areas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Your Trusted Criminal Defense Advocates – SVR Law Firm</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Experienced Criminal Defense Attorney in Houston, Texas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Your trusted Texas trial lawyers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Strong, dedicated criminal defense for individuals facing serious charges</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Trust our team to protect your future with expert legal representation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Criminal Defense Practice Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We handle all types of criminal defense cases with the same dedication and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-law-gold mr-3" />
                    <h3 className="text-xl font-bold text-black">{area.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Link to={area.link}>
                    <Button variant="outline" className="border-law-gold text-law-gold hover:bg-law-gold hover:text-white">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - FAQs */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="text-4xl font-bold text-black mb-12 leading-tight">
                Have questions?<br />
                We have answers!
              </h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: What should I do if I've been arrested in Texas?</h4>
                  <p className="text-gray-600">Stay calm, remain silent, and request legal representation immediately. Contact SVR Law Firm for assistance.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: How can SVR Law Firm defend me against a DWI charge?</h4>
                  <p className="text-gray-600">We will investigate the circumstances of your arrest, including field sobriety tests and breathalyzer results, to challenge any errors and protect your rights.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: What are the penalties for drug possession in Texas?</h4>
                  <p className="text-gray-600">Penalties depend on the substance and quantity involved but can include fines, jail time, and a permanent record. SVR Law Firm will work to reduce or dismiss the charges.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Can SVR Law Firm help me expunge my criminal record?</h4>
                  <p className="text-gray-600">Yes, we specialize in expunction and non-disclosure to help clear your record, allowing you to move forward without the burden of a criminal history.</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#" className="text-black hover:text-law-gold transition-colors underline">
                  Call SVR Law Firm for detailed answers to your questions!
                </a>
              </div>
            </div>

            {/* Right Content - Call to Action */}
            <div className="flex justify-center lg:justify-end">
              <Button 
                size="lg"
                className="bg-law-gold hover:bg-law-gold-dark text-white px-10 py-8 text-xl font-bold text-center leading-tight shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get A Free Case<br />
                Evaluation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Call SVR Law Firm */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Call SVR Law Firm</h3>
              <p className="text-black mb-6 text-lg leading-relaxed">
                For questions, concerns or if you simply need to speak to someone quickly. Please call us directly at (281) 249-9835.
              </p>
              <a href="tel:281-249-9835">
                <Button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                  CALL (281) 249-9835
                </Button>
              </a>
            </div>
            
            {/* Message Us */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Message Us</h3>
              <p className="text-black mb-8 text-lg leading-relaxed">
                For all general inquiries, please send us a message directly and we'll be sure to respond within business hours.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Send Us A message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-law-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-consultation">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                Get Free Case Evaluation
              </Button>
            </Link>
            <a href="tel:281-249-9835">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                Call (281) 249-9835
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CriminalDefense; 