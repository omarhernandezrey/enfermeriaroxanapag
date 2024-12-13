"use client";

import "./globals.css";
import dynamic from "next/dynamic";
import { useState } from "react";

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <html lang="es">
      <body>
        <header className="bg-teal-600 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Título */}
            <h1 className="text-2xl font-bold">Enfermería Roxana</h1>

            {/* Menú de navegación para pantallas grandes */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="/inicio" className="hover:underline">
                  Inicio
                </a>
              </li>

              {/* Servicios */}
              <li className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="hover:underline flex items-center focus:outline-none"
                >
                  Servicios <span className="ml-1">▼</span>
                </button>
                {isServicesOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-teal-600 shadow-lg rounded-lg w-56 z-10">
                    <li className="border-b border-gray-200 hover:bg-gray-100">
                      <a
                        href="/servicios/enfermera-basica"
                        className="block px-4 py-2 hover:text-teal-800"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Enfermera a Domicilio Básico
                      </a>
                    </li>
                    <li className="border-b border-gray-200 hover:bg-gray-100">
                      <a
                        href="/servicios/cuidador-adulto-mayor"
                        className="block px-4 py-2 hover:text-teal-800"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Cuidado Adulto Mayor
                      </a>
                    </li>
                    <li className="border-b border-gray-200 hover:bg-gray-100">
                      <a
                        href="/servicios/inyectologia"
                        className="block px-4 py-2 hover:text-teal-800"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Inyectología a Domicilio
                      </a>
                    </li>
                    <li className="border-b border-gray-200 hover:bg-gray-100">
                      <a
                        href="/servicios/servicio-enfermeras"
                        className="block px-4 py-2 hover:text-teal-800"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Servicio de Enfermeras
                      </a>
                    </li>
                    <li className="hover:bg-gray-100">
                      <a
                        href="/servicios/cuidado-hospitalario"
                        className="block px-4 py-2 hover:text-teal-800"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Cuidado Hospitalario
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="/nosotros" className="hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Contáctanos
                </a>
              </li>
            </ul>

            {/* Menú móvil */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
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
