import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const DogBites = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dog Bites
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dog Bite Injury Attorney in Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Aggressive Legal Representation for Dog Bite Victims Across Texas
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dog bites can lead to serious physical injuries and emotional trauma, leaving victims with mounting medical bills and long-term recovery needs. In Texas, dog owners are responsible for ensuring their pets do not cause harm, and when they fail to do so, they can be held liable for the injuries caused.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If you or a loved one has been injured by a dog bite in Houston or anywhere in Texas, SVR Law Firm is here to fight for the compensation you deserve. Our experienced team understands the complexities of dog bite injury cases and will pursue every legal avenue to ensure you receive justice.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why Hire a Dog Bite Injury Lawyer?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dog bite injury cases can be complex, especially when it comes to determining liability and negotiating with insurance companies. Texas follows a "one bite rule" which means that an owner may be held strictly liable if their dog has previously shown aggressive tendencies, but negligence and premises liability laws can also play a role.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At SVR Law Firm, we will thoroughly investigate your case, gather the necessary evidence, and develop a strong legal strategy to hold the responsible party accountable.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Common Injuries from Dog Bites
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dog bites can cause a range of serious injuries, depending on the size and breed of the dog, and the circumstances surrounding the attack. Some common injuries include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Puncture wounds:</strong> Deep wounds caused by the dog's teeth penetrating the skin, which can lead to infections.</li>
                <li><strong>Lacerations and scarring:</strong> Cuts that may require stitches and result in permanent scars, especially on visible areas like the face.</li>
                <li><strong>Nerve damage:</strong> Bites can cause damage to nerves, leading to loss of sensation or function in the affected area.</li>
                <li><strong>Bone fractures:</strong> Particularly in children or smaller individuals, a dog bite can break or fracture bones.</li>
                <li><strong>Infections:</strong> Bacterial infections like rabies, tetanus, and MRSA are serious concerns with dog bites.</li>
                <li><strong>Emotional trauma:</strong> Many victims experience post-traumatic stress disorder (PTSD), anxiety, or fear around dogs after an attack.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether your injuries are physical, emotional, or both, SVR Law Firm will pursue full compensation for your damages.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Texas Laws on Dog Bite Liability
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Texas dog bite laws allow victims to pursue compensation under two primary legal theories:
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Premises Liability:</strong> If the dog bite occurred on someone else's property (such as at a business or in a residential area), the property owner or occupier may be liable for failing to protect visitors from the dangerous dog.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Negligence:</strong> If a dog owner fails to take reasonable steps to prevent their dog from injuring someone (such as properly restraining or training the dog), they may be held liable for injuries caused by the bite.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Compensation for Dog Bite Victims
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dog bites can lead to significant financial burdens for victims, including medical expenses, lost wages, and long-term rehabilitation. At SVR Law Firm, we will pursue compensation for:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Medical bills:</strong> Including emergency room visits, surgeries, medications, and ongoing treatments like physical therapy.</li>
                <li><strong>Lost wages:</strong> Compensation for time missed from work due to your injuries and recovery.</li>
                <li><strong>Pain and suffering:</strong> Non-economic damages for the emotional distress, trauma, and physical pain caused by the attack.</li>
                <li><strong>Scarring and disfigurement:</strong> Permanent scars, especially on the face or other visible areas, can impact your quality of life and self-esteem.</li>
                <li><strong>Rehabilitation costs:</strong> Including therapy for physical and emotional recovery.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In the tragic event that a dog attack results in death, surviving family members may also pursue wrongful death claims to cover funeral expenses and loss of companionship.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Steps to Take After a Dog Bite Incident
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you've been bitten by a dog, taking the right steps immediately can help protect your health and strengthen your legal case:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Seek medical attention immediately:</strong> Even minor bites can become infected, so it's important to get prompt medical care.</li>
                <li><strong>Document the incident:</strong> Take photos of your injuries and the location of the attack. If possible, get the dog owner's contact information.</li>
                <li><strong>Report the bite:</strong> File a report with local animal control or the police to ensure there is an official record of the attack.</li>
                <li><strong>Avoid speaking with the dog owner's insurance company:</strong> Let your attorney handle all communications with insurers to prevent them from minimizing your claim.</li>
                <li><strong>Contact SVR Law Firm:</strong> The sooner you have legal representation, the better your chances of securing fair compensation.</li>
              </ol>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                By following these steps and contacting SVR Law Firm, we can begin building a strong case on your behalf.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Frequently Asked Questions (FAQ) – Dog Bite Injuries
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Can I still file a dog bite claim if I was on the dog owner's property?
                  </h4>
                  <p className="text-gray-700">
                    A: Yes, you may still have a claim even if the bite occurred on the dog owner's property. Texas's premises liability laws can hold property owners accountable if they knew or should have known about a dangerous dog on their property and failed to warn visitors or take proper precautions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How long do I have to file a dog bite claim in Texas?
                  </h4>
                  <p className="text-gray-700">
                    A: The statute of limitations for filing a personal injury claim, including dog bites, in Texas is two years from the date of the attack. It's important to contact an attorney as soon as possible to ensure your claim is filed within the legal timeframe.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What if the dog that bit me doesn't have a history of aggression?
                  </h4>
                  <p className="text-gray-700">
                    A: Texas law allows dog bite victims to pursue claims even if the dog has no prior history of aggression, under certain circumstances. Our experienced attorney at SVR Law Firm can help evaluate your case and determine the best path forward.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What compensation can I receive for a dog bite injury?
                  </h4>
                  <p className="text-gray-700">
                    A: The amount of compensation you may receive depends on the severity of your injuries, medical expenses, lost wages, and emotional trauma. SVR Law Firm will fight to maximize your recovery and ensure you are fully compensated for your losses.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why Choose SVR Law Firm for Your Dog Bite Case?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we have extensive experience handling dog bite injury cases in Houston and across Texas. We offer:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Personalized attention:</strong> We understand how traumatic a dog attack can be, and we take the time to address your concerns and develop a strategy tailored to your needs.</li>
                <li><strong>Aggressive representation:</strong> We fight to hold negligent dog owners accountable and secure the maximum compensation for your injuries.</li>
                <li><strong>No fees unless we win:</strong> We work on a contingency fee basis, meaning you won't pay us unless we successfully recover compensation for you.</li>
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
            Injured by a Dog Bite?
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

export default DogBites; 