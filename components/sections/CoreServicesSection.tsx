import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { SectionWrapper } from "@/components/animations";
import { ChevronRight, Wifi, Database, Wrench, Cpu, Sun, Ship, Shield, ShoppingCart, Sprout, Zap, Link } from "lucide-react";

import marketStrategy from "@/public/marketStrategy.png";
import constructionBg from "@/public/constructionBg.jpg";
import pipeBg from "@/public/pipeBg.jpg";
import utiliesBg from "@/public/utiliesBg.jpg";
import containerBg from "@/public/containerBg.jpg";
import oil from "@/public/oil.jpg";
import ctaSection from "@/public/ctaSection.png";
import complianceTechnicalRigor from "@/public/complianceTechnicalRigor.png";
import costEfficiency from "@/public/costEfficiency.png";

export default function CoreServicesSection() {
  const services = [
    {
      title: "Wireless Technology Solutions",
      description: "Comprehensive wireless communication solutions including rural GSM extension, telecom infrastructure, and satellite communications for remote areas. We provide solar-powered technology solutions that work where traditional infrastructure fails.",
      services: [
        "Rural GSM Services Extension (RGES) - Solar-powered satellite GSM for remote areas",
        "Telecoms Towers/Mast Integrity Checks",
        "Fiber Optic Networking and Structured Office Cables",
        "Microwave Radio Communications (Redline, Aviat)",
        "Satellite Communication (VSAT, StarLink for Business)",
        "Direct links and call via satellite (extended)",
        "Partnership with satellite operators for cost-effective solutions"
      ],
      linkText: "Explore Wireless Solutions",
      imageSrc: complianceTechnicalRigor,
      imageAlt: "Wireless technology and satellite communication infrastructure",
      imagePosition: "right" as const,
      icon: Wifi,
      color: "blue"
    },
    {
      title: "Data Management & Storage",
      description: "Enterprise-grade data management solutions with partnerships with leading providers like NetApp and Quantum for comprehensive data infrastructure. We ensure your data is secure, accessible, and optimized for performance.",
      services: [
        "NetApp Partnership - World's leading primary data management solutions",
        "Quantum Solutions - Independent backup/restore and automation",
        "Data Analytics (Dashboards & Custom Reporting)",
        "Monitoring/Metering Systems",
        "Backup and restore solutions",
        "Automation services",
        "Custom data architecture design"
      ],
      linkText: "Discover Data Solutions",
      imageSrc: costEfficiency,
      imageAlt: "Data center and storage infrastructure",
      imagePosition: "left" as const,
      icon: Database,
      color: "emerald"
    },
    {
      title: "Engineering & Construction Services",
      description: "Full-service engineering and construction capabilities with state-of-the-art fabrication facilities for onshore and offshore projects. Our Upland Fabrication Yard is equipped with modern machinery for quality-controlled manufacturing.",
      services: [
        "Fabrication, Construction & Welding",
        "Corrosion Control (Blasting & Painting)",
        "Installation & Maintenance (onshore and offshore)",
        "Upland Fabrication Yard - Well equipped with state-of-the-art machineries",
        "Quality controlled manufacturing processes",
        "High standards of quality and consistency",
        "Custom engineering solutions"
      ],
      linkText: "View Engineering Services",
      imageSrc: constructionBg,
      imageAlt: "Engineering and construction work site",
      imagePosition: "right" as const,
      icon: Wrench,
      color: "orange"
    },
    {
      title: "IT System Integration & Project Management",
      description: "Complex information system integration with custom software development and comprehensive project management services. We specialize in critical communications and system architecture design.",
      services: [
        "System Integration - Complex information systems involving critical communications",
        "Custom Software Development - Architecture or applications that integrate with new or existing systems",
        "Project Management - IT System Integration & Project Management services",
        "Custom software solutions",
        "System architecture design",
        "Critical communications integration"
      ],
      linkText: "Learn About IT Services",
      imageSrc: marketStrategy,
      imageAlt: "IT system integration and project management",
      imagePosition: "left" as const,
      icon: Cpu,
      color: "violet"
    },
    {
      title: "Renewable Energy Solutions",
      description: "Complete renewable energy solutions including solar and wind power systems with design, installation, and maintenance services. We help organizations transition to sustainable energy with cutting-edge technology.",
      services: [
        "Solar System Design and Installation",
        "Wind Energy Solutions",
        "Inverters, UPS and Wind Technology",
        "Solar-powered solutions for various applications",
        "Energy storage solutions",
        "Grid-tie and off-grid systems",
        "Maintenance and support services"
      ],
      linkText: "Explore Energy Solutions",
      imageSrc: utiliesBg,
      imageAlt: "Solar panels and wind turbines renewable energy",
      imagePosition: "right" as const,
      icon: Sun,
      color: "yellow"
    },
    {
      title: "Marine Services",
      description: "Comprehensive marine technology solutions including vessel tracking, fuel management, and marine infrastructure support. We provide advanced navigation and communication systems for maritime operations.",
      services: [
        "Vessel Tracking Systems",
        "Electronic Fuel Management Systems",
        "Installation and Support services",
        "Marine infrastructure solutions",
        "Navigation and communication systems",
        "Marine safety and security systems",
        "Port and harbor management solutions"
      ],
      linkText: "Discover Marine Services",
      imageSrc: containerBg,
      imageAlt: "Marine vessel and port infrastructure",
      imagePosition: "left" as const,
      icon: Ship,
      color: "cyan"
    },
    {
      title: "Security & Surveillance Systems",
      description: "Advanced security solutions including biometric access control, perimeter security, and comprehensive surveillance systems. Our AI-powered technology provides false alarm-free operation with 100% accuracy.",
      services: [
        "Access Control and Perimeter Security Systems",
        "Biometric Solutions - Iris/retina scanning capabilities",
        "Surveillance Systems - Including drone and CCTV monitoring",
        "Infrastructure Protection - Applied to wells and critical infrastructure",
        "Sensor Technology - Buried sensors capable of detecting footsteps and vehicles",
        "100 square meters coverage below ground level with each sensor",
        "Advanced threat detection and response systems"
      ],
      linkText: "View Security Solutions",
      imageSrc: ctaSection,
      imageAlt: "Security surveillance and access control systems",
      imagePosition: "right" as const,
      icon: Shield,
      color: "red"
    },
    {
      title: "Procurement Services",
      description: "Comprehensive procurement solutions for hardware, software, and technology equipment with partnership-based pricing. We leverage our network of partners to provide the best prices and quality.",
      services: [
        "Hardware Supply - Laptops, desktops, servers, Network design equipment",
        "Software Supply - Direct software procurement",
        "Partnership Approach - Leveraging partnerships for best prices",
        "Client-focused procurement solutions",
        "Technology equipment sourcing",
        "Supply chain optimization",
        "Vendor management and relationships"
      ],
      linkText: "Explore Procurement",
      imageSrc: marketStrategy,
      imageAlt: "Procurement and supply chain management",
      imagePosition: "left" as const,
      icon: ShoppingCart,
      color: "indigo"
    },
    {
      title: "Agricultural Solutions",
      description: "Innovative agricultural technology solutions including biochar applications, farming management systems, and sustainable agriculture practices. We help farmers increase productivity while reducing environmental impact.",
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
      linkText: "Learn About Agriculture",
      imageSrc: oil,
      imageAlt: "Agricultural technology and farming solutions",
      imagePosition: "right" as const,
      icon: Sprout,
      color: "green"
    },
    {
      title: "Pipeline & Infrastructure Monitoring",
      description: "Advanced pipeline monitoring and leak detection systems using AI-powered technology for false alarm-free operation. Our E-RTM technology provides real-time monitoring with intelligent pattern recognition.",
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
      linkText: "View Monitoring Solutions",
      imageSrc: pipeBg,
      imageAlt: "Pipeline monitoring and leak detection systems",
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

  return (
    <SectionWrapper className="py-20 bg-white">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <div className="inline-block bg-[#EBEBEB] text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
              Our Core Services
          </div>
          <SectionHeader variant="dark">
            Complete Service Portfolio
          </SectionHeader>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Our comprehensive range of services designed to meet every aspect of your business needs.
          </p>
        </div>

        {/* Services Listing - Limited to 4 with View More */}
        {/* 
          TO SHOW ALL SERVICES: 
          Change: services.slice(0, 4).map
          To: services.map
          AND change animationDelay to: Math.min(index * 0.1, 0.5)
        */}
        <div className="space-y-16">
          {services.slice(0, 5).map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards',
                  animationDuration: '0.8s'
                }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                <div className={`grid lg:grid-cols-2 items-center ${
                  service.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                }`}>
                  {/* Text content */}
                  <div className={`py-16 px-8 ${service.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                      {/* Icon */}
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses} text-white mr-4`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                        {service.title}
                        </h4>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      </div>
                      
                      {/* Features list */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-black mb-4">Key Services:</h5>
                        <ul className="space-y-3">
                          {service.services.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses} mt-2 mr-3 flex-shrink-0`}></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                          {service.services.length > 4 && (
                            <li className="text-sm text-gray-500 italic">
                              +{service.services.length - 4} more services
                            </li>
                          )}
                      </ul>
                      </div>
                    
                      {/* Button */}
                      <div>
                      <a
                        href="#"
                          className={`inline-flex items-center bg-gradient-to-r ${colorClasses} hover:shadow-lg transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium`}
                      >
                        {service.linkText}
                          <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                      </div>
                  </div>

                  {/* Image */}
                    <div className={`h-full ${service.imagePosition === "left" ? "lg:col-start-1" : ""}`}>
                      <ImageSection
                        src={service.imageSrc}
                        alt={service.title}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Services CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Discover Our Complete Service Portfolio
            </h3>
            <p className="text-xl mb-6 opacity-90">
              We offer {services.length} comprehensive service categories designed to meet every aspect of your business needs.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              View All Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
