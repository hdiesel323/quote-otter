import HeaderQuoteOtter from "@/components/HeaderQuoteOtter";
import FooterQuoteOtter from "@/components/FooterQuoteOtter";
import LeadGenHero from "@/components/LeadGenHero";
import PopularServicesSimple from "@/components/PopularServicesSimple";
import PartnerLogos from "@/components/PartnerLogos";
import VerticalTabs from "@/components/VerticalTabs";
import HowItWorks from "@/components/insurance/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/insurance/WhyChooseUs";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <>
      <HeaderQuoteOtter />
      <main>
        <LeadGenHero />
        <PopularServicesSimple />
        <PartnerLogos />
        <VerticalTabs />
        <HowItWorks />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
      </main>
      <FooterQuoteOtter />
    </>
  );
}
