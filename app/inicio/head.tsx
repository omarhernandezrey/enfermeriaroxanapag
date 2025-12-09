const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://enfermeria-roxana.vercel.app";
const canonicalUrl = `${siteUrl}/inicio`;
const ogImage = `${siteUrl}/seo-convertido-a-1000x525.jpeg?v=3`;

// Lógica robusta para fb:app_id: usar env si es válido, sino fallback
const rawFbAppId = process.env.NEXT_PUBLIC_FB_APP_ID;
const fallbackFbAppId = "966242223397117";
const isNumeric = (val: string | undefined) => /^[1-9][0-9]{6,}$/.test(val || "");
const fbAppId = isNumeric(rawFbAppId) ? rawFbAppId : fallbackFbAppId;
const isValidFbAppId = isNumeric(fbAppId);

const description =
  "Enviamos enfermeras y auxiliares verificadas para tu familiar en casa o clínica. Norte de Bogotá y Chapinero. Turnos 24/7, paliativos y acompañamiento hospitalario. Servicio para familias/pacientes, no es oferta laboral.";

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
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="525" />
      <meta
        property="og:image:alt"
        content="Roxana Enfermera - enfermería domiciliaria en Bogotá"
      />
      {isValidFbAppId && <meta property="fb:app_id" content={fbAppId} />}
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
