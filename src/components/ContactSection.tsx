import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Call SVR Law Firm */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">Call SVR Law Firm</h3>
            <p className="text-black mb-6 text-lg leading-relaxed">
                              If you have questions or concerns about your case, please call us directly. Our experienced attorney is here to help you understand your legal options and provide the guidance you need.
            </p>
            <a href="tel:281-249-9835">
              <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                CALL (281) 249-9835
              </Button>
            </a>
          </div>
          
          {/* Message Us */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">Message Us</h3>
            <p className="text-black mb-8 text-lg leading-relaxed">
              For general inquiries or to schedule a consultation, please send us a message through our contact form. We will respond to your message as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-gray-100 hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold transition-all duration-300">
                  SEND US A MESSAGE
                </Button>
              </Link>
              <Link to="/free-consultation">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  FREE CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;