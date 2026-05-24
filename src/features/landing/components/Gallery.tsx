import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { galleryItems, galleryCategories } from "../data/gallery";
import type { GalleryItem, GalleryCategoryKey } from "../data/gallery";
import type { Section } from "../../../common/types/Section";

type GalleryProps = Section & {};

const INITIAL_VISIBLE_COUNT = 12;
const LOAD_MORE_COUNT = 12;

const SKELETON_IMAGE = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><rect width="100%" height="100%" fill="var(--color-bg-primary)"/></svg>`,
)}`;

// ─── Lazy Image Component ──────────────────────────────────────────────────────

function LazyImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
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
      {/* Placeholder skeleton image */}
      {!isLoaded && (
        <img
          src={SKELETON_IMAGE}
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

// ─── Gallery Card ───────────────────────────────────────────────────────────────

function GalleryCard({
  item,
  index,
  isVisible,
  isNewItem,
  categoryDisplayMap,
  onSelect,
}: {
  item: GalleryItem;
  index: number;
  isVisible: boolean;
  isNewItem: boolean;
  categoryDisplayMap: Map<string, string>;
  onSelect: (item: GalleryItem) => void;
}) {
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
            ? `${(index % LOAD_MORE_COUNT) * 80}ms`
            : `${(index % 6) * 80 + 200}ms`
          : "0ms",
      }}
      aria-label={`Ver ${item.title} em tamanho maior`}
    >
      <LazyImage
        src={item.src}
        alt={item.alt}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
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

// ─── Lightbox ───────────────────────────────────────────────────────────────────

function Lightbox({
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
    >
      {/* Close button */}
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

      {/* Previous button */}
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

      {/* Next button */}
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

      {/* Image container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedItem.src}
          alt={selectedItem.alt}
          className="w-auto max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
        />

        {/* Image info */}
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

// ─── Column Distribution Hook ───────────────────────────────────────────────────

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setColumnCount(width < 640 ? 1 : width < 1024 ? 2 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columnCount;
}

function distributeToColumns<T>(items: T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}

// ─── Main Gallery Component ─────────────────────────────────────────────────────

export function Gallery({ id }: GalleryProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategoryKey>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [newItemStartIndex, setNewItemStartIndex] = useState(
    INITIAL_VISIBLE_COUNT,
  );
  const columnCount = useColumnCount();

  const sortedItems = useMemo(() => {
    return [...galleryItems].sort((a, b) => a.order - b.order);
  }, []);

  const categoryDisplayMap = useMemo(() => {
    return new Map(
      galleryCategories.map((c) => [c.category, c.categoryDisplay]),
    );
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return sortedItems;
    return sortedItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, sortedItems]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const columns = useMemo(() => {
    return distributeToColumns(visibleItems, columnCount);
  }, [visibleItems, columnCount]);

  const hasMore = visibleCount < filteredItems.length;

  const handleCategoryChange = useCallback((category: GalleryCategoryKey) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    setNewItemStartIndex(0); // Reset so all items animate in on category change
  }, []);

  const handleLoadMore = useCallback(() => {
    setNewItemStartIndex(visibleCount);
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  }, [visibleCount]);

  const handleLightboxPrev = useCallback(() => {
    setSelectedItem((current) => {
      if (!current) return null;
      const currentIndex = filteredItems.findIndex(
        (item) => item.id === current.id,
      );
      const prevIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
      return filteredItems[prevIndex];
    });
  }, [filteredItems]);

  const handleLightboxNext = useCallback(() => {
    setSelectedItem((current) => {
      if (!current) return null;
      const currentIndex = filteredItems.findIndex(
        (item) => item.id === current.id,
      );
      const nextIndex =
        currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
      return filteredItems[nextIndex];
    });
  }, [filteredItems]);

  const handleLightboxClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <>
      <section id={id} className="py-24 bg-bg-secondary">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-decorative text-xl text-primary">
              nossos trabalhos
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mt-2">
              <span className="text-primary">Galeria</span> de Bordados
            </h2>
            <p className="font-body text-text-secondary mt-4 max-w-2xl mx-auto">
              Confira algumas das peças que saíram do nosso ateliê. Cada uma
              conta uma história única, feita com carinho e dedicação.
            </p>
          </div>

          {/* Category filters */}
          <div
            className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {galleryCategories.map(({ category, categoryDisplay }) => (
              <button
                key={category}
                id={`gallery-filter-${category}`}
                onClick={() => handleCategoryChange(category)}
                className={`font-body text-sm sm:text-base px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                    : "bg-white/60 text-text-secondary border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:text-text-primary"
                }`}
              >
                {categoryDisplay}
              </button>
            ))}
          </div>

          {/* Results counter */}
          <div
            className={`text-center mb-8 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="font-body text-sm text-text-secondary">
              Exibindo{" "}
              <span className="font-semibold text-text-primary">
                {visibleItems.length}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-text-primary">
                {filteredItems.length}
              </span>{" "}
              {filteredItems.length === 1 ? "trabalho" : "trabalhos"}
              {activeCategory !== "all" && (
                <span>
                  {" "}
                  em{" "}
                  <span className="text-primary font-semibold">
                    {categoryDisplayMap.get(activeCategory)}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Gallery masonry grid - manual columns to prevent repositioning */}
          <div className="flex gap-5">
            {columns.map((columnItems, colIndex) => (
              <div key={colIndex} className="flex-1 flex flex-col gap-5">
                {columnItems.map((item) => {
                  const globalIndex = visibleItems.indexOf(item);
                  return (
                    <GalleryCard
                      key={item.id}
                      item={item}
                      index={globalIndex}
                      isVisible={isVisible}
                      isNewItem={globalIndex >= newItemStartIndex}
                      categoryDisplayMap={categoryDisplayMap}
                      onSelect={setSelectedItem}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-text-secondary text-lg">
                Nenhum trabalho encontrado nesta categoria.
              </p>
            </div>
          )}

          {/* Load more button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                id="gallery-load-more"
                onClick={handleLoadMore}
                className="group font-body inline-flex items-center gap-2 px-8 py-3.5 bg-white/70 text-text-primary border border-primary/30 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-primary/20"
              >
                <span>Ver mais trabalhos</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <Lightbox
          selectedItem={selectedItem}
          categoryDisplayMap={categoryDisplayMap}
          onClose={handleLightboxClose}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}
    </>
  );
}
