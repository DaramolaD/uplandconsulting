import { Metadata } from "next";
import SectionTag from "@/components/sections/SectionTag";
import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Target, Shield, Zap } from "lucide-react";
import { FadeInUp, StaggerContainer, ScaleIn, SectionWrapper, SlideInFromLeft, SlideInFromRight } from "@/components/animations";
import { createWebPageStructuredData } from "@/components/seo/StructuredData";

// Import images
import strategyImage from "@/public/marketStrategy.png";
import executiveImage from "@/public/executiveInsight.png";
import complianceImage from "@/public/complianceTechnicalRigor.png";

export const metadata: Metadata = {
  title: "Strategic Services for High-Stakes Industries",
  description: "Comprehensive business solutions including strategic market expansion, executive advisory services, and compliance excellence for oil & gas, utilities, and public sector organizations.",
  keywords: [
    "strategic consulting services",
    "market expansion strategy",
    "executive advisory services",
    "compliance consulting",
    "oil gas consulting",
    "utilities consulting",
    "public sector consulting",
    "regulatory compliance",
    "digital transformation",
    "project management"
  ],
  openGraph: {
    title: "Strategic Services for High-Stakes Industries | Upland",
    description: "Comprehensive business solutions including strategic market expansion, executive advisory services, and compliance excellence for oil & gas, utilities, and public sector organizations.",
    images: [
      {
        url: '/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Upland Strategic Services - High-Stakes Industries Consulting',
      },
    ],
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  // Structured data for the services page
  const servicesPageStructuredData = createWebPageStructuredData(
    "Strategic Services for High-Stakes Industries",
    "https://uplandconsulting.com/services",
    "Comprehensive business solutions including strategic market expansion, executive advisory services, and compliance excellence for oil & gas, utilities, and public sector organizations."
  );
  const services = [
    {
      title: "Strategic Market Expansion",
      description: "Navigate complex market dynamics with confidence. Our strategic approach combines industry expertise with cutting-edge technology to identify growth opportunities and execute expansion strategies with precision.",
      features: [
        "Market analysis and opportunity assessment",
        "Regulatory compliance guidance",
        "Competitive landscape mapping",
        "Go-to-market strategy development",
        "Risk mitigation planning"
      ],
      image: strategyImage,
      imagePosition: "right" as const,
    },
    {
      title: "Executive Advisory Services",
      description: "Get unbiased, executive-level insights for high-stakes decisions. We provide independent guidance that puts your organization's best interests first, free from vendor bias or internal conflicts.",
      features: [
        "Independent technology assessments",
        "Executive decision support",
        "Vendor evaluation and selection",
        "Strategic planning facilitation",
        "Crisis management consulting"
      ],
      image: executiveImage,
      imagePosition: "left" as const,
    },
    {
      title: "Compliance & Technical Excellence",
      description: "Build robust, adaptable systems that meet strict regulatory demands while enabling growth. We understand that compliance isn't just about checking boxes—it's about creating sustainable operational excellence.",
      features: [
        "Regulatory compliance audits",
        "Technical system design",
        "Safety protocol implementation",
        "Quality assurance frameworks",
        "Continuous improvement programs"
      ],
      image: complianceImage,
      imagePosition: "right" as const,
    },
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Scale your team with experienced professionals who understand your industry's unique challenges and requirements."
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Deliver complex projects on time and within budget with our proven project management methodologies."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify and mitigate potential risks before they impact your operations or compliance status."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your operations with technology solutions that enhance efficiency and competitive advantage."
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageStructuredData)
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#132A4D' }}>
          <div className="container mx-auto py-40 px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center text-white">
              <FadeInUp delay={0.2}>
                <SectionTag variant="default">
                  Comprehensive Business Solutions
                </SectionTag>
              </FadeInUp>
              
              <FadeInUp delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-serif leading-tight">
                  Strategic Services for High-Stakes Industries
                </h1>
              </FadeInUp>
              
              <FadeInUp delay={0.6}>
                <p className="text-base md:text-xl lg:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
                  From market expansion to compliance excellence, we provide the strategic guidance and technical expertise your organization needs to thrive in complex, regulated environments.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.8}>
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <SectionWrapper className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <div className="inline-block bg-[#EBEBEB] text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
                  Our Core Services
                </div>
                <SectionHeader variant="dark">
                  Strategic Solutions for Complex Challenges
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  We specialize in delivering executive-level strategy and technology solutions for organizations operating in high-stakes, regulated environments.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="space-y-16">
              {services.map((service, index) => (
                <ScaleIn key={index} delay={index * 0.3}>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg">
                    <div className={`grid lg:grid-cols-2 items-center ${
                      service.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                    }`}>
                      {/* Text content */}
                      <div className={`py-16 px-8 ${service.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                        <SlideInFromLeft delay={0.1}>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
                            {service.title}
                          </h3>
                        </SlideInFromLeft>
                        <SlideInFromLeft delay={0.2}>
                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </SlideInFromLeft>
                        
                        {/* Features list */}
                        <SlideInFromLeft delay={0.3}>
                          <ul className="space-y-3 mb-8">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </SlideInFromLeft>
                        
                        <SlideInFromLeft delay={0.4}>
                          <Button className="bg-[#132A4D] hover:bg-[#1a3a5c] text-white">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </SlideInFromLeft>
                      </div>

                      {/* Image */}
                      <SlideInFromRight delay={0.2} className="h-full">
                        <div className={`h-full ${service.imagePosition === "left" ? "lg:col-start-1" : ""}`}>
                          <ImageSection
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full"
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

        {/* Additional Services Grid */}
        <SectionWrapper className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <div className="inline-block bg-[#EBEBEB] text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
                  Additional Capabilities
                </div>
                <SectionHeader variant="dark">
                  Specialized Support Services
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Beyond our core services, we offer specialized capabilities to support your organization&apos;s unique needs.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="w-12 h-12 bg-[#132A4D] rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="py-20 bg-[#132A4D]">
          <div className="container mx-auto px-4 text-center">
            <FadeInUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Ready to Transform Your Operations?
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our strategic services can help your organization achieve its goals with confidence and compliance.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Download Brochure
                </Button>
              </div>
            </FadeInUp>
          </div>
        </SectionWrapper>

      </main>
    </>
  );
}
