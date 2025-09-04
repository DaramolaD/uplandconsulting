'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface PerformanceOptimizedProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
}

/**
 * Performance-optimized motion component that:
 * - Uses transform3d for hardware acceleration
 * - Reduces repaints by using will-change
 * - Optimizes for 60fps animations
 * - Uses transform and opacity only for better performance
 */
export default function PerformanceOptimized({
  children,
  className = '',
  ...motionProps
}: PerformanceOptimizedProps) {
  return (
    <motion.div
      {...motionProps}
      className={`${className} animate-scroll`}
      style={{
        ...motionProps.style,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
