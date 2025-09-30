"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CardStackAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  maxCards?: number;
}

export default function CardStackAnimation({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  maxCards = 3
}: CardStackAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  // Convert children to array for stacking
  const childrenArray = Array.isArray(children) ? children : [children];
  const visibleCards = childrenArray.slice(0, maxCards);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {visibleCards.map((child, index) => {
        const cardDelay = delay + (index * staggerDelay);
        const isCardVisible = isVisible && index < maxCards;
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              isCardVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{
              zIndex: maxCards - index,
              transform: isCardVisible 
                ? `translateY(${index * 4}px) scale(${1 - index * 0.02})` 
                : `translateY(${index * 4 + 20}px) scale(${1 - index * 0.02 - 0.05})`,
              transitionDelay: `${cardDelay}s`,
              boxShadow: isCardVisible 
                ? `0 ${index * 4 + 8}px ${index * 8 + 16}px rgba(0, 0, 0, ${0.1 + index * 0.05})` 
                : '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            {child}
          </div>
        );
      })}
      
      {/* Additional cards that appear after the stack is complete */}
      {childrenArray.length > maxCards && (
        <div className="relative" style={{ marginTop: `${maxCards * 4}px` }}>
          {childrenArray.slice(maxCards).map((child, index) => {
            const cardDelay = delay + ((maxCards + index) * staggerDelay);
            const isCardVisible = isVisible;
            
            return (
              <div
                key={maxCards + index}
                className={`transition-all duration-700 ease-out ${
                  isCardVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: `${cardDelay}s`,
                  marginBottom: '2rem'
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
