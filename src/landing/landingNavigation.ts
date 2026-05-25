import type { Section } from "@/common/types/section";

export type LandingNavigation = {
  home: Section;
  about: Section;
  services: Section;
  gallery: Section;
  testimonials: Section;
  contact: Section;
};

export const landingNavigation: LandingNavigation = {
  home: { label: "Início", id: "home" },
  about: { label: "Sobre", id: "about" },
  services: { label: "Serviços", id: "services" },
  gallery: { label: "Galeria", id: "gallery" },
  testimonials: { label: "Depoimentos", id: "testimonials" },
  contact: { label: "Contato", id: "contact" },
};

export const landingSections = Object.values(landingNavigation);
