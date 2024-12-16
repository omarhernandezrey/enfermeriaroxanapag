import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Permitir 'any'
      "@next/next/no-img-element": "off", // Permitir el uso de `<img>`
      "react/no-unescaped-entities": "off", // Deshabilitar advertencias de comillas no escapadas
    },
  },
];

export default eslintConfig;
