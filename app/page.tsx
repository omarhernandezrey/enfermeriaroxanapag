"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-600">
          Bienvenido a <span className="text-teal-800">Enfermería Roxana</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Servicios de cuidado profesional{" "}
          <span className="font-semibold">las 24 horas</span>.
        </p>
        <a
          href="/contacto"
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg hover:bg-teal-700 transition transform hover:scale-105"
        >
          Contáctanos
        </a>
      </div>

      {/* Imagen destacada */}
      <div className="mt-10">
        <Image
          src="/images/home-hero.jpg"
          alt="Atención profesional"
          width={1024} // Ajusta el tamaño según la imagen original
          height={768} // Ajusta el tamaño según la imagen original
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
