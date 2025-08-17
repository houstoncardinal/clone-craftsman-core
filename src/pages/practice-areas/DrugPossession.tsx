import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Clock, Phone, Mail, MapPin, Gavel, AlertTriangle, Scale, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const DrugPossession = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Drug Possession Defense
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Houston Drug Possession Defense Lawyer: Protecting Your Rights Against Drug Charges
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
                If you have been charged with drug possession in Houston or anywhere in Texas, you may be facing serious penalties, including fines, jail time, and a permanent criminal record. SVR Law Firm is committed to providing strong, aggressive defense for individuals accused of drug possession. We understand the complexities of Texas drug laws and will work tirelessly to protect your rights and your future.
              </p>

              <h2 className="text-3xl font-bold text-black mb-6">Understanding Drug Possession Laws in Texas</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In Texas, drug possession is taken very seriously, and even a small amount of a controlled substance can result in significant legal consequences. Drug possession is generally defined as having control over a controlled substance that you know to be illegal. Texas classifies drugs into different penalty groups based on the type of drug, its potential for abuse, and the danger it poses to society.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Common Drug Types and Penalty Groups in Texas</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Penalty Group 1:</strong> Includes substances like cocaine, heroin, methamphetamine, and opioids.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Penalty Group 2:</strong> Includes drugs like MDMA (ecstasy) and LSD.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Penalty Group 3:</strong> Includes prescription medications such as Xanax, Valium, and Ritalin.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Penalty Group 4:</strong> Includes compounds that contain small amounts of narcotics mixed with other substances, like certain prescription cough syrups.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <strong>Marijuana:</strong> Though not categorized under a penalty group, marijuana possession is still illegal in most cases in Texas.
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
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Penalties for Drug Possession in Texas</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The severity of the penalties for drug possession depends on the type and amount of the controlled substance, as well as any prior convictions. Penalties can range from misdemeanors to felonies and may include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Fines</h3>
                </div>
                <p className="text-gray-600">
                  Ranging from $2,000 for minor offenses to $250,000 or more for serious charges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Jail or Prison Time</h3>
                </div>
                <p className="text-gray-600">
                  For possession of even small amounts of certain drugs, you may face jail time, while larger amounts can result in lengthy prison sentences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Probation</h3>
                </div>
                <p className="text-gray-600">
                  In some cases, you may be sentenced to probation instead of jail time, but this often involves strict conditions, including drug testing and counseling.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Permanent Criminal Record</h3>
                </div>
                <p className="text-gray-600">
                  A conviction for drug possession can result in a permanent criminal record, affecting your ability to obtain employment, housing, or educational opportunities.
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
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Defending Against Drug Possession Charges in Houston</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we are experienced in developing effective defense strategies to fight drug possession charges. Our approach is tailored to each individual case, and we carefully review the circumstances surrounding your arrest to determine the best course of action. Some common defense strategies include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Unlawful Search and Seizure:</strong> If law enforcement violated your constitutional rights by conducting an illegal search or seizure, we may be able to have the evidence against you suppressed.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Lack of Knowledge:</strong> You cannot be convicted of drug possession if you were unaware that the drugs were in your possession.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Mistaken Identity:</strong> In some cases, you may have been wrongfully identified as the person possessing the drugs.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <strong>Insufficient Evidence:</strong> The prosecution must prove beyond a reasonable doubt that you were knowingly in possession of the controlled substance. We will challenge any weak or insufficient evidence in your case.
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
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose SVR Law Firm for Your Drug Possession Defense?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we understand the serious nature of drug possession charges and the impact they can have on your life. Our firm is committed to providing aggressive, personalized legal defense to protect your rights and achieve the best possible outcome in your case.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Experienced in Texas Drug Laws</h3>
                <p className="text-gray-600">We are highly knowledgeable in Texas drug possession laws and know how to navigate the criminal justice system to your advantage.</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Aggressive Defense</h3>
                <p className="text-gray-600">We are not afraid to challenge the prosecution's evidence and fight for a reduction or dismissal of charges whenever possible.</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Client-Focused Approach</h3>
                <p className="text-gray-600">We prioritize open communication with our clients, keeping you informed every step of the way and ensuring you understand your legal options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions (FAQs) About Drug Possession Charges in Texas</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What happens if I am caught with a small amount of drugs?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: The penalties for drug possession vary depending on the amount and type of drug. Even possession of a small amount can result in fines, jail time, and a criminal record. In some cases, a first-time offender may be eligible for diversion programs or drug treatment instead of jail time.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can a drug possession charge be dismissed?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Yes, it is possible to have drug possession charges dismissed under certain circumstances. If law enforcement conducted an illegal search or seizure, or if there is insufficient evidence, your attorney can move to have the case dismissed.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: How can I avoid jail time for drug possession?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: There are several alternatives to jail time for drug possession charges, including probation, drug treatment programs, and diversion programs for first-time offenders. An experienced attorney can negotiate with the prosecution to seek these alternatives in your case.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Will a drug possession conviction stay on my record forever?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: A conviction for drug possession can result in a permanent criminal record, which can affect your ability to get a job, housing, or even qualify for financial aid. In some cases, it may be possible to seek expungement or non-disclosure to remove or seal the conviction from your record.
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
            <h2 className="text-3xl font-bold text-black mb-6">Contact SVR Law Firm for a Free Consultation on Drug Possession Charges</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you are facing drug possession charges in Houston or anywhere in Texas, it is crucial to seek legal representation as soon as possible. SVR Law Firm is here to provide the strong defense you need to protect your rights and your future.
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

export default DrugPossession; 