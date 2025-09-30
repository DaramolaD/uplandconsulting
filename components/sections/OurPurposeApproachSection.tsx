import SectionHeader from "@/components/sections/SectionHeader";
import { FadeInUp, SectionWrapper } from "@/components/animations";
import { Target, Lightbulb, ChevronRight, Building2, Handshake, TrendingUp } from "lucide-react";

export default function OurPurposeApproachSection() {
  const purposePoints = [
    {
      icon: Target,
      title: "Our Purpose",
      description: "Bring a fresh business focus to solving complex problems through innovative technology solutions and strategic expertise.",
      color: "blue"
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description: "Drawing on our executive level expertise helps bring business and technology strategies, enter new markets, reduce costs and turn around critical projects that have plateaued.",
      color: "purple"
    }
  ];

  const companyInfo = [
    {
      icon: Building2,
      title: "Established Excellence",
      description: "Upland Consulting Nigeria Ltd. has been in operation since 2001, bringing over two decades of proven expertise to every project.",
      color: "emerald"
    },
    {
      icon: Handshake,
      title: "Trusted Partnerships",
      description: "We maintain a very long list of clients and technical partners, demonstrating our reliability and commitment to long-term relationships.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our track record includes successful project turnarounds, cost reductions, and market entry strategies across multiple industries.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      emerald: "from-emerald-500 to-emerald-600",
      orange: "from-orange-500 to-orange-600",
      green: "from-green-500 to-green-600",
      red: "from-red-500 to-red-600",
      indigo: "from-indigo-500 to-indigo-600",
      teal: "from-teal-500 to-teal-600"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600";
  };

  return (
    <SectionWrapper className="overflow-hidden pt-20 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <FadeInUp delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-block bg-[#132A4D] text-white px-6 py-3 rounded-lg font-medium text-lg mb-8">
              Our Foundation
            </div>
            <SectionHeader variant="dark">
              Purpose & Approach
            </SectionHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              At Upland Consulting Nigeria Ltd, we are driven by a clear purpose and a proven approach 
              to delivering technology solutions that make a real difference.
            </p>
          </div>
        </FadeInUp>

        {/* Purpose & Approach Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {purposePoints.map((point, index) => {
            const IconComponent = point.icon;
            const colorClasses = getColorClasses(point.color);
            
            return (
              <FadeInUp key={point.title} delay={0.3 + (index * 0.2)}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  {/* Header with Icon and Title */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-blue-600 transition-colors duration-300">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        {/* Company Information */}
        <FadeInUp delay={0.7}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Our Track Record
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Over two decades of proven expertise and trusted partnerships across multiple industries.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {companyInfo.map((info, index) => {
            const IconComponent = info.icon;
            const colorClasses = getColorClasses(info.color);
            
            return (
              <FadeInUp key={info.title} delay={0.8 + (index * 0.1)}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClasses} text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif group-hover:text-blue-600 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
