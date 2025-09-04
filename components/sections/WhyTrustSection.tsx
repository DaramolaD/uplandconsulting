import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { FadeInUp, StaggerContainer, ScaleIn, SectionWrapper, SlideInFromLeft, SlideInFromRight } from "@/components/animations";

import marketStrategy from "@/public/marketStrategy.png";
import executiveLevelInsight from "@/public/executiveInsight.png";
import complianceTechnicalRigor from "@/public/complianceTechnicalRigor.png";

export default function WhyTrustSection() {
  const contentBlocks = [
    {
      title: "Accelerated Market Strategy",
      description: "Expanding into new markets is never simple. Regulations shift, competitors move fast, and every wrong turn costs time and money. Many companies find themselves stalled at the planning stage, unable to move from vision to action. At Upland, we step in as a partner that clears the fog. By combining industry expertise with cutting-edge technology, we help you navigate complex market dynamics, identify growth opportunities, and execute strategies with precision.",
      linkText: "Learn How We Guide Market Expansion",
      imageSrc: marketStrategy,
      imageAlt: "Business meeting with world map presentation",
      imagePosition: "right" as const,
    },
    {
      title: "Independent, Executive-Level Insight",
      description: "When decisions carry high stakes, leaders often face advice that is biased—either shaped by vendors pushing their own tools or by internal teams too close to the problem. This creates hesitation and costly second-guessing. Upland provides the outside perspective executives need. We are not tied to any particular technology or vendor, allowing us to deliver truly independent guidance that puts your organization's best interests first.",
      linkText: "Discover Our Approach to Executive Advisory",
      imageSrc: executiveLevelInsight,
      imageAlt: "Executive discussion and consultation",
      imagePosition: "left" as const,
    },
    {
      title: "Compliance & Technical Rigor",
      description: "For companies in energy, utilities, and public service, compliance is not optional—it's survival. A single overlooked standard can lead to shutdowns, fines, or even accidents that damage lives and reputations. Many firms struggle to balance growth with the strict demands of regulators. At Upland, we understand that compliance isn't just about checking boxes—it's about building systems that are both robust and adaptable.",
      linkText: "See How We Build for Compliance",
      imageSrc: complianceTechnicalRigor,
      imageAlt: "Industrial workers reviewing blueprints and safety protocols",
      imagePosition: "right" as const,
    },
  ];

  return (
    <SectionWrapper className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* White banner at top */}
        <FadeInUp delay={0.2}>
          <div className="text-center mb-20">
            <div className="inline-block bg-[#EBEBEB] text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
              Trusted Guidance. Proven Impact.
            </div>
            <SectionHeader variant="dark">
              Why Organizations Trust Upland
            </SectionHeader>
          </div>
        </FadeInUp>

        {/* Content blocks */}
        <StaggerContainer className="space-y-16">
          {contentBlocks.map((block, index) => (
            <ScaleIn key={index} delay={index * 0.3}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className={`grid lg:grid-cols-2 items-center ${
                  block.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                }`}>
                  {/* Text content */}
                  <div className={`p-8 ${block.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                    <SlideInFromLeft delay={0.1}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
                        {block.title}
                      </h3>
                    </SlideInFromLeft>
                    <SlideInFromLeft delay={0.2}>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {block.description}
                      </p>
                    </SlideInFromLeft>
                    
                    {/* Call to action */}
                    <SlideInFromLeft delay={0.3}>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 decoration-1 underline font-medium text-lg inline-flex items-center"
                      >
                        {block.linkText}
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </SlideInFromLeft>
                  </div>

                  {/* Image */}
                  <SlideInFromRight delay={0.2}>
                    <div className={`${block.imagePosition === "left" ? "lg:col-start-1" : ""}`}>
                      <ImageSection
                        src={block.imageSrc}
                        alt={block.imageAlt}
                        className="aspect-[4/3] w-full h-full"
                      />
                    </div>
                  </SlideInFromRight>
                </div>
              </div>
            </ScaleIn>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
