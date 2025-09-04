import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "Upland - Strategic Consulting for High-Stakes Industries",
  description = "Executive-level strategy and technology consultants specializing in oil & gas, utilities, and public sector organizations. Navigate complex challenges with confidence and clarity.",
  keywords = "strategic consulting, oil gas consulting, utilities consulting, public sector consulting, technology consulting, executive strategy, regulatory compliance, digital transformation",
  ogImage = "/og-image.jpg",
  ogUrl,
  canonicalUrl,
  structuredData
}: SEOHeadProps) {
  const fullTitle = title.includes('Upland') ? title : `${title} | Upland`;
  const currentUrl = ogUrl || canonicalUrl || '';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Upland Consulting" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Upland Consulting" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#132A4D" />
      <meta name="msapplication-TileColor" content="#132A4D" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
}
