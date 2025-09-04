import SectionHeader from "@/components/sections/SectionHeader";
import { FadeInUp, StaggerContainer, ScaleIn, SectionWrapper } from "@/components/animations";

export default function IndustriesWeServeSection() {
  const industries = [
    {
      title: "Oil & Gas",
      description: "Strategic consulting for upstream, midstream, and downstream operations",
      services: [
        "Market Entry Strategy",
        "Regulatory Compliance",
        "Digital Transformation",
        "Risk Management"
      ],
      icon: "🛢️",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Utilities",
      description: "Technology and strategy solutions for power, water, and gas utilities",
      services: [
        "Grid Modernization",
        "SCADA Systems",
        "Customer Experience",
        "Operational Excellence"
      ],
      icon: "⚡",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Public Sector",
      description: "Government and public service transformation initiatives",
      services: [
        "Digital Government",
        "Citizen Services",
        "Infrastructure Planning",
        "Policy Implementation"
      ],
      icon: "🏛️",
      color: "from-green-600 to-green-800"
    }
  ];

  return (
    <SectionWrapper className="py-20 bg-white">
      <div className="container mx-auto px-4">
                 <FadeInUp delay={0.2}>
           <div className="text-center mb-16">
             <div className="inline-block bg-[#EBEBEB] text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
               Industries We Serve
             </div>
             <SectionHeader variant="dark">
               Specialized Expertise Across High-Stakes Sectors
             </SectionHeader>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
               We understand the unique challenges and regulatory requirements of industries where the stakes are highest and the margin for error is smallest.
             </p>
           </div>
         </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ScaleIn key={index} delay={index * 0.2}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    {industry.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeInUp delay={0.8}>
          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                Ready to Transform Your Industry?
              </h3>
              <p className="text-gray-600 mb-6">
                Let&apos;s discuss how our specialized expertise can help your organization navigate complex challenges and achieve strategic goals.
              </p>
                             <a
                 href="/contact"
                 className="inline-flex items-center bg-[#132A4D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
               >
                 Start a Conversation
                 <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                 </svg>
               </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
