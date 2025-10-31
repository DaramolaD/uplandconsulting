import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SectionTag from "@/components/sections/SectionTag";
import { FadeInUp, ScaleIn } from "@/components/animations";
import heroBg from "@/public/utiliesBg.jpg"
import oilBg from "@/public/oil.jpg"
import constructionBg2 from "@/public/consructionBg_2.jpg"
import containerBg from "@/public/containerBg.jpg"

export default function HeroSection() {
  // Sample images for the carousel - you can replace these with your actual images
  const heroImages = [
    {
      src: heroBg,
      alt: "Professional Business Meeting"
    },
    {
      src: oilBg, // Replace with your second image
      alt: "Strategic Planning Session"
    },
    {
      src: constructionBg2, // Replace with your third image
      alt: "Executive Team Collaboration"
    },
    {
      src: containerBg, // Replace with your third image
      alt: "Executive Team Collaboration"
    }
  ];

  return (
    <section className="overflow-hidden relative lg:min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Dark blue background with content */}
      
      <div className="w-full lg:w-1/2 flex items-center" style={{ backgroundColor: '#132A4D' }}>
        <div className="flex lg:justify-end w-full px-4 md:px-8 lg:px-16 pt-40 pb-10">
          <div className="max-w-2xl">
            {/* Small heading */}
            <FadeInUp delay={0.15}>
              <SectionTag variant="default" className="!text-xs">
                Trusted Advisors for High-Stakes Industries
              </SectionTag>
            </FadeInUp>
            
            {/* Main title */}
            <FadeInUp delay={0.3}>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[42px] 2xl:text-5xl font-medium leading-tight text-white mb-8 font-serif">
                Executive-Level Strategy & Technology Solutions for Oil & Gas, Utilities, and Public Sector
              </h1>
            </FadeInUp>
            
            {/* Description */}
            <FadeInUp delay={0.5}>
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
      
      {/* Right side - Image carousel */}
      <ScaleIn delay={0.3} className="w-full lg:w-1/2 relative h-[500px] lg:h-screen">
        <ImageCarousel
          images={heroImages}
          className="h-full"
          interval={3500} // 4 seconds between transitions
        />
      </ScaleIn>
    </section>
  );
}
