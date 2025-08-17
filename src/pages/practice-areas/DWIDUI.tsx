import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Clock, Phone, Mail, MapPin, Gavel, Car, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const DWIDUI = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              DWI/DUI Defense
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Houston DWI/DUI Defense Attorney: Protecting Your Rights and Future
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Facing a DWI (Driving While Intoxicated) or DUI (Driving Under the Influence) charge in Texas can be overwhelming. A conviction can lead to serious consequences, including hefty fines, the loss of your driver's license, and even jail time. At SVR Law Firm, we understand what's at stake and are dedicated to providing aggressive, knowledgeable representation to defend your rights and safeguard your future.
              </p>

              <h2 className="text-3xl font-bold text-black mb-6">What is a DWI/DUI in Texas?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In Texas, a person can be charged with a DWI if they are caught operating a vehicle with a Blood Alcohol Concentration (BAC) of 0.08% or higher. For drivers under 21 years old, any detectable amount of alcohol can lead to a DUI charge. The penalties for a DWI/DUI vary depending on factors such as BAC level, prior convictions, and whether an accident was involved.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Common penalties for a DWI/DUI conviction in Texas include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>First Offense:</strong> Up to 180 days in jail, a fine of up to $2,000, and a license suspension of up to 1 year.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Second Offense:</strong> Up to 1 year in jail, fines up to $4,000, and a 2-year license suspension.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Third Offense:</strong> Up to 10 years in prison, fines up to $10,000, and a 2-year license suspension.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">How SVR Law Firm Can Help with Your DWI/DUI Case</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              A DWI/DUI charge doesn't have to lead to a conviction. With the right defense strategy, it is possible to challenge the evidence and reduce or dismiss the charges. At SVR Law Firm, we thoroughly investigate every case to find weaknesses in the prosecution's evidence, including:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Questioning the Legality of the Traffic Stop</h3>
                </div>
                <p className="text-gray-600">
                  Police must have a valid reason for stopping your vehicle. If they didn't, any evidence they collected could be inadmissible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Challenging Field Sobriety Tests</h3>
                </div>
                <p className="text-gray-600">
                  These tests can be unreliable and are often administered improperly. We scrutinize the way these tests were conducted to challenge their accuracy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Gavel className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Breathalyzer or Blood Test Results</h3>
                </div>
                <p className="text-gray-600">
                  Breath and blood tests are subject to errors and mishandling. We will investigate whether the testing equipment was properly calibrated and if the sample was handled correctly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Charges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Defending All Types of DWI/DUI Charges</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              SVR Law Firm is experienced in defending against all types of DWI/DUI charges, including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">First-Time DWI/DUI Offenses</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Repeat DWI/DUI Offenses</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Felony DWI Charges (involving injuries, fatalities, or multiple offenses)</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Underage DUI</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">DWI with Child Passenger</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Commercial Driver's License (CDL) DWI</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mt-8 text-center leading-relaxed">
              We understand that every case is unique, and we tailor our defense strategy to the specific facts of your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose SVR Law Firm for Your DWI/DUI Defense?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we have a deep understanding of Texas DWI/DUI laws and know how to build a strong defense. We are committed to:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Personalized Attention</h3>
                <p className="text-gray-600">Providing personalized, one-on-one attention to each case.</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Aggressive Defense</h3>
                <p className="text-gray-600">Aggressively challenging the evidence brought against you.</p>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Minimize Penalties</h3>
                <p className="text-gray-600">Working to minimize penalties, including keeping you out of jail and helping you retain your driver's license.</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mt-8 text-center leading-relaxed">
              Our goal is to achieve the best possible outcome for your case, whether that's through negotiating reduced charges or taking your case to trial.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions (FAQs) about DWI/DUI in Texas</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What happens if I refuse a breathalyzer test in Texas?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: In Texas, refusing a breathalyzer test can result in an automatic license suspension under the state's implied consent law. For a first refusal, your license can be suspended for up to 180 days. However, you may be eligible for an occupational license to allow you to drive to work or school.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can a DWI/DUI charge be dismissed in Texas?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Yes, depending on the circumstances of your case, a DWI/DUI charge can be dismissed. Factors like illegal traffic stops, improper administration of tests, or faulty equipment can lead to a dismissal of charges. It's crucial to have a skilled attorney evaluate the facts of your case.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Will a DWI/DUI conviction stay on my record forever?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: A DWI/DUI conviction can stay on your criminal record permanently. However, in some cases, you may be able to seek non-disclosure or expunction to seal your record. Our attorney can help you explore your options for clearing your record.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What are the penalties for a first-time DWI in Texas?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: For a first-time DWI conviction, penalties can include up to 180 days in jail, a $2,000 fine, and a driver's license suspension for up to 1 year. However, these penalties can be increased if your BAC was especially high, or if there were aggravating factors like a child passenger in the car.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Contact SVR Law Firm for Expert DWI/DUI Defense</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you are facing DWI/DUI charges in Houston or anywhere in Texas, don't hesitate to seek legal representation. The consequences of a conviction are too severe to handle without experienced legal counsel. SVR Law Firm is ready to fight for your rights, protect your driving privileges, and pursue the best possible outcome for your case.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Contact us today for a free consultation by calling 281-249-9835 or filling out our online form. Let us provide the aggressive defense you need to protect your future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:281-249-9835">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (281) 249-9835
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-8 py-4 text-lg font-semibold">
                  Free Consultation
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

export default DWIDUI; 