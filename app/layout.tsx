"use client";

import "./globals.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiHome, FiUser, FiPhone } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";

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
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <html lang="es">
      <head>
        <title>Enfermería Domiciliaria</title>
        <meta
          name="description"
          content="Servicios de enfermería profesional y humanizada, disponibles las 24 horas para el bienestar de tus seres queridos."
        />
        {/* Favicon configurado correctamente */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <header className="bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Enfermería Domiciliaria"
                  width={48}
                  height={48}
                  className="rounded-full shadow-md object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold">
                Enfermería <span className="text-teal-300">Domiciliaria</span>
              </h1>
            </div>

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

        <main>{children}</main>

        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
