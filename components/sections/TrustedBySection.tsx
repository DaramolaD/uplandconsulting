import TotalLogo from "@/public/total.png";
import ShellLogo from "@/public/shell.png";
import ExxonMobilLogo from "@/public/exxonmobil.png";
import ChevronLogo from "@/public/chevron.png";
import EniLogo from "@/public/eni.png";
import FolawiyoAjeLogo from "@/public/folawiyoAjeServicesLimited.png";
import NPDCLogo from "@/public/npdc.png";
import Image from "next/image";
import { FadeInUp, SectionWrapper } from "@/components/animations";

export default function TrustedBySection() {
  const companies = [
    {
      name: "TOTAL",
      logo: TotalLogo,
    },
    {
      name: "Shell",
      logo: ShellLogo,
    },
    {
      name: "ExxonMobil",
      logo: ExxonMobilLogo,
    },
    {
      name: "Chevron",
      logo: ChevronLogo,
    },
    {
      name: "Eni",
      logo: EniLogo,
    },
    {
      name: "Folawiyo Aje",
      logo: FolawiyoAjeLogo,
    },
    {
      name: "NPDC",
      logo: NPDCLogo,
    },
  ];

  return (
    <SectionWrapper className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Side gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <FadeInUp delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-2xl text-gray-800 font-medium">
              Trusted by leading energy and public sector organizations.
            </h2>
          </div>
        </FadeInUp>

        {/* Company logos carousel */}
        <div className="relative overflow-hidden">
          {/* Left fog effect - positioned at the very start */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>

          {/* Right fog effect - positioned at the very end */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

          <div className="relative flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center h-16 w-28 mx-8 flex-shrink-0 hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center h-20 w-32 mx-8 flex-shrink-0 hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
