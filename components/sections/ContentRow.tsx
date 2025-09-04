import ImageSection from "@/components/ui/ImageSection";
import ContentCard from "@/components/sections/ContentCard";
import { StaticImageData } from "next/image";

interface ContentRowProps {
  title: string;
  description: string;
  linkText: string;
  linkHref?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  className?: string;
}

export default function ContentRow({
  title,
  description,
  linkText,
  linkHref = "#",
  imageSrc,
  imageAlt,
  imagePosition,
  className = ""
}: ContentRowProps) {
  return (
    <div className={`grid lg:grid-cols-2 items-center border border-blue-100 ${
      imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
    } ${className}`}>
      {/* Text content */}
      <div className={`space-y-6 ${imagePosition === "left" ? "lg:col-start-2 pl-4" : "pr-4" }`}>
        <ContentCard
          title={title}
          description={description}
          linkText={linkText}
          linkHref={linkHref}
        />
      </div>

      {/* Image */}
      <div className={`h-full ${imagePosition === "left" ? "lg:col-start-1" : ""}`}>
        <ImageSection
          src={imageSrc}
          alt={imageAlt}
          className="h-full"
        />
      </div>
    </div>
  );
}