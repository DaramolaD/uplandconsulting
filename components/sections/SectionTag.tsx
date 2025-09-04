interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light';
}

export default function SectionTag({ 
  children, 
  className = "", 
  variant = 'default' 
}: SectionTagProps) {
  const baseClasses = "inline-block text-xs md:text-sm uppercase tracking-[0.25em] font-medium mb-6 font-sans px-6 py-3 rounded-full relative overflow-hidden backdrop-blur-md shadow-lg";
  
  const variantClasses = {
    default: "text-white bg-white/10 border border-white/10",
    dark: "text-white bg-white/10 border border-white/10",
    light: "text-gray-900 bg-white/60 backdrop-blur-md border border-gray-300/50 shadow-lg"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}