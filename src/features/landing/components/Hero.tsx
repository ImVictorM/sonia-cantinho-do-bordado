import type { Section } from "../../../common/types/Section";
import { contact } from "../data/business";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import heroImage from "@/common/assets/images/hero.png";
import { landingPageSections } from "../landingPageSections";

type HeroProps = Section & {};

export function Hero({ id }: HeroProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center bg-bg-primary overflow-hidden pt-20"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 -right-25 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-12.5 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-detail/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div
            className={`space-y-6 text-center lg:text-left transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-decorative text-xl text-accent inline-block">
              qualidade profissional ✿
            </span>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
              Bordados Personalizados com{" "}
              <span className="text-primary">Qualidade</span> e{" "}
              <span className="text-accent">Precisão</span>
            </h1>

            <p className="font-body text-lg text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Bordados personalizados para uniformes, presentes e peças
              especiais. Produção com máquinas industriais e acabamento de
              qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                id="hero-cta-gallery"
                href={`#${landingPageSections.gallery.id}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body font-medium rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Conheça Nossos Trabalhos
              </a>
              <a
                id="hero-cta-whatsapp"
                href={`https://wa.me/${contact.social.whatsapp.fullNumber}?text=${encodeURIComponent(contact.social.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-body font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-300"
              >
                {/* WhatsApp icon */}
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a3.04 3.04 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale Conosco
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl rotate-3 scale-105" />

              <img
                src={heroImage}
                alt="Bordados personalizados com acabamento profissional"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-4/5 lg:aspect-3/4"
              />

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
                <p className="font-decorative text-lg text-primary">
                  +100 peças
                </p>
                <p className="font-body text-xs text-text-secondary">
                  bordadas com amor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
