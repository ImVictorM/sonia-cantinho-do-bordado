import {
  brand,
  contact,
  address,
  weeklyBusinessHours,
  SITE_URL,
} from "@/common/data/settings";
import { to24HourClock } from "@/common/utils/displayUtils";

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

function buildJsonLd() {
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

export default function SEO() {
  const jsonLd = buildJsonLd();

  return (
    <>
      {/* In the current react version (React 19^) these tags are hoisted to <head> automatically */}
      <title>{`${brand.name} - ${brand.tagline}`}</title>
      <meta
        name="description"
        content={`${brand.tagline} em ${address.city}/${address.state}. Produção com máquinas industriais para uniformes, presentes, enxovais e peças especiais. Qualidade e atenção aos detalhes.`}
      />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta name="theme-color" content="#C97B84" />

      {/* Open Graph */}
      <meta property="og:title" content={`${brand.name} - ${brand.tagline}`} />
      <meta
        property="og:description"
        content={`${brand.tagline} em ${address.city}/${address.state}. Produção com máquinas industriais e qualidade garantida.`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:image" content={`${SITE_URL}/og-image.webp`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={brand.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${brand.name} - ${brand.tagline}`} />
      <meta
        name="twitter:description"
        content={`${brand.tagline} em ${address.city}/${address.state}.`}
      />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.webp`} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
