import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Call SVR Law Firm</h3>
            <p className="text-foreground mb-6">
              To schedule a consultation or if you already need to speak to someone about your case, please call us directly.
            </p>
            <p className="text-foreground mb-6">
              Quickly receive call us directly at (234) 567-8901.
            </p>
            <Button className="bg-law-gold hover:bg-law-gold-dark text-white">
              CALL (234) 567-8901
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Message Us</h3>
            <p className="text-foreground mb-6">
              For all general enquiries, please send us a message using the contact form and we will get back to you as soon as we can directly.
            </p>
            <Button variant="outline" className="border-law-gold text-law-gold hover:bg-law-gold hover:text-white">
              SEND US A MESSAGE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;