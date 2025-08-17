import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="pt-20">
        <WelcomeSection />
      </div>
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
