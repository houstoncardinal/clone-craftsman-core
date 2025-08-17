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
    <section className="py-16 bg-law-darker">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-law-gold mb-2 tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-4xl font-bold text-card-dark-foreground mb-8 leading-tight">
              Have questions?<br />
              We have answers!
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-law-dark pb-4">
                  <div className="flex items-center justify-between cursor-pointer py-4">
                    <span className="text-card-dark-foreground">{faq.question}</span>
                    <Plus className="w-5 h-5 text-law-gold" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#" className="text-law-gold hover:underline">
                Call SVR Law Firm for detailed answers to your questions!
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-6 text-lg font-semibold"
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