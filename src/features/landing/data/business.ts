type TimePeriod = "AM" | "PM";

type BusinessHours = {
  weekdays: {
    start: {
      time: number;
      period: TimePeriod;
    };
    end: {
      time: number;
      period: TimePeriod;
    };
  };
  weekends: {
    saturday: {
      start: number;
      end: number;
    };
    sunday: null | {
      start: number;
      end: number;
    };
  };
};

type BusinessLocation = {
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
  };
  businessHours: BusinessHours;
};

export type Artisan = {
  phone: {
    countryCode: string;
    areaCode: string;
    number: string;
  };
};

export type Brand = {
  name: string;
  tagline: string;
};

export type Contact = {
  email: string;
  social: {
    instagram: string;
    facebook: string;
    whatsapp: {
      number: string;
      message: string;
    };
  };
};

export const brand: Brand = {
  name: "Sônia Cantinho do Bordado",
  tagline: "Bordados com Amor e Delicadeza",
};

export const artisan: Artisan = {
  phone: {
    countryCode: "55",
    areaCode: "19",
    number: "989164583",
  },
};

export const contact: Contact = {
  email: "contato@soniacantinhodobordado.com.br",

  social: {
    instagram: "https://instagram.com/soniacantinhodobordado",
    facebook: "https://facebook.com/soniacantinhodobordado",
    whatsapp: {
      number: `${artisan.phone.countryCode}${artisan.phone.areaCode}${artisan.phone.number}`,
      message: "Olá! Gostaria de saber mais sobre os bordados.",
    },
  },
};

export const businessLocation: BusinessLocation = {
  address: {
    street: "Rua das Flores, 123",
    neighborhood: "Centro",
    city: "Campinas",
    state: "SP",
    zip: "13010-000",
  },

  businessHours: {
    weekdays: {
      start: {
        time: 9,
        period: "AM",
      },
      end: {
        time: 6,
        period: "PM",
      },
    },
    weekends: {
      saturday: {
        start: 9,
        end: 13,
      },
      sunday: null,
    },
  },
};
