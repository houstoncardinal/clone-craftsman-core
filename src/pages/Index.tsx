import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreasOverview from "@/components/PracticeAreasOverview";
import WelcomeSection from "@/components/WelcomeSection";
import PracticeAreasGrid from "@/components/PracticeAreasGrid";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreasOverview />
      <WelcomeSection />
      <PracticeAreasGrid />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
