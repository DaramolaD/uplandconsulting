'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ReducedMotion from './ReducedMotion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

/**
 * Wrapper component for entire sections that animates when they come into view
 * Provides a subtle fade-in effect for the whole section
 */
export default function SectionWrapper({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  once = true,
  threshold = 0.1
}: SectionWrapperProps) {
  return (
    <ReducedMotion fallback={<section className={className}>{children}</section>}>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
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
      </motion.section>
    </ReducedMotion>
  );
}
