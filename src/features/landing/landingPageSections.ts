export type LandingPageSectionItem = {
  label: string;
  id: string;
};

export type LandingPageSection = {
  home: LandingPageSectionItem;
  about: LandingPageSectionItem;
  services: LandingPageSectionItem;
  gallery: LandingPageSectionItem;
  testimonials: LandingPageSectionItem;
  contact: LandingPageSectionItem;
};

export const landingPageSections = {
  home: { label: "Início", id: "home" },
  about: { label: "Sobre", id: "about" },
  services: { label: "Serviços", id: "services" },
  gallery: { label: "Galeria", id: "gallery" },
  testimonials: { label: "Depoimentos", id: "testimonials" },
  contact: { label: "Contato", id: "contact" },
};
