import {
  HeroSection,
  TrustedBySection,
  WhyTrustSection,
  CTASection,
} from "@/components/sections";
import CoreServicesSection from "@/components/sections/CoreServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Why Organizations Trust Upland Section */}
      <WhyTrustSection />

      {/* Core Services Section */}
      <CoreServicesSection />

      {/* Bottom CTA Section */}
      <CTASection />
    </main>
  );
}
