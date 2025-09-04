'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ReducedMotion from './ReducedMotion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorChar?: string;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
  showCursor = true,
  cursorChar = '|'
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isTyping, currentIndex, text, speed, onComplete]);

  const isComplete = currentIndex >= text.length;

  return (
    <ReducedMotion>
      <div ref={ref} className={className}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
                     {displayedText}
           {showCursor && !isComplete && (
             <motion.span
               animate={{ opacity: [1, 0, 1] }}
               transition={{
                 duration: 1,
                 repeat: Infinity,
                 ease: 'easeInOut'
               }}
               className="text-inherit"
             >
               {cursorChar}
             </motion.span>
           )}
        </motion.span>
      </div>
    </ReducedMotion>
  );
}
