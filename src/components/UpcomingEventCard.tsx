"use client";

import { useState, useEffect } from "react";
import type { UpcomingEvent } from "@/content/services";

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setExpired(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (expired) return null;

  return (
    <div className="flex items-center gap-1 mt-3">
      <span className="text-xs text-gray-500 mr-1">Starts in</span>
      {[
        { value: timeLeft.days, label: "d" },
        { value: timeLeft.hours, label: "h" },
        { value: timeLeft.minutes, label: "m" },
        { value: timeLeft.seconds, label: "s" },
      ].map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-1">
          <div className="bg-primary/10 rounded px-1.5 py-0.5 min-w-[32px] text-center">
            <span className="text-sm font-bold text-primary tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-xs text-primary ml-0.5">{label}</span>
          </div>
          {i < 3 && <span className="text-primary font-bold text-xs">:</span>}
        </div>
      ))}
    </div>
  );
}

export function UpcomingEventCard({ event }: { event: UpcomingEvent }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-primary hover:shadow-lg hover:-translate-y-1 cursor-default">
      <div className="bg-primary px-5 py-3 transition-colors duration-200 group-hover:bg-primary/90">
        <h4 className="font-heading text-base uppercase tracking-wide text-white">{event.name}</h4>
      </div>
      <div className="px-5 py-5 flex flex-col gap-4">
        <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>

        {event.dateISO && <Countdown targetDate={event.dateISO} />}

        <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-dark">
            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-dark">
            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>

        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 w-full text-center bg-primary hover:bg-primary/90 text-white font-heading text-sm uppercase tracking-wide py-2.5 px-4 rounded-lg transition-colors duration-200"
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  );
}
