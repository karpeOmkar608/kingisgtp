import HeroSection from "@/components/sections/HeroSection";
import TrustHighlights from "@/components/sections/TrustHighlights";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductShowcase from "@/components/sections/ProductShowcase";
import ComingSoon from "@/components/sections/ComingSoon";
import PrivateLabelBenefits from "@/components/sections/PrivateLabelBenefits";
import AboutUs from "@/components/sections/AboutUs";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <WhatWeDo />
      <WhyChooseUs />
      <HowItWorks />
      <ProductShowcase />
      <ComingSoon />
      <PrivateLabelBenefits />
      <AboutUs />
      <FAQ />
      <ContactSection />
    </>
  );
}
