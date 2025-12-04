import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import PricingSection from "@/components/pricingSection";
import ServiceSection from "@/components/serviceSection";
import TestimonialsSection from "@/components/testimonialsSection";
import ValuesSection from "@/components/valuesSection";

export default function Page() {
  return (
    <>
      <Header />
      <main className="px-5 lg:px-20">
        <HeroSection />
        <ServiceSection />
        <ValuesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
