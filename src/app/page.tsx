import { Hero } from "@/components/home/Hero";
import { LogoCloud } from "@/components/home/LogoCloud";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Benefits } from "@/components/home/Benefits";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { homeFaqs } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ServicesOverview />
      <WhyChoose />
      <Benefits />
      <Industries />
      <Testimonials />
      <CaseStudiesPreview />
      <FAQSection
        items={homeFaqs}
        subtitle="Answers to the most common questions about AI automation and working with ScriptZen."
      />
      <ContactSection />
      <CTABanner />
    </>
  );
}
