import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experienced legal team for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="Your first name"
                      className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Your last name"
                      className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    placeholder="(281) 249-9835"
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Practice Area</label>
                  <select className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent">
                    <option>Select a practice area</option>
                    <option>Personal Injury - Car Accidents</option>
                    <option>Personal Injury - 18-Wheeler Accidents</option>
                    <option>Personal Injury - Slip and Fall</option>
                    <option>Personal Injury - Wrongful Death</option>
                    <option>Criminal Defense - DWI/DUI</option>
                    <option>Criminal Defense - Drug Possession</option>
                    <option>Criminal Defense - Domestic Violence</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your case..."
                    rows={5}
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-law-gold hover:bg-law-gold-dark text-white py-3 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Phone</h3>
                    <p className="text-gray-600">(281) 249-9835</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent matters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-600">info@svrlawfirm.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Office</h3>
                    <p className="text-gray-600">2100 West Loop South Suite 1510</p>
                    <p className="text-gray-600">Houston, TX 77027</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
                    <p className="text-gray-600">Saturday: 9 AM - 5 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Legal Help</h3>
                <p className="text-red-700 mb-4">
                  If you're facing an urgent legal situation, call us immediately at (281) 249-9835. We're available 24/7 for emergency legal matters.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Visit Our Office</h2>
            <p className="text-gray-600">Located in the heart of Houston, Texas</p>
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Coming Soon</p>
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
            Don't wait to get the legal help you need. Contact us today for a free consultation.
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

export default Contact; 