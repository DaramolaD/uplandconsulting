import { Metadata } from "next";
import SectionTag from "@/components/sections/SectionTag";
import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail, Building2, Users, Target, Shield, Zap, Globe, CheckCircle } from "lucide-react";
import { FadeInUp, StaggerContainer, ScaleIn, SlideInFromLeft, SlideInFromRight, SectionWrapper } from "@/components/animations";
import { createWebPageStructuredData } from "@/components/seo/StructuredData";

// Import images
import marketStrategy from "@/public/marketStrategy.png";

export const metadata: Metadata = {
  title: "Nigeria Operations - Strategic Consulting Excellence in West Africa",
  description: "Discover Upland's Nigeria operations led by experienced local leadership. Specializing in oil & gas, telecommunications, and infrastructure development across West Africa with deep industry expertise and technical excellence.",
  keywords: [
    "Upland Nigeria",
    "Nigeria consulting",
    "oil gas consulting Nigeria",
    "Nigeria technology consulting",
    "West Africa consulting",
    "Lagos consulting services",
    "Nigeria infrastructure",
    "telecommunications Nigeria"
  ],
  openGraph: {
    title: "Nigeria Operations - Strategic Consulting Excellence | Upland",
    description: "Discover Upland's Nigeria operations led by experienced local leadership. Specializing in oil & gas, telecommunications, and infrastructure development across West Africa.",
    images: [
      {
        url: '/nigeria-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Upland Nigeria - Strategic Consulting Excellence in West Africa',
      },
    ],
  },
  alternates: {
    canonical: '/nigeria',
  },
};

