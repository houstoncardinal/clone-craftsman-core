import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead, SEOConfigs } from "@/components/SEOHead";
import { PracticeAreaSchema } from "@/components/SchemaMarkup";

const CarAccidents = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...SEOConfigs.carAccidents} />
      <PracticeAreaSchema 
        practiceArea="Car Accident"
        description="Expert car accident lawyers in Houston. SVR Law Firm helps victims get maximum compensation for injuries, medical bills, and lost wages. Free consultation. No fee unless we win."
      />
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/practice-areas-car-accidents.jpg')` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Car Accidents
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Car Accident Attorney in Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Helping Car Accident Victims Recover Compensation Throughout Texas
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Car accidents can cause devastating injuries, financial hardship, and emotional trauma. If you or a loved one has been injured in a car accident due to someone else's negligence, you deserve experienced legal representation. SVR Law Firm, based in Houston, provides skilled and compassionate advocacy for car accident victims across Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team will fight to ensure that you receive the compensation you need to cover medical expenses, lost wages, and pain and suffering. If you've been injured in a car accident, contact SVR Law Firm today for a free consultation.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Why You Need a Car Accident Attorney in Houston, TX
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Houston's bustling roads and highways, including I-45, I-10, SH 288 and U.S. 59, are known for frequent traffic accidents. Whether you were involved in a minor fender bender or a serious collision, dealing with insurance companies and recovering from your injuries can be overwhelming.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hiring an experienced Houston car accident attorney can help ensure your rights are protected. At SVR Law Firm, we work tirelessly to:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Investigate the accident to determine fault.</li>
                <li>Gather evidence, including police reports, medical records, and witness statements.</li>
                <li>Negotiate with insurance companies to ensure you receive a fair settlement.</li>
                <li>Pursue litigation if necessary to secure full compensation.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With years of experience handling personal injury cases in Texas, our firm knows how to maximize the compensation you are entitled to.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Common Causes of Car Accidents in Houston
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Houston, like many other cities in Texas, has a high rate of car accidents, many of which are caused by negligence or reckless driving. Some of the most common causes of car accidents include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Distracted driving:</strong> Texting, phone use, and other distractions can lead to accidents.</li>
                <li><strong>Drunk driving:</strong> Driving under the influence is a leading cause of serious and fatal car accidents.</li>
                <li><strong>Speeding:</strong> Excessive speed often results in catastrophic accidents.</li>
                <li><strong>Reckless driving:</strong> Failing to obey traffic laws or driving aggressively puts everyone at risk.</li>
                <li><strong>Weather conditions:</strong> Heavy rain and slick roads can contribute to accidents in Houston's unpredictable weather.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Regardless of the cause, if someone else's negligence led to your accident, SVR Law Firm will hold them accountable.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Types of Injuries in Car Accidents
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Car accidents can cause a wide range of injuries, from minor cuts and bruises to life-changing trauma. Some common injuries our clients suffer in car accidents include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Whiplash and neck injuries</li>
                <li>Broken bones and fractures</li>
                <li>Head injuries, including traumatic brain injuries (TBI)</li>
                <li>Spinal cord injuries, including paralysis</li>
                <li>Internal injuries, such as organ damage</li>
                <li>Severe lacerations and burns</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Even if you believe your injuries are minor, it's important to seek medical attention and consult a personal injury attorney. Some injuries may not fully present themselves until days after the accident. SVR Law Firm can help you document your injuries and pursue the compensation you deserve.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                What Compensation Can I Recover After a Car Accident?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Victims of car accidents in Houston and throughout Texas are often entitled to various types of compensation, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Medical expenses:</strong> Coverage for hospital stays, surgeries, rehabilitation, and ongoing medical care.</li>
                <li><strong>Lost wages:</strong> Compensation for any time missed from work due to your injuries.</li>
                <li><strong>Property damage:</strong> Reimbursement for vehicle repairs or replacement.</li>
                <li><strong>Pain and suffering:</strong> Compensation for physical pain, emotional distress, and reduced quality of life.</li>
                <li><strong>Loss of earning capacity:</strong> If your injuries prevent you from returning to work, you may recover compensation for lost future income.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At SVR Law Firm, we will carefully evaluate your case to ensure that you pursue every available form of compensation.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Steps to Take After a Car Accident in Houston
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you've been involved in a car accident, it's important to take certain steps to protect your health and your legal rights:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Seek medical attention immediately:</strong> Even if you feel fine, some injuries are not immediately apparent.</li>
                <li><strong>Report the accident to the police:</strong> A police report can serve as valuable evidence for your claim.</li>
                <li><strong>Document the scene:</strong> Take photos of the accident scene, vehicle damage, and any visible injuries.</li>
                <li><strong>Exchange information:</strong> Get the names, contact details, and insurance information of all parties involved.</li>
                <li><strong>Contact a car accident attorney:</strong> Before speaking to insurance adjusters, reach out to SVR Law Firm for a free consultation.</li>
              </ol>

              <h3 className="text-2xl font-bold text-black mb-6">
                How SVR Law Firm Helps Car Accident Victims in Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When you choose SVR Law Firm to represent you, we take immediate action to build a strong case. Our process includes:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Accident investigation:</strong> We conduct a thorough investigation, gathering evidence to prove the other party's negligence.</li>
                <li><strong>Medical documentation:</strong> We work closely with your doctors to document your injuries and ensure you receive appropriate medical care.</li>
                <li><strong>Negotiating with insurance companies:</strong> Our team is experienced in dealing with insurance adjusters, who often try to minimize claims. We will not accept lowball offers.</li>
                <li><strong>Pursuing litigation if necessary:</strong> If the insurance company refuses to offer a fair settlement, we are prepared to take your case to court.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our firm has a proven track record of securing favorable settlements and verdicts for car accident victims across Houston and Texas.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Frequently Asked Questions (FAQ) – Houston Car Accident Cases
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How long do I have to file a car accident claim in Texas?
                  </h4>
                  <p className="text-gray-700">
                    A: In Texas, the statute of limitations for filing a personal injury claim after a car accident is two years from the date of the accident. It's crucial to act quickly to protect your rights.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What if the other driver doesn't have insurance?
                  </h4>
                  <p className="text-gray-700">
                    A: If the other driver is uninsured or underinsured, you may still be able to recover compensation through your own insurance policy's uninsured/underinsured motorist coverage. SVR Law Firm can help you navigate this process.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: How much does it cost to hire a car accident lawyer?
                  </h4>
                  <p className="text-gray-700">
                    A: At SVR Law Firm, we work on a contingency fee basis, meaning you don't pay us anything unless we win your case. This ensures that everyone has access to high-quality legal representation, regardless of financial situation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: What should I avoid doing after a car accident?
                  </h4>
                  <p className="text-gray-700">
                    A: Avoid making statements that could be used against you later, such as admitting fault or downplaying your injuries. Let SVR Law Firm handle communications with the insurance companies.
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
            Don't Face the Insurance Company Alone
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Insurance companies have teams of lawyers working against you. Let us fight for your rights and get you the compensation you deserve.
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

export default CarAccidents; 