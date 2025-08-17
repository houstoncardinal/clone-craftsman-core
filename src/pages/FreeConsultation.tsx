import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Shield, Phone, Mail, MapPin, Star, Award, Gavel, ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead, SEOConfigs } from "@/components/SEOHead";
import { LawFirmSchema } from "@/components/SchemaMarkup";

const FreeConsultation = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...SEOConfigs.freeConsultation} />
      <LawFirmSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get expert legal advice at no cost. Our experienced attorney is here to help you understand your rights and options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:281-249-9835">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (281) 249-9835
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white bg-white text-black hover:bg-law-gold hover:text-white px-8 py-4 text-lg font-semibold shadow-lg">
                  Send Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Full Width */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get Your Free Consultation Today</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Request Your Free Consultation</h3>
                <form name="free-consultation" data-netlify="true" className="space-y-4">
                  {/* Hidden form fields for Netlify */}
                  <input type="hidden" name="form-name" value="free-consultation" />
                  <input type="hidden" name="bot-field" />
                  <Input 
                    type="text" 
                    name="name"
                    placeholder="Your Full Name"
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Your Email Address"
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Practice Area</label>
                    <select name="practiceArea" className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg">
                      <option value="">Select a practice area</option>
                      <option value="car-accidents">Car Accidents</option>
                      <option value="truck-accidents">Truck Accidents</option>
                      <option value="slip-fall">Slip & Fall</option>
                      <option value="wrongful-death">Wrongful Death</option>
                      <option value="catastrophic-injury">Catastrophic Injury</option>
                      <option value="dog-bites">Dog Bites</option>
                      <option value="dwi-dui">DWI/DUI</option>
                      <option value="drug-possession">Drug Possession</option>
                      <option value="weapon-cases">Weapon Cases</option>
                      <option value="theft-robbery">Theft & Robbery</option>
                      <option value="domestic-violence">Domestic Violence</option>
                      <option value="assault">Assault</option>
                      <option value="non-disclosure">Non-Disclosure & Expunctions</option>
                    </select>
                  </div>
                  <Textarea 
                    name="message"
                    placeholder="Brief description of your case (optional)"
                    rows={4}
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" name="agreeToTerms" id="agree" className="w-5 h-5 text-law-gold focus:ring-law-gold" />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                      I agree for SVR Law Firm to contact me at the provided contact methods in my form submission.
                    </label>
                  </div>
                  <Button type="submit" className="w-full bg-law-gold hover:bg-law-gold-dark text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Free Consultation
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Ready to discuss your case? Our experienced attorney is here to provide you with the guidance and support you need.
                  </p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <MapPin className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">Address:</h4>
                      <p className="text-gray-600">2100 West Loop South Suite 1410 Houston, TX 77027</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">E-mail:</h4>
                      <p className="text-gray-600">info@svrlawfirm.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">Phone:</h4>
                      <p className="text-gray-600">(281) 249-9835</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-law-gold to-yellow-600 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-bold mb-4">Why Choose SVR Law Firm?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Free consultation with no obligation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>No win, no fee for personal injury cases</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Experienced attorney with proven results</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Available 24/7 for urgent matters</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to the most common questions about our free consultation process
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">What can I expect during a free consultation?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      During your free consultation, we will review the details of your case, answer any questions you may have, and explain your legal options. We will assess the best path forward and how we can help you achieve your goals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">How long will the consultation take?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our free consultations typically last between 30 minutes to an hour, depending on the complexity of your case. We aim to provide you with a clear understanding of your legal rights.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">Is there any obligation after the consultation?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      No, there is no obligation to hire us after your free consultation. We offer the consultation to help you understand your options, and it's entirely up to you whether to move forward.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">How quickly will you respond?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We typically respond to consultation requests within 24 hours, often much sooner. For urgent matters, we're available 24/7 by phone at (281) 249-9835.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Section - Full Width */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Attorney Sanah Roopani of SVR Law Firm</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Your trusted legal advocate with extensive experience in personal injury and criminal defense law.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">Experienced Advocate</h3>
                <p className="text-gray-600 leading-relaxed">Dedicated to protecting your rights and securing the best possible outcome</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">No Win, No Fee</h3>
                <p className="text-gray-600 leading-relaxed">Personal injury cases handled on contingency fee basis</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Clock className="w-16 h-16 text-law-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">Available for urgent legal matters and consultations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-law-gold to-yellow-600">
        <div className="w-full px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Contact us today for a free consultation and let us help you understand your legal options.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:281-249-9835">
                <Button className="bg-white text-law-gold hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-6 h-6 mr-3" />
                  Call (281) 249-9835
                </Button>
              </a>
              <Link to="/contact">
                <Button className="bg-white text-law-gold hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeConsultation; 