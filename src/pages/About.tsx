import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield, Clock, GraduationCap, Gavel, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { SEOHead, SEOConfigs } from "@/components/SEOHead";
import { LawFirmSchema } from "@/components/SchemaMarkup";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...SEOConfigs.about} />
      <LawFirmSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About SVR Law Firm
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted Texas trial attorney with a proven track record of success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Experienced Legal Representation You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we focus on delivering tailored legal strategies for personal injury victims and individuals facing criminal charges in Houston or anywhere in the state of Texas. With years of trial experience and a commitment to achieving the best possible results, our firm has earned a reputation for excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our experienced attorney understands the complexities of both personal injury and criminal defense cases. We work tirelessly to protect your rights and secure the compensation or outcome you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/practice-areas">
                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                    Our Practice Areas
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-6 lg:p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Why Choose SVR Law Firm?</h3>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Proven Track Record</h4>
                    <p className="text-gray-600">Successfully represented thousands of clients across Texas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Client-Focused Approach</h4>
                    <p className="text-gray-600">Personal attention and dedicated representation for every client</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">No Win, No Fee</h4>
                    <p className="text-gray-600">Personal injury cases handled on contingency fee basis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Urgent Support</h4>
                    <p className="text-gray-600">Immediate support for urgent legal matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Bio Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Meet Our Lead Attorney
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sanah Roopani brings extensive courtroom experience and a deep commitment to client advocacy
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Attorney Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-sm lg:max-w-md h-[400px] lg:h-[500px] mx-auto mb-8 lg:mb-0">
                <img 
                  src="/sanah.jpg" 
                  alt="Sanah Roopani"
                  className="w-full h-full object-cover shadow-2xl rounded-lg"
                />
                <div className="absolute inset-0 border-4 border-law-gold opacity-20 rounded-lg"></div>
              </div>
            </div>
            
            {/* Attorney Bio */}
            <div className="order-1 lg:order-2 lg:-ml-24">
              <h3 className="text-2xl font-bold text-black mb-2">
                Sanah Roopani
              </h3>
              <p className="text-lg text-law-gold font-semibold mb-4">
                Texas Bar Card #24116990
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sanah Roopani proudly graduated from the University of Texas and the University of Houston Law Center, where she discovered her passion for client advocacy in the courtroom. During law school, Sanah served as a judicial intern for the Honorable Jeff Bohm of the United States Bankruptcy Court for the Southern District of Texas. She also gained valuable experience working with a personal injury firm and interning at the Harris County District Attorney's Office. Her passion for litigation was further solidified when she observed a trial for Continuous Sexual Assault with a local criminal defense firm.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To deepen her courtroom experience, Sanah worked at the Fort Bend County District Attorney's Office after graduating from law school. As a prosecutor, she managed a caseload of 200 to 250 cases at a time, acquiring essential courtroom skills. Her prior experiences have provided her with valuable insights into the fundamentals of the criminal justice system, and she is committed to advocating tirelessly for her clients.
              </p>
              
              {/* Key Experience Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <GraduationCap className="w-8 h-8 text-law-gold" />
                  </div>
                  <h4 className="font-semibold text-black mb-1">Education</h4>
                  <p className="text-sm text-gray-600">University of Texas & UH Law Center</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <Gavel className="w-8 h-8 text-law-gold" />
                  </div>
                  <h4 className="font-semibold text-black mb-1">Courtroom Experience</h4>
                  <p className="text-sm text-gray-600">250+ Cases as Prosecutor</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <BookOpen className="w-8 h-8 text-law-gold" />
                  </div>
                  <h4 className="font-semibold text-black mb-1">Specializations</h4>
                  <p className="text-sm text-gray-600">Personal Injury & Criminal Defense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(/lawyers2.jpg)` }}>
        <div className="absolute inset-0 bg-law-gold/90"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Your Case Matters to Us")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Contact us today for a free consultation. Let us help you understand your legal options and fight for your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-consultation">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl">
                Get Free Consultation
              </Button>
            </Link>
            <a href="tel:281-249-9835">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl">
                Call (281) 249-9835
              </Button>
            </a>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 