import type { Brand } from "../types/business";
import type { Contact, Phone } from "../types/contact";
import type { Address } from "../types/location";
import type { WeeklyBusinessHours } from "../types/business";

export const brand: Brand = {
  name: "Sônia Cantinho do Bordado",
  tagline: "Bordados Personalizados com Qualidade Profissional",
};

const phone: Phone = {
  countryCode: "55",
  areaCode: "19",
  number: "989164583",
};

export const address: Address = {
  street: "Rua João Martins Cardoso",
  number: "29",
  neighborhood: "Jardim São Lourenço ",
  city: "Limeira",
  state: "SP",
};

export const contact: Contact = {
  email: "mariamendesemanu@gmail.com",
  social: {
    instagram: "https://www.instagram.com/atelie_cantinho_do_bordado/",
    whatsapp: {
      ...phone,
      fullNumber: `${phone.countryCode}${phone.areaCode}${phone.number}`,
      message: "Olá! Gostaria de saber mais sobre os bordados.",
    },
  },
};

export const weeklyBusinessHours: WeeklyBusinessHours = {
  weekdays: {
    start: {
      hour: 8,
      period: "AM",
    },
    end: {
      hour: 6,
      period: "PM",
    },
  },
  weekends: {
    saturday: null,
    sunday: null,
  },
};
