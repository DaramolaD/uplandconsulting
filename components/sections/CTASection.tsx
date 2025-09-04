import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageSection from "@/components/ui/ImageSection";
import ctaSectionBg from "@/public/ctaSection.png";

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageSection
          src={ctaSectionBg}
          alt="Person typing on laptop"
          className="w-full h-full"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl text-white">
          {/* Main title */}
          <h2 className="text-4xl max-w-xl md:text-5xl lg:text-7xl font-normal mb-8 font-serif leading-tight">
            Boost your business efficiency.
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light leading-relaxed">
            With Upland&apos;s complete office support services, you&apos;ll spend less time on the daily grind and more time driving growth where it matters most.
          </p>
          
          {/* CTA Button - White button with dark text and border */}
          
          <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 !h-fit !px-7 !py-4 text-[#132A4D] text-md !font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
      </div>
    </section>
  );
}
