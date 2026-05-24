import { useScrollAnimation } from "@/common/hooks/useScrollAnimation";
import aboutImage from "@/common/assets/images/collage.png";
import type { WithId } from "@/common/types/extension";

export default function About({ id }: WithId) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className="py-24 bg-bg-secondary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl rotate-3 scale-105" />

              <img
                src={aboutImage}
                alt="Collage de bordados personalizados mostrando variedade de trabalhos"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          <div
            className={`space-y-6 text-center lg:text-left transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <span className="font-decorative text-xl text-primary inline-block">
              paixão em cada ponto
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary">
              Arte e <span className="text-primary">Precisão</span> em Cada Detalhe
            </h2>

            <div className="space-y-4 font-body text-text-secondary leading-relaxed text-left">
              <p>
                Aqui no Cantinho do Bordado, cada peça é tratada como uma obra
                única. Unimos domínio técnico e sensibilidade criativa para
                transformar tecidos em peças com identidade e acabamento
                impecável.
              </p>
              <p>
                Utilizamos máquinas industriais de alta precisão e materiais
                selecionados criteriosamente, garantindo um padrão de qualidade
                que se destaca em cada ponto, cada linha e cada detalhe.
              </p>
              <p>
                De uniformes corporativos a presentes inesquecíveis, nosso
                ateliê é especializado em dar vida às suas ideias com
                excelência. Seu projeto merece um acabamento à altura.
              </p>
            </div>

            <p className="font-decorative text-2xl text-primary pt-4">
              - Sônia ♡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
