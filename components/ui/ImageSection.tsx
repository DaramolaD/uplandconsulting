import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageSectionProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  placeholder?: boolean;
}

export default function ImageSection({ 
  src, 
  alt, 
  className = "", 
  placeholder = false 
}: ImageSectionProps) {
  if (placeholder) {
    return (
      <div className={`bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden ${className}`}>
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center">
          <div className="text-center text-white/80">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">{alt}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
