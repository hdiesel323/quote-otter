import HeaderQuoteOtter from "@/components/HeaderQuoteOtter";
import FooterQuoteOtter from "@/components/FooterQuoteOtter";
import UniversalHero from "@/components/verticals/UniversalHero";
import PopularServices from "@/components/verticals/PopularServices";
import HowItWorks from "@/components/insurance/HowItWorks";
import WhyChooseUs from "@/components/insurance/WhyChooseUs";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <>
      <HeaderQuoteOtter />
      <main>
        <UniversalHero />
        <PopularServices />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
      </main>
      <FooterQuoteOtter />
    </>
  );
}
