import type { WithId } from "../../../common/types/extension";
import { contact } from "../../../common/data/settings";
import { useScrollAnimation } from "../../../common/hooks/useScrollAnimation";
import heroVideo from "@/common/assets/videos/hero-bg.webm";
import heroPoster from "@/common/assets/images/hero-poster.jpg";
import { WhatsAppIcon } from "@/common/assets/icons/WhatsAppIcon";

type HeroProps = {
  galleryId: string;
};

export default function Hero({ id, galleryId }: WithId<HeroProps>) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src={heroVideo} type="video/webm" />
      </video>

      <div
        className="absolute inset-0 md:hidden bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url(${heroPoster})` }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-text-primary/90 via-text-primary/80 to-text-primary/90" />

      <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16"
      >
        <div
          className={`space-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-decorative text-xl text-primary-light inline-block">
            qualidade profissional ✿
          </span>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Bordados Personalizados com{" "}
            <span className="text-primary-light">Qualidade</span> e{" "}
            <span className="text-accent-light">Precisão</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Bordados personalizados para uniformes, presentes e peças especiais.
            Produção com máquinas industriais e acabamento de qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <a
              id="hero-cta-gallery"
              href={`#${galleryId}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body font-medium rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Conheça Nossos Trabalhos
            </a>
            <a
              id="hero-cta-whatsapp"
              href={`https://wa.me/${contact.social.whatsapp.fullNumber}?text=${encodeURIComponent(contact.social.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/60 text-white font-body font-medium rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Fale Conosco
            </a>
          </div>

          <div
            className={`flex justify-center pt-4 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div>
              <p className="font-decorative text-lg text-primary-light">
                +100 peças bordadas com ♡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
