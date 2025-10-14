import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { decorImages } from "@/data/decor";

export default function DecorCarousel({ className, intervalMs = 5000 }: { className?: string; intervalMs?: number }) {
  const slides = useMemo(() => decorImages.filter((s) => !!s.url), []);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  return (
    <div className={cn("relative w-full rounded-3xl", className)} aria-hidden>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl md:rounded-[2rem]">
        {slides.map((s, i) => (
          <img
            key={s.url + i}
            src={s.url}
            alt={s.alt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
              i === idx ? "opacity-100" : "opacity-0"
            )}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ))}
      </div>
    </div>
  );
}
