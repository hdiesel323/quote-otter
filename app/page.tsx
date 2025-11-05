import HeaderQuoteOtter from "@/components/HeaderQuoteOtter";
import FooterQuoteOtter from "@/components/FooterQuoteOtter";
import LeadGenHero from "@/components/LeadGenHero";
import PopularServicesSimple from "@/components/PopularServicesSimple";
import VerticalTabs from "@/components/VerticalTabs";
import HowItWorks from "@/components/insurance/HowItWorks";
import WhyChooseUs from "@/components/insurance/WhyChooseUs";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <>
      <HeaderQuoteOtter />
      <main>
        <LeadGenHero />
        <PopularServicesSimple />
        <VerticalTabs />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
      </main>
      <FooterQuoteOtter />
    </>
  );
}
