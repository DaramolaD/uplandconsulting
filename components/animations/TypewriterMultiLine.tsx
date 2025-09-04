'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ReducedMotion from './ReducedMotion';

interface TypewriterMultiLineProps {
  lines: string[];
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorChar?: string;
  pauseBetweenLines?: number;
}

export default function TypewriterMultiLine({
  lines,
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
  showCursor = true,
  cursorChar = '|',
  pauseBetweenLines = 500
}: TypewriterMultiLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, delay]);

  useEffect(() => {
    if (!isTyping || isComplete) return;

    const currentLine = lines[currentLineIndex];
    const isLastCharOfLine = currentCharIndex >= currentLine.length;
    const isLastLine = currentLineIndex >= lines.length - 1;

    if (isLastCharOfLine) {
      if (isLastLine) {
        setIsComplete(true);
        if (onComplete) onComplete();
        return;
      }

      // Move to next line after pause
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
        setDisplayedLines(prev => [...prev, '']);
      }, pauseBetweenLines);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayedLines(prev => {
        const newLines = [...prev];
        if (!newLines[currentLineIndex]) {
          newLines[currentLineIndex] = '';
        }
        newLines[currentLineIndex] += currentLine[currentCharIndex];
        return newLines;
      });
      setCurrentCharIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isTyping, currentLineIndex, currentCharIndex, lines, speed, pauseBetweenLines, onComplete, isComplete]);

  return (
    <ReducedMotion>
      <div ref={ref} className={className}>
        {displayedLines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: lineIndex * 0.1 }}
            className="block"
          >
            {line}
            {showCursor && lineIndex === currentLineIndex && !isComplete && (
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
          </motion.div>
        ))}
      </div>
    </ReducedMotion>
  );
}
