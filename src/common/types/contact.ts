export type Phone = {
  countryCode: string;
  areaCode: string;
  number: string;
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
