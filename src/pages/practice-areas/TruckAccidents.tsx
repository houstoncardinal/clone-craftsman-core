import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TruckAccidents = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              18-Wheeler Accidents
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              18-Wheeler Accident Attorney in Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Experienced Legal Representation for Truck Accident Victims Across Texas
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Accidents involving 18-wheelers or commercial trucks can cause catastrophic injuries due to the massive size and weight of these vehicles. If you or a loved one has been involved in an 18-wheeler accident, you need a law firm that understands the complexities of these cases. SVR Law Firm, based in Houston, offers comprehensive legal representation for victims of 18-wheeler accidents across Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are committed to securing the compensation you deserve for your injuries, medical bills, lost wages, and emotional trauma. Contact SVR Law Firm today for a free consultation if you have been injured in an 18-wheeler accident.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why 18-Wheeler Accident Cases Are Different
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Accidents involving large trucks differ significantly from typical car accidents in both complexity and severity. Handling these cases requires specialized knowledge of federal trucking regulations, commercial insurance policies, and accident reconstruction.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we will:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Investigate the accident thoroughly to determine the cause and liability.</li>
                <li>Review the trucking company's maintenance records, driver logs, and black box data.</li>
                <li>Negotiate with large insurance companies that represent commercial trucking businesses.</li>
                <li>Pursue litigation if necessary to secure full compensation for your injuries.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                These cases are often complex, but with SVR Law Firm's extensive experience handling truck accident claims, we are ready to help you fight for the compensation you deserve.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Common Causes of 18-Wheeler Accidents
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                18-wheeler accidents in Houston and across Texas can be caused by various factors, many of which are the result of negligence. Some of the most common causes include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Driver fatigue:</strong> Truck drivers often face long hours on the road, leading to fatigue and slower reaction times.</li>
                <li><strong>Overloaded trucks:</strong> Trucks carrying loads above their weight limit are more difficult to control and can cause accidents.</li>
                <li><strong>Mechanical failures:</strong> Brake failures, tire blowouts, or other mechanical issues can lead to devastating accidents.</li>
                <li><strong>Distracted driving:</strong> Truck drivers using mobile devices or distracted by other means can easily cause collisions.</li>
                <li><strong>Improper training:</strong> Inadequate training of truck drivers can result in poor handling of large commercial vehicles.</li>
                <li><strong>Speeding or reckless driving:</strong> Truck drivers who drive too fast or aggressively may cause serious accidents.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If you or a loved one was injured in an 18-wheeler accident caused by any of these factors, SVR Law Firm can help you hold the responsible parties accountable.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Who Is Liable in an 18-Wheeler Accident?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Determining liability in an 18-wheeler accident is often more complicated than in a typical car accident. Several parties could be held responsible, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>The truck driver:</strong> If the driver was speeding, distracted, or otherwise negligent.</li>
                <li><strong>The trucking company:</strong> If the company failed to follow safety regulations or pushed drivers to violate hours-of-service rules.</li>
                <li><strong>The truck manufacturer:</strong> If a defect in the truck or its components caused the accident.</li>
                <li><strong>Third-party maintenance providers:</strong> If improper maintenance led to mechanical failure.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At SVR Law Firm, we will conduct a comprehensive investigation to identify all liable parties and pursue maximum compensation for you.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Common Injuries in 18-Wheeler Accidents
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Because of the sheer size and weight of 18-wheelers, accidents involving these trucks often result in severe, life-changing injuries. Common injuries include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Traumatic brain injuries (TBI)</li>
                <li>Spinal cord injuries, including paralysis</li>
                <li>Broken bones and fractures</li>
                <li>Internal injuries and organ damage</li>
                <li>Severe burns or lacerations</li>
                <li>Amputation or loss of limbs</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                These injuries often require long-term medical treatment and can significantly affect a victim's quality of life. SVR Law Firm is dedicated to helping you secure the financial resources you need for your recovery.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Compensation Available After an 18-Wheeler Accident
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Injured victims of 18-wheeler accidents are entitled to pursue compensation for both economic and non-economic damages. At SVR Law Firm, we will work to recover compensation for:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Medical bills:</strong> Including surgeries, hospital stays, rehabilitation, and ongoing care.</li>
                <li><strong>Lost wages:</strong> Compensation for time missed from work and reduced earning capacity if you are unable to return to work.</li>
                <li><strong>Pain and suffering:</strong> Compensation for physical pain, emotional distress, and loss of enjoyment of life.</li>
                <li><strong>Property damage:</strong> Coverage for vehicle repair or replacement.</li>
                <li><strong>Punitive damages:</strong> In cases of extreme negligence or recklessness, punitive damages may be awarded to punish the wrongdoer.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We will assess your case carefully and seek maximum compensation to address both current and future needs.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                What to Do After an 18-Wheeler Accident in Houston
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Taking the right steps after an 18-wheeler accident can protect your health and strengthen your legal claim:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Seek immediate medical attention:</strong> Your health is the priority. Some injuries may not be immediately apparent.</li>
                <li><strong>Report the accident:</strong> Ensure the accident is reported to law enforcement, and obtain a police report.</li>
                <li><strong>Document the scene:</strong> Take photos of the accident scene, vehicle damage, and any visible injuries.</li>
                <li><strong>Do not speak to the trucking company's insurer:</strong> Insurance companies may attempt to minimize your claim. Let SVR Law Firm handle communications.</li>
                <li><strong>Contact a truck accident attorney:</strong> Reach out to SVR Law Firm for a free consultation as soon as possible.</li>
              </ol>

              <h3 className="text-2xl font-bold text-black mb-6">
                How SVR Law Firm Handles 18-Wheeler Accident Cases
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we take a comprehensive approach to 18-wheeler accident cases, ensuring that no detail is overlooked. Our process includes:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>In-depth accident investigation:</strong> We work with experts to reconstruct the accident and determine the cause.</li>
                <li><strong>Evidence gathering:</strong> We collect trucking company records, black box data, and other crucial evidence.</li>
                <li><strong>Negotiation with insurance companies:</strong> We handle negotiations with large trucking companies and their insurers, fighting for full compensation.</li>
                <li><strong>Trial-ready representation:</strong> If necessary, we will take your case to court to ensure you receive the justice you deserve.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our goal is to relieve the burden on you so that you can focus on your recovery while we handle the legal complexities.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Frequently Asked Questions (FAQ) – 18-Wheeler Accidents in Houston
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How long do I have to file a claim after an 18-wheeler accident?
                  </h4>
                  <p className="text-gray-700">
                    A: In Texas, the statute of limitations for personal injury claims is two years from the date of the accident. It's important to act quickly to preserve your right to compensation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Can I sue the trucking company after an accident?
                  </h4>
                  <p className="text-gray-700">
                    A: Yes. Trucking companies can be held liable if they were negligent in hiring or training drivers, failing to maintain their vehicles, or violating safety regulations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What should I do if the truck driver's insurance company contacts me?
                  </h4>
                  <p className="text-gray-700">
                    A: Do not speak to the insurance company without consulting an attorney. Insurance adjusters may try to minimize your claim. Let SVR Law Firm handle all communications on your behalf.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Can I still recover compensation if I was partially at fault for the accident?
                  </h4>
                  <p className="text-gray-700">
                    A: Under Texas's modified comparative fault rule, you can still recover compensation if you were less than 51% at fault for the accident. However, your recovery may be reduced by your percentage of fault.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link to="/free-consultation">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/practice-areas/personal-injury">
                <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                  View All Personal Injury
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-law-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Face the Trucking Industry Alone
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Trucking companies have teams of lawyers and investigators. Let us level the playing field and fight for the compensation you deserve.
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
      </section>

      <Footer />
    </div>
  );
};

export default TruckAccidents; 