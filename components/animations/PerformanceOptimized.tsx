'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

interface PerformanceOptimizedProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
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
  as = 'div',
  ...motionProps
}: PerformanceOptimizedProps) {
  const optimizedProps = useMemo(() => ({
    ...motionProps,
    style: {
      ...motionProps.style,
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      perspective: 1000,
    },
  }), [motionProps]);

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      {...optimizedProps}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
