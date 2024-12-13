import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        bounce: "bounce 1.5s infinite", // Animación personalizada para rebote
        pulse: "pulse 2s infinite", // Alternativa: animación de pulso más suave
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)", // Rebote inicial y final
          },
          "50%": {
            transform: "translateY(0)", // Posición central
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
