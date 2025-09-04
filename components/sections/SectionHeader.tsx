interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light';
}

export default function SectionHeader({ 
  children, 
  className = "", 
  variant = 'default' 
}: SectionHeaderProps) {
  const variantClasses = {
    default: "text-white",
    dark: "text-gray-900",
    light: "text-gray-600"
  };

  return (
    <h2 className={`text-4xl md:text-5xl font-medium font-serif ${variantClasses[variant]} ${className}`}>
      {children}
    </h2>
  );
}