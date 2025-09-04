import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/sections/SectionTag";
import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Target, Shield, Zap } from "lucide-react";

// Import images
import strategyImage from "@/public/marketStrategy.png";
import executiveImage from "@/public/executiveInsight.png";
import complianceImage from "@/public/complianceTechnicalRigor.png";

export default function ServicesPage() {
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#132A4D' }}>
        <div className="container mx-auto py-40 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <SectionTag variant="default">
              Comprehensive Business Solutions
            </SectionTag>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif leading-tight">
              Strategic Services for High-Stakes Industries
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
              From market expansion to compliance excellence, we provide the strategic guidance and technical expertise your organization needs to thrive in complex, regulated environments.
            </p>
            
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeader variant="dark">
              Our Core Services
            </SectionHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              We specialize in delivering executive-level strategy and technology solutions for organizations operating in high-stakes, regulated environments.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg"
              >
                <div className={`grid lg:grid-cols-2 items-center ${
                  service.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                }`}>
                  {/* Text content */}
                  <div className={`p-8 ${service.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="bg-[#132A4D] hover:bg-[#1a3a5c] text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`h-full ${service.imagePosition === "left" ? "lg:col-start-1" : ""}`}>
                    <ImageSection
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeader variant="dark">
              Additional Capabilities
            </SectionHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Beyond our core services, we offer specialized capabilities to support your organization&apos;s unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#132A4D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our strategic services can help your organization achieve its goals with confidence and compliance.
          </p>
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
              className="border-white text-white hover:bg-white hover:text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
