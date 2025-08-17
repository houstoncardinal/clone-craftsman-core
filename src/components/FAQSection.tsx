import { Button } from "@/components/ui/button";
import { Plus, Minus, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqData = [
    {
      question: "What should I do immediately after a car accident?",
      answer: "Contact a personal injury attorney as soon as possible to protect your rights. Avoid making any statements to insurance companies until you've spoken with a lawyer. Document everything, take photos, and seek medical attention if needed."
    },
    {
      question: "How do I know if I have a personal injury case?",
      answer: "If you were injured due to someone else's negligence, you might have a case. Contact us for a free consultation, and we'll evaluate the details of your situation. We'll help you understand your legal options and potential compensation."
    },
    {
      question: "How much does it cost to hire an attorney for personal injury or criminal defense?",
      answer: "For personal injury cases, we work on a contingency fee basis, meaning you don't pay unless we win. For criminal defense, costs vary depending on the complexity of the case, but we offer flexible payment plans and a free initial consultation."
    },
    {
      question: "How long do I have to file a personal injury claim?",
      answer: "In Texas, you generally have 2 years from the date of injury to file a personal injury lawsuit. However, it's crucial to act quickly as evidence can be lost and witnesses' memories can fade. Contact us immediately to preserve your rights."
    },
    {
      question: "What types of compensation can I recover?",
      answer: "You may be entitled to compensation for medical expenses, lost wages, pain and suffering, property damage, and more. The specific damages depend on your case. We'll fight to maximize your recovery."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto"></div>
          </div>

          {/* FAQs */}
          <div className="space-y-4 mb-16">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-900 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-law-gold" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:281-249-9835"
                className="inline-flex items-center justify-center px-8 py-4 bg-law-gold hover:bg-law-gold-dark text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (281) 249-9835
              </a>
              <Link 
                to="/free-consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-colors duration-200"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Free Consultation
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No fee unless we win
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;