import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/data/hero";

export default function HeroCarousel({ className }: { className?: string }) {
  const slides = useMemo(() => heroSlides.filter((s) => !!s.url), []);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 10000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {slides.map((s, i) => (
        <img
          key={s.url + i}
          src={s.url}
          alt={s.caption || s.name}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            i === idx ? "opacity-100" : "opacity-0"
          )}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[#001e43]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001e43]/30 to-[#001e43]" />
    </div>
  );
}
