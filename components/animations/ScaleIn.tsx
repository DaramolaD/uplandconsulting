'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ReducedMotion from './ReducedMotion';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  scale?: number;
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  threshold = 0.1,
  scale = 0.8
}: ScaleInProps) {
  return (
    <ReducedMotion fallback={<div className={className}>{children}</div>}>
      <motion.div
        initial={{ opacity: 0, scale }}
        whileInView={{ opacity: 1, scale: 1 }}
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
