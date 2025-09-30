"use client";

import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  delay = 0,
  suffix = '',
  prefix = '',
  decimals = 0
}: UseCountUpProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure smooth transition
          setTimeout(() => {
            setCount(start);
            setIsVisible(true);
          }, 50);
        } else {
          // Reset visibility when out of view
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [start]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;

    const updateCount = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(updateCount);
        return;
      }

      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration, start, delay]);

  const formatCount = (value: number) => {
    const formatted = value.toFixed(decimals);
    return `${prefix}${formatted}${suffix}`;
  };

  return {
    count: formatCount(count),
    isVisible,
    ref: elementRef
  };
}
