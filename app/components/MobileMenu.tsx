"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiPhone } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado del menú móvil
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Estado del submenú de servicios

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(event.target as Node)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón del menú móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-3xl focus:outline-none focus:ring-2 focus:ring-teal-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Fondo oscuro con desenfoque */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-20"
          onClick={closeMenu}
        ></div>
      )}

      {/* Menú deslizable */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-64 bg-teal-600 text-white shadow-lg z-30 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Botón de cerrar */}
          <button
            onClick={closeMenu}
            className="self-end p-4 text-3xl focus:outline-none focus:ring-2 focus:ring-teal-300"
            aria-label="Close menu"
          >
            <FiX />
          </button>

          {/* Opciones del menú */}
          <ul className="flex flex-col space-y-4 p-4">
            {/* Inicio */}
            <li className="flex items-center space-x-3 border border-white rounded-lg px-3 py-2 hover:bg-teal-500 transition-all duration-200">
              <FiHome className="text-2xl" />
              <a
                href="/inicio"
                className="hover:text-teal-300 transition-colors duration-200"
                onClick={closeMenu}
              >
                Inicio
              </a>
            </li>

            {/* Nosotros */}
            <li className="flex items-center space-x-3 border border-white rounded-lg px-3 py-2 hover:bg-teal-500 transition-all duration-200">
              <FiUser className="text-2xl" />
              <a
                href="/nosotros"
                className="hover:text-teal-300 transition-colors duration-200"
                onClick={closeMenu}
              >
                Nosotros
              </a>
            </li>

            {/* Menú desplegable de Servicios */}
            <li>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full border border-white rounded-lg px-3 py-2 hover:bg-teal-500 focus:outline-none transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <MdMedicalServices className="text-2xl" />
                  <span>Servicios</span>
                </div>
                <span>{isServicesOpen ? "▲" : "▼"}</span>
              </button>
              {isServicesOpen && (
                <ul className="mt-2 bg-white text-teal-600 shadow-lg rounded-lg">
                  <li className="hover:bg-gray-100 border-b border-gray-200 flex items-center space-x-3 px-4 py-2">
                    <MdMedicalServices className="text-xl" />
                    <a
                      href="/servicios/enfermeria-domiciliaria"
                      className="hover:text-teal-800 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      Enfermería Domiciliaria
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200 flex items-center space-x-3 px-4 py-2">
                    <MdMedicalServices className="text-xl" />
                    <a
                      href="/servicios/turnos-cuidadoras"
                      className="hover:text-teal-800 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      Turnos de Cuidadoras
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200 flex items-center space-x-3 px-4 py-2">
                    <MdMedicalServices className="text-xl" />
                    <a
                      href="/servicios/acomp-hospitalario"
                      className="hover:text-teal-800 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      Acompañamiento Hospitalario
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 border-b border-gray-200 flex items-center space-x-3 px-4 py-2">
                    <MdMedicalServices className="text-xl" />
                    <a
                      href="/servicios/cuidados-paliativos"
                      className="hover:text-teal-800 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      Cuidados Paliativos
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 flex items-center space-x-3 px-4 py-2">
                    <MdMedicalServices className="text-xl" />
                    <a
                      href="/servicios/rehabilitacion-fisica"
                      className="hover:text-teal-800 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      Rehabilitación Física
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Contáctanos */}
            <li className="flex items-center space-x-3 border border-white rounded-lg px-3 py-2 hover:bg-teal-500 transition-all duration-200">
              <FiPhone className="text-2xl" />
              <a
                href="/contacto"
                className="hover:text-teal-300 transition-colors duration-200"
                onClick={closeMenu}
              >
                Contáctanos
              </a>
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mt-auto p-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <FaFacebookSquare className="text-3xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://wa.me/573136114707"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
