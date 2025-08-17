import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SlipFall = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Slip and Fall
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Slip and Fall Accident Attorney in Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Helping Victims of Premises Liability Accidents Throughout Texas
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Slip and fall accidents can occur almost anywhere—on a wet floor at a grocery store, an uneven sidewalk, or a poorly lit stairwell. These accidents often lead to severe injuries, leaving victims with costly medical bills, lost wages, and long-term physical challenges. If you've been injured in a slip and fall accident, SVR Law Firm is here to help.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Based in Houston, SVR Law Firm specializes in representing clients throughout Texas who have been injured due to unsafe conditions on someone else's property. Contact us today for a free consultation, and let us fight for the compensation you deserve.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Understanding Slip and Fall Accidents
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Slip and fall accidents are a type of premises liability claim. This means that property owners or managers are responsible for maintaining safe environments. When they fail to do so and someone is injured, they may be held liable.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Common causes of slip and fall accidents include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Wet or slippery floors: Often due to spills, rain, or cleaning.</li>
                <li>Uneven or cracked surfaces: Such as sidewalks or flooring.</li>
                <li>Poor lighting: Making it difficult to see hazards.</li>
                <li>Loose carpets or floor mats: Which can cause trips and falls.</li>
                <li>Obstructed walkways: With items that block paths or create tripping hazards.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If your slip and fall was caused by one of these conditions, SVR Law Firm can help you hold the negligent party accountable.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Injuries Caused by Slip and Fall Accidents
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Slip and fall accidents can result in a wide range of injuries, some of which may have lasting effects on your health and quality of life. Common injuries include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Broken bones: Fractures of the arm, wrist, hip, or ankle are frequent in slip and fall cases.</li>
                <li>Head injuries: Including concussions and traumatic brain injuries (TBI).</li>
                <li>Back and spinal cord injuries: Which can lead to chronic pain or paralysis in severe cases.</li>
                <li>Soft tissue injuries: Such as sprains, strains, and ligament tears.</li>
                <li>Cuts and bruises: From impact with the ground or nearby objects.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                These injuries can lead to expensive medical treatments, rehabilitation, and time away from work. SVR Law Firm is here to ensure you receive the compensation needed to recover from your injuries.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Proving Liability in a Slip and Fall Case
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To succeed in a slip and fall case, you must prove that the property owner or manager was negligent in maintaining a safe environment. This involves demonstrating:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>The presence of a dangerous condition:</strong> There was a hazard (like a spill or uneven surface) that caused your fall.</li>
                <li><strong>The property owner knew or should have known about the hazard:</strong> The hazard was either known to the property owner, or it existed long enough that they should have been aware of it.</li>
                <li><strong>The property owner failed to address the hazard:</strong> The owner did not fix the issue or provide adequate warnings (such as placing a "wet floor" sign).</li>
              </ol>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At SVR Law Firm, we will thoroughly investigate your case, collect evidence such as surveillance footage, witness statements, and maintenance records, and build a strong case to prove negligence.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Compensation Available in Slip and Fall Claims
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Victims of slip and fall accidents are entitled to seek compensation for both economic and non-economic damages. SVR Law Firm will work tirelessly to ensure you receive compensation for:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Medical expenses: Including hospital stays, surgeries, physical therapy, and future medical care.</li>
                <li>Lost wages: Compensation for time missed from work due to your injury.</li>
                <li>Pain and suffering: Damages for the physical pain, emotional distress, and overall impact on your life.</li>
                <li>Disability and disfigurement: If your injuries lead to long-term or permanent disability.</li>
                <li>Loss of earning capacity: If your ability to work in the future is affected by your injury.</li>
              </ul>

              <h3 className="text-2xl font-bold text-black mb-6">
                Who Is Liable in a Slip and Fall Accident?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Several parties can potentially be held liable for a slip and fall accident. These include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Property owners: If the hazard existed on the property and the owner failed to address it.</li>
                <li>Property managers: If a third party manages the property and was responsible for maintenance.</li>
                <li>Business owners: If the accident occurred on commercial property, such as a retail store or restaurant.</li>
                <li>Maintenance companies: If a company responsible for property upkeep failed to address the hazard.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At SVR Law Firm, we'll determine who is liable in your case and pursue a claim against the appropriate party.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Steps to Take After a Slip and Fall Accident
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you've been involved in a slip and fall accident, taking the right steps immediately after the incident can protect your health and strengthen your legal case:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Seek medical attention:</strong> Your health is the priority, and a doctor can document your injuries.</li>
                <li><strong>Report the accident:</strong> Inform the property owner or manager and ensure an incident report is filed.</li>
                <li><strong>Document the scene:</strong> Take photos of the hazard that caused your fall, the surrounding area, and your injuries.</li>
                <li><strong>Obtain witness information:</strong> If anyone saw the accident, collect their contact information.</li>
                <li><strong>Avoid giving statements to insurance companies:</strong> Let SVR Law Firm handle communications with insurers.</li>
              </ol>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                By following these steps and contacting SVR Law Firm immediately, you can strengthen your case and improve your chances of receiving compensation.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why Choose SVR Law Firm for Your Slip and Fall Case?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we understand the challenges you face after a slip and fall accident, and we are committed to guiding you through the legal process. Here's why clients across Houston and Texas trust us:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Personalized attention:</strong> We take the time to understand your unique situation and develop a legal strategy tailored to your needs.</li>
                <li><strong>Proven results:</strong> We have successfully recovered compensation for countless clients injured in slip and fall accidents.</li>
                <li><strong>Aggressive representation:</strong> We're not afraid to take on property owners and their insurance companies to secure the compensation you deserve.</li>
                <li><strong>No fees unless we win:</strong> We work on a contingency fee basis, meaning you don't pay us unless we recover compensation for you.</li>
              </ul>

              <h3 className="text-2xl font-bold text-black mb-6">
                Frequently Asked Questions (FAQ) – Slip and Fall Accidents in Houston
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How long do I have to file a slip and fall claim in Texas?
                  </h4>
                  <p className="text-gray-700">
                    A: In Texas, the statute of limitations for personal injury claims, including slip and fall accidents, is two years from the date of the accident. It's important to contact an attorney as soon as possible to preserve your rights.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What if I was partially at fault for the slip and fall accident?
                  </h4>
                  <p className="text-gray-700">
                    A: Under Texas's modified comparative fault rule, you can still recover compensation if you were less than 51% at fault for the accident. However, your compensation will be reduced by your percentage of fault.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What should I do if the property owner's insurance company contacts me?
                  </h4>
                  <p className="text-gray-700">
                    A: It's important not to speak with the insurance company without first consulting an attorney. Insurance adjusters may try to minimize your claim. Let SVR Law Firm handle all communications with insurers on your behalf.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How much compensation can I receive for a slip and fall injury?
                  </h4>
                  <p className="text-gray-700">
                    A: The amount of compensation varies depending on the severity of your injuries, medical costs, lost wages, and other factors. SVR Law Firm will fight to maximize your recovery.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-black mb-6">
                Contact SVR Law Firm Today
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If you've been injured in a slip and fall accident in Houston or anywhere in Texas, you deserve justice. Let SVR Law Firm handle the legal complexities while you focus on your recovery. Contact us today for a free consultation and take the first step toward securing the compensation you deserve.
              </p>
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
            Don't Let Property Owners Get Away With Negligence
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Property owners have a duty to keep their premises safe. When they fail, you have the right to compensation for your injuries.
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

export default SlipFall; 