import {
  address,
  brand,
  contact,
  SITE_URL,
  weeklyBusinessHours,
} from "../data/settings";
import { to24HourClock } from "./displayUtils";

function getOpenDays(): string[] {
  const days: string[] = [];

  days.push("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");

  if (weeklyBusinessHours.weekends?.saturday) {
    days.push("Saturday");
  }

  if (weeklyBusinessHours.weekends?.sunday) {
    days.push("Sunday");
  }

  return days;
}

export function buildJsonLdFromSettings() {
  const { weekdays } = weeklyBusinessHours;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description: `${brand.tagline}. Produção com máquinas industriais para uniformes, presentes, enxovais e peças especiais.`,
    url: SITE_URL,
    telephone: `+${contact.social.whatsapp.fullNumber}`,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.number}`,
      addressLocality: address.city,
      addressRegion: address.state,
      addressCountry: "BR",
      neighborhood: address.neighborhood.trim(),
    },
    ...(weekdays && {
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: getOpenDays(),
        opens: `${to24HourClock(weekdays.start)}:00`,
        closes: `${to24HourClock(weekdays.end)}:00`,
      },
    }),
    sameAs: [contact.social.instagram],
    image: `${SITE_URL}/og-image.webp`,
    priceRange: "$$",
  };
}
