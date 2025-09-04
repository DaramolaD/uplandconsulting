import SectionHeader from "@/components/sections/SectionHeader";
import { FadeInUp, StaggerContainer, ScaleIn, SectionWrapper } from "@/components/animations";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Upland's strategic guidance helped us navigate complex regulatory changes and achieve 40% cost reduction in our operations. Their deep industry knowledge is unmatched.",
      author: "Sarah Johnson",
      role: "CEO, Energy Solutions Inc.",
      company: "Energy Solutions Inc."
    },
    {
      quote: "The technology implementation project was delivered on time and under budget. Upland's team became an extension of our own, working seamlessly with our staff.",
      author: "Michael Chen",
      role: "CTO, Utility Partners",
      company: "Utility Partners"
    },
    {
      quote: "Their independent perspective was invaluable. Unlike other consultants, Upland provided unbiased recommendations that truly put our organization's interests first.",
      author: "Dr. Emily Rodriguez",
      role: "Director of Operations, Public Services",
      company: "Public Services Authority"
    }
  ];

  return (
    <SectionWrapper className="overflow-hidden py-20 bg-gray-50">
      <div className="container mx-auto px-4">
                 <FadeInUp delay={0.2}>
           <div className="text-center mb-16">
             <div className="inline-block bg-[#EBEBEB] text-gray-900 px-6 py-3 rounded-lg font-medium text-lg mb-8">
               Client Success Stories
             </div>
             <SectionHeader variant="dark">
               What Our Clients Say
             </SectionHeader>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
               Don&apos;t just take our word for it. Here&apos;s what industry leaders say about working with Upland.
             </p>
           </div>
         </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScaleIn key={index} delay={index * 0.2}>
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
