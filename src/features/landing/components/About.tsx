import type { Section } from "../../../common/types/Section";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import aboutImage from "@/common/assets/images/sobre-artesa.png";

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
              {/* Background decorative shape */}
              <div className="absolute inset-0 bg-linear-to-tr from-accent/20 to-primary/20 rounded-3xl -rotate-3 scale-105" />

              <img
                src={aboutImage}
                alt="Sônia em seu ateliê de bordados"
                className="relative rounded-3xl shadow-xl w-full object-cover aspect-4/5"
              />

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
                <p className="font-decorative text-lg text-accent">+20 anos</p>
                <p className="font-body text-xs text-text-secondary">
                  de experiência
                </p>
              </div>
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
                Há mais de 20 anos, transformo linhas e tecidos em obras de
                arte. O que começou como um hobby aprendido com minha avó se
                tornou uma paixão que dedico todos os dias da minha vida.
              </p>
              <p>
                Cada peça que sai do meu ateliê carrega não apenas um bordado,
                mas um pedacinho da minha história e do meu coração. Trabalho
                com materiais de alta qualidade e atenção aos mínimos detalhes,
                porque acredito que o verdadeiro luxo está na dedicação
                artesanal.
              </p>
              <p>
                Meu cantinho é onde a criatividade ganha forma, onde cada ponto
                é dado com paciência e amor. Seja para decorar sua casa,
                presentear alguém especial ou celebrar um momento único, estou
                aqui para criar algo verdadeiramente especial para você.
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
