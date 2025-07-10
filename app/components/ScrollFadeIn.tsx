"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export default function ScrollFadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect(); // hanya animasi sekali
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out",
        !isVisible && "opacity-0 translate-y-10",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
}
