import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Clock, Phone, Mail, MapPin, Gavel, AlertTriangle, Scale, FileText, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const DomesticViolence = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Domestic Violence Defense
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Houston Domestic Violence Defense Attorney: Protecting Your Rights
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
                Accusations of domestic violence can have life-changing consequences, impacting your personal relationships, employment, and freedom. If you are facing domestic violence charges in Houston or anywhere in Texas, it is crucial to have an experienced attorney on your side. SVR Law Firm offers skilled, aggressive legal representation to defend your rights and your future against these serious charges.
              </p>

              <h2 className="text-3xl font-bold text-black mb-6">What Constitutes Domestic Violence in Texas?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In Texas, domestic violence, also referred to as family violence, involves acts of violence or threats of violence committed against a family member, household member, or romantic partner. Domestic violence offenses can be classified as assault, aggravated assault, or continuous family violence, depending on the severity of the alleged acts.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Common domestic violence offenses include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Physical abuse:</strong> Hitting, pushing, or any physical harm.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Threats:</strong> Verbal threats of physical harm.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Emotional abuse:</strong> Intimidation or coercion.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Sexual abuse:</strong> Forced or non-consensual sexual contact.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Stalking:</strong> Harassment or following someone to instill fear.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Charges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Types of Domestic Violence Charges in Texas</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              In Texas, domestic violence can result in a variety of charges, each with varying degrees of penalties. Some of the common charges include:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Assault Family Violence</h3>
                </div>
                <p className="text-gray-600">
                  The most common domestic violence charge, involving physical harm or threats against a family or household member.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Aggravated Domestic Assault</h3>
                </div>
                <p className="text-gray-600">
                  Involves serious bodily injury or the use of a deadly weapon in an assault.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Continuous Family Violence</h3>
                </div>
                <p className="text-gray-600">
                  Involves two or more domestic violence offenses occurring within a 12-month period.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-black mb-4 text-center">Penalties for domestic violence in Texas depend on the specific charge and the circumstances of the case, but they can include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Loss of child custody or visitation rights</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Jail or prison time</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Fines up to $10,000</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Mandatory counseling or anger management classes</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Restraining orders or protective orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">How SVR Law Firm Can Help with Your Domestic Violence Case</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Being charged with domestic violence is overwhelming, but a charge does not mean a conviction is inevitable. There are several legal defenses that may apply to your case, and SVR Law Firm will work tirelessly to build a strong defense for you. Some common defense strategies include:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Self-defense</h3>
                </div>
                <p className="text-gray-600">
                  If you acted to protect yourself or someone else from harm.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">False accusations</h3>
                </div>
                <p className="text-gray-600">
                  Domestic violence accusations are sometimes made out of anger or to gain an advantage in custody or divorce proceedings.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Gavel className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Lack of evidence</h3>
                </div>
                <p className="text-gray-600">
                  We will carefully examine the prosecution's evidence and challenge any inconsistencies or lack of proof.
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
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose SVR Law Firm for Your Domestic Violence Defense?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we are dedicated to providing aggressive and compassionate representation to clients facing domestic violence charges. Our experience in handling these sensitive cases allows us to navigate the complexities of the law while focusing on protecting your rights and future.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We understand the potential consequences of a domestic violence conviction, and we are committed to:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Challenging Evidence</h3>
                <p className="text-gray-600">Challenging the prosecution's evidence and uncovering any inconsistencies.</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Negotiating Resolutions</h3>
                <p className="text-gray-600">Negotiating reduced charges or alternative resolutions such as counseling programs to avoid a conviction.</p>
              </div>
              <div className="text-center">
                <Heart className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Protecting Rights</h3>
                <p className="text-gray-600">Protecting your rights during custody battles or divorce proceedings that may be impacted by the charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions (FAQs) about Domestic Violence in Texas</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can domestic violence charges be dropped by the victim?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: In Texas, domestic violence charges are brought by the state, not by the victim. Even if the victim decides they no longer want to press charges, the district attorney can still pursue the case.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What are the penalties for a domestic violence conviction in Texas?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Penalties vary depending on the severity of the charge, but a conviction can result in jail time, fines, mandatory counseling, and a permanent criminal record. In some cases, protective orders may also be issued, preventing you from contacting the alleged victim.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Will a domestic violence conviction affect my child custody or visitation rights?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Yes, a domestic violence conviction can have a serious impact on your ability to retain child custody or visitation rights. Courts often view domestic violence as a threat to the well-being of the child and may limit or terminate your parental rights.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What should I do if I am falsely accused of domestic violence?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: If you have been falsely accused of domestic violence, it is important to immediately consult with an attorney. SVR Law Firm will work to uncover the truth, challenge false evidence, and present a strong defense on your behalf.
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
            <h2 className="text-3xl font-bold text-black mb-6">Contact SVR Law Firm for Expert Domestic Violence Defense</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you are facing domestic violence charges in Houston or anywhere in Texas, it is crucial to seek legal representation as soon as possible. SVR Law Firm is here to provide the strong defense you need to protect your rights and your future.
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

export default DomesticViolence; 