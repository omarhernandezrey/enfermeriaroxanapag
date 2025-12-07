"use client";

import "./globals.css";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiHome, FiUser, FiPhone, FiMapPin } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";

// Carga dinámica de componentes grandes para optimizar el rendimiento
const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
  loading: () => <div>Cargando footer...</div>,
});
const FloatingButtons = dynamic(() => import("./components/FloatingButtons"), {
  ssr: false,
  loading: () => <div></div>,
});
const MobileMenu = dynamic(() => import("./components/MobileMenu"), {
  ssr: false,
  loading: () => <div>Cargando menú móvil...</div>,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false); // Detectar si es móvil
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Estado del menú de servicios
  const menuTimeout = useRef<NodeJS.Timeout | null>(null); // Referencia para el temporizador del menú
  const zonasTicker = [
    "Usaquén",
    "Santa Ana",
    "Santa Ana Occidental",
    "Santa Bárbara",
    "Santa Bárbara Occidental",
    "Santa Bárbara Central",
    "Santa Bárbara Oriental",
    "Santa Bibiana",
    "San Patricio",
    "La Carolina",
    "El Contador",
    "Los Cedros",
    "Cedritos",
    "Cedro Bolívar",
    "Cedro Golf",
    "Cedro Narváez",
    "Cedro Salazar",
    "Lisboa",
    "La Calleja",
    "La Calleja Norte",
    "Bella Suiza",
    "San Cristóbal Norte",
    "Toberín",
    "Torca",
    "Verbenal",
    "Barrancas",
    "Molinos del Norte",
    "Multicentro",
    "Los Rosales de Usaquén",
    "Bosque Medina",
    "Soratama",
    "Puente Norte",
    "Carmel Club",
    "Country Club",
    "La Antigua",
    "Higueras",
    "Los Cedros Occidental",
    "Chicó",
    "Chicó Norte",
    "Chicó Norte II",
    "Rincón del Chicó",
    "Chicó Reservado",
    "El Nogal",
    "La Cabrera",
    "Los Rosales",
    "El Refugio",
    "Emaús",
    "Las Acacias",
    "Antiguo Country",
    "Pardo Rubio",
    "La Porciúncula",
    "Marly",
    "Juan XXIII",
    "Niza",
    "Niza Norte",
    "Niza Antigua",
    "Colina Campestre",
    "Colina",
    "Britalia Norte",
    "La Alborada Norte",
    "Prado Veraniego",
    "Prado Veraniego Norte",
    "Prado Veraniego Sur",
    "San José de Bavaria",
    "Gilmar",
    "Tibabuyes",
    "Pinar de Suba",
    "Gratamira",
    "Las Villas",
    "El Batán",
    "La Floresta Norte",
    "El Plan",
    "Fontanar del Río",
    "Lombardía",
    "Casablanca Suba",
    "La Toscana",
    "El Rincón",
    "Ciudad Jardín Norte",
    "Pasadena",
    "Ilarco",
    "Morato",
    "La Castellana",
    "Modelia",
    "Normandía",
    "La Soledad de Normandía",
    "Bosques de Modelia",
    "Hayuelos",
    "Capellanía",
    "La Felicidad",
    "Castilla",
    "Salitre Occidental",
    "Salitre Oriental",
    "La Soledad",
    "La Esmeralda",
    "Nicolás de Federmán",
    "Polo Club",
    "Quinta Paredes",
    "Palermo",
    "Teusaquillo",
  ];
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://enfermeria-roxana.vercel.app";
  const canonicalUrl = `${siteUrl}/inicio`;
  const ogImage = `${siteUrl}/seo-og.jpg?v=3`;
  const seoKeywords = `enfermería domiciliaria bogotá, enfermería norte de bogotá, enfermera chapinero, enfermera usaquén, enfermería suba, cuidado en casa, enfermera a domicilio, turno 24/7, cuidados paliativos, acompañamiento hospitalario, ${zonasTicker.join(
    ", "
  )}`;

  // Detectar el tamaño de la pantalla y actualizar el estado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Cambia a "true" si la pantalla es más pequeña que "md"
    };

    // Agregar evento de cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Ejecutar al cargar
    handleResize();

    // Limpiar el evento al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Abrir el menú con retraso
  const handleMouseEnter = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current); // Cancelar cualquier cierre pendiente
    setIsServicesOpen(true);
  };

  // Cerrar el menú con retraso
  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // Ajustar el retraso según sea necesario (200ms)
  };

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Servicios de enfermería domiciliaria en casa para el cuidado de pacientes, con enfermeras jefes y auxiliares. Norte de Bogotá y Chapinero. Turnos 24/7 y acompañamiento hospitalario."
        />
        <meta
          name="keywords"
          content={seoKeywords}
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Roxana Enfermera" />
        <meta name="geo.region" content="CO-DC" />
        <meta name="geo.placename" content="Bogotá" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Roxana Enfermera | Norte de Bogotá"
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:description"
          content="Servicios de enfermería domiciliaria en casa para el cuidado de pacientes en el norte de Bogotá y Chapinero. Respuesta en minutos, enfermeras jefes y turnos 24/7."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Roxana Enfermera - contacto inmediato para enfermería a domicilio en Bogotá" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content="Roxana Enfermera" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <meta property="al:web:url" content={canonicalUrl} />
        {/* Facebook/LinkedIn usan OG; WhatsApp también */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content="Roxana Enfermera | Norte de Bogotá" />
        <meta
          property="twitter:description"
          content="Servicios de enfermería domiciliaria en casa para el cuidado de pacientes en el norte de Bogotá y Chapinero. Respuesta en minutos, enfermeras jefes y turnos 24/7."
        />
        <meta property="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Roxana Enfermera - contacta ya para enfermería a domicilio en Bogotá" />
        <meta name="twitter:site" content="@roxanaenfermera" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es-CO" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <meta name="theme-color" content="#0f766e" />
        <title>
          Roxana Enfermera | Norte de Bogotá y Chapinero
        </title>
        <style>{`
          @keyframes borderFlow {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 0 0, 200% 0; }
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeHealthCareService",
              name: "Roxana Enfermera",
              alternateName: "Enfermería Roxana",
              areaServed: ["Norte de Bogotá", "Chapinero"],
              serviceArea: zonasTicker.map((zona) => ({
                "@type": "Place",
                name: zona,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bogotá",
                  addressRegion: "Cundinamarca",
                  addressCountry: "CO",
                },
              })),
              serviceType: [
                "Enfermería domiciliaria 24/7",
                "Acompañamiento hospitalario",
                "Cuidados paliativos",
                "Turnos de enfermería",
                "Rehabilitación física de apoyo",
              ],
              telephone: "+57 313 611 4707",
              email: "roxanapatriciasagrealean@gmail.com",
              url: "https://enfermeriaroxana.com",
              availableLanguage: ["es-CO"],
            }),
          }}
        />
      </head>
      <body>
        <header className="bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo y Título */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Enfermería Roxana"
                  width={48}
                  height={48}
                  className="rounded-full shadow-md"
                  priority
                />
              </div>
              <div className="leading-tight">
                <h1 className="text-2xl font-bold">
                  Roxana <span className="text-teal-100">Enfermera</span>
                </h1>
              </div>
            </div>

            {/* Menú de navegación */}
            {!isMobile ? (
              <div className="hidden md:flex items-center space-x-6 text-base font-semibold">
                <a
                  className="flex items-center space-x-2 hover:text-teal-100 transition duration-200"
                  href="/inicio"
                >
                  <FiHome />
                  <span>Inicio</span>
                </a>
                <a
                  className="flex items-center space-x-2 hover:text-teal-100 transition duration-200"
                  href="/nosotros"
                >
                  <FiUser />
                  <span>Nosotros</span>
                </a>
                <div
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="/servicios"
                    className="hover:text-teal-100 flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    <MdMedicalServices />
                    <span className="ml-2">Servicios</span>
                    <span className="ml-1">▼</span>
                  </a>
                  {isServicesOpen && (
                    <ul
                      className="absolute bg-white text-teal-600 shadow-lg rounded-lg mt-2 w-64 z-10"
                      role="menu"
                    >
                      <li
                        className="hover:bg-gray-100 border-b border-gray-200"
                        role="menuitem"
                      >
                        <a
                          href="/servicios/enfermeria-domiciliaria"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Enfermería Domiciliaria 24/7
                        </a>
                      </li>
                      <li className="hover:bg-gray-100 border-b border-gray-200">
                        <a
                          href="/servicios/turnos-cuidadoras"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Turnos y cuidadoras
                        </a>
                      </li>
                      <li className="hover:bg-gray-100 border-b border-gray-200">
                        <a
                          href="/servicios/acomp-hospitalario"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Acompañamiento hospitalario
                        </a>
                      </li>
                      <li className="hover:bg-gray-100 border-b border-gray-200">
                        <a
                          href="/servicios/cuidados-paliativos"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Cuidados paliativos
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="/servicios/rehabilitacion-fisica"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Rehabilitación de apoyo
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
                <a
                  className="flex items-center space-x-2 hover:text-teal-100 transition duration-200"
                  href="/inicio#zonas"
                >
                  <FiMapPin />
                  <span>Zonas</span>
                </a>
                <a
                  className="flex items-center space-x-2 hover:text-teal-100 transition duration-200"
                  href="/inicio#testimonios"
                >
                  <FiPhone />
                  <span>Testimonios</span>
                </a>
                <a
                  className="flex items-center space-x-2 hover:text-teal-100 transition duration-200"
                  href="/contacto"
                >
                  <FiPhone />
                  <span>Contacto</span>
                </a>
              </div>
            ) : (
              <MobileMenu />
            )}
          </nav>
        </header>

        {/* Contenido principal */}
        <main>{children}</main>

        {/* Cintilla de zonas */}
        <section className="relative overflow-hidden border-t-4 border-b-4 border-[#15b36b] bg-gradient-to-r from-teal-50 via-white to-cyan-50 py-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-12 top-0 w-40 h-40 bg-teal-200/30 blur-3xl" />
            <div className="absolute right-0 -bottom-16 w-48 h-48 bg-cyan-200/30 blur-3xl" />
          </div>
          <div className="w-full px-0 relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-700 text-white text-xs font-semibold shadow">
                <FiMapPin className="text-white" />
                Cobertura activa
              </span>
              <span className="text-xs sm:text-sm text-teal-800/80">
                Usaquén • Chapinero • Suba norte • Cedritos • Chicó
              </span>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-[0_0_12px_rgba(21,179,107,0.25)] bg-white/80 backdrop-blur">
              <div
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{
                  background: "linear-gradient(90deg, #0fb872, #8ef1c1, #0fb872)",
                  backgroundSize: "300% 100%",
                  animation: "borderFlow 10s linear infinite",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-[4px]"
                style={{
                  background: "linear-gradient(90deg, #0fb872, #8ef1c1, #0fb872)",
                  backgroundSize: "300% 100%",
                  animation: "borderFlow 10s linear infinite",
                }}
              />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              <div className="flex animate-marquee-slow space-x-3 min-w-[200%] px-4 py-2">
                {[...zonasTicker, ...zonasTicker].map((zona, index) => (
                  <span
                    key={`${zona}-${index}`}
                    className="inline-flex items-center px-3 py-1.5 bg-white border border-teal-100 text-teal-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:-translate-y-0.5 transition transform"
                  >
                    <FiMapPin className="mr-2 text-teal-600 text-base sm:text-lg" />
                    {zona}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recordatorio de contacto accesible */}
        <section className="bg-white border-t border-b border-teal-50">
          <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-4 items-center">
            <div className="text-teal-800 font-semibold text-lg">
              ¿Prefieres agendar sin apps?
            </div>
            <div className="text-gray-700 space-y-1 text-sm md:text-base">
              <p>
                <span className="font-semibold text-teal-700">Correo:</span>{" "}
                <a
                  href="mailto:roxanapatriciasagrealean@gmail.com"
                  className="underline underline-offset-4 hover:text-teal-800"
                >
                  roxanapatriciasagrealean@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-teal-700">Celular:</span>{" "}
                <a
                  href="tel:+573136114707"
                  className="underline underline-offset-4 hover:text-teal-800"
                >
                  +57 313 611 4707
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/573136114707?text=Hola,%20quiero%20agendar%20enfermera%20a%20domicilio%20en%20Bogot%C3%A1%20norte."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-teal-700 transition"
              >
                WhatsApp
              </a>
              <a
                href="tel:+573136114707"
                className="inline-flex items-center border border-teal-200 text-teal-800 px-4 py-2 rounded-full font-semibold hover:bg-teal-50 transition"
              >
                Llamar
              </a>
            </div>
          </div>
        </section>

        {/* Botones flotantes */}
        <FloatingButtons />

        {/* Pie de página */}
        <Footer />
      </body>
    </html>
  );
}
