import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Call SVR Law Firm</h3>
            <p className="text-foreground mb-6 text-lg leading-relaxed">
              To schedule a consultation or if you already need to speak to someone about your case, please call us directly.
            </p>
            <p className="text-foreground mb-8 text-lg leading-relaxed">
              Quickly receive call us directly at <span className="font-bold text-law-gold">(234) 567-8901</span>.
            </p>
            <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              CALL (234) 567-8901
            </Button>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Message Us</h3>
            <p className="text-foreground mb-8 text-lg leading-relaxed">
              For all general enquiries, please send us a message using the contact form and we will get back to you as soon as we can directly.
            </p>
            <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
              SEND US A MESSAGE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;