import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Ruta raíz
        destination: "/inicio", // Página a donde redirigir
        permanent: true, // Indica que es una redirección permanente (301)
      },
    ];
  },
};

export default nextConfig;
