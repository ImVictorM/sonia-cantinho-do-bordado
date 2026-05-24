import type { Section } from "../../../common/types/Section";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import aboutImage from "@/common/assets/images/collage.png";

type AboutProps = Section & {};

export function About({ id }: AboutProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className="py-24 bg-bg-secondary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
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

          {/* Text */}
          <div
            className={`space-y-6 text-center lg:text-left transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <span className="font-decorative text-xl text-primary inline-block">
              conheça minha história
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary">
              Sobre o <span className="text-primary">Cantinho</span>
            </h2>

            <div className="space-y-4 font-body text-text-secondary leading-relaxed text-left">
              <p>
                Há mais de 20 anos, trabalho com bordados personalizados, unindo
                criatividade e tecnologia para entregar peças com acabamento
                impecável. O que começou como uma paixão se tornou um negócio
                dedicado à excelência.
              </p>
              <p>
                Cada peça que sai do meu ateliê é produzida com máquinas
                industriais de alta precisão, garantindo qualidade e
                consistência em cada detalhe. Trabalho com materiais de primeira
                linha e atenção total ao resultado final.
              </p>
              <p>
                Meu cantinho é onde a criatividade ganha forma, seja para
                uniformes corporativos, presentes especiais ou peças
                decorativas. Estou aqui para criar algo verdadeiramente especial
                para você.
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
