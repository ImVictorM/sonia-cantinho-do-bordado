type Meridiem = "AM" | "PM";

type ClockTime = {
  hour: number;
  period: Meridiem;
};

type BusinessHourRange = {
  start: ClockTime;
  end: ClockTime;
};

type WeeklyBusinessHours = {
  weekdays: BusinessHourRange;
  weekends: {
    saturday: BusinessHourRange;
    sunday: null | BusinessHourRange;
  };
};

type Address = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
};

type BusinessLocation = {
  address: Address;
  businessHours: WeeklyBusinessHours;
};

type Phone = {
  countryCode: string;
  areaCode: string;
  number: string;
};

export type Brand = {
  name: string;
  tagline: string;
};

export type Contact = {
  email: string;
  social: {
    instagram: string;
    whatsapp: Phone & {
      fullNumber: string;
      message: string;
    };
  };
};

export const brand: Brand = {
  name: "Sônia Cantinho do Bordado",
  tagline: "Bordados Personalizados com Qualidade Profissional",
};

const phone = {
  countryCode: "55",
  areaCode: "19",
  number: "989164583",
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

export const businessLocation: BusinessLocation = {
  address: {
    street: "[rua], [numero]",
    neighborhood: "[bairro]",
    city: "Limeira",
    state: "SP",
    zip: "[cep]",
  },

  businessHours: {
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
  },
};
