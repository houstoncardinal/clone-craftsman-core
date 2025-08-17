import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CatastrophicInjury = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Catastrophic Injury
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Catastrophic Injury Attorney in Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Aggressive Representation for Life-Changing Injuries Across Texas
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Catastrophic injuries are life-altering events that result in long-term disabilities, ongoing medical care, and permanent changes to one's lifestyle. Victims of these severe injuries, caused by someone else's negligence, have the right to pursue compensation to cover medical expenses, lost wages, and other damages.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At SVR Law Firm, we understand the gravity of catastrophic injuries. Our team is dedicated to helping victims get the compensation they deserve, fighting tirelessly to secure the financial resources you need for a stable future.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                What Qualifies as a Catastrophic Injury?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A catastrophic injury is one that permanently impacts an individual's ability to work or perform daily activities. These injuries often require long-term care, multiple surgeries, and ongoing rehabilitation. Common catastrophic injuries include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Traumatic Brain Injuries (TBI):</strong> Severe head injuries leading to cognitive impairments, memory loss, personality changes, or permanent disabilities.</li>
                <li><strong>Spinal Cord Injuries:</strong> Damage to the spinal cord can result in partial or complete paralysis, affecting mobility and independence.</li>
                <li><strong>Amputation:</strong> Losing a limb dramatically impacts a person's ability to work and perform daily tasks, requiring prosthetics and rehabilitation.</li>
                <li><strong>Severe Burn Injuries:</strong> Third-degree burns cause permanent scarring, disfigurement, and require long-term pain management and reconstructive surgeries.</li>
                <li><strong>Organ Damage:</strong> Internal injuries, such as damage to the liver, kidneys, or lungs, often result in life-threatening conditions and long-term health challenges.</li>
                <li><strong>Multiple Fractures:</strong> Serious accidents can lead to broken bones that require surgeries, extended recovery, and physical therapy.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                These injuries demand comprehensive legal representation to ensure victims receive adequate compensation for the extensive costs of treatment and rehabilitation.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Common Causes of Catastrophic Injuries in Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Catastrophic injuries can result from various accidents. At SVR Law Firm, we represent victims who have suffered catastrophic injuries in Houston or the state of Texas due to:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Car Accidents:</strong> High-impact collisions causing traumatic brain injuries, spinal cord injuries, and more.</li>
                <li><strong>18-Wheeler Accidents:</strong> Commercial truck accidents are often severe due to the size and weight of the vehicles involved.</li>
                <li><strong>Workplace Accidents:</strong> Construction site accidents, falls, and equipment malfunctions can result in life-altering injuries.</li>
                <li><strong>Medical Malpractice:</strong> Surgical errors, misdiagnoses, and other forms of negligence lead to permanent harm or disability.</li>
                <li><strong>Defective Products:</strong> Faulty products, like defective machinery or automotive parts, can cause catastrophic harm.</li>
                <li><strong>Slip and Fall Accidents:</strong> Falls from heights or dangerous premises may cause serious injuries such as spinal damage and head trauma.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                No matter the cause, SVR Law Firm is committed to holding the responsible parties accountable for your injuries.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                The Long-Term Impact of Catastrophic Injuries
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Catastrophic injuries have long-term consequences that affect nearly every aspect of a victim's life, such as:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Permanent Disability:</strong> Victims may be unable to return to work or care for themselves without assistance.</li>
                <li><strong>Ongoing Medical Care:</strong> Long-term rehabilitation, surgeries, and specialized treatments may be required.</li>
                <li><strong>Emotional and Psychological Trauma:</strong> Many victims experience depression, anxiety, or PTSD after a life-altering injury.</li>
                <li><strong>Loss of Independence:</strong> Severe injuries may require mobility aids, home modifications, or full-time caregivers.</li>
                <li><strong>Financial Hardship:</strong> The costs of medical care combined with lost wages can place a significant financial burden on the victim and their family.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                SVR Law Firm will work to ensure you receive compensation for your immediate and long-term care needs.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Compensation for Catastrophic Injury Victims
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Victims of catastrophic injuries in Houston, Texas may be entitled to compensation for various damages, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Medical Expenses:</strong> Current and future medical costs, surgeries, medications, and rehabilitation.</li>
                <li><strong>Lost Wages and Loss of Earning Capacity:</strong> Compensation for time missed from work and the inability to earn income in the future due to permanent disability.</li>
                <li><strong>Pain and Suffering:</strong> Non-economic damages for physical pain, emotional distress, and loss of enjoyment of life.</li>
                <li><strong>Home Modifications:</strong> Costs for making your home accessible with ramps, lifts, or other necessary modifications.</li>
                <li><strong>Long-Term Care:</strong> Compensation for the cost of in-home care, specialized equipment, or assisted living facilities.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At SVR Law Firm, we fight to secure the maximum compensation available under Texas law to ensure you and your family are cared for.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why You Need a Catastrophic Injury Lawyer
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Catastrophic injury cases are complex, often involving multiple parties, including insurance companies, employers, and third-party contractors. Without experienced legal representation, victims may face challenges in proving liability and recovering full compensation.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we understand the challenges catastrophic injury victims face and have the knowledge to build a strong case. Our Catastrophic Injury attorney will:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Investigate the circumstances of your accident to determine liability.</li>
                <li>Work with medical experts to assess the extent of your injuries and future care needs.</li>
                <li>Negotiate aggressively with insurance companies to secure fair compensation.</li>
                <li>Take your case to trial if necessary to fight for the justice you deserve.</li>
              </ul>

              <h3 className="text-2xl font-bold text-black mb-6">
                Frequently Asked Questions (FAQ) – Catastrophic Injury Cases
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How long do I have to file a catastrophic injury claim in Texas?
                  </h4>
                  <p className="text-gray-700">
                    A: The statute of limitations for filing a personal injury claim in Texas is two years from the date of the injury. Consult an attorney as soon as possible to preserve your right to compensation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What if my catastrophic injury was caused by a workplace accident?
                  </h4>
                  <p className="text-gray-700">
                    A: If your injury occurred at work, you may be entitled to compensation through workers' compensation. However, third parties, such as equipment manufacturers or contractors, may also be held liable, allowing you to pursue additional compensation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Can I recover compensation for emotional distress after a catastrophic injury?
                  </h4>
                  <p className="text-gray-700">
                    A: Yes. Victims can seek compensation for pain and suffering, including emotional trauma, depression, anxiety, and loss of enjoyment of life.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What should I do if the insurance company offers a settlement?
                  </h4>
                  <p className="text-gray-700">
                    A: Never accept a settlement offer without first consulting with an attorney. Insurance companies often try to minimize payouts, and the initial offer may not cover your injuries and future needs. SVR Law Firm can review the offer and negotiate on your behalf.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why Choose SVR Law Firm for Your Catastrophic Injury Case?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we understand the devastation that follows a catastrophic injury. Our attorney is dedicated to providing compassionate support while aggressively pursuing justice for our clients. We offer:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Comprehensive Case Investigation:</strong> We gather all necessary evidence, from medical records to expert testimony, to build a strong case.</li>
                <li><strong>Aggressive Negotiation and Litigation:</strong> We negotiate fiercely with insurance companies and are prepared to take your case to trial if necessary.</li>
                <li><strong>Personalized Legal Support:</strong> Each client is a priority, and we provide personalized attention and constant communication throughout your case.</li>
                <li><strong>No Fees Unless We Win:</strong> We work on a contingency fee basis, meaning you don't pay us unless we recover compensation for you.</li>
              </ul>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link to="/free-consultation">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                  Get Free Consultation
                </Button>
              </Link>
              <a href="tel:281-249-9835">
                <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                  Call (281) 249-9835
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-law-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Suffered a Catastrophic Injury?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Don't wait to get legal help. Contact us today for a free consultation.
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

export default CatastrophicInjury; 