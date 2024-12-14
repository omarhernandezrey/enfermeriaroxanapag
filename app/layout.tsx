"use client";

import "./globals.css";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { FiHome } from "react-icons/fi"; // Icono para Inicio
import { MdMedicalServices } from "react-icons/md";
import { FiPhone, FiUser } from "react-icons/fi";

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
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Estado del menú de servicios
  const menuTimeout = useRef<NodeJS.Timeout | null>(null); // Referencia para el temporizador del menú

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
      <body>
        <header className="bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo y Título */}
            <div className="flex items-center space-x-4">
              <img
                src="/images/logo.png"
                alt="Enfermería Roxana"
                className="h-12 w-12 rounded-full shadow-md"
              />
              <h1 className="text-2xl font-bold">
                Enfermería <span className="text-teal-300">Roxana</span>
              </h1>
            </div>

            {/* Menú de navegación */}
            {!isMobile ? (
              <ul className="hidden md:flex space-x-8 text-lg font-semibold">
                <li className="flex items-center space-x-2 hover:text-teal-300 transition duration-200">
                  <FiHome />
                  <a href="/inicio" className="hover:underline">
                    Inicio
                  </a>
                </li>
                <li className="flex items-center space-x-2 hover:text-teal-300 transition duration-200">
                  <FiUser />
                  <a href="/nosotros" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li
                  className="relative group hover:text-teal-300 transition duration-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="/servicios" className="hover:underline flex items-center">
                    <MdMedicalServices />
                    <span className="ml-2">Servicios</span>
                    <span className="ml-1">▼</span>
                  </a>
                  {isServicesOpen && (
                    <ul className="absolute bg-white text-teal-600 shadow-lg rounded-lg mt-2 w-56 z-10">
                      <li className="hover:bg-gray-100 border-b border-gray-200">
                        <a
                          href="/servicios/enfermeria-domiciliaria"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Enfermería Domiciliaria
                        </a>
                      </li>
                      <li className="hover:bg-gray-100 border-b border-gray-200">
                        <a
                          href="/servicios/turnos-cuidadoras"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Turnos de Cuidadoras
                        </a>
                      </li>
                      <li className="hover:bg-gray-100 border-b border-gray-200">
                        <a
                          href="/servicios/acomp-hospitalario"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Acompañamiento Hospitalario
                        </a>
                      </li>
                      <li className="hover:bg-gray-100 border-b border-gray-200">
                        <a
                          href="/servicios/cuidados-paliativos"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Cuidados Paliativos
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="/servicios/rehabilitacion-fisica"
                          className="block px-4 py-2 hover:text-teal-800"
                        >
                          Rehabilitación Física
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="flex items-center space-x-2 hover:text-teal-300 transition duration-200">
                  <FiPhone />
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
