"use client";

import { useState, useEffect, useCallback } from "react";

interface VideoPopupProps {
  youtubeId: string;
  thumbnailSrc?: string;
}

export default function VideoPopup({ youtubeId, thumbnailSrc }: VideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = useCallback(() => setIsOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      {/* Thumbnail + Play Button */}
      <div
        className="relative h-full w-full cursor-pointer group"
        onClick={open}
        role="button"
        tabIndex={0}
        aria-label="Play video"
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") open(); }}
      >
        <img
          src={thumbnailSrc || "/images/video-thumbnail.jpg"}
          alt="Video thumbnail"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        {/* Circular Play Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-20 w-20 items-center justify-center">
            {/* Outer ring */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="38"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="opacity-80"
              />
            </svg>
            {/* Inner filled circle */}
            <div className="h-16 w-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors shadow-lg">
              <svg className="h-7 w-7 text-dark ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={close}
          />

          {/* Video Container */}
          <div className="relative w-full max-w-4xl aspect-video animate-scaleIn">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              className="h-full w-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
