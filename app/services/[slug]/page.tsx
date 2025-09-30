import { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FadeInUp, SectionWrapper } from "@/components/animations";
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

// Service data (same as services page)
const services = [
  {
    id: "wireless-technology",
    title: "Wireless Technology Solutions",
    description:
      "Comprehensive wireless communication solutions including rural GSM extension, telecom infrastructure, and satellite communications for remote areas. We provide solar-powered technology solutions that work where traditional infrastructure fails.",
    features: [
      "Rural GSM Services Extension (RGES) - Solar-powered satellite GSM for remote areas",
      "Telecoms Towers/Mast Integrity Checks",
      "Fiber Optic Networking and Structured Office Cables",
      "Microwave Radio Communications (Redline, Aviat)",
      "Satellite Communication (VSAT, StarLink for Business)",
      "Direct links and call via satellite (extended)",
      "Partnership with satellite operators for cost-effective solutions",
    ],
    image: complianceTechnicalRigor,
    imagePosition: "right" as const,
    color: "blue",
    detailedDescription:
      "Our Wireless Technology Solutions provide comprehensive communication infrastructure for remote and challenging environments. We specialize in extending GSM services to rural areas using solar-powered satellite technology, ensuring connectivity where traditional infrastructure fails. Our expertise includes telecom tower integrity checks, fiber optic networking, and microwave radio communications. We partner with leading satellite operators to deliver cost-effective solutions that keep your operations connected, regardless of location.",
    benefits: [
      "Extend connectivity to remote areas",
      "Solar-powered solutions for sustainability",
      "Cost-effective satellite communications",
      "Reliable infrastructure in challenging environments",
      "Partnership with leading technology providers",
    ],
    useCases: [
      "Oil & Gas remote operations",
      "Mining sites in isolated locations",
      "Rural telecommunications expansion",
      "Emergency communication systems",
      "Marine and offshore operations",
    ],
  },
  {
    id: "data-management",
    title: "Data Management & Storage",
    description:
      "Enterprise-grade data management solutions with partnerships with leading providers like NetApp and Quantum for comprehensive data infrastructure. We ensure your data is secure, accessible, and optimized for performance.",
    features: [
      "NetApp Partnership - World's leading primary data management solutions",
      "Quantum Solutions - Independent backup/restore and automation",
      "Data Analytics (Dashboards & Custom Reporting)",
      "Monitoring/Metering Systems",
      "Backup and restore solutions",
      "Automation services",
      "Custom data architecture design",
    ],
    image: costEfficiency,
    imagePosition: "left" as const,
    color: "emerald",
    detailedDescription:
      "Our Data Management & Storage solutions provide enterprise-grade infrastructure with partnerships from industry leaders like NetApp and Quantum. We design and implement comprehensive data architectures that ensure security, accessibility, and optimal performance. Our services include data analytics with custom dashboards, monitoring systems, and automated backup solutions. We help organizations manage their data lifecycle efficiently while maintaining compliance and security standards.",
    benefits: [
      "Enterprise-grade data security",
      "Partnership with industry leaders",
      "Custom analytics and reporting",
      "Automated backup and recovery",
      "Scalable data architecture",
    ],
    useCases: [
      "Enterprise data centers",
      "Cloud migration projects",
      "Compliance and regulatory requirements",
      "Business intelligence and analytics",
      "Disaster recovery planning",
    ],
  },
  {
    id: "engineering-construction",
    title: "Engineering & Construction Services",
    description:
      "Full-service engineering and construction capabilities with state-of-the-art fabrication facilities for onshore and offshore projects. Our Upland Fabrication Yard is equipped with modern machinery for quality-controlled manufacturing.",
    features: [
      "Fabrication, Construction & Welding",
      "Corrosion Control (Blasting & Painting)",
      "Installation & Maintenance (onshore and offshore)",
      "Upland Fabrication Yard - Well equipped with state-of-the-art machineries",
      "Quality controlled manufacturing processes",
      "High standards of quality and consistency",
      "Custom engineering solutions",
    ],
    image: constructionBg,
    imagePosition: "right" as const,
    color: "orange",
    detailedDescription:
      "Our Engineering & Construction Services provide comprehensive solutions for complex industrial projects. With our state-of-the-art Upland Fabrication Yard, we deliver high-quality fabrication, construction, and welding services. Our expertise includes corrosion control, installation, and maintenance for both onshore and offshore projects. We maintain the highest standards of quality and consistency through controlled manufacturing processes and custom engineering solutions tailored to your specific requirements.",
    benefits: [
      "State-of-the-art fabrication facilities",
      "Quality-controlled manufacturing",
      "Onshore and offshore capabilities",
      "Custom engineering solutions",
      "Comprehensive project management",
    ],
    useCases: [
      "Oil & Gas infrastructure",
      "Industrial facility construction",
      "Offshore platform projects",
      "Pipeline construction and maintenance",
      "Heavy industrial equipment fabrication",
    ],
  },
  {
    id: "it-integration",
    title: "IT System Integration & Project Management",
    description:
      "Complex information system integration with custom software development and comprehensive project management services. We specialize in critical communications and system architecture design.",
    features: [
      "System Integration - Complex information systems involving critical communications",
      "Custom Software Development - Architecture or applications that integrate with new or existing systems",
      "Project Management - IT System Integration & Project Management services",
      "Custom software solutions",
      "System architecture design",
      "Critical communications integration",
    ],
    image: marketStrategy,
    imagePosition: "left" as const,
    color: "violet",
    detailedDescription:
      "Our IT System Integration & Project Management services provide comprehensive solutions for complex information systems. We specialize in integrating critical communications systems and developing custom software applications. Our project management approach ensures successful delivery of IT initiatives on time and within budget. We design robust system architectures that integrate seamlessly with existing infrastructure while providing scalability for future growth.",
    benefits: [
      "Complex system integration expertise",
      "Custom software development",
      "Comprehensive project management",
      "Critical communications focus",
      "Scalable architecture design",
    ],
    useCases: [
      "Enterprise system integration",
      "Custom software development",
      "Critical infrastructure projects",
      "Digital transformation initiatives",
      "Legacy system modernization",
    ],
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Solutions",
    description:
      "Complete renewable energy solutions including solar and wind power systems with design, installation, and maintenance services. We help organizations transition to sustainable energy with cutting-edge technology.",
    features: [
      "Solar System Design and Installation",
      "Wind Energy Solutions",
      "Inverters, UPS and Wind Technology",
      "Solar-powered solutions for various applications",
      "Energy storage solutions",
      "Grid-tie and off-grid systems",
      "Maintenance and support services",
    ],
    image: utiliesBg,
    imagePosition: "right" as const,
    color: "yellow",
    detailedDescription:
      "Our Renewable Energy Solutions provide comprehensive clean energy infrastructure for organizations looking to reduce their carbon footprint and energy costs. We design and install solar and wind power systems, including energy storage solutions and grid-tie systems. Our expertise covers both on-grid and off-grid applications, ensuring reliable power supply in any environment. We provide ongoing maintenance and support to maximize system performance and longevity.",
    benefits: [
      "Complete renewable energy solutions",
      "Solar and wind power expertise",
      "Energy storage integration",
      "Grid-tie and off-grid capabilities",
      "Ongoing maintenance and support",
    ],
    useCases: [
      "Industrial solar installations",
      "Remote area power systems",
      "Grid-tie renewable energy",
      "Energy storage projects",
      "Sustainable facility management",
    ],
  },
  {
    id: "marine-services",
    title: "Marine Services",
    description:
      "Comprehensive marine technology solutions including vessel tracking, fuel management, and marine infrastructure support. We provide advanced navigation and communication systems for maritime operations.",
    features: [
      "Vessel Tracking Systems",
      "Electronic Fuel Management Systems",
      "Installation and Support services",
      "Marine infrastructure solutions",
      "Navigation and communication systems",
      "Marine safety and security systems",
      "Port and harbor management solutions",
    ],
    image: containerBg,
    imagePosition: "left" as const,
    color: "cyan",
    detailedDescription:
      "Our Marine Services provide comprehensive technology solutions for maritime operations. We specialize in vessel tracking systems, electronic fuel management, and marine infrastructure development. Our solutions include advanced navigation and communication systems, marine safety and security systems, and port and harbor management solutions. We help maritime organizations optimize their operations, improve safety, and reduce costs through innovative technology solutions.",
    benefits: [
      "Advanced vessel tracking technology",
      "Electronic fuel management systems",
      "Marine safety and security solutions",
      "Port and harbor management",
      "Comprehensive support services",
    ],
    useCases: [
      "Commercial shipping operations",
      "Port and harbor management",
      "Marine safety and security",
      "Vessel fuel optimization",
      "Maritime communication systems",
    ],
  },
  {
    id: "security-surveillance",
    title: "Security & Surveillance Systems",
    description:
      "Advanced security solutions including biometric access control, perimeter security, and comprehensive surveillance systems. Our AI-powered technology provides false alarm-free operation with 100% accuracy.",
    features: [
      "Access Control and Perimeter Security Systems",
      "Biometric Solutions - Iris/retina scanning capabilities",
      "Surveillance Systems - Including drone and CCTV monitoring",
      "Infrastructure Protection - Applied to wells and critical infrastructure",
      "Sensor Technology - Buried sensors capable of detecting footsteps and vehicles",
      "100 square meters coverage below ground level with each sensor",
      "Advanced threat detection and response systems",
    ],
    image: ctaSection,
    imagePosition: "right" as const,
    color: "red",
    detailedDescription:
      "Our Security & Surveillance Systems provide advanced protection for critical infrastructure and facilities. We utilize AI-powered technology to deliver false alarm-free operation with 100% accuracy. Our solutions include biometric access control, perimeter security systems, and comprehensive surveillance including drone and CCTV monitoring. We specialize in protecting critical infrastructure like wells and pipelines with buried sensor technology that can detect threats from footsteps to vehicles across large areas.",
    benefits: [
      "AI-powered threat detection",
      "False alarm-free operation",
      "Biometric access control",
      "Comprehensive surveillance coverage",
      "Critical infrastructure protection",
    ],
    useCases: [
      "Critical infrastructure protection",
      "Perimeter security systems",
      "Biometric access control",
      "Surveillance and monitoring",
      "Threat detection and response",
    ],
  },
  {
    id: "procurement",
    title: "Procurement Services",
    description:
      "Comprehensive procurement solutions for hardware, software, and technology equipment with partnership-based pricing. We leverage our network of partners to provide the best prices and quality.",
    features: [
      "Hardware Supply - Laptops, desktops, servers, Network design equipment",
      "Software Supply - Direct software procurement",
      "Partnership Approach - Leveraging partnerships for best prices",
      "Client-focused procurement solutions",
      "Technology equipment sourcing",
      "Supply chain optimization",
      "Vendor management and relationships",
    ],
    image: marketStrategy,
    imagePosition: "left" as const,
    color: "indigo",
    detailedDescription:
      "Our Procurement Services provide comprehensive solutions for technology hardware and software acquisition. We leverage our extensive network of partners to deliver the best prices and quality for your technology needs. Our services include hardware supply for laptops, desktops, servers, and network equipment, as well as direct software procurement. We focus on supply chain optimization and vendor management to ensure you get the best value for your technology investments.",
    benefits: [
      "Partnership-based pricing",
      "Comprehensive technology sourcing",
      "Supply chain optimization",
      "Vendor management expertise",
      "Cost-effective procurement solutions",
    ],
    useCases: [
      "Technology hardware procurement",
      "Software licensing and acquisition",
      "Supply chain optimization",
      "Vendor relationship management",
      "Cost reduction initiatives",
    ],
  },
  {
    id: "agricultural-solutions",
    title: "Agricultural Solutions",
    description:
      "Innovative agricultural technology solutions including biochar applications, farming management systems, and sustainable agriculture practices. We help farmers increase productivity while reducing environmental impact.",
    features: [
      "Biochar for Palm Oil Production - Increases oil production and improves synthesis",
      "Farming Solutions - Making agriculture profitable and sustainable",
      "Agricultural Data Management - MyAgBuddy (MAB) with RPMA technology",
      "Field Management Services including metering and geographic monitoring",
      "Pump and temperature control systems",
      "Soil moisture management",
      "Carbon footprint reduction by 20-50%",
      "Enhanced productivity and bottom-line improvement",
    ],
    image: oil,
    imagePosition: "right" as const,
    color: "green",
    detailedDescription:
      "Our Agricultural Solutions provide innovative technology solutions for modern farming operations. We specialize in biochar applications for palm oil production, which increases oil production and improves synthesis while reducing carbon footprint by 20-50%. Our MyAgBuddy (MAB) system uses RPMA technology for comprehensive agricultural data management. We provide field management services including metering, geographic monitoring, pump and temperature control systems, and soil moisture management to help farmers increase productivity and profitability.",
    benefits: [
      "Increased agricultural productivity",
      "Carbon footprint reduction",
      "Advanced data management",
      "Sustainable farming practices",
      "Improved profitability",
    ],
    useCases: [
      "Palm oil production optimization",
      "Sustainable farming practices",
      "Agricultural data management",
      "Field monitoring and control",
      "Environmental impact reduction",
    ],
  },
  {
    id: "pipeline-monitoring",
    title: "Pipeline & Infrastructure Monitoring",
    description:
      "Advanced pipeline monitoring and leak detection systems using AI-powered technology for false alarm-free operation. Our E-RTM technology provides real-time monitoring with intelligent pattern recognition.",
    features: [
      "Gas Distribution Network Monitoring",
      "Leak Detection Systems - E-RTM technology with AI-powered leak pattern recognition",
      "Pipeline Monitoring - False alarm-free operation",
      "Wellhead Monitoring",
      "Internet of Things (IoT) Solutions",
      "Remote Data Collection",
      "Instrumentation & Control Metering (Pressure, Temperature, Flow)",
      "AI-powered leak pattern recognition technology",
    ],
    image: pipeBg,
    imagePosition: "left" as const,
    color: "teal",
    detailedDescription:
      "Our Pipeline & Infrastructure Monitoring solutions provide advanced leak detection and monitoring for critical infrastructure. We utilize E-RTM technology with AI-powered leak pattern recognition to deliver false alarm-free operation. Our systems monitor gas distribution networks, wellheads, and pipelines with real-time data collection and intelligent analysis. We provide comprehensive IoT solutions for remote monitoring, instrumentation, and control metering of pressure, temperature, and flow parameters.",
    benefits: [
      "AI-powered leak detection",
      "False alarm-free operation",
      "Real-time monitoring capabilities",
      "IoT-based remote monitoring",
      "Comprehensive infrastructure protection",
    ],
    useCases: [
      "Gas pipeline monitoring",
      "Oil pipeline leak detection",
      "Wellhead monitoring systems",
      "Infrastructure safety management",
      "Remote monitoring solutions",
    ],
  },
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
    teal: "from-teal-500 to-teal-600",
  };
  return (
    colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600"
  );
};

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Upland Consulting`,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      "upland consulting",
      "technology solutions",
      "engineering services",
      "consulting nigeria",
    ],
    openGraph: {
      title: `${service.title} | Upland Consulting`,
      description: service.description,
      images: [
        {
          url: service.image.src,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: `/services/${service.id}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const colorClasses = getColorClasses(service.color);

  return (
    <main className="overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundColor: "#132A4D" }}
      >
        <div className="container mx-auto pt-40 pb-20 px-4 relative z-10">
          <div className="max-w-5xl mx-auto items-start text-white">
            <FadeInUp delay={0.2}>
              <Link
                href="/services"
                className="inline-flex border px-2 py-1 rounded-md border-white items-center text-white/80 hover:bg-white hover:text-blue-500 mb-8 transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </FadeInUp>
            <div className="grid text-center items-center">
              <FadeInUp delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-serif leading-tight">
                  {service.title}
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.6}>
                <p className="text-base md:text-xl lg:text-2xl text-white/80 leading-relaxed mb-10 max-w-4xl mx-auto">
                  {service.description}
                </p>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <SectionWrapper className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16">
            {/* Content */}
            <div>
              <div className="grid lg:grid-cols-2 items-center gap-16">
                <div className="grid">
                  <FadeInUp delay={0.2}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                      Comprehensive {service.title}
                    </h2>
                  </FadeInUp>

                  <FadeInUp delay={0.3}>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {service.detailedDescription}
                    </p>
                  </FadeInUp>
                </div>
                {/* Image */}
                <FadeInUp delay={0.4}>
                  <div className="relative">
                    <ImageSection
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </FadeInUp>
              </div>
              <div className="grid lg:grid-cols-2 items-start mt-10 gap-x-16 gap-y-10">
                {/* Key Features */}
                <FadeInUp delay={0.4}>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Services:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses} mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Benefits */}
                <FadeInUp delay={0.5}>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>

                {/* Use Cases */}
                <FadeInUp delay={0.6}>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Use Cases:
                    </h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses} mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInUp delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Contact our experts to discuss how our {service.title} can
                benefit your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-[#132A4D] hover:bg-[#1a3a5c] text-white px-8 py-4 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
                <Link href="mailto:info@uplandconsulting.com">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </SectionWrapper>
    </main>
  );
}
