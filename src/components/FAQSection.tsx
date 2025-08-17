import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "What should I do immediately after a car accident?",
    id: "faq1"
  },
  {
    question: "How do I know if I have a personal injury case?",
    id: "faq2"
  },
  {
    question: "How much does it cost to hire an attorney for personal injury or criminal defense?",
    id: "faq3"
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-law-darker">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-law-gold mb-4 tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-5xl font-bold text-card-dark-foreground mb-12 leading-tight">
              Have questions?<br />
              We have answers!
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-law-dark pb-6">
                  <div className="flex items-center justify-between cursor-pointer py-2 group">
                    <span className="text-card-dark-foreground text-lg group-hover:text-law-gold transition-colors">{faq.question}</span>
                    <Plus className="w-6 h-6 text-law-gold group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#" className="text-law-gold hover:text-law-gold-light transition-colors underline">
                Call SVR Law Firm for detailed answers to your questions!
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Button 
              size="lg" 
              className="bg-law-gold hover:bg-law-gold-dark text-white px-10 py-8 text-xl font-bold text-center leading-tight shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get A Free Case<br />
              Evaluation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;