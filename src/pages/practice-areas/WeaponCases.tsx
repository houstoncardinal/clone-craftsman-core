import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Clock, Phone, Mail, MapPin, Gavel, AlertTriangle, Scale, FileText, Target } from "lucide-react";
import { Link } from "react-router-dom";

const WeaponCases = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Weapon Cases Defense
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Houston Weapon Charges Defense Lawyer: Protecting Your Rights Against Firearm and Weapon Charges
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
                Facing weapon charges in Houston or anywhere in Texas is a serious matter. Texas has strict laws regarding the possession, use, and carrying of weapons, particularly firearms. If you're charged with a weapon-related offense, the penalties can be severe, including hefty fines, imprisonment, and a permanent criminal record. SVR Law Firm is committed to providing aggressive legal representation to defend your rights and protect your future.
              </p>

              <h2 className="text-3xl font-bold text-black mb-6">Understanding Weapon Charges in Texas</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Texas has relatively lenient gun laws compared to other states, but there are still strict regulations governing how and where you can possess or carry firearms and other weapons. Weapon charges can include offenses related to illegal possession, unlawful carry, using a weapon in the commission of a crime, and more.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Common Types of Weapon Charges in Texas</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Unlawful Carrying of a Weapon (UCW):</strong> This charge is often levied against individuals found carrying a firearm or other prohibited weapon without the proper license or in restricted areas.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Felon in Possession of a Firearm:</strong> If you have been convicted of a felony, you are prohibited from owning or possessing a firearm in Texas.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Possession of a Prohibited Weapon:</strong> Texas law prohibits the possession of certain weapons, such as machine guns, explosive weapons, brass knuckles, and knives with blades over a certain length.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Aggravated Assault with a Deadly Weapon:</strong> This charge involves using a weapon in the commission of an assault, which significantly enhances the penalties associated with the offense.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Carrying a Weapon in Prohibited Places:</strong> Certain locations, such as schools, courthouses, and airports, are off-limits for firearms and other weapons, even if you have a license to carry.
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
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Penalties for Weapon Charges in Texas</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The consequences of being convicted of a weapon offense depend on the type of charge, the circumstances of the alleged offense, and whether there are any prior convictions. Penalties can range from misdemeanors to felonies and may include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Fines</h3>
                </div>
                <p className="text-gray-600">
                  Penalties may range from $500 for minor misdemeanors to $10,000 or more for felony-level charges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Jail or Prison Time</h3>
                </div>
                <p className="text-gray-600">
                  Depending on the charge, jail time can vary from a few months to several years in state prison, especially if the weapon was used in the commission of another crime.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Loss of Firearm Rights</h3>
                </div>
                <p className="text-gray-600">
                  A conviction for certain weapon offenses can result in the loss of your right to own or carry a firearm in the future.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Criminal Record</h3>
                </div>
                <p className="text-gray-600">
                  A conviction will result in a permanent criminal record, which can affect your ability to obtain employment, housing, and other opportunities.
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
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Defending Against Weapon Charges in Houston</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we understand that being accused of a weapon crime can have serious consequences for your life and your future. Our team is dedicated to providing strong defense strategies to fight these charges. Common defense strategies include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Unlawful Search and Seizure:</strong> If your weapon was discovered during an unlawful search, we may be able to have the evidence against you suppressed.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Lack of Knowledge:</strong> You cannot be convicted of possessing a prohibited weapon if you were unaware that the weapon was in your possession.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Self-Defense:</strong> In cases where a weapon was used, we may be able to argue that you acted in self-defense, which is a legal justification for the use of force in Texas.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Mistaken Identity:</strong> If you were wrongfully identified as the individual in possession of the weapon or as the person who used the weapon, we will fight to clear your name.
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
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose SVR Law Firm for Your Weapon Charges Defense?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Weapon charges can be intimidating, but SVR Law Firm has the experience and knowledge necessary to build a strong defense on your behalf. We are committed to achieving the best possible outcome in your case by:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Providing Aggressive Representation</h3>
                <p className="text-gray-600">We are not afraid to challenge the prosecution's case and will fight tirelessly to have your charges reduced or dismissed.</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Knowledge of Texas Weapon Laws</h3>
                <p className="text-gray-600">We are well-versed in Texas firearm and weapon laws and will use this knowledge to your advantage.</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Client-Centered Approach</h3>
                <p className="text-gray-600">We prioritize communication with our clients, ensuring you are informed every step of the way and understand your legal options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions (FAQs) About Weapon Charges in Texas</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can I carry a firearm in Texas without a license?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: As of September 2021, Texas law allows most adults over the age of 21 to carry a handgun without a license under the state's permitless carry law. However, there are still restrictions on where firearms can be carried, and individuals with certain criminal convictions may not be eligible.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What happens if I am a convicted felon caught with a firearm?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: If you are a convicted felon in Texas and are caught in possession of a firearm, you may face severe penalties, including prison time. It is illegal for a felon to possess a firearm in Texas, and violations of this law are treated as a serious offense.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What are the penalties for carrying a weapon in a prohibited place?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Carrying a weapon in prohibited areas, such as schools, courthouses, or airports, can result in criminal charges. Penalties may vary depending on the specific location and whether the weapon was used in any other criminal activity.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: How can I defend myself against a weapon charge?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: The best defense depends on the specifics of your case. Common defenses include challenging the legality of the search that uncovered the weapon, proving lack of knowledge about the weapon's presence, or demonstrating that you acted in self-defense. An experienced attorney can review your case and determine the best defense strategy.
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
            <h2 className="text-3xl font-bold text-black mb-6">Contact SVR Law Firm for Expert Weapon Charges Defense</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you are facing weapon charges in Houston or anywhere in Texas, it is crucial to seek legal representation as soon as possible. SVR Law Firm is here to provide the strong defense you need to protect your rights and your future.
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

export default WeaponCases; 