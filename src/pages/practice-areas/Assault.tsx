import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Clock, Phone, Mail, MapPin, Gavel, AlertTriangle, Scale, FileText, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Assault = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Assault Defense
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Understanding Assault Charges in Texas
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
                Assault charges in Texas can have serious consequences. They can vary in severity, from simple assault to aggravated assault, based on the nature of the incident. At SVR Law Firm, we are dedicated to providing strong and strategic defense for our clients facing these charges.
              </p>

              <h2 className="text-3xl font-bold text-black mb-6">Types of Assault Charges in Texas</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Simple Assault (Misdemeanor):</strong> Intentionally, knowingly, or recklessly causing bodily injury, threatening bodily harm, or making offensive physical contact. This is typically charged as a Class A, B, or C misdemeanor.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Aggravated Assault (Felony):</strong> Involves causing serious bodily injury or using a deadly weapon. This is usually charged as a second-degree felony or first-degree felony.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Penalties for Assault Convictions in Texas</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The penalties for an assault conviction in Texas can be severe:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Misdemeanor Assault</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>Class C misdemeanor:</strong> Up to $500 fine.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>Class B misdemeanor:</strong> Up to 180 days in jail and a fine of up to $2,000.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>Class A misdemeanor:</strong> Up to 1 year in jail and a fine of up to $4,000.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Felony Assault</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>Second-degree felony:</strong> 2 to 20 years in prison and a fine of up to $10,000.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>First-degree felony:</strong> 5 to 99 years in prison and a fine of up to $10,000.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Consequences Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Long-Term Consequences of an Assault Conviction</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Immigration Consequences:</strong> Non-citizens may face deportation.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Permanent Criminal Record:</strong> A conviction can affect employment and housing opportunities.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Loss of Firearm Rights:</strong> Certain felony convictions can lead to loss of firearm rights.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Restraining Orders:</strong> May impact relationships with family members.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Strategies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Common Defenses Against Assault Charges</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we analyze each case to determine effective defense strategies. Possible defenses include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Self-Defense:</strong> Arguing that your actions were justified to protect yourself.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Defense of Others:</strong> Protecting someone else in danger.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Defense of Property:</strong> Using reasonable force to protect your property.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Lack of Intent:</strong> If there was no intent to cause harm, you may not be guilty.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>False Allegations:</strong> Uncovering inconsistencies in accusations.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Mutual Combat:</strong> If both parties agreed to fight, it may not constitute assault.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">How SVR Law Firm Can Help with Your Assault Case</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              A strong defense can significantly impact the outcome of your case. At SVR Law Firm, we thoroughly investigate every case, focusing on:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Gavel className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Investigating Allegations</h3>
                </div>
                <p className="text-gray-600">
                  Gathering evidence and interviewing witnesses.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Challenging the Prosecution's Case</h3>
                </div>
                <p className="text-gray-600">
                  Identifying weaknesses in their evidence.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Negotiating for Reduced Charges or Dismissal</h3>
                </div>
                <p className="text-gray-600">
                  Exploring options for plea deals or dismissal.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Preparing for Trial</h3>
                </div>
                <p className="text-gray-600">
                  Ready to fight for your rights in court if necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose SVR Law Firm for Your Assault Defense?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we offer:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Proven Experience</h3>
                <p className="text-gray-600">Extensive experience defending assault charges in Houston and throughout Texas.</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Aggressive Defense</h3>
                <p className="text-gray-600">A proactive approach to challenging evidence and protecting your rights.</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Client-Centered Approach</h3>
                <p className="text-gray-600">Personalized attention and support throughout the legal process.</p>
              </div>
              <div className="text-center">
                <Target className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Focused on Results</h3>
                <p className="text-gray-600">Committed to achieving the best possible outcome for your case.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions (FAQs) about Assault in Texas</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What should I do if I've been accused of assault?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Remain calm and contact an experienced attorney immediately. Do not speak to law enforcement without legal representation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can I get my assault charge reduced or dismissed?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Yes, factors like illegal traffic stops, improper administration of tests, or insufficient evidence can lead to a dismissal. A skilled attorney can evaluate your case.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What are the penalties for an assault conviction in Texas?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Penalties can range from fines and jail time for misdemeanors to significant prison sentences for felonies, depending on the severity of the charge.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What happens if the alleged victim wants to drop the charges?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: The decision to pursue charges rests with the state, not the victim. The prosecution can still proceed even if the victim wants to drop the case.
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
            <h2 className="text-3xl font-bold text-black mb-6">Contact SVR Law Firm for Expert Assault Defense</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you are facing assault charges in Houston or anywhere in Texas, it is crucial to seek legal representation as soon as possible. SVR Law Firm is here to provide the strong defense you need to protect your rights and your future.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Contact us today for a free consultation at 281-249-9835 or fill out our online contact form.
            </p>
            
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assault; 