import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ContentCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref?: string;
  className?: string;
  variant?: 'default' | 'dark' | 'light';
}

export default function ContentCard({ 
  title, 
  description, 
  linkText, 
  linkHref = "#",
  className = "",
  variant = 'default'
}: ContentCardProps) {
  const variantClasses = {
    default: "bg-white text-gray-900",
    dark: "bg-gray-900 text-white",
    light: "bg-gray-50 text-gray-900"
  };

  return (
    <div className={`p-8 rounded-lg ${variantClasses[variant]} ${className}`}>
      <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
        {title}
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {description}
      </p>
      <Button
        variant="link"
        className="p-0 h-auto text-blue-600 hover:text-blue-700 decoration-1 underline font-medium text-lg"
        asChild
      >
        <a href={linkHref}>
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}