import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ruta para el sistema App Router de Next.js
    "./pages/**/*.{js,ts,jsx,tsx}", // Ruta para páginas si usas Page Router
    "./components/**/*.{js,ts,jsx,tsx}", // Ruta para componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

