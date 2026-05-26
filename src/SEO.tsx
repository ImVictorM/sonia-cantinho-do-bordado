import { brand, address, SITE_URL } from "@/common/data/settings";
import { buildJsonLdFromSettings } from "./common/utils/seoUtils";

export default function SEO() {
  const jsonLd = buildJsonLdFromSettings();

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
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="Limeira" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
