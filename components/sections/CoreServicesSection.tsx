import SectionHeader from "@/components/sections/SectionHeader";
import SectionTag from "@/components/sections/SectionTag";
import ContentCard from "@/components/sections/ContentCard";
import ImageSection from "@/components/ui/ImageSection";

import marketStrategy from "@/public/marketStrategy.png";

export default function CoreServicesSection() {
  const services = [
    {
      title: "Business Strategy & Operations",
      description: "We help businesses shape their direction, optimize operations, and prepare for market growth. Our approach integrates strategy development, process modeling, and risk management for long-term resilience.",
      services: [
        "Strategy Development",
        "Market & Business Planning", 
        "Process Modeling & Workflow Optimization",
        "Risk & Continuity Planning"
      ],
      linkText: "Discover Strategy Services",
      imageSrc: marketStrategy,
      imageAlt: "Business meeting with world map presentation",
      imagePosition: "right" as const,
    },
    {
      title: "Technology & Project Delivery",
      description: "From IT planning to full project delivery, we enable clients to adopt and manage critical technology solutions. Our team drives efficiency and ensures projects are delivered on time and within scope.",
      services: [
        "Systems Engineering",
        "IT Planning & Infrastructure",
        "SCADA & Wireless Networks", 
        "Procurement Services",
        "Project Recovery & Mentoring"
      ],
      linkText: "Explore Technology Services",
      imageSrc: marketStrategy,
      imageAlt: "Technology planning and project delivery meeting",
      imagePosition: "left" as const,
    },
  ];

  return (
    <section className="pt-20 pb-24 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* White banner at top */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
            Smart Help. Real Progress.
          </div>
          <SectionHeader variant="default">
            Our Core Services
          </SectionHeader>
        </div>

        {/* Services blocks */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 items-center ${
                service.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
              }`}>
                {/* Text content */}
                <div className={`py-16 px-8 ${service.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Services list */}
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  
                  {/* Call to action */}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 decoration-1 underline font-medium text-lg inline-flex items-center"
                  >
                    {service.linkText}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Image */}
                <div className={`h-full ${service.imagePosition === "left" ? "lg:col-start-1" : ""}`}>
                  <ImageSection
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
