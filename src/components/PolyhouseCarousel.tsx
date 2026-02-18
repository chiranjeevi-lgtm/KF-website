"use client";

import { useRef, useState, useCallback } from "react";

interface CarouselItem {
  title: string;
  image?: string;
}

interface PolyhouseCarouselProps {
  items: CarouselItem[];
}

export function PolyhouseCarousel({ items }: PolyhouseCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.5;
      const newScrollLeft =
        carouselRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const midpoint = rect.width / 2;

    if (clickX < midpoint) {
      scroll("left");
    } else {
      scroll("right");
    }
  }, []);

  return (
    <div className="relative mt-12 w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth carousel-scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "none",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-[65%] md:w-[30%]"
          >
            <div
              className="relative bg-light-gray flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: "3/2" }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-dark/60 flex flex-col items-center justify-center pointer-events-none">
                <h4 className="text-white text-xl md:text-2xl font-heading uppercase text-center px-4">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Cursor - follows mouse on hover */}
      {isHovering && (
        <div
          className="pointer-events-none absolute z-20 flex items-center gap-1 bg-dark/90 rounded-full px-3 py-2 transition-opacity duration-150"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}

      <style jsx>{`
        .carousel-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
