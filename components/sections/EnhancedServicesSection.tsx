import SectionHeader from "@/components/sections/SectionHeader";
import { FadeInUp, SectionWrapper, SlideInFromLeft, SlideInFromRight } from "@/components/animations";
import { ChevronRight, Wifi, Database, Wrench, Cpu, Sun, Ship, Shield, ShoppingCart, Sprout, Zap } from "lucide-react";
import ImageSection from "@/components/ui/ImageSection";
import constructionBg from "@/public/constructionBg.jpg";
import utiliesBg from "@/public/utiliesBg.jpg";
import pipeBg from "@/public/pipeBg.jpg";
import containerBg from "@/public/containerBg.jpg";
import oil from "@/public/oil.jpg";
import refinerBg from "@/public/refinerBg.png";
import uplandBg from "@/public/uplandBg.webp";
import heroBg from "@/public/heroBg.png";
import ctaSection from "@/public/ctaSection.png";


export default function EnhancedServicesSection() {
  const serviceCategories = [
    {
      id: "wireless-technology",
      title: "Wireless Technology Solutions",
      description: "Comprehensive wireless communication solutions including rural GSM extension, telecom infrastructure, and satellite communications for remote areas.",
      icon: Wifi,
      services: [
        "Rural GSM Services Extension (RGES) - Solar-powered satellite GSM for remote areas",
        "Telecoms Towers/Mast Integrity Checks",
        "Fiber Optic Networking and Structured Office Cables",
        "Microwave Radio Communications (Redline, Aviat)",
        "Satellite Communication (VSAT, StarLink for Business)",
        "Direct links and call via satellite (extended)",
        "Partnership with satellite operators for cost-effective solutions"
      ],
      imageSrc: utiliesBg,
      imageAlt: "Wireless technology and satellite communication infrastructure",
      imagePosition: "right" as const,
      color: "blue"
    },
    {
      id: "data-management",
      title: "Data Management & Storage",
      description: "Enterprise-grade data management solutions with partnerships with leading providers like NetApp and Quantum for comprehensive data infrastructure.",
      icon: Database,
      services: [
        "NetApp Partnership - World's leading primary data management solutions",
        "Quantum Solutions - Independent backup/restore and automation",
        "Data Analytics (Dashboards & Custom Reporting)",
        "Monitoring/Metering Systems",
        "Backup and restore solutions",
        "Automation services",
        "Custom data architecture design"
      ],
      imageSrc: constructionBg,
      imageAlt: "Data center and storage infrastructure",
      imagePosition: "left" as const,
      color: "emerald"
    },
    {
      id: "engineering-construction",
      title: "Engineering & Construction Services",
      description: "Full-service engineering and construction capabilities with state-of-the-art fabrication facilities for onshore and offshore projects.",
      icon: Wrench,
      services: [
        "Fabrication, Construction & Welding",
        "Corrosion Control (Blasting & Painting)",
        "Installation & Maintenance (onshore and offshore)",
        "Upland Fabrication Yard - Well equipped with state-of-the-art machineries",
        "Quality controlled manufacturing processes",
        "High standards of quality and consistency",
        "Custom engineering solutions"
      ],
      imageSrc: constructionBg,
      imageAlt: "Engineering and construction work site",
      imagePosition: "right" as const,
      color: "orange"
    },
    {
      id: "it-integration",
      title: "IT System Integration & Project Management",
      description: "Complex information system integration with custom software development and comprehensive project management services.",
      icon: Cpu,
      services: [
        "System Integration - Complex information systems involving critical communications",
        "Custom Software Development - Architecture or applications that integrate with new or existing systems",
        "Project Management - IT System Integration & Project Management services",
        "Custom software solutions",
        "System architecture design",
        "Critical communications integration"
      ],
      imageSrc: heroBg,
      imageAlt: "IT system integration and project management",
      imagePosition: "left" as const,
      color: "violet"
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy Solutions",
      description: "Complete renewable energy solutions including solar and wind power systems with design, installation, and maintenance services.",
      icon: Sun,
      services: [
        "Solar System Design and Installation",
        "Wind Energy Solutions",
        "Inverters, UPS and Wind Technology",
        "Solar-powered solutions for various applications",
        "Energy storage solutions",
        "Grid-tie and off-grid systems",
        "Maintenance and support services"
      ],
      imageSrc: refinerBg,
      imageAlt: "Solar panels and wind turbines renewable energy",
      imagePosition: "right" as const,
      color: "yellow"
    },
    {
      id: "marine-services",
      title: "Marine Services",
      description: "Comprehensive marine technology solutions including vessel tracking, fuel management, and marine infrastructure support.",
      icon: Ship,
      services: [
        "Vessel Tracking Systems",
        "Electronic Fuel Management Systems",
        "Installation and Support services",
        "Marine infrastructure solutions",
        "Navigation and communication systems",
        "Marine safety and security systems",
        "Port and harbor management solutions"
      ],
      imageSrc: containerBg,
      imageAlt: "Marine vessel and port infrastructure",
      imagePosition: "left" as const,
      color: "cyan"
    },
    {
      id: "security-surveillance",
      title: "Security & Surveillance Systems",
      description: "Advanced security solutions including biometric access control, perimeter security, and comprehensive surveillance systems.",
      icon: Shield,
      services: [
        "Access Control and Perimeter Security Systems",
        "Biometric Solutions - Iris/retina scanning capabilities",
        "Surveillance Systems - Including drone and CCTV monitoring",
        "Infrastructure Protection - Applied to wells and critical infrastructure",
        "Sensor Technology - Buried sensors capable of detecting footsteps and vehicles",
        "100 square meters coverage below ground level with each sensor",
        "Advanced threat detection and response systems"
      ],
      imageSrc: uplandBg,
      imageAlt: "Security surveillance and access control systems",
      imagePosition: "right" as const,
      color: "red"
    },
    {
      id: "procurement",
      title: "Procurement Services",
      description: "Comprehensive procurement solutions for hardware, software, and technology equipment with partnership-based pricing.",
      icon: ShoppingCart,
      services: [
        "Hardware Supply - Laptops, desktops, servers, Network design equipment",
        "Software Supply - Direct software procurement",
        "Partnership Approach - Leveraging partnerships for best prices",
        "Client-focused procurement solutions",
        "Technology equipment sourcing",
        "Supply chain optimization",
        "Vendor management and relationships"
      ],
      imageSrc: ctaSection,
      imageAlt: "Procurement and supply chain management",
      imagePosition: "left" as const,
      color: "indigo"
    },
    {
      id: "agricultural-solutions",
      title: "Agricultural Solutions",
      description: "Innovative agricultural technology solutions including biochar applications, farming management systems, and sustainable agriculture practices.",
      icon: Sprout,
      services: [
        "Biochar for Palm Oil Production - Increases oil production and improves synthesis",
        "Farming Solutions - Making agriculture profitable and sustainable",
        "Agricultural Data Management - MyAgBuddy (MAB) with RPMA technology",
        "Field Management Services including metering and geographic monitoring",
        "Pump and temperature control systems",
        "Soil moisture management",
        "Carbon footprint reduction by 20-50%",
        "Enhanced productivity and bottom-line improvement"
      ],
      imageSrc: oil,
      imageAlt: "Agricultural technology and farming solutions",
      imagePosition: "right" as const,
      color: "green"
    },
    {
      id: "pipeline-monitoring",
      title: "Pipeline & Infrastructure Monitoring",
      description: "Advanced pipeline monitoring and leak detection systems using AI-powered technology for false alarm-free operation.",
      icon: Zap,
      services: [
        "Gas Distribution Network Monitoring",
        "Leak Detection Systems - E-RTM technology with AI-powered leak pattern recognition",
        "Pipeline Monitoring - False alarm-free operation",
        "Wellhead Monitoring",
        "Internet of Things (IoT) Solutions",
        "Remote Data Collection",
        "Instrumentation & Control Metering (Pressure, Temperature, Flow)",
        "AI-powered leak pattern recognition technology"
      ],
      imageSrc: pipeBg,
      imageAlt: "Pipeline monitoring and leak detection systems",
      imagePosition: "left" as const,
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600", 
      orange: "from-orange-500 to-orange-600",
      purple: "from-purple-500 to-purple-600",
      yellow: "from-yellow-500 to-yellow-600",
      red: "from-red-500 to-red-600",
      indigo: "from-indigo-500 to-indigo-600",
      teal: "from-teal-500 to-teal-600",
      pink: "from-pink-500 to-pink-600",
      cyan: "from-cyan-500 to-cyan-600",
      emerald: "from-emerald-500 to-emerald-600",
      violet: "from-violet-500 to-violet-600"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600";
  };

  return (
    <SectionWrapper className="overflow-hidden pt-20 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <FadeInUp delay={0.05}>
          <div className="text-center mb-16">
            <div className="inline-block bg-[#132A4D] text-white px-6 py-3 rounded-lg font-medium text-lg mb-8">
              Comprehensive Solutions
            </div>
            <SectionHeader variant="dark">
              Our Complete Service Portfolio
            </SectionHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              From wireless technology to renewable energy, we provide end-to-end solutions 
              across multiple industries with cutting-edge technology and proven expertise.
            </p>
          </div>
        </FadeInUp>

        {/* Comprehensive Solutions with Alternating Layout */}
        <div className="space-y-20">
          {serviceCategories.slice(0, 6).map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            const isEven = index % 2 === 0;
            // Animation components based on visual position, not DOM order
            const AnimationComponent = isEven ? SlideInFromRight : SlideInFromLeft;
            const ImageAnimationComponent = isEven ? SlideInFromLeft : SlideInFromRight;
            
            return (
              <div key={category.id} className="group">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className={`${isEven ? 'lg:pr-8' : 'lg:pl-8'} ${isEven ? 'md:order-2' : 'order-1'}`}>
                      <AnimationComponent delay={0.05}>
                        <div className="flex items-center mb-6">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${colorClasses} text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif group-hover:text-[#132A4D] transition-colors duration-300">
                            {category.title}
                          </h3>
                        </div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          {category.description}
                        </p>

                        {/* Services List */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-[#132A4D] mb-4">Key Services:</h4>
                          <ul className="space-y-3">
                            {category.services.slice(0, 4).map((service, serviceIndex) => (
                              <li key={serviceIndex} className="flex items-start">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses} mt-2 mr-4 flex-shrink-0`}></div>
                                <span className="text-gray-700 leading-relaxed">{service}</span>
                              </li>
                            ))}
                            {category.services.length > 4 && (
                              <li className="text-gray-500 italic ml-6">
                                +{category.services.length - 4} more services
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <div className={`inline-flex items-center text-base font-medium bg-gradient-to-r ${colorClasses} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                          Explore Services
                          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </AnimationComponent>
                    </div>

                    {/* Image Side */}
                    <div className={`h-full ${isEven ? 'lg:pl-8' : 'lg:pr-8'} ${isEven ? 'md:order-1' : 'order-2'}`}>
                      <ImageAnimationComponent delay={0.4} className="h-full">
                        <div className="relative h-full group-hover:scale-103 transition-transform duration-500">
                          <div className="absolute scale-102 inset-0 bg-gradient-to-br from-[#132A4D]/10 to-[#1e3a5f]/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                          <div className="relative h-full bg-white rounded-2xl shadow-xl">
                            <ImageSection
                              src={category.imageSrc}
                              alt={category.imageAlt}
                              className="w-full h-full min-h-80 object-cover rounded-xl"
                            />
                            {/* Overlay with service count */}
                            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#132A4D] to-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                              {category.services.length} Services
                            </div>
                          </div>
                        </div>
                      </ImageAnimationComponent>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={0.8}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#132A4D] to-[#1e3a5f] rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Let&apos;s discuss how our comprehensive solutions can drive your success.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-[#132A4D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
