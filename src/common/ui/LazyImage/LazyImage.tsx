import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function LazyImage({ src, alt, className }: LazyImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className="relative w-full rounded-2xl overflow-hidden bg-bg-primary"
    >
      {!isLoaded && (
        <div
          className="w-full animate-pulse-soft"
          style={{ aspectRatio: "4 / 5" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 50%, var(--color-bg-primary) 100%)",
              backgroundSize: "200% 200%",
            }}
          />
        </div>
      )}

      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className ?? ""} transition-opacity duration-500 ${
            isLoaded
              ? "opacity-100 relative"
              : "opacity-0 absolute inset-0 w-full h-full object-cover"
          }`}
        />
      )}
    </div>
  );
}
