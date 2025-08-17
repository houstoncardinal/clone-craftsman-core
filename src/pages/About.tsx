import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield, Clock, GraduationCap, Gavel, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About SVR Law Firm
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted Texas trial lawyers with a proven track record of success
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
                Experienced Legal Representation You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we focus on delivering tailored legal strategies for personal injury victims and individuals facing criminal charges in Houston or anywhere in the state of Texas. With years of trial experience and a commitment to achieving the best possible results, our firm has earned a reputation for excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our experienced attorney understands the complexities of both personal injury and criminal defense cases. We work tirelessly to protect your rights and secure the compensation or outcome you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                  Our Practice Areas
                </Button>
                <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Why Choose SVR Law Firm?</h3>
              <div className="space-y-6">
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
                    <h4 className="font-semibold text-black mb-2">24/7 Availability</h4>
                    <p className="text-gray-600">Round-the-clock support for urgent legal matters</p>
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
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Attorney Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <img 
                  src="/sanah.jpg" 
                  alt="Sanah Roopani"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-law-gold opacity-20"></div>
              </div>
            </div>
            
            {/* Attorney Bio */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Sanah Roopani
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sanah Roopani proudly graduated from the University of Texas and the University of Houston Law Center, where she discovered her passion for client advocacy in the courtroom. During law school, Sanah served as a judicial intern for the Honorable Jeff Bohm of the United States Bankruptcy Court for the Southern District of Texas. She also gained valuable experience working with a personal injury firm and interning at the Harris County District Attorney's Office. Her passion for litigation was further solidified when she observed a trial for Continuous Sexual Assault with a local criminal defense firm.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To deepen her courtroom experience, Sanah worked at the Fort Bend County District Attorney's Office after graduating from law school. As a prosecutor, she managed a caseload of 200 to 250 cases at a time, acquiring essential courtroom skills. Her prior experiences have provided her with valuable insights into the fundamentals of the criminal justice system, and she is committed to advocating tirelessly for her clients.
              </p>
              
              {/* Key Experience Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <GraduationCap className="w-8 h-8 text-law-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black mb-1">Education</h4>
                  <p className="text-sm text-gray-600">University of Texas & UH Law Center</p>
                </div>
                <div className="text-center">
                  <Gavel className="w-8 h-8 text-law-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black mb-1">Courtroom Experience</h4>
                  <p className="text-sm text-gray-600">200+ Cases as Prosecutor</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-8 h-8 text-law-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black mb-1">Specializations</h4>
                  <p className="text-sm text-gray-600">Personal Injury & Criminal Defense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              To provide exceptional legal representation with integrity, dedication, and a commitment to achieving the best possible outcomes for our clients. We believe everyone deserves access to quality legal representation, regardless of their circumstances.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-law-gold mb-2">Personal Injury</div>
                <p className="text-gray-600">Fighting for accident victims to recover fair compensation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-law-gold mb-2">Criminal Defense</div>
                <p className="text-gray-600">Protecting your rights and freedom in criminal cases</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-law-gold mb-2">Client Advocacy</div>
                <p className="text-gray-600">Dedicated to your success and well-being</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-law-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Let us help you understand your legal options and fight for your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-consultation">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                Get Free Consultation
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

export default About; 