import { Metadata } from "next";
import SectionTag from "@/components/sections/SectionTag";
import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Shield } from "lucide-react";
import { FadeInUp, StaggerContainer, ScaleIn, SlideInFromLeft, SlideInFromRight, SectionWrapper } from "@/components/animations";
import { createWebPageStructuredData } from "@/components/seo/StructuredData";

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
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Former McKinsey partner with 20+ years in energy sector strategy and operations.",
      image: "/team-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Technology leader with expertise in digital transformation and regulatory compliance systems.",
      image: "/team-2.jpg"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Compliance",
      bio: "Former regulatory affairs director with deep expertise in energy and utilities compliance.",
      image: "/team-3.jpg"
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

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <ScaleIn key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-square w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <ImageSection
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif text-center">
                    {leader.name}
                  </h3>
                  <p className="text-[#132A4D] font-semibold text-center mb-4">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {leader.bio}
                  </p>
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
