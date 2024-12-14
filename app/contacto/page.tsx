"use client";

import emailjs from "emailjs-com";
import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qp54oaf",
        "template_3hq4kxx",
        e.currentTarget,
        "x2atfk6sd3q0ZLUMV"
      )
      .then(
        (result) => {
          console.log("Mensaje enviado:", result.text);
          alert("Mensaje enviado exitosamente.");
        },
        (error) => {
          console.error("Error al enviar mensaje:", error.text);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white h-72 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Contáctanos</h1>
        <p className="mt-2 text-lg md:text-xl">
          Estamos aquí para resolver tus dudas y ayudarte.
        </p>
        <p className="mt-4 font-medium text-lg">
          Hola, soy <span className="font-bold">Roxana Patricia Sagre Alean</span>, Enfermera Jefe.
          ¡Contáctate conmigo para cuidar de tus seres queridos!
        </p>
      </div>

      {/* Formulario de contacto */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
          Envíanos un mensaje
        </h2>
        <form
          onSubmit={sendEmail}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="nombre"
                className="block text-gray-700 font-medium"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="from_name"
                required
                className="mt-2 p-3 w-full border rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Escribe tu nombre completo"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="reply_to"
                required
                className="mt-2 p-3 w-full border rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Escribe tu correo electrónico"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="mensaje"
              className="block text-gray-700 font-medium"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="message"
              rows={5}
              required
              className="mt-2 p-3 w-full border rounded-lg focus:ring-teal-500 focus:border-teal-500"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      {/* Información adicional de contacto */}
      <div className="bg-teal-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Contáctanos directamente
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Botón de Teléfono */}
            <a
              href="tel:+573136114707"
              className="flex items-center gap-4 bg-white text-teal-600 px-6 py-4 rounded-lg shadow-lg hover:bg-teal-100 hover:scale-105 transition-transform duration-300"
            >
              <FaPhoneAlt className="text-2xl" />
              <span className="text-lg font-semibold">Llámanos</span>
            </a>
            {/* Botón de WhatsApp */}
            <a
              href="https://wa.me/573136114707?text=Hola,%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Enfermería%20Roxana."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-lg font-semibold">WhatsApp</span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">
              Síguenos en Redes Sociales
            </h2>
            <div className="flex justify-center space-x-6 text-3xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
