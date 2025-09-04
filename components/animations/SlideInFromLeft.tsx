'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ReducedMotion from './ReducedMotion';

interface SlideInFromLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  distance?: number;
}

export default function SlideInFromLeft({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  threshold = 0.1,
  distance = 100
}: SlideInFromLeftProps) {
  return (
    <ReducedMotion fallback={<div className={className}>{children}</div>}>
      <motion.div
        initial={{ opacity: 0, x: -distance }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once, amount: threshold }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: 'tween'
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
