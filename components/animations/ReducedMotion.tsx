'use client';

import { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ReducedMotionProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component that respects user's motion preferences
 * and provides fallback content for reduced motion users
 */
export default function ReducedMotion({ 
  children, 
  fallback = null 
}: ReducedMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
}
