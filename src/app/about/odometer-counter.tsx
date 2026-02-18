"use client";

import { useEffect, useRef, useState } from "react";

interface OdometerCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

function OdometerDigit({ digit, animate }: { digit: string; animate: boolean }) {
  if (digit === ",") {
    return <span className="inline-block">,</span>;
  }

  const num = parseInt(digit, 10);

  return (
    <span className="relative inline-block h-[1em] overflow-hidden" style={{ width: "0.6em" }}>
      <span
        className="block transition-transform duration-300 ease-out"
        style={{
          transform: animate ? `translateY(-${num * 10}%)` : "translateY(0%)",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="block h-[1em] leading-[1em]">
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

function formatWithCommas(n: number): string {
  return n.toLocaleString("en-IN");
}

export default function OdometerCounter({
  target,
  duration = 1500,
  suffix = "+",
  className = "",
}: OdometerCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 100;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.round(increment * step);

      if (step >= steps) {
        current = target;
        setCurrentValue(current);
        setFinished(true);
        clearInterval(timer);
        return;
      }

      setCurrentValue(current);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  const formatted = formatWithCommas(currentValue);
  const digits = formatted.split("");

  return (
    <div ref={ref} className={className}>
      <span className="inline-flex items-baseline">
        {digits.map((d, i) => (
          <OdometerDigit key={`${i}-${digits.length}`} digit={d} animate={hasStarted} />
        ))}
        {finished && (
          <span className="inline-block animate-fade-in">{suffix}</span>
        )}
      </span>
    </div>
  );
}