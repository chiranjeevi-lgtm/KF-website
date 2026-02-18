import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  image?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  href,
  icon,
  image,
  className,
}: CardProps) {
  const content = (
    <div
      className={cn(
        "group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary",
        className
      )}
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-dark">{title}</h3>
      <p className="text-gray-900 leading-relaxed">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
