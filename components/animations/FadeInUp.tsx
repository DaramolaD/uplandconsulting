'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ReducedMotion from './ReducedMotion';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  threshold = 0.1
}: FadeInUpProps) {
  return (
    <ReducedMotion fallback={<div className={className}>{children}</div>}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: threshold }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
          type: 'tween' // Use tween for better performance
        }}
        style={{
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
        className={className}
      >
        {children}
      </motion.div>
    </ReducedMotion>
  );
}
