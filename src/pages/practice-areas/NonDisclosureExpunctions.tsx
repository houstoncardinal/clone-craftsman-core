import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Clock, Phone, Mail, MapPin, Gavel, AlertTriangle, Scale, FileText, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const NonDisclosureExpunctions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Non-Disclosure & Expunctions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Non-Disclosure & Expunction Lawyer in Houston, Texas: Clearing Your Criminal Record
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
                A criminal record can severely impact your future, affecting your ability to secure employment, housing, and educational opportunities. In Texas, individuals with certain criminal histories may be eligible to have their records sealed or completely erased through the legal processes of non-disclosure or expunction. At SVR Law Firm, we help individuals in Houston and across Texas pursue a clean slate by guiding them through the non-disclosure or expunction process, protecting their futures.
              </p>

              <h2 className="text-3xl font-bold text-black mb-6">Understanding Expunction and Non-Disclosure in Texas</h2>
              
              <h3 className="text-2xl font-bold text-black mb-4">Expunction in Texas</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                An expunction (or expungement) is a legal process that allows individuals to have their criminal record completely erased, as though the offense never happened. Once an expunction is granted, all records of the arrest, charges, and court proceedings are destroyed. This option is available for certain eligible offenses and under specific conditions, such as:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>Charges were dismissed or dropped.</div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>Acquittal: You were found not guilty at trial.</div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>Pardon: You were granted a pardon after a conviction.</div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>No formal charges were filed within the statute of limitations.</div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>Pretrial diversion or a deferred adjudication program was successfully completed (for some misdemeanors).</div>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Expunction is a powerful tool, as it allows individuals to legally deny the existence of the record on job applications, housing applications, or any other instances where background checks are conducted.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Non-Disclosure (Sealing of Records) in Texas</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A non-disclosure order, also known as sealing your record, does not completely erase your criminal record but restricts access to it. When your record is sealed, most members of the public, including potential employers and landlords, cannot view it. However, certain government entities, such as law enforcement or professional licensing boards, will still have access.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Non-disclosure is typically available to individuals who have successfully completed deferred adjudication and meet specific criteria, including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>No further criminal convictions during the waiting period.</div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>Fulfillment of all probation terms and court-ordered conditions.</div>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                While non-disclosure doesn't erase the record like expunction, it offers significant relief from the stigma and barriers associated with a criminal record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Who is Eligible for Expunction in Texas?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              In Texas, not everyone with a criminal record qualifies for expunction. Eligibility depends on several factors, including the type of offense and how the case was resolved. Generally, you may qualify for expunction if:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4 text-center">You May Qualify If:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>You were arrested but not formally charged with a crime.</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>Your criminal charges were dismissed.</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>You were acquitted at trial or granted a pardon.</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>You were convicted of certain misdemeanor offenses as a juvenile.</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
                    <div>You completed a pretrial diversion or deferred adjudication program for certain misdemeanor offenses.</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4 text-center">Generally Not Available For:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>Convictions that resulted in probation or prison time.</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>Certain serious offenses, including family violence cases and some felony offenses.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                              Our experienced attorney at SVR Law Firm can review your case and determine if you qualify for expunction or non-disclosure.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">How Non-Disclosure Can Benefit You</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              If you're not eligible for expunction, you may still qualify for an order of non-disclosure, particularly if you completed a deferred adjudication program. Once granted, non-disclosure prevents the general public, including employers and landlords, from accessing your criminal record, allowing you to move forward without the negative impact of your past.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The benefits of non-disclosure include:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-law-gold" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Enhanced Job Opportunities</h3>
                <p className="text-gray-600">
                  Many employers conduct background checks. Having your record sealed increases your chances of getting hired.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <FileText className="w-12 h-12 text-law-gold" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Improved Housing Options</h3>
                <p className="text-gray-600">
                  Landlords often run background checks on prospective tenants. A sealed record can prevent denials based on past criminal history.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <Scale className="w-12 h-12 text-law-gold" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Educational Opportunities</h3>
                <p className="text-gray-600">
                  Many educational institutions conduct background checks as part of their admission process. Sealing your record can help avoid admission issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">How SVR Law Firm Can Help with Expunction and Non-Disclosure</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At SVR Law Firm, we understand how important it is to protect your future. Our team will:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Gavel className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Review your case</h3>
                </div>
                <p className="text-gray-600">
                  We'll assess your eligibility for expunction or non-disclosure, providing a clear understanding of your legal options.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">File the necessary paperwork</h3>
                </div>
                <p className="text-gray-600">
                  Expunction and non-disclosure require strict adherence to legal procedures. We'll handle all of the paperwork and filings to ensure your case is processed efficiently.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Represent you in court</h3>
                </div>
                <p className="text-gray-600">
                  If a court hearing is necessary, we will advocate on your behalf to achieve the best possible outcome.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-law-gold mr-3" />
                  <h3 className="text-xl font-bold text-black">Provide ongoing support</h3>
                </div>
                <p className="text-gray-600">
                  Whether you are seeking an expunction or non-disclosure, we'll guide you through the process every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose SVR Law Firm?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">Our attorney has extensive experience in Texas criminal law, particularly in the areas of expunction and non-disclosure.</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Dedicated Advocacy</h3>
                <p className="text-gray-600">We are committed to helping our clients achieve a fresh start by providing aggressive, compassionate representation.</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Tailored Legal Strategies</h3>
                <p className="text-gray-600">We recognize that every case is unique, and we will create a personalized strategy based on the specifics of your situation.</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Seamless Process</h3>
                <p className="text-gray-600">We handle all aspects of the expunction or non-disclosure process, making it as smooth and stress-free as possible for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-12 text-center">Frequently Asked Questions (FAQ)</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What's the difference between expunction and non-disclosure?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Expunction completely erases your criminal record, while non-disclosure seals it from public view but still allows certain government agencies to access it.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can I qualify for expunction if I was convicted?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Expunction is generally not available for individuals who were convicted, except in specific situations like being granted a pardon or completing a pretrial diversion program for certain misdemeanors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: How long does the expunction or non-disclosure process take?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: The timeline varies depending on the complexity of your case, but expunction can take several months to complete. Non-disclosure typically takes less time but still requires court approval.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: What crimes are not eligible for expunction?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Serious offenses such as family violence, aggravated assault, and certain felonies are generally not eligible for expunction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-3">Q: Can my sealed or expunged record still be accessed?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A: If your record is expunged, it is completely erased and cannot be accessed. If it is sealed through non-disclosure, it is hidden from public view but may still be accessible to law enforcement and other government agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Contact SVR Law Firm for a Free Consultation</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you're ready to put your past behind you and explore your options for expunction or non-disclosure, contact SVR Law Firm for a free consultation. Our team will review your case and help determine the best path forward. Don't let your criminal record limit your future opportunities—call us today to take the first step toward clearing your name.
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

export default NonDisclosureExpunctions; 