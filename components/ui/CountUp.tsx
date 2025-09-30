"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function CountUp({
  end,
  duration = 2000,
  start = 0,
  delay = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = ''
}: CountUpProps) {
  const { count, ref } = useCountUp({
    end,
    duration,
    start,
    delay,
    suffix,
    prefix,
    decimals
  });

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}
