"use client";

import "./globals.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Carga dinámica de componentes grandes para optimizar el rendimiento
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const FloatingButtons = dynamic(() => import("./components/FloatingButtons"), {
  ssr: false,
});
const MobileMenu = dynamic(() => import("./components/MobileMenu"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false); // Detectar si es móvil

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

  return (
    <html lang="es">
      <body>
        <header className="bg-teal-600 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Título */}
            <h1 className="text-2xl font-bold">Enfermería Roxana</h1>

            {/* Menú de navegación */}
            {!isMobile ? (
              <ul className="hidden md:flex space-x-6">
                <li>
                  <a href="/inicio" className="hover:underline">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/nosotros" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="hover:underline">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:underline">
                    Contáctanos
                  </a>
                </li>
              </ul>
            ) : (
              <MobileMenu />
            )}
          </nav>
        </header>

        {/* Contenido principal */}
        <main>{children}</main>

        {/* Botones flotantes */}
        <FloatingButtons />

        {/* Pie de página */}
        <Footer />
      </body>
    </html>
  );
}
