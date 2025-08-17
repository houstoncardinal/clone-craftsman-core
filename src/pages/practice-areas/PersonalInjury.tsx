import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Truck, User, Dog, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalInjury = () => {
  const practiceAreas = [
    {
      name: "Wrongful Death",
      icon: Heart,
      description: "Compassionate representation for families who have lost loved ones due to negligence.",
      link: "/practice-areas/wrongful-death"
    },
    {
      name: "Slip and Fall",
      icon: User,
      description: "Holding property owners accountable for dangerous conditions that cause slip and fall injuries.",
      link: "/practice-areas/slip-fall"
    },
    {
      name: "Dog Bites",
      icon: Dog,
      description: "Representing victims of dog attacks and animal-related injuries.",
      link: "/practice-areas/dog-bites"
    },
    {
      name: "Catastrophic Injury",
      icon: Shield,
      description: "Fighting for victims of severe, life-altering injuries to secure maximum compensation.",
      link: "/practice-areas/catastrophic-injury"
    },
    {
      name: "Car Accidents",
      icon: Car,
      description: "Representing victims of car accidents to recover compensation for injuries, medical expenses, and damages.",
      link: "/practice-areas/car-accidents"
    },
    {
      name: "18-Wheeler Accidents",
      icon: Truck,
      description: "Specialized representation for victims of commercial truck accidents and their devastating consequences.",
      link: "/practice-areas/truck-accidents"
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
              Personal Injury Law
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Fighting for accident victims to recover the compensation they deserve
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
                Fighting for Justice and Compensation for Injured Victims
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SVR Law Firm, based in Houston, specializes in personal injury law, providing dedicated representation to clients throughout Texas. Our mission is to advocate for individuals who have suffered injuries due to the negligence of others. With a strong focus on securing just compensation, we understand the physical, emotional, and financial toll that an injury can take on you and your family.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Led by Sanah Roopani, our firm leverages extensive legal knowledge and courtroom experience to deliver effective representation. We strive to ensure that every client receives the personalized attention they deserve, guiding them through every step of the legal process.
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
              <h3 className="text-2xl font-bold text-black mb-6">Your Personal Injury Advocates – SVR Law Firm</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Compassionate Personal Injury Representation in Houston, Texas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">NO FEE UNLESS WE WIN YOUR CASE</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Dedicated to fighting for the rights of individuals injured due to negligence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Let us help you secure the compensation you deserve</p>
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
            <h2 className="text-3xl font-bold text-black mb-4">Our Personal Injury Practice Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We handle all types of personal injury cases with the same dedication and expertise
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
                  <h4 className="text-lg font-semibold text-black mb-2">Q: What should I do immediately after a car accident?</h4>
                  <p className="text-gray-600">Contact a personal injury attorney as soon as possible to protect your rights. Avoid making any statements to insurance companies until you've spoken with a lawyer.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: How do I know if I have a personal injury case?</h4>
                  <p className="text-gray-600">If you were injured due to someone else's negligence, you might have a case. Contact us for a free consultation, and we'll evaluate the details of your situation.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: How long do I have to file a personal injury claim in Texas?</h4>
                  <p className="text-gray-600">In Texas, the statute of limitations for personal injury claims is generally two years from the date of the injury. It's crucial to act promptly to protect your rights.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: What types of compensation can I receive for my injuries?</h4>
                  <p className="text-gray-600">You may be entitled to compensation for medical expenses, lost wages, pain and suffering, and more. SVR Law Firm will evaluate your case to determine potential damages.</p>
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

export default PersonalInjury; 