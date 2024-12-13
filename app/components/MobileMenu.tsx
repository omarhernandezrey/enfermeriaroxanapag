"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos de menú y cerrar (Instala react-icons si no lo tienes)

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú móvil
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Estado para abrir/cerrar el submenú de servicios

  // Función para cerrar el menú principal y submenús al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón del menú móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-3xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menú deslizable */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-teal-600 text-white w-48 rounded-lg shadow-lg z-10">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="/inicio"
                className="hover:text-teal-300"
                onClick={handleLinkClick} // Cierra el menú al hacer clic
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/nosotros"
                className="hover:text-teal-300"
                onClick={handleLinkClick} // Cierra el menú al hacer clic
              >
                Nosotros
              </a>
            </li>

            {/* Menú desplegable de Servicios */}
            <li className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-teal-300 focus:outline-none"
              >
                Servicios <span className="ml-1">▼</span>
              </button>
              {isServicesOpen && (
                <ul className="absolute top-0 left-48 bg-white text-teal-600 shadow-lg rounded-lg w-56 z-20">
                  <li className="border-b border-gray-200 hover:bg-gray-100">
                    <a
                      href="/servicios/enfermera-basica"
                      className="block px-4 py-2 hover:text-teal-800"
                      onClick={handleLinkClick} // Cierra el menú al hacer clic
                    >
                      Enfermera a Domicilio Básico
                    </a>
                  </li>
                  <li className="border-b border-gray-200 hover:bg-gray-100">
                    <a
                      href="/servicios/cuidador-adulto-mayor"
                      className="block px-4 py-2 hover:text-teal-800"
                      onClick={handleLinkClick} // Cierra el menú al hacer clic
                    >
                      Cuidado Adulto Mayor
                    </a>
                  </li>
                  <li className="border-b border-gray-200 hover:bg-gray-100">
                    <a
                      href="/servicios/inyectologia"
                      className="block px-4 py-2 hover:text-teal-800"
                      onClick={handleLinkClick} // Cierra el menú al hacer clic
                    >
                      Inyectología a Domicilio
                    </a>
                  </li>
                  <li className="border-b border-gray-200 hover:bg-gray-100">
                    <a
                      href="/servicios/servicio-enfermeras"
                      className="block px-4 py-2 hover:text-teal-800"
                      onClick={handleLinkClick} // Cierra el menú al hacer clic
                    >
                      Servicio de Enfermeras
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="/servicios/cuidado-hospitalario"
                      className="block px-4 py-2 hover:text-teal-800"
                      onClick={handleLinkClick} // Cierra el menú al hacer clic
                    >
                      Cuidado Hospitalario
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/contacto"
                className="hover:text-teal-300"
                onClick={handleLinkClick} // Cierra el menú al hacer clic
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
