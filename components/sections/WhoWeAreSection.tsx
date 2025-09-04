import SectionHeader from "@/components/sections/SectionHeader";
import ImageSection from "@/components/ui/ImageSection";
import { Target, Shield, Users, Award } from "lucide-react";
import {
  FadeInUp,
  SlideInFromLeft,
  SlideInFromRight,
  SectionWrapper,
} from "@/components/animations";
import teamImage from "@/public/marketStrategy.png";

export default function WhoWeAreSection() {
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

  return (
    <SectionWrapper className="overflow-hidden py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <SlideInFromLeft delay={0.2}>
            <div>
              <div className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
                Who We Are
              </div>
              <SectionHeader variant="dark">
                Trusted Advisors for High-Stakes Industries
              </SectionHeader>
              <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, Upland emerged from a simple observation:
                  organizations in high-stakes, regulated industries needed more
                  than traditional consulting. They needed partners who
                  understood both the strategic complexity and the technical
                  rigor required to succeed.
                </p>
                <p>
                  Our founders, having worked at the intersection of strategy
                  and technology in energy and public sector organizations,
                  recognized that successful transformation requires more than
                  just good advice—it requires deep industry knowledge,
                  technical expertise, and the ability to execute in complex
                  regulatory environments.
                </p>
                <p>
                  Today, we continue to serve as trusted advisors to
                  organizations that operate where the stakes are highest and
                  the margin for error is smallest.
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

        {/* Values Grid */}
        <FadeInUp delay={0.6}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every
                relationship we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                                 <FadeInUp
                   key={index}
                   delay={0.8 + index * 0.1}
                   className="text-center"
                 >
                   <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                     <div className="w-16 h-16 bg-[#132A4D] rounded-full flex items-center justify-center mx-auto mb-6">
                       <value.icon className="h-8 w-8 text-white" />
                     </div>
                     <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                       {value.title}
                     </h4>
                     <p className="text-gray-600 leading-relaxed">
                       {value.description}
                     </p>
                   </div>
                 </FadeInUp>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
