"use client";

import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado del menú móvil
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Estado del submenú de servicios

  // Cerrar menú principal y submenú
  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  // Abrir o cerrar el submenú de Servicios
  const toggleServicesMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Evitar redirección
    setIsServicesOpen((prev) => !prev);
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
            <li className="flex items-center space-x-3 px-3 py-2 hover:bg-teal-500 transition-all duration-200 rounded-lg">
              <FiHome className="text-2xl" />
              <a href="/inicio" onClick={closeMenu} className="hover:text-teal-300">
                Inicio
              </a>
            </li>
            <li className="flex items-center space-x-3 px-3 py-2 hover:bg-teal-500 transition-all duration-200 rounded-lg">
              <FiUser className="text-2xl" />
              <a href="/nosotros" onClick={closeMenu} className="hover:text-teal-300">
                Nosotros
              </a>
            </li>
            <li className="flex items-center space-x-3 px-3 py-2 hover:bg-teal-500 transition-all duration-200 rounded-lg">
              <FiMapPin className="text-2xl" />
              <a href="/inicio#zonas" onClick={closeMenu} className="hover:text-teal-300">
                Zonas VIP
              </a>
            </li>
            <li>
              <div className="flex items-center justify-between px-3 py-2 hover:bg-teal-500 transition-all duration-200 rounded-lg">
                <a href="/servicios" onClick={closeMenu} className="flex items-center">
                  <MdMedicalServices className="text-2xl" />
                  <span className="ml-2">Servicios</span>
                </a>
                <button
                  onClick={toggleServicesMenu}
                  className="focus:outline-none text-lg"
                  aria-label="Toggle sub-menu"
                >
                  {isServicesOpen ? "▲" : "▼"}
                </button>
              </div>
              {isServicesOpen && (
                <ul className="mt-2 bg-white text-teal-600 shadow-lg rounded-lg">
                  {[
                    { href: "/servicios/enfermeria-domiciliaria", label: "Enfermería Domiciliaria" },
                    { href: "/servicios/turnos-cuidadoras", label: "Turnos de Cuidadoras" },
                    { href: "/servicios/acomp-hospitalario", label: "Acompañamiento Hospitalario" },
                    { href: "/servicios/cuidados-paliativos", label: "Cuidados Paliativos" },
                    { href: "/servicios/rehabilitacion-fisica", label: "Rehabilitación Física" },
                  ].map((item) => (
                    <li
                      key={item.href}
                      className="hover:bg-gray-100 border-b border-gray-200 flex items-center space-x-3 px-4 py-2 last:border-none"
                    >
                      <MdMedicalServices className="text-xl" />
                      <a href={item.href} onClick={closeMenu} className="hover:text-teal-800">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="flex items-center space-x-3 px-3 py-2 hover:bg-teal-500 transition-all duration-200 rounded-lg">
              <FiPhone className="text-2xl" />
              <a href="/inicio#testimonios" onClick={closeMenu} className="hover:text-teal-300">
                Testimonios
              </a>
            </li>
            <li className="flex items-center space-x-3 px-3 py-2 hover:bg-teal-500 transition-all duration-200 rounded-lg">
              <FiPhone className="text-2xl" />
              <a href="/contacto" onClick={closeMenu} className="hover:text-teal-300">
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
              className="hover:text-white"
            >
              <FaFacebookSquare className="text-3xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://wa.me/573136114707"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
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
