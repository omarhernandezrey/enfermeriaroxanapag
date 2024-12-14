import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React
  swcMinify: true, // Usa el minificador SWC para producción
  images: {
    domains: ["tudominio.com"], // Agrega dominios permitidos para imágenes externas
  },
  async redirects() {
    return [
      {
        source: "/", // Ruta raíz
        destination: "/inicio", // Página de redirección
        permanent: true, // Redirección permanente
      },
    ];
  },
};

export default nextConfig;
