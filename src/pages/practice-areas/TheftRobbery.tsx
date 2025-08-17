import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Clock, Phone, Mail, MapPin, Gavel, AlertTriangle, Scale, FileText, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const TheftRobbery = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Theft & Robbery Defense
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Houston Theft and Robbery Defense Attorney: Protecting Your Rights in Texas
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
                Facing charges of theft or robbery in Houston or across Texas is a serious situation that demands immediate legal attention. These charges can lead to significant penalties, including jail time, steep fines, and a lasting criminal record. At SVR Law Firm, we are dedicated to defending individuals accused of theft or robbery, ensuring their rights are upheld and that they receive the best possible defense.
              </p>

              <h2 className="text-3xl font-bold text-black mb-6">Understanding Theft and Robbery Charges in Texas</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In Texas, theft and robbery are distinct crimes, each carrying its own set of legal consequences. Theft involves the unlawful taking of property, while robbery involves taking property with the use of force or threats. Both offenses are serious, but robbery is treated more severely due to its violent nature.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Theft Charges in Texas</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Theft occurs when someone unlawfully takes property with the intent to deprive the owner of it permanently. The severity of the theft charge depends on the value of the property taken:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Class C Misdemeanor:</strong> Theft of property valued under $100.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Class B Misdemeanor:</strong> Theft valued between $100 and $750 or theft of certain items like a driver's license.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Class A Misdemeanor:</strong> Theft of property valued between $750 and $2,500.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>State Jail Felony:</strong> Theft valued between $2,500 and $30,000, or specific items like firearms or livestock.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Third-Degree Felony:</strong> Theft valued between $30,000 and $150,000.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Second-Degree Felony:</strong> Theft valued between $150,000 and $300,000.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>First-Degree Felony:</strong> Theft of property exceeding $300,000 in value.
                  </div>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Theft charges in Texas can range from minor misdemeanors to severe felonies, depending on the circumstances of the crime, including the value of the stolen property, whether it involved a breach of trust, and the defendant's criminal history.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Robbery Charges in Texas</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Robbery is more serious than theft because it involves violence or the threat of violence during the crime. Under Texas Penal Code Section 29.02, robbery occurs when someone commits theft and, in the process, intentionally, knowingly, or recklessly causes bodily injury to another or threatens another with imminent injury or death.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aggravated Robbery (Texas Penal Code Section 29.03) occurs when a deadly weapon is used, or the victim is elderly or disabled. Aggravated robbery is a first-degree felony, punishable by 5 to 99 years in prison and fines up to $10,000.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Robbery is a second-degree felony in Texas, punishable by 2 to 20 years in prison and fines of up to $10,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Consequences of Theft and Robbery Convictions</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The penalties for theft and robbery vary based on the specifics of the case, but possible consequences include:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Fines</h3>
                </div>
                <p className="text-gray-600">
                  The severity of the charge determines the amount of fines, ranging from hundreds to thousands of dollars.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Prison or Jail Time</h3>
                </div>
                <p className="text-gray-600">
                  Misdemeanor theft can result in up to one year in county jail, while felony theft and robbery charges may lead to years or even decades of incarceration.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Permanent Criminal Record</h3>
                </div>
                <p className="text-gray-600">
                  Convictions for theft or robbery remain on your criminal record, potentially limiting employment opportunities, housing options, and other areas of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Strategies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Defending Against Theft and Robbery Charges</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we understand the gravity of theft and robbery charges, and we approach each case with a robust defense strategy. Common defenses include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Lack of Intent:</strong> Theft requires the intent to permanently deprive the owner of property. If there was no intent to steal, the charges may not hold.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Mistaken Identity:</strong> In many cases, individuals are falsely accused due to mistaken identity or faulty witness testimony.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Duress:</strong> If someone was forced to commit the crime under threat, this could serve as a defense.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Lack of Evidence:</strong> The prosecution must prove every element of the crime beyond a reasonable doubt. Insufficient evidence could result in charges being dismissed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose SVR Law Firm for Your Theft or Robbery Defense?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Experienced Defense</h3>
                <p className="text-gray-600">At SVR Law Firm, we bring years of legal experience defending clients facing theft and robbery charges.</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Personalized Attention</h3>
                <p className="text-gray-600">We believe in working closely with each client to understand their unique circumstances and build a tailored defense strategy.</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Aggressive Representation</h3>
                <p className="text-gray-600">We fight vigorously to protect our clients' rights and secure the best possible outcome, whether that means reduced charges, alternative sentencing, or acquittal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions (FAQ)</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What's the difference between theft and robbery?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Theft is the unlawful taking of someone else's property without using force, while robbery involves the use of force or threats during the commission of the theft.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What penalties could I face for a theft conviction in Texas?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Penalties vary depending on the value of the property stolen. They can range from small fines for minor misdemeanors to large fines and significant prison time for felony-level theft.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can a robbery charge be reduced to theft?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: It's possible in some cases, depending on the circumstances. Your attorney may be able to negotiate a reduction in charges by challenging the evidence or presenting mitigating factors.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What is aggravated robbery?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Aggravated robbery is a robbery in which a deadly weapon is used, or the victim is elderly or disabled. This is a first-degree felony, carrying severe penalties.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Do I need a lawyer if I'm charged with theft or robbery?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Absolutely. Theft and robbery are serious charges that can result in jail time, fines, and a permanent criminal record. A skilled attorney can provide the defense you need to protect your rights.
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
            <h2 className="text-3xl font-bold text-black mb-6">Contact SVR Law Firm for a Free Consultation</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you or a loved one is facing theft or robbery charges in Houston or anywhere in Texas, contact SVR Law Firm immediately. The sooner you have an experienced attorney on your side, the better your chances of a favorable outcome. Call today to schedule your free consultation.
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

export default TheftRobbery; 