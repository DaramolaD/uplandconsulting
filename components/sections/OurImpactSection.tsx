import SectionHeader from "@/components/sections/SectionHeader";
import { FadeInUp, StaggerContainer, ScaleIn, SectionWrapper } from "@/components/animations";
import CountUp from "@/components/ui/CountUp";

export default function OurImpactSection() {
  const stats = [
    { 
      end: 15, 
      suffix: "+", 
      label: "Years Experience",
      duration: 2000,
      delay: 0
    },
    { 
      end: 200, 
      suffix: "+", 
      label: "Projects Delivered",
      duration: 2500,
      delay: 200
    },
    { 
      end: 50, 
      suffix: "+", 
      label: "Client Organizations",
      duration: 1800,
      delay: 400
    },
    { 
      end: 99, 
      suffix: "%", 
      label: "Client Satisfaction",
      duration: 2200,
      delay: 600
    },
  ];

  const achievements = [
    {
      title: "Strategic Transformation",
      description: "Helped energy companies navigate market shifts and regulatory changes",
      icon: "🎯"
    },
    {
      title: "Technology Implementation",
      description: "Delivered complex IT systems and infrastructure projects on time",
      icon: "⚡"
    },
    {
      title: "Compliance Excellence",
      description: "Ensured 100% regulatory compliance across all client projects",
      icon: "🛡️"
    },
    {
      title: "Cost Optimization",
      description: "Achieved average 30% cost reduction through process improvements",
      icon: "💰"
    }
  ];

  return (
    <SectionWrapper className="overflow-hidden py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInUp delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-block bg-[#EBEBEB] text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
              Measurable Results
            </div>
            <SectionHeader variant="dark">
              Our Impact
            </SectionHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Numbers that reflect our commitment to delivering exceptional value to our clients.
            </p>
          </div>
        </FadeInUp>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScaleIn key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#132A4D] mb-2 font-serif">
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  delay={stat.delay}
                />
              </div>
              <div className="text-lg text-gray-600">
                {stat.label}
              </div>
            </ScaleIn>
          ))}
        </StaggerContainer>

        {/* Achievements */}
        <FadeInUp delay={0.3}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              Key Achievements
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in delivering results for high-stakes industries
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <FadeInUp key={index} delay={index * 0.1} className="h-full text-center">
              <div className="h-full bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-serif">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
