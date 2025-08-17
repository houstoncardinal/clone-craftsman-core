import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const WrongfulDeath = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Wrongful Death
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Houston Wrongful Death Attorney – Compassionate Legal Representation for Your Loss
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Seeking Justice for Families in Texas After the Wrongful Death of a Loved One
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Losing a loved one is one of the most devastating experiences a family can endure, and when that loss is caused by someone else's negligence, it can feel even more overwhelming. In Texas, families have the legal right to seek compensation for their loss through a wrongful death lawsuit. At SVR Law Firm, we understand the pain and suffering that accompanies such a tragic event, and we are here to help you pursue justice on behalf of your loved one.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                What is Wrongful Death in Texas?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Under Texas law, a wrongful death occurs when an individual dies due to the negligence, recklessness, or intentional actions of another party. Common causes of wrongful death include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Car accidents caused by reckless or drunk driving</li>
                <li>18-wheeler accidents resulting from negligence or improper maintenance</li>
                <li>Medical malpractice due to physician or hospital errors</li>
                <li>Workplace accidents caused by unsafe conditions or inadequate safety measures</li>
                <li>Defective products leading to fatal injuries</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In a wrongful death claim, surviving family members can seek compensation for both the economic and emotional impact of the loss.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Who Can File a Wrongful Death Claim in Texas?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Texas law allows specific individuals to file a wrongful death claim. The following parties can seek compensation:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>The spouse of the deceased</li>
                <li>The children (biological or adopted) of the deceased</li>
                <li>The parents of the deceased</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If none of these individuals file a claim within three months of the death, the executor or administrator of the deceased person's estate may file a wrongful death lawsuit on behalf of the family, unless explicitly requested not to by the surviving family members.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Compensation Available in a Wrongful Death Claim
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In a wrongful death case, the goal is to provide financial compensation that addresses both the economic and emotional toll of the loss. Families may be eligible to recover:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Medical Expenses:</strong> Costs associated with any medical treatment the deceased received prior to death due to the accident or injury.</li>
                <li><strong>Funeral and Burial Costs:</strong> Coverage for the expenses incurred to properly bury the deceased.</li>
                <li><strong>Lost Financial Support:</strong> Compensation for the income the deceased would have contributed to the family, including wages and benefits.</li>
                <li><strong>Loss of Inheritance:</strong> The value of assets the deceased would have accumulated and passed down to their heirs.</li>
                <li><strong>Loss of Companionship:</strong> Compensation for the emotional loss of love, care, guidance, and companionship that the deceased would have provided to their family.</li>
                <li><strong>Mental Anguish:</strong> Compensation for the emotional suffering endured by the surviving family members due to the unexpected death.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In certain cases, families may also be entitled to punitive damages, which are designed to punish the responsible party for particularly reckless or malicious behavior.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why You Need an Experienced Wrongful Death Attorney
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Wrongful death cases are complex and emotionally charged. To ensure your family receives the compensation you deserve, it is essential to have an experienced attorney by your side. At SVR Law Firm, we understand the legal intricacies of wrongful death claims and are committed to providing compassionate and aggressive representation. We will handle all aspects of your case, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Investigating the Cause of Death:</strong> We will work to gather evidence, consult with experts, and build a strong case to prove liability.</li>
                <li><strong>Filing All Necessary Paperwork:</strong> We handle all legal filings, deadlines, and documentation to ensure your claim is filed correctly and on time.</li>
                <li><strong>Negotiating with Insurance Companies:</strong> We will aggressively negotiate with the insurance companies to seek maximum compensation for your loss.</li>
                <li><strong>Pursuing a Trial If Necessary:</strong> While many cases settle out of court, we are prepared to take your case to trial if a fair settlement cannot be reached.</li>
              </ul>

              <h3 className="text-2xl font-bold text-black mb-6">
                How Texas' Statute of Limitations Affects Wrongful Death Claims
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In Texas, the statute of limitations for filing a wrongful death claim is two years from the date of the death. Failing to file within this time frame can result in the loss of your right to seek compensation. There are some exceptions to this rule, such as in cases involving minors or when the defendant is actively trying to conceal their role in the death, but it's crucial to act quickly to preserve your legal rights.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Frequently Asked Questions (FAQ) – Wrongful Death Claims
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How is a wrongful death claim different from a criminal case?
                  </h4>
                  <p className="text-gray-700">
                    A: A wrongful death claim is a civil lawsuit filed by the family of the deceased to seek financial compensation. A criminal case, on the other hand, is filed by the state to punish the defendant for their actions. It is possible for both a civil wrongful death claim and a criminal case to proceed simultaneously.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What types of accidents can result in a wrongful death claim?
                  </h4>
                  <p className="text-gray-700">
                    A: Wrongful death claims can arise from various accidents, including car crashes, workplace accidents, medical malpractice, product liability, and more. If another party's negligence contributed to the death, a wrongful death claim may be appropriate.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How much compensation can we expect from a wrongful death case?
                  </h4>
                  <p className="text-gray-700">
                    A: The amount of compensation varies based on several factors, including the deceased's income, the circumstances of the death, and the emotional toll on the family. An experienced attorney at SVR Law Firm can evaluate your case and provide an estimate based on similar cases.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Can we recover compensation if the deceased was partially at fault?
                  </h4>
                  <p className="text-gray-700">
                    A: Yes, Texas follows a comparative negligence rule, meaning that as long as the deceased was less than 51% at fault, the family can still recover compensation. However, the compensation may be reduced based on the deceased's percentage of fault.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How long does it take to resolve a wrongful death claim?
                  </h4>
                  <p className="text-gray-700">
                    A: The length of time varies depending on the complexity of the case, the willingness of the insurance company to settle, and whether the case goes to trial. Some cases can be resolved in a matter of months, while others may take years if litigation is required.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why Choose SVR Law Firm for Your Wrongful Death Case?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At SVR Law Firm, we understand that no amount of money can replace your loved one. However, a wrongful death claim can help relieve the financial burden on your family and provide some sense of closure. We offer:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Compassionate Legal Support:</strong> We are committed to supporting you through every step of the legal process, from investigation to settlement negotiations or trial.</li>
                <li><strong>Aggressive Advocacy:</strong> We will fight tirelessly to hold the responsible party accountable and secure the maximum compensation available.</li>
                <li><strong>Personalized Representation:</strong> We understand that each case is unique, and we take the time to listen to your story and develop a legal strategy tailored to your specific situation.</li>
                <li><strong>Proven Results:</strong> With a track record of successful outcomes in personal injury cases, we have the experience and dedication to guide you through this difficult time.</li>
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
            Lost a Loved One Due to Negligence?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Don't wait to get legal help. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-consultation">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                Get Free Consultation
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

export default WrongfulDeath; 