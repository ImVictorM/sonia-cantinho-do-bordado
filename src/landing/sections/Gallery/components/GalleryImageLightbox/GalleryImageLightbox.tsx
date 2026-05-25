import { useEffect } from "react";
import type { GalleryItem } from "../../data/gallery";
import { useSwipe } from "@/common/hooks/useSwipe";

export default function Lightbox({
  selectedItem,
  categoryDisplayMap,
  onClose,
  onPrev,
  onNext,
}: {
  selectedItem: GalleryItem;
  categoryDisplayMap: Map<string, string>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const swipeHandlers = useSwipe({
    onSwipeLeft: onNext,
    onSwipeRight: onPrev,
    threshold: 40,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      id="gallery-lightbox"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-label="Imagem ampliada"
      {...swipeHandlers}
    >
      <button
        id="lightbox-close"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 text-white cursor-pointer group"
        aria-label="Fechar imagem"
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <button
        id="lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 text-white cursor-pointer group"
        aria-label="Imagem anterior"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        id="lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 text-white cursor-pointer group"
        aria-label="Próxima imagem"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedItem.src}
          alt={selectedItem.alt}
          className="w-auto max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
        />

        <div className="mt-4 text-center max-w-xl">
          <span className="inline-block font-body text-xs text-white/80 bg-primary/60 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
            {categoryDisplayMap.get(selectedItem.category) ??
              selectedItem.category}
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
            {selectedItem.title}
          </h3>
          <p className="font-body text-sm text-white/60 mt-1 hidden sm:block">
            {selectedItem.alt}
          </p>
        </div>
      </div>
    </div>
  );
}
