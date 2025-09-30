import { Metadata } from "next";
import SectionTag from "@/components/sections/SectionTag";
import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Database, Wrench, Cpu, Sun, Ship, Shield, ShoppingCart, Sprout, Zap, Users, Target } from "lucide-react";
import { FadeInUp, StaggerContainer, ScaleIn, SectionWrapper, SlideInFromLeft, SlideInFromRight } from "@/components/animations";
import { createWebPageStructuredData } from "@/components/seo/StructuredData";
import Link from "next/link";

// Import images
import marketStrategy from "@/public/marketStrategy.png";
import constructionBg from "@/public/constructionBg.jpg";
import pipeBg from "@/public/pipeBg.jpg";
import utiliesBg from "@/public/utiliesBg.jpg";
import containerBg from "@/public/containerBg.jpg";
import oil from "@/public/oil.jpg";
import ctaSection from "@/public/ctaSection.png";
import complianceTechnicalRigor from "@/public/complianceTechnicalRigor.png";
import costEfficiency from "@/public/costEfficiency.png";

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
      id: "wireless-technology",
      title: "Wireless Technology Solutions",
      description: "Comprehensive wireless communication solutions including rural GSM extension, telecom infrastructure, and satellite communications for remote areas. We provide solar-powered technology solutions that work where traditional infrastructure fails.",
      features: [
        "Rural GSM Services Extension (RGES) - Solar-powered satellite GSM for remote areas",
        "Telecoms Towers/Mast Integrity Checks",
        "Fiber Optic Networking and Structured Office Cables",
        "Microwave Radio Communications (Redline, Aviat)",
        "Satellite Communication (VSAT, StarLink for Business)",
        "Direct links and call via satellite (extended)",
        "Partnership with satellite operators for cost-effective solutions"
      ],
      image: complianceTechnicalRigor,
      imagePosition: "right" as const,
      icon: Wifi,
      color: "blue"
    },
    {
      id: "data-management",
      title: "Data Management & Storage",
      description: "Enterprise-grade data management solutions with partnerships with leading providers like NetApp and Quantum for comprehensive data infrastructure. We ensure your data is secure, accessible, and optimized for performance.",
      features: [
        "NetApp Partnership - World's leading primary data management solutions",
        "Quantum Solutions - Independent backup/restore and automation",
        "Data Analytics (Dashboards & Custom Reporting)",
        "Monitoring/Metering Systems",
        "Backup and restore solutions",
        "Automation services",
        "Custom data architecture design"
      ],
      image: costEfficiency,
      imagePosition: "left" as const,
      icon: Database,
      color: "emerald"
    },
    {
      id: "engineering-construction",
      title: "Engineering & Construction Services",
      description: "Full-service engineering and construction capabilities with state-of-the-art fabrication facilities for onshore and offshore projects. Our Upland Fabrication Yard is equipped with modern machinery for quality-controlled manufacturing.",
      features: [
        "Fabrication, Construction & Welding",
        "Corrosion Control (Blasting & Painting)",
        "Installation & Maintenance (onshore and offshore)",
        "Upland Fabrication Yard - Well equipped with state-of-the-art machineries",
        "Quality controlled manufacturing processes",
        "High standards of quality and consistency",
        "Custom engineering solutions"
      ],
      image: constructionBg,
      imagePosition: "right" as const,
      icon: Wrench,
      color: "orange"
    },
    {
      id: "it-integration",
      title: "IT System Integration & Project Management",
      description: "Complex information system integration with custom software development and comprehensive project management services. We specialize in critical communications and system architecture design.",
      features: [
        "System Integration - Complex information systems involving critical communications",
        "Custom Software Development - Architecture or applications that integrate with new or existing systems",
        "Project Management - IT System Integration & Project Management services",
        "Custom software solutions",
        "System architecture design",
        "Critical communications integration"
      ],
      image: marketStrategy,
      imagePosition: "left" as const,
      icon: Cpu,
      color: "violet"
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy Solutions",
      description: "Complete renewable energy solutions including solar and wind power systems with design, installation, and maintenance services. We help organizations transition to sustainable energy with cutting-edge technology.",
      features: [
        "Solar System Design and Installation",
        "Wind Energy Solutions",
        "Inverters, UPS and Wind Technology",
        "Solar-powered solutions for various applications",
        "Energy storage solutions",
        "Grid-tie and off-grid systems",
        "Maintenance and support services"
      ],
      image: utiliesBg,
      imagePosition: "right" as const,
      icon: Sun,
      color: "yellow"
    },
    {
      id: "marine-services",
      title: "Marine Services",
      description: "Comprehensive marine technology solutions including vessel tracking, fuel management, and marine infrastructure support. We provide advanced navigation and communication systems for maritime operations.",
      features: [
        "Vessel Tracking Systems",
        "Electronic Fuel Management Systems",
        "Installation and Support services",
        "Marine infrastructure solutions",
        "Navigation and communication systems",
        "Marine safety and security systems",
        "Port and harbor management solutions"
      ],
      image: containerBg,
      imagePosition: "left" as const,
      icon: Ship,
      color: "cyan"
    },
    {
      id: "security-surveillance",
      title: "Security & Surveillance Systems",
      description: "Advanced security solutions including biometric access control, perimeter security, and comprehensive surveillance systems. Our AI-powered technology provides false alarm-free operation with 100% accuracy.",
      features: [
        "Access Control and Perimeter Security Systems",
        "Biometric Solutions - Iris/retina scanning capabilities",
        "Surveillance Systems - Including drone and CCTV monitoring",
        "Infrastructure Protection - Applied to wells and critical infrastructure",
        "Sensor Technology - Buried sensors capable of detecting footsteps and vehicles",
        "100 square meters coverage below ground level with each sensor",
        "Advanced threat detection and response systems"
      ],
      image: ctaSection,
      imagePosition: "right" as const,
      icon: Shield,
      color: "red"
    },
    {
      id: "procurement",
      title: "Procurement Services",
      description: "Comprehensive procurement solutions for hardware, software, and technology equipment with partnership-based pricing. We leverage our network of partners to provide the best prices and quality.",
      features: [
        "Hardware Supply - Laptops, desktops, servers, Network design equipment",
        "Software Supply - Direct software procurement",
        "Partnership Approach - Leveraging partnerships for best prices",
        "Client-focused procurement solutions",
        "Technology equipment sourcing",
        "Supply chain optimization",
        "Vendor management and relationships"
      ],
      image: marketStrategy,
      imagePosition: "left" as const,
      icon: ShoppingCart,
      color: "indigo"
    },
    {
      id: "agricultural-solutions",
      title: "Agricultural Solutions",
      description: "Innovative agricultural technology solutions including biochar applications, farming management systems, and sustainable agriculture practices. We help farmers increase productivity while reducing environmental impact.",
      features: [
        "Biochar for Palm Oil Production - Increases oil production and improves synthesis",
        "Farming Solutions - Making agriculture profitable and sustainable",
        "Agricultural Data Management - MyAgBuddy (MAB) with RPMA technology",
        "Field Management Services including metering and geographic monitoring",
        "Pump and temperature control systems",
        "Soil moisture management",
        "Carbon footprint reduction by 20-50%",
        "Enhanced productivity and bottom-line improvement"
      ],
      image: oil,
      imagePosition: "right" as const,
      icon: Sprout,
      color: "green"
    },
    {
      id: "pipeline-monitoring",
      title: "Pipeline & Infrastructure Monitoring",
      description: "Advanced pipeline monitoring and leak detection systems using AI-powered technology for false alarm-free operation. Our E-RTM technology provides real-time monitoring with intelligent pattern recognition.",
      features: [
        "Gas Distribution Network Monitoring",
        "Leak Detection Systems - E-RTM technology with AI-powered leak pattern recognition",
        "Pipeline Monitoring - False alarm-free operation",
        "Wellhead Monitoring",
        "Internet of Things (IoT) Solutions",
        "Remote Data Collection",
        "Instrumentation & Control Metering (Pressure, Temperature, Flow)",
        "AI-powered leak pattern recognition technology"
      ],
      image: pipeBg,
      imagePosition: "left" as const,
      icon: Zap,
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      emerald: "from-emerald-500 to-emerald-600",
      orange: "from-orange-500 to-orange-600",
      violet: "from-violet-500 to-violet-600",
      yellow: "from-yellow-500 to-yellow-600",
      cyan: "from-cyan-500 to-cyan-600",
      red: "from-red-500 to-red-600",
      indigo: "from-indigo-500 to-indigo-600",
      green: "from-green-500 to-green-600",
      teal: "from-teal-500 to-teal-600"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600";
  };

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
      <main className="overflow-hidden min-h-screen">
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
                <p className="text-base md:text-xl lg:text-2xl text-white/80 leading-relaxed mb-10 max-w-5xl mx-auto">
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
              {services.slice(0, 6).map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = getColorClasses(service.color);
                
                return (
                  <ScaleIn key={index} delay={index * 0.2}>
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
                      <div className={`grid lg:grid-cols-2 items-center ${
                        service.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                      }`}>
                        {/* Text content */}
                        <div className={`py-16 px-8 ${service.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                          <SlideInFromLeft delay={0.1}>
                            <div className="flex items-center mb-6">
                              <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses} text-white mr-4`}>
                                <IconComponent className="h-8 w-8" />
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                                {service.title}
                              </h3>
                            </div>
                          </SlideInFromLeft>
                          
                          <SlideInFromLeft delay={0.2}>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                              {service.description}
                            </p>
                          </SlideInFromLeft>
                          
                          {/* Features list */}
                          <SlideInFromLeft delay={0.3}>
                            <div className="mb-8">
                              <h4 className="text-lg font-semibold text-blue-600 mb-4">Key Services:</h4>
                              <ul className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses} mt-2 mr-3 flex-shrink-0`}></div>
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </SlideInFromLeft>
                          
                          <SlideInFromLeft delay={0.4}>
                            <Link href={`/services/${service.id}`}>
                              <Button className={`bg-gradient-to-r ${colorClasses} hover:shadow-lg transition-all duration-300 text-white`}>
                                Learn More About {service.title.split(' ')[0]} Services
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
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
                );
              })}
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
                <ScaleIn key={index} delay={index * 0.1} className="h-full">
                  <div className="bg-white h-full rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
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
