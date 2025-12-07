"use client";

import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons: React.FC = () => {
  const [offsetBottom, setOffsetBottom] = useState(24); // Distancia inicial desde el fondo
  const [isFooterVisible, setIsFooterVisible] = useState(false); // Controla la visibilidad del footer

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer"); // Selecciona el footer
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top; // Posición del footer
        const windowHeight = window.innerHeight; // Altura de la ventana

        if (footerTop < windowHeight) {
          // Si el footer es visible, ajusta el desplazamiento
          setOffsetBottom(windowHeight - footerTop + 24);
          setIsFooterVisible(true);
        } else {
          setOffsetBottom(24); // Mantén la posición inicial
          setIsFooterVisible(false);
        }
      }
    };

    handleScroll(); // Ejecuta al cargar la página
    window.addEventListener("scroll", handleScroll); // Detecta el scroll

    return () => window.removeEventListener("scroll", handleScroll); // Limpia el evento
  }, []);

  return (
    <div
      className={`fixed right-4 flex flex-col space-y-4 transition-all duration-300 z-50 ${
        isFooterVisible ? "opacity-90" : "opacity-100"
      }`}
      style={{ bottom: `${offsetBottom}px` }} // Ajusta la posición dinámicamente
    >
      {/* Botón de Llamada */}
      <a
        href="tel:+573136114707"
        className="relative group bg-red-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition duration-300"
        aria-label="Llamar ahora"
      >
        <FiPhoneCall className="h-6 w-6" />
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
          Llama ahora
        </span>
      </a>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/573136114707?text=Hola,%20necesito%20enfermera%20a%20domicilio%20en%20Bogot%C3%A1%20norte.%20%C2%BFTienen%20disponibilidad%20hoy%3F"
        className="relative group bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
          Escríbenos
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
