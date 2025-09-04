import {
  HeroSection,
  TrustedBySection,
  WhyTrustSection,
  CTASection,
  OurImpactSection,
  WhoWeAreSection,
  IndustriesWeServeSection,
  TestimonialsSection,
} from "@/components/sections";
import CoreServicesSection from "@/components/sections/CoreServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - First impression */}
      <HeroSection />

      {/* Trusted By Section - Social proof */}
      <TrustedBySection />

      {/* Our Impact Section - Credibility & numbers */}
      <OurImpactSection />

      {/* Who We Are Section - Company story & values */}
      <WhoWeAreSection />

      {/* Industries We Serve Section - Specialization */}
      <IndustriesWeServeSection />

      {/* Why Organizations Trust Upland Section - Problem/solution */}
      <WhyTrustSection />

      {/* Core Services Section - What we do */}
      <CoreServicesSection />

      {/* Testimonials Section - Social proof & credibility */}
      <TestimonialsSection />

      {/* Bottom CTA Section - Final conversion */}
      <CTASection />
    </main>
  );
}
