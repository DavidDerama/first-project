import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </>
  );
}
