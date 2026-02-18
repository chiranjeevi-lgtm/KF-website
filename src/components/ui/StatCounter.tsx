"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export default function StatCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  className,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out curve
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="font-heading text-4xl md:text-5xl text-primary">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-sm md:text-base text-gray-900 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
