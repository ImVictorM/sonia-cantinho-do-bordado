import type { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { services } from "../data/services";
import type { Section } from "../../../common/types/Section";

const serviceIcons: Record<string, ReactNode> = {
  needle: (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 48 48"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M24 4v28" strokeLinecap="round" />
      <circle cx="24" cy="6" r="2" fill="currentColor" />
      <path d="M24 32c0 6-4 12-4 12" strokeLinecap="round" />
      <path d="M24 32c0 6 4 12 4 12" strokeLinecap="round" />
      <path d="M18 18l12 4" strokeLinecap="round" strokeDasharray="2 3" />
      <path d="M18 26l12-4" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  ),
  baby: (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 48 48"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <circle cx="24" cy="16" r="10" />
      <path
        d="M18 14a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M27 14a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0"
        fill="currentColor"
        stroke="none"
      />
      <path d="M21 19c0 0 1.5 2 3 2s3-2 3-2" strokeLinecap="round" />
      <path d="M14 26c-2 4-2 8-2 14h24c0-6 0-10-2-14" strokeLinecap="round" />
      <path d="M20 26v6" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M28 26v6" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  ),
  towel: (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 48 48"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="8" y="6" width="32" height="36" rx="3" />
      <path d="M8 14h32" />
      <path d="M8 34h32" />
      <path d="M16 14v20" strokeDasharray="2 3" />
      <path d="M24 14v20" strokeDasharray="2 3" />
      <path d="M32 14v20" strokeDasharray="2 3" />
      <circle cx="24" cy="24" r="4" strokeDasharray="2 2" />
    </svg>
  ),
  gift: (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 48 48"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="6" y="20" width="36" height="22" rx="3" />
      <rect x="4" y="14" width="40" height="8" rx="3" />
      <path d="M24 14v28" />
      <path d="M24 14c0 0-6-8-10-6s2 6 10 6" strokeLinecap="round" />
      <path d="M24 14c0 0 6-8 10-6s-2 6-10 6" strokeLinecap="round" />
    </svg>
  ),
};

type ServicesProps = Section & {};

export function Services({ id }: ServicesProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className="py-24 bg-bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-decorative text-xl text-accent">
            o que eu faço
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="font-body text-text-secondary mt-4 max-w-2xl mx-auto">
            Cada serviço é realizado com dedicação artesanal, utilizando
            materiais de alta qualidade e técnicas tradicionais de bordado.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-bg-secondary/50 hover:border-primary/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                {serviceIcons[service.icon]}
              </div>

              <h3 className="font-heading text-2xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>

              <p className="font-body text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
