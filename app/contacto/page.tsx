"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

export default function Contacto() {
  const [toast, setToast] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (text: string, type: "success" | "error") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 4000);
  };

  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_qp54oaf";
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_3hq4kxx";
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "x2atfk6sd3q0ZLUMV";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      showToast(
        "No se pudo enviar desde el formulario. Escríbenos a roxanapatriciasagrealean@gmail.com o por WhatsApp.",
        "error"
      );
      return;
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.currentTarget,
        publicKey
      )
      .then(
        (result) => {
          console.log("Mensaje enviado:", result.text);
          showToast("Mensaje enviado exitosamente.", "success");
        },
        (error) => {
          const errorText =
            typeof error?.text === "string"
              ? error.text
              : typeof error === "string"
              ? error
              : "";
          const isInvalidGrant =
            errorText.toLowerCase().includes("invalid grant") ||
            errorText.toLowerCase().includes("gmail_api");

          console.error("Error al enviar mensaje:", errorText || error);

          if (isInvalidGrant) {
            showToast(
              "La conexión Gmail del formulario caducó. Reautorízala en EmailJS. Mientras tanto, escríbenos a roxanapatriciasagrealean@gmail.com o por WhatsApp.",
              "error"
            );
          } else {
            showToast(
              "Ocurrió un error al enviar el mensaje. Escríbenos directo a roxanapatriciasagrealean@gmail.com o por WhatsApp.",
              "error"
            );
          }
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {toast && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`rounded-xl px-5 py-4 shadow-2xl border-2 max-w-sm ${
              toast.type === "success"
                ? "bg-white text-teal-900 border-teal-300"
                : "bg-white text-rose-900 border-rose-300"
            }`}
          >
            <p className="font-bold text-base tracking-wide">
              {toast.type === "success" ? "Enviado" : "Aviso"}
            </p>
            <p className="text-sm mt-1 leading-snug">{toast.text}</p>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white h-72 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Contáctanos</h1>
        <p className="mt-2 text-lg md:text-xl">
          Estamos aquí para resolver tus dudas y cuidar a tu familiar.
        </p>
        <p className="mt-4 font-medium text-lg">
          Hola, soy{" "}
          <span className="font-bold">Roxana Patricia Sagre Alean</span>,
          enfermera con más de 15 años en hospitales y aún más experiencia en servicios domiciliarios, dueña de Enfermería Roxana. Si necesitas una enfermera para tu familia, escríbeme y coordinamos de inmediato.
        </p>
      </div>

      {/* Formulario de contacto */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
          Envíanos un mensaje
        </h2>
        <div className="bg-teal-50 border border-teal-100 text-teal-800 rounded-lg p-4 mb-6 text-center text-sm sm:text-base">
          También puedes escribirnos o llamarnos directamente:
          <div className="mt-2 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-1 sm:space-y-0 font-semibold">
            <a
              href="mailto:roxanapatriciasagrealean@gmail.com"
              className="underline underline-offset-4 hover:text-teal-900"
            >
              roxanapatriciasagrealean@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="tel:+573136114707"
              className="underline underline-offset-4 hover:text-teal-900"
            >
              +57 313 611 4707
            </a>
          </div>
        </div>
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
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-extrabold text-center mb-10 tracking-wide">
            Contáctanos Directamente
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Botón de Teléfono */}
            <a
              href="tel:+573136114707"
              className="flex items-center gap-4 bg-white text-teal-700 px-8 py-5 rounded-full shadow-lg hover:bg-teal-100 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <FaPhoneAlt className="text-3xl" />
              <span className="text-lg font-bold">Llámanos</span>
            </a>
            {/* Botón de WhatsApp */}
            <a
              href="https://wa.me/573136114707?text=Hola,%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Enfermería%20Roxana."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 text-white px-8 py-5 rounded-full shadow-lg hover:bg-green-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <FaWhatsapp className="text-3xl" />
              <span className="text-lg font-bold">WhatsApp</span>
            </a>
          </div>

          <div className="mt-10 text-center text-sm sm:text-base text-white/90">
            ¿Prefieres email o llamada tradicional? Escríbenos a{" "}
            <a
              href="mailto:roxanapatriciasagrealean@gmail.com"
              className="font-semibold underline underline-offset-4 hover:text-white"
            >
              roxanapatriciasagrealean@gmail.com
            </a>{" "}
            o llama al{" "}
            <a
              href="tel:+573136114707"
              className="font-semibold underline underline-offset-4 hover:text-white"
            >
              +57 313 611 4707
            </a>
            .
          </div>

          {/* Redes sociales */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
              Síguenos en Redes Sociales
            </h2>
            <div className="flex justify-center items-center gap-8 text-4xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-400 transition-transform transform hover:scale-125 duration-300"
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
