# Roxana Enfermera – Sitio web Next.js

Sitio público para agendar enfermeras jefes y auxiliares en Usaquén, Chapinero y el norte de Bogotá. Incluye simulación de chat estilo WhatsApp, sección de servicios y SEO local optimizado por barrio.

## Requisitos
- Node.js 20+
- npm (incluido con Node)
- Sin dependencias globales adicionales.

## Instalación y ejecución
```bash
npm install          # instala dependencias
npm run dev          # arranca en http://localhost:3000
npm run lint         # lint con Next/ESLint
```

## Scripts útiles
- `npm run dev`: servidor de desarrollo con HMR.
- `npm run lint`: validación de estilo y tipos básicos.

## Estructura principal
- `app/`: rutas, páginas y componentes (App Router).
  - `app/inicio/page.tsx`: landing principal con héroe, servicios y testimonios estilo WhatsApp.
  - `app/nosotros/page.tsx`: información de equipo y flujo de chat extendido.
  - `app/components/`: footer, menú móvil, botones flotantes.
- `public/images/`: recursos estáticos (logos, fondos, avatares, `seo.png` para sharing).
- `metadata.ts`: título/descripcion base para Next Metadata API.

## Contenido y estilo
- **Hero**: CTA de WhatsApp y llamada directa, línea destacada en verde con el número +57 313 611 4707.
- **Chat WhatsApp**: burbujas verde/blanco, avatares pequeños, días separados y aviso de mensajes temporales. Mensajes son humanizados y coherentes con roles familiares y clínicos.
- **Cintilla de zonas**: carrusel continuo de barrios con borde esmeralda animado (solo borde superior/inferior, sin laterales).

## SEO y sharing
- Meta OpenGraph/Twitter con `seo.png` (1200x630) y alt orientado a contacto inmediato.
- Canonical y hreflang (`es-CO`, `x-default`) apuntan a `https://enfermeriaroxana.com/inicio`.
- Palabras clave incluyen servicios y todos los barrios del norte de Bogotá/Chapinero.
- JSON-LD `HomeHealthCareService` con `serviceArea` por barrio y datos de contacto.

## Ajustes de contenido
- Para cambiar testimonios o roles: editar `chatMessages` en `app/inicio/page.tsx`.
- Avatares disponibles en `public/images/avatar`; el mapa `avatarMap` vincula cada nombre.
- Colores y gradientes principales están en clases Tailwind dentro de los componentes.

## Accesibilidad y rendimiento
- Imágenes con `next/image` y `alt`.
- Menús y botones con focus/hover y textos claros.
- Componentes pesados cargados dinámicamente en `app/layout.tsx` (footer, menú móvil).

## Despliegue
- Probado con Next 15; listo para Vercel o cualquier hosting Node compatible.
- Ajusta `next.config.ts` si cambias el destino de la redirección raíz.

## Troubleshooting
- Errores de lint: ejecutar `npm run lint` y revisar rutas mencionadas.
- Imágenes rotas al compartir: confirmar que `/public/seo.png` existe y que la URL canonical está correcta.
- Desbordes en móvil: verificar los `max-w` en el mock de chat (`app/inicio/page.tsx`).
- Formulario de contacto: requiere credenciales de EmailJS (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`). Si faltan o fallan, el usuario verá un mensaje con alternativas (correo/WhatsApp).

## Licencia
Privado. Uso interno para Roxana Enfermera.
