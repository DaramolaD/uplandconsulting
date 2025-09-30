import { Metadata } from "next";
import SectionTag from "@/components/sections/SectionTag";
import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Shield } from "lucide-react";
import { FadeInUp, StaggerContainer, ScaleIn, SlideInFromLeft, SlideInFromRight, SectionWrapper } from "@/components/animations";
import { createWebPageStructuredData } from "@/components/seo/StructuredData";
import OurPurposeApproachSection from "@/components/sections/OurPurposeApproachSection";

// Import images
import teamImage from "@/public/marketStrategy.png";

export const metadata: Metadata = {
  title: "About Us - Strategic Consulting Excellence",
  description: "Learn about Upland's mission, values, and leadership team. Discover how our 15+ years of experience in high-stakes industries helps organizations navigate complex challenges.",
  keywords: [
    "about upland",
    "consulting team",
    "leadership team",
    "company values",
    "strategic consulting experience",
    "oil gas consultants",
    "utilities consulting team",
    "public sector advisors"
  ],
  openGraph: {
    title: "About Us - Strategic Consulting Excellence | Upland",
    description: "Learn about Upland's mission, values, and leadership team. Discover how our 15+ years of experience in high-stakes industries helps organizations navigate complex challenges.",
    images: [
      {
        url: '/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Upland Consulting - Leadership Team and Company Values',
      },
    ],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  // Structured data for the about page
  const aboutPageStructuredData = createWebPageStructuredData(
    "About Us - Strategic Consulting Excellence",
    "https://uplandconsulting.com/about",
    "Learn about Upland's mission, values, and leadership team. Discover how our 15+ years of experience in high-stakes industries helps organizations navigate complex challenges."
  );

  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We focus on high-impact solutions that drive real business value and competitive advantage."
    },
    {
      icon: Shield,
      title: "Integrity First",
      description: "Independent, unbiased guidance that puts your organization's best interests at the center of every decision."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, building lasting partnerships based on trust and mutual success."
    },
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Rigorous quality standards and continuous improvement to deliver exceptional results every time."
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Projects Delivered" },
    { number: "50+", label: "Client Organizations" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const leadership = [
    {
      name: "Dr. Bola O. Awobamise, Ph D",
      role: "President and Chief Executive Officer",
      bio: "Dr. Awobamise has twenty years of experience in business and technology, with extensive experience leading strategy, financial management, and project management teams on large-scale integration projects globally in healthcare, utilities, oil & gas, transportation, and advertising industries. He holds an MBA from the University of Minnesota and a Ph.D. in Electrical Engineering from UMIST, Manchester, UK.",
      image: "/team/bola.jpg"
    },
    {
      name: "Kathleen M. Pytleski, MBA",
      role: "Executive Vice President and CFO",
      bio: "Ms. Pytleski has over twenty years of experience specializing in strategic business development. She has led the creation of new businesses, opened new markets, and formed strategic alliances for several multi-national corporations across multiple industries. She holds an MBA from the University of Minnesota, serves as a board member with Liberty Enterprises, Inc., and is involved with several non-profit and professional organizations.",
      image: "/team/kathleen.jpg"
    },
    {
      name: "Janice M. Wade",
      role: "Vice President, Consulting Services",
      bio: "Ms. Wade has twenty-two years of leadership, strategy, and technology experience in the banking, financial services, and retail industries. Serving at the executive level, she has recently focused on the implementation of eCommerce, Data Warehouse, Customer Relationship Management, Business Intelligence, and Web-to-Legacy Integration strategies and solutions.",
      image: "/team/janice.jpg"
    },
    {
      name: "Steven C. Patchet",
      role: "Vice President, Consulting Services",
      bio: "Mr. Patchet has over twenty years of experience in information technology management and enterprise integration of diverse computer systems for the utilities industry and public sector. He has expertise in leading the integration of large and complex systems in the utilities industry. Among his accomplishments, his background includes serving as a state agency CIO to develop and implement organizational strategy.",
      image: "/team/steven.jpg"
    },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData)
        }}
      />
      <main className="overflow-hidden min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#132A4D' }}>
          <div className="container mx-auto py-40 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <FadeInUp delay={0.2}>
                <SectionTag variant="default">
                  About Upland
                </SectionTag>
              </FadeInUp>
              
              <FadeInUp delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif leading-tight">
                  Trusted Advisors for High-Stakes Industries
                </h1>
              </FadeInUp>
              
              <FadeInUp delay={0.6}>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
                  We are executive-level strategy and technology consultants specializing in oil & gas, utilities, and public sector organizations. Our mission is to help you navigate complex challenges with confidence and clarity.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <SectionWrapper className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 items-center gap-12">
              <SlideInFromLeft delay={0.2}>
                <div className="grid gap-4">
                  <SectionHeader variant="dark">
                    Our Story
                  </SectionHeader>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Founded in 2008, Upland emerged from a simple observation: organizations in high-stakes, regulated industries needed more than traditional consulting. They needed partners who understood both the strategic complexity and the technical rigor required to succeed.
                    </p>
                    <p>
                      Our founders, having worked at the intersection of strategy and technology in energy and public sector organizations, recognized that successful transformation requires more than just good advice—it requires deep industry knowledge, technical expertise, and the ability to execute in complex regulatory environments.
                    </p>
                    <p>
                      Today, we continue to serve as trusted advisors to organizations that operate where the stakes are highest and the margin for error is smallest. Our approach combines executive-level strategic thinking with hands-on technical implementation, ensuring that every recommendation is both sound and actionable.
                    </p>
                  </div>
                </div>
              </SlideInFromLeft>
              <SlideInFromRight delay={0.4}>
                <div>
                  <ImageSection
                    src={teamImage}
                    alt="Upland team meeting"
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
                  Our Impact
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Numbers that reflect our commitment to delivering exceptional value to our clients.
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

        {/* Values Section */}
        <SectionWrapper className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <SectionHeader variant="dark">
                  Our Values
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  The principles that guide everything we do and every relationship we build.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <FadeInUp key={index} delay={index * 0.1} className="text-center">
                  <div className="w-16 h-16 bg-[#132A4D] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </FadeInUp>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>


        <OurPurposeApproachSection />

        {/* Leadership Section */}
        <SectionWrapper className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <SectionHeader variant="dark">
                  Leadership Team
                </SectionHeader>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Meet the experienced leaders who guide our organization and work directly with our clients.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <ScaleIn key={index} className="h-full group relative">
                  {/* Banner Effect */}
                  <div className="absolute -top-2 -left-2 -right-2 h-2 bg-gradient-to-r from-[#132A4D] via-[#1e3a5f] to-[#132A4D] rounded-t-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Before/After Flow Lines */}
                  <div className="absolute -left-4 top-1/2 w-1 h-0 bg-gradient-to-b from-transparent via-[#132A4D] to-transparent group-hover:h-16 transition-all duration-700 delay-100"></div>
                  <div className="absolute -right-4 top-1/2 w-1 h-0 bg-gradient-to-b from-transparent via-[#132A4D] to-transparent group-hover:h-16 transition-all duration-700 delay-200"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white h-full rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-gray-100 group-hover:border-[#132A4D]/20 overflow-hidden">
                    {/* Attachment-like Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-[#132A4D] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"></div>
                    <div className="absolute top-8 right-4 w-2 h-2 bg-[#1e3a5f] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300"></div>
                    <div className="absolute top-12 right-4 w-1 h-1 bg-[#2a4a6b] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-400"></div>
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 group-hover:opacity-5 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#132A4D]/10 via-transparent to-[#1e3a5f]/10"></div>
                      {/* Subtle accent pattern */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#132A4D]/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"></div>
                    </div>
                    
                    {/* Profile Image with Enhanced Effects */}
                    <div className="relative aspect-square w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#132A4D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <ImageSection
                      src={leader.image}
                      alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full shadow-lg shadow-[#132A4D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                    
                    {/* Content with Enhanced Typography */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif text-center group-hover:text-[#132A4D] transition-colors duration-300">
                    {leader.name}
                  </h3>
                      <div className="relative">
                        <p className="text-[#132A4D] font-semibold text-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    {leader.role}
                  </p>
                        {/* Underline Effect */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#132A4D] to-[#1e3a5f] group-hover:w-16 transition-all duration-500"></div>
                      </div>
                      <p className="text-gray-900 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {leader.bio}
                  </p>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-[#132A4D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-[#1e3a5f]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                    
                    {/* Floating Elements on Hover */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#132A4D]/10 rounded-full scale-150 transition-all duration-700 delay-100"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#1e3a5f]/10 rounded-full scale-200 transition-all duration-700 delay-200"></div>
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
                Ready to Work With Us?
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our experience and expertise can help your organization achieve its strategic goals.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </FadeInUp>
          </div>
        </SectionWrapper>

      </main>
    </>
  );
}
