import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "../../data/gallery";
import { LazyImage } from "@/common/ui/LazyImage";

type GalleryCardProps = {
  item: GalleryItem;
  index: number;
  isVisible: boolean;
  isNewItem: boolean;
  delay?: number;
  skeletonSrc?: string;
  categoryDisplayMap: Map<string, string>;
  onSelect: (item: GalleryItem) => void;
};

export default function GalleryCard({
  item,
  index,
  isVisible,
  isNewItem,
  categoryDisplayMap,
  delay = 12,
  skeletonSrc,
  onSelect,
}: GalleryCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [hasAnimated, setHasAnimated] = useState(!isNewItem);

  useEffect(() => {
    if (!isNewItem) return;
    // Trigger the entrance animation after a brief delay
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [isNewItem]);

  const shouldShow = isVisible && (isNewItem ? hasAnimated : true);

  return (
    <button
      ref={cardRef}
      id={`gallery-item-${item.id}`}
      onClick={() => onSelect(item)}
      className={`group relative w-full overflow-hidden rounded-2xl cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block ${
        shouldShow
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-95"
      } ${isNewItem ? "duration-500 ease-out" : "duration-700"}`}
      style={{
        transitionDelay: shouldShow
          ? isNewItem
            ? `${(index % delay) * 80}ms`
            : `${(index % 6) * 80 + 200}ms`
          : "0ms",
      }}
      aria-label={`Ver ${item.title} em tamanho maior`}
    >
      <LazyImage
        src={item.src}
        alt={item.alt}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
        skeletonSrc={skeletonSrc}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-text-primary/80 via-text-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block font-body text-xs text-white/90 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
            {categoryDisplayMap.get(item.category) ?? item.category}
          </span>
          <p className="font-heading text-lg sm:text-xl font-semibold text-white leading-tight">
            {item.title}
          </p>
          <p className="font-body text-xs sm:text-sm text-white/75 mt-1 line-clamp-2">
            {item.alt}
          </p>
        </div>

        {/* Zoom icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 delay-100">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
