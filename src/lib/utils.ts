import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes with clsx.
 * Use this in all components for conditional class merging.
 *
 * Example: cn("bg-primary", isActive && "text-white", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
