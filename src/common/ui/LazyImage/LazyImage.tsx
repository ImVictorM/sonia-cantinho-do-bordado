import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  skeletonSrc?: string;
};

export default function LazyImage({
  src,
  alt,
  className,
  skeletonSrc = "",
}: LazyImageProps) {
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
      {!isLoaded && skeletonSrc && (
        <img
          src={skeletonSrc}
          alt="Carregando..."
          className="w-full h-auto block animate-pulse-soft opacity-70"
        />
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
