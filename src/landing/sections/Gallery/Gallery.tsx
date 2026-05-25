import { useState, useMemo, useCallback } from "react";
import { useScrollAnimation } from "@/common/hooks/useScrollAnimation";
import { galleryItems, galleryCategories } from "./data/gallery";
import type { GalleryItem, GalleryCategoryKey } from "./data/gallery";
import { useColumnCount } from "./hooks/useColumnCount";
import { distributeToColumns } from "./utils/columnUtils";
import { GalleryCard } from "./components/GalleryCard";
import Lightbox from "./components/GalleryImageLightbox/GalleryImageLightbox";
import type { WithId } from "@/common/types/extension";

const INITIAL_VISIBLE_COUNT = 12;
const LOAD_MORE_COUNT = 12;



export default function Gallery({ id }: WithId) {
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
      <section
        id={id}
        ref={ref}
        className="pt-12 pb-24 sm:pt-24 bg-bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Gallery masonry grid using manual columns to prevent repositioning */}
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
                      delay={LOAD_MORE_COUNT}
                      isNewItem={globalIndex >= newItemStartIndex}
                      categoryDisplayMap={categoryDisplayMap}
                      onSelect={setSelectedItem}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-text-secondary text-lg">
                Nenhum trabalho encontrado nesta categoria.
              </p>
            </div>
          )}

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
