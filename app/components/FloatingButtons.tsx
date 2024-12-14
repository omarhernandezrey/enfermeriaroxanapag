"use client";

import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [offsetBottom, setOffsetBottom] = useState(16); // Distancia del botón al fondo

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer"); // Selecciona el footer
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top; // Posición superior del footer
        const windowHeight = window.innerHeight; // Altura de la ventana
        if (footerTop < windowHeight) {
          // Si el footer es visible, ajusta la posición
          setOffsetBottom(windowHeight - footerTop + 16);
        } else {
          // Si no, mantenlos flotantes
          setOffsetBottom(16);
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // Escucha el scroll
    return () => window.removeEventListener("scroll", handleScroll); // Limpia el evento
  }, []);

  return (
    <div
      className="fixed right-4 flex flex-col space-y-4 transition-all duration-300"
      style={{ bottom: `${offsetBottom}px` }} // Ajusta dinámicamente la posición
    >
      {/* Botón de Llamar */}
      <a
        href="tel:+57 3136114707"
        className="relative group bg-red-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition animate-bounce"
        aria-label="Llamar ahora"
      >
        <FiPhoneCall className="h-6 w-6" />
        <span className="absolute top-0 -left-24 bg-gray-700 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
          Llama ahora
        </span>
      </a>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/3136114707?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20enfermería%20domiciliaria."
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition animate-bounce"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
