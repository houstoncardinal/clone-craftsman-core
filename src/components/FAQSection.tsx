import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqData = [
    {
      question: "What should I do immediately after a car accident?",
      answer: "Contact a personal injury attorney as soon as possible to protect your rights. Avoid making any statements to insurance companies until you've spoken with a lawyer."
    },
    {
      question: "How do I know if I have a personal injury case?",
      answer: "If you were injured due to someone else's negligence, you might have a case. Contact us for a free consultation, and we'll evaluate the details of your situation."
    },
    {
      question: "How much does it cost to hire an attorney for personal injury or criminal defense?",
      answer: "For personal injury cases, we work on a contingency fee basis, meaning you don't pay unless we win. For criminal defense, costs vary depending on the complexity of the case, but we offer flexible payment plans and a free initial consultation."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Left Content - FAQs */}
          <div>
            <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-4xl font-bold text-white mb-12 leading-tight">
              Have questions?<br />
              We have answers!
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-6">
                  <div className="flex items-center justify-between cursor-pointer py-2 group">
                    <span className="text-white text-lg group-hover:text-law-gold transition-colors">
                      <Plus className="w-5 h-5 inline mr-2" />
                      Q: {faq.question}
                    </span>
                  </div>
                  <div className="mt-2 text-gray-300">
                    A: {faq.answer}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="tel:281-249-9835" className="text-white hover:text-law-gold transition-colors underline">
                Call SVR Law Firm for detailed answers to your questions!
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 flex justify-center">
            <Link to="/free-consultation">
              <Button
                size="lg"
                className="bg-law-gold hover:bg-law-gold-dark text-white px-10 py-8 text-xl font-bold text-center leading-tight shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get A Free<br />
                Case Evaluation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;