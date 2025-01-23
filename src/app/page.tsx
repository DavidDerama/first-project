import FaqSection from "@/components/faq/FaqSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import Footer from "@/components/Footer";
import FounderSection from "@/components/founder/FounderSection";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/pricing/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FeaturesSection />
      <FounderSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </>
  );
}
