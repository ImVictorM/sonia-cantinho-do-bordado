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
  street: "[rua], [numero]",
  neighborhood: "[bairro]",
  city: "Limeira",
  state: "SP",
  zip: "[cep]",
};

export const contact: Contact = {
  email: "mariamendesemanu@gmail.com",
  social: {
    instagram: "https://instagram.com/soniacantinhodobordado",
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
      hour: 9,
      period: "AM",
    },
    end: {
      hour: 6,
      period: "PM",
    },
  },
  weekends: {
    saturday: {
      start: {
        hour: 9,
        period: "AM",
      },
      end: {
        hour: 1,
        period: "PM",
      },
    },
    sunday: null,
  },
};
