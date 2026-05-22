import { contact } from "../data/business";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function CallToAction() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta" className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary-dark to-accent" />

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/10 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 rounded-full" />
      </div>

      <div
        ref={ref}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-decorative text-2xl text-white/80">
            peça já o seu bordado
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Quer uma peça exclusiva feita especialmente para você?
          </h2>

          <p className="font-body text-lg text-white/85 mb-10 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e vamos criar juntos algo único e
            especial. Orçamento sem compromisso!
          </p>

          <a
            id="cta-whatsapp"
            href={`https://wa.me/${contact.social.whatsapp.number}?text=${encodeURIComponent(contact.social.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-body font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300"
          >
            {/* WhatsApp icon */}
            <svg
              className="w-6 h-6 animate-pulse-soft"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a3.04 3.04 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
