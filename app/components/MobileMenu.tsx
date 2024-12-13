"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos de menú y cerrar (Instala react-icons si no lo tienes)

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

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
        <div className="absolute top-12 right-0 bg-teal-600 text-white w-48 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="/inicio"
                className="hover:text-teal-300"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/nosotros"
                className="hover:text-teal-300"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/servicios"
                className="hover:text-teal-300"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="hover:text-teal-300"
                onClick={() => setIsOpen(false)}
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
