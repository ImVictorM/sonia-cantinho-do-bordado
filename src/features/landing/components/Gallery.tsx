import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { galleryItems } from "../data/gallery";
import type { Section } from "../../../common/types/Section";

type GalleryProps = Section & {};

export function Gallery({ id }: GalleryProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id={id} className="py-24 bg-bg-secondary">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
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
              conta uma história única.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setSelectedImage(item.src)}
                className={`group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
                aria-label={`Ver ${item.title} em tamanho maior`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-text-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="font-heading text-xl font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="font-body text-sm text-white/80 mt-1">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-label="Imagem ampliada"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Bordado em destaque"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <button
              id="lightbox-close"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors duration-300 text-text-primary font-bold"
              aria-label="Fechar imagem"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
