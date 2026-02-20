"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "As a businessman with no farming background, I was nervous about entering agriculture. Kamala Farms delivered a complete turnkey hydroponic setup in just 90 days — from polyhouse construction to automated nutrient systems. With their buy-back agreement securing my market, the farm has been generating consistent income from day one.",
    name: "Vikram",
    role: "Business Owner, Pune",
  },
  {
    quote:
      "We came to Kamala Farms with zero farming experience and a big dream. They built us a 2-acre hydroponic cucumber farm, trained our team, and signed a buy-back agreement so we never had to worry about finding buyers. In our first year itself, we completed four full harvest cycles.",
    name: "Arun & Meera",
    role: "Entrepreneurs, Coimbatore",
  },
  {
    quote:
      "We wanted a high-value crop with assured sales — turmeric ticked every box. Kamala Farms set up our hydroponic turmeric farm, trained us through the full annual cycle, and bought our entire first harvest at a premium. The predictable income has already got us planning an expansion.",
    name: "Karthik & Krishna",
    role: "Farm Owners, Hyderabad",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col items-center text-center w-full">
      <p className="text-xs uppercase tracking-widest text-white/60 mb-3">
        Testimonials
      </p>
      <h2 className="font-heading text-3xl md:text-4xl uppercase text-white mb-6">
        What They Say
      </h2>

      {/* Quote icon */}
      <svg
        className="h-8 w-8 text-white/40 mb-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.3 2.6C6.1 5.1 2.9 9.5 2.9 14.3c0 3.2 2 5.1 4.4 5.1 2.2 0 4-1.7 4-3.9 0-2.1-1.5-3.7-3.5-3.9-.3 0-.5 0-.8.1.5-2.7 2.8-5.5 5.6-7L11.3 2.6zm10 0C16.1 5.1 12.9 9.5 12.9 14.3c0 3.2 2 5.1 4.4 5.1 2.2 0 4-1.7 4-3.9 0-2.1-1.5-3.7-3.5-3.9-.3 0-.5 0-.8.1.5-2.7 2.8-5.5 5.6-7L21.3 2.6z" />
      </svg>

      {/* Testimonial text */}
      <p className="text-white/70 leading-relaxed max-w-lg mx-auto mb-8 min-h-[80px]">
        {TESTIMONIALS[current].quote}
      </p>

      {/* Avatar */}
      <div className="h-16 w-16 rounded-full bg-[#FF6B35] overflow-hidden mb-4 mx-auto">
        {/* TODO: Add testimonial photos */}
        <div className="h-full w-full flex items-center justify-center text-white text-xs">
          {TESTIMONIALS[current].name.charAt(0)}
        </div>
      </div>

      {/* Name & role */}
      <p className="font-heading text-sm uppercase tracking-wider text-white">
        {TESTIMONIALS[current].name}
      </p>
      <p className="text-white/50 text-sm">
        {TESTIMONIALS[current].role}
      </p>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-white/30"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}