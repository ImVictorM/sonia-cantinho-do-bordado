import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/common/hooks/useScrollAnimation";
import { testimonials } from "./data/testimonials";
import type { WithId } from "@/common/types/extension";

export default function Testimonials({ id }: WithId) {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = testimonials[currentIndex];

  return (
    <section id={id} className="py-24 bg-bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-decorative text-xl text-accent">
            depoimentos
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            O Que Nossas <span className="text-primary">Clientes</span> Dizem
          </h2>
        </div>

        <div
          className={`relative max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <svg
              className="absolute top-6 left-6 w-12 h-12 text-primary/10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>

            <div className="relative">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-detail"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="font-body text-lg text-text-secondary leading-relaxed mb-8 min-h-25">
                &ldquo;{current.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-heading font-bold text-lg shrink-0">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-text-primary">
                    {current.name}
                  </p>
                  <p className="font-decorative text-sm text-text-secondary">
                    cliente satisfeita ♡
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              id="testimonial-prev"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50 w-2.5"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
