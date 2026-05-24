import { WhatsAppIcon } from "@/common/assets/icons/WhatsAppIcon";
import { contact } from "@/common/data/settings";
import { useScrollAnimation } from "@/common/hooks/useScrollAnimation";

export default function CallToAction() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary-dark to-accent" />

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
            href={`https://wa.me/${contact.social.whatsapp.fullNumber}?text=${encodeURIComponent(contact.social.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-body font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300"
          >
            <WhatsAppIcon className="w-6 h-6 animate-pulse-soft" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
