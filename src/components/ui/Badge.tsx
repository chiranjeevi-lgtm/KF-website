import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "highlight" | "dark";
  className?: string;
}

const variantStyles = {
  primary: "bg-primary/10 text-primary",
  highlight: "bg-highlight/10 text-yellow-700",
  dark: "bg-dark/10 text-dark",
};

export default function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
