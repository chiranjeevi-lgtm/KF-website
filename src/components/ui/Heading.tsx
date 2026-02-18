import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl lg:text-5xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
};

export default function Heading({
  as: Tag = "h2",
  children,
  className,
  subtitle,
}: HeadingProps) {
  return (
    <div className="mb-8">
      <Tag
        className={cn(
          "font-heading uppercase tracking-wide text-dark",
          levelStyles[Tag],
          className
        )}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-gray-900">{subtitle}</p>
      )}
    </div>
  );
}