export default function NigeriaPage() {
  // Structured data for the Nigeria page
  const nigeriaPageStructuredData = createWebPageStructuredData(
    "Nigeria Operations - Strategic Consulting Excellence",
    "https://uplandconsulting.com/nigeria",
    "Discover Upland's Nigeria operations led by experienced local leadership. Specializing in oil & gas, telecommunications, and infrastructure development across West Africa."
  );

  const nigeriaLeadership = [
    {
      name: "Dr. Afolabi Mabogunje",
      role: "Managing Director, Chief Operating Officer",
      bio: "Dr. Afolabi Mabogunje is the Managing Director and Chief Operating Officer of Upland, Nigeria. He is a pro-active business and technology strategist with over 20 years of experience in telecommunications, defense research, and public sector organizations. He has delivered solutions across geographically distributed multi-platform systems, led customer engagements, and managed multi-disciplinary business units, 3rd party suppliers, and business strategies.",
      image: "/team/afolabi.jpg"
    },
    {
      name: "Ms. Ronke Aiyelabola",
      role: "Vice President, Consulting Services",
      bio: "Ms. Ronke Aiyelabola is the Finance Director of Upland, Nigeria. She has garnered vast experience spanning a decade in financial management functions, including accounting, auditing, taxation, and treasury management. She is an Associate Member of the Institute of Chartered Accountants of Nigeria.",
      image: "/team/thumbnail-female.jpg"
    },
    {
      name: "Joe Brown",
      role: "General Manager, Projects and New Business",
      bio: "Joe Brown is the General Manager, Projects and New Business of Upland Nigeria. He is a dynamic and resourceful manager with over 20 years of experience in the oil & gas and manufacturing sectors. He holds a Bachelor of Engineering degree from the University of Port Harcourt and a Master of Engineering degree from the University of Benin, Nigeria. He has extensive experience in telecommunication facility planning, deployment, and management, is a member of the Institute of Electrical and Electronic Engineers (MIEEE), USA, and a registered Engineer with the Council for the Regulation of Engineering in Nigeria (COREN).",
      image: "/team/joe.jpg"
    },
    {
      name: "Waheed Olanipekun",
      role: "General Manager, Projects and Network Support",
      bio: "Waheed Olanipekun is the General Manager, Projects and Network Support. He is a Network Engineer with over 13 years of experience in Network Design and Administration, Terrestrial and Satellite Communication Systems, and Project Management. He holds a Bachelor of Engineering Degree from the University of Ilorin and a Master of Business Administration (MBA) from the University of Lagos. Waheed is a certified Cisco, Juniper, and Microsoft Network Engineer with diverse experience in the Telecoms and Oil & Gas industries.",
      image: "/team/waheed.jpg"
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Oil & Gas Infrastructure",
      description: "Comprehensive engineering and construction services for onshore and offshore oil & gas projects, including fabrication, installation, and maintenance.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Telecommunications Solutions",
      description: "Rural GSM extension services, telecoms infrastructure, fiber optic networking, and satellite communications for remote areas.",
      color: "blue"
    },
    {
      icon: Building2,
      title: "Engineering & Construction",
      description: "State-of-the-art fabrication yard with quality-controlled manufacturing processes for complex infrastructure projects.",
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Security & Surveillance",
      description: "Advanced security systems including biometric access control, perimeter security, and comprehensive surveillance for critical infrastructure.",
      color: "red"
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Expert project management services ensuring timely delivery of complex multi-disciplinary projects across various industries.",
      color: "green"
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of Nigerian market dynamics, regulatory requirements, and cultural nuances for successful project execution.",
      color: "teal"
    },
  ];

  const stats = [
    { number: "20+", label: "Years Experience in Nigeria" },
    { number: "100+", label: "Projects Completed" },
    { number: "30+", label: "Local Partners" },
    { number: "15+", label: "Industries Served" },
  ];

  const officeInfo = {
    city: "Lagos",
    country: "Nigeria",
    address: "Lagos, Nigeria",
    phone: "+234 (0) 1 234 5678",
    email: "clientservices@uplandconsulting.com",
    region: "West Africa"
  };

  const achievements = [
    "Pioneered solar-powered GSM services for remote communities",
    "Delivered critical infrastructure projects for major oil & gas operators",
    "Established partnerships with leading technology providers",
    "Certified by COREN and professional engineering bodies",
    "Compliant with all Nigerian regulatory requirements",
    "ISO certified quality management processes"
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      orange: "from-orange-500 to-orange-600",
      indigo: "from-indigo-500 to-indigo-600",
      red: "from-red-500 to-red-600",
      green: "from-green-500 to-green-600",
      teal: "from-teal-500 to-teal-600",
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600";
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nigeriaPageStructuredData)
        }}
      />
      <main className="overflow-hidden min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#132A4D' }}>
          <div className="container mx-auto py-40 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <FadeInUp delay={0.2}>
                <SectionTag variant="default">
                  Upland Nigeria Operations
                </SectionTag>
              </FadeInUp>
              
              <FadeInUp delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif leading-tight">
                  Strategic Consulting Excellence in West Africa
                </h1>
              </FadeInUp>
              
              <FadeInUp delay={0.6}>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
                  Led by experienced local leadership, we bring deep industry expertise and technical excellence to oil & gas, telecommunications, and infrastructure projects across Nigeria and West Africa.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg"
                    asChild
                  >
                    <a href="#our-nigeria-office">
                      Contact Our Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white hover:text-[#132A4D] border-white hover:bg-white px-8 py-4 text-lg font-semibold rounded-lg"
                    asChild
                  >
                    <a href="#core-capabilities">
                      View Our Services
                    </a>
                  </Button>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* About Nigeria Operations Section */}
        <SectionWrapper className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 items-center gap-12">
              <SlideInFromLeft delay={0.2}>
                <div className="grid gap-4">
                  <SectionHeader variant="dark">
                    Our Nigeria Operations
                  </SectionHeader>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Upland Nigeria serves as our strategic hub for West African operations, combining international best practices with deep local market knowledge. Our team of highly experienced professionals understands the unique challenges and opportunities in Nigeria&apos;s dynamic business environment.
                    </p>
                    <p>
                      With over two decades of combined experience in telecommunications, oil & gas, and infrastructure development, our Nigeria office has successfully delivered critical projects for major operators across the region. We specialize in bridging the gap between global standards and local requirements.
                    </p>
                    <p>
                      From our base in Lagos, we serve clients throughout Nigeria and West Africa, providing end-to-end solutions from strategic planning to technical implementation. Our deep understanding of regulatory frameworks, cultural nuances, and market dynamics enables us to deliver exceptional results that exceed client expectations.
                    </p>
                  </div>
                </div>
              </SlideInFromLeft>
              <SlideInFromRight delay={0.4}>
                <div>
                  <ImageSection
                    src={marketStrategy}
                    alt="Upland Nigeria team operations"
                    className="aspect-[4/3] w-full h-full rounded-lg"
                  />
                </div>
              </SlideInFromRight>
            </div>
          </div>
        </SectionWrapper>

        {/* Stats Section */}
        <SectionWrapper className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <SectionHeader variant="dark">
                  Our Impact in Nigeria
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Numbers that reflect our commitment to delivering exceptional value across Nigeria and West Africa.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScaleIn key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#132A4D] mb-2 font-serif">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600">
                    {stat.label}
                  </div>
                </ScaleIn>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Capabilities Section */}
        <SectionWrapper id="core-capabilities" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <SectionHeader variant="dark">
                  Core Capabilities
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Specialized expertise tailored to Nigeria&apos;s unique market requirements and infrastructure needs.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                const colorClasses = getColorClasses(capability.color);
                
                return (
                  <FadeInUp key={index} delay={index * 0.1} className="h-full">
                    <div className="bg-white h-full rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#132A4D]/20 group">
                      <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                        {capability.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </FadeInUp>
                );
              })}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Achievements Section */}
        <SectionWrapper className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <SectionHeader variant="dark">
                  Key Achievements
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Milestones and accomplishments that demonstrate our commitment to excellence in Nigeria.
                </p>
              </div>
            </FadeInUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <FadeInUp key={index} delay={index * 0.1}>
                  <div className="bg-white h-full rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#132A4D] mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Office Information Section */}
        <SectionWrapper id="our-nigeria-office" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <SectionHeader variant="dark">
                  Our Nigeria Office
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Connect with our team in Lagos for all your consulting needs across Nigeria and West Africa.
                </p>
              </div>
            </FadeInUp>

            <div className="max-w-4xl mx-auto">
              <ScaleIn delay={0.2}>
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-[#132A4D] mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                          <p className="text-gray-600">{officeInfo.address}</p>
                          <p className="text-gray-600">{officeInfo.country}</p>
                          <p className="text-gray-600">{officeInfo.region}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-[#132A4D] mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                          <p className="text-gray-600">{officeInfo.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-[#132A4D] mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                          <p className="text-gray-600">{officeInfo.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Building2 className="h-6 w-6 text-[#132A4D] mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Area</h3>
                          <p className="text-gray-600">Nigeria and West Africa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
        </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="py-20 bg-[#132A4D]">
          <div className="container mx-auto px-4 text-center">
            <FadeInUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Ready to Work With Upland Nigeria?
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our local expertise and international standards can help your organization achieve its strategic goals in Nigeria and across West Africa.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg"
                  asChild
                >
                  <a href="#our-nigeria-office">
                    Contact Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg border-white hover:bg-white"
                  asChild
                >
                  <a href="#core-capabilities">
                    View Our Services
                  </a>
                </Button>
              </div>
            </FadeInUp>
          </div>
        </SectionWrapper>

      </main>
    </>
  );
}
