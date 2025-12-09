const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://enfermeria-roxana.vercel.app";
const canonicalUrl = `${siteUrl}/inicio`;
const ogImage = `${siteUrl}/seo-convertido-a-1000x525.jpeg?v=1`;
const description =
  "Servicios de enfermería domiciliaria en casa para el cuidado de pacientes. Norte de Bogotá y Chapinero. Turnos 24/7 con enfermeras y auxiliares, acompañamiento hospitalario y paliativos.";

export default function Head() {
  return (
    <>
      <title>Roxana Enfermera | Norte de Bogotá</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Roxana Enfermera | Norte de Bogotá" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Roxana Enfermera - enfermería domiciliaria en Bogotá"
      />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="Roxana Enfermera" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Roxana Enfermera | Norte de Bogotá" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content="Roxana Enfermera - enfermería domiciliaria en Bogotá"
      />
      <meta property="twitter:url" content={canonicalUrl} />
    </>
  );
}
