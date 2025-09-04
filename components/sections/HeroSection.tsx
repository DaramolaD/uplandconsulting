import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageSection from "@/components/ui/ImageSection";
import SectionTag from "@/components/sections/SectionTag";
import { FadeInUp, ScaleIn } from "@/components/animations";
import heroBg from "@/public/heroBg.png"

export default function HeroSection() {
  return (
    <section className="overflow-hidden relative lg:min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Dark blue background with content */}
      
      <div className="w-full lg:w-1/2 flex items-center" style={{ backgroundColor: '#132A4D' }}>
        <div className="flex lg:justify-end w-full px-8 lg:px-16 pt-40 pb-10">
          <div className="max-w-2xl">
            {/* Small heading */}
            <FadeInUp delay={0.2}>
              <SectionTag variant="default">
                Trusted Advisors for High-Stakes Industries
              </SectionTag>
            </FadeInUp>
            
            {/* Main title */}
            <FadeInUp delay={0.4}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-white mb-8 font-serif">
                Executive-Level Strategy & Technology Solutions for Oil & Gas, Utilities, and Public Sector
              </h1>
            </FadeInUp>
            
            {/* Description */}
            <FadeInUp delay={0.6}>
              <p className="text-lg md:text-xl font-sans font-light text-white opacity-70 leading-relaxed mb-10">
                Fast-tracking complex projects, minimizing risk, and delivering operational excellence.
              </p>
            </FadeInUp>
            
            {/* CTA Button - White button with dark blue text */}
            <FadeInUp delay={0.8}>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 !h-fit !px-7 !py-4 text-[#132A4D] text-md !font-medium rounded-lg transition-colors duration-200"
              >
                Explore Our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </FadeInUp>
          </div>
        </div>
      </div>
      
      {/* Right side - Image section */}
      <ScaleIn delay={0.3} className="w-full lg:w-1/2 relative h-96 lg:h-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20" />
        <ImageSection
          src={heroBg}
          alt="Professional Business Meeting"
          className="h-full"
        />
      </ScaleIn>
    </section>
  );
}
