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
      <h2 className="font-heading text-3xl md:text-4xl uppercase text-white mb-4">
        What They Say
      </h2>

{/* Testimonial text */}
      <p className="text-white/70 leading-relaxed max-w-lg mx-auto mb-5 min-h-[80px]">
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
      <div className="flex gap-2 mt-5">
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