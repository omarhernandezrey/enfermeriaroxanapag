"use client";

import Image from "next/image";

export default function EnfermeriaDomiciliaria() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Imagen destacada */}
      <div className="relative">
        <div className="relative w-full h-[50vh]">
          <Image
            src="/images/enfermeria-domiciliaria.jpg"
            alt="Enfermería Domiciliaria"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
            Enfermería Domiciliaria
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-6">
          Cuidados especializados en tu hogar
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Nuestros servicios de enfermería domiciliaria están diseñados para
          brindar atención médica personalizada en la comodidad de tu hogar.
        </p>
        <ul className="list-disc pl-8 space-y-4">
          <li className="text-gray-700">
            <strong>Monitoreo y registro de signos vitales:</strong> Mantén un
            control constante de tu salud con nuestros especialistas.
          </li>
          <li className="text-gray-700">
            <strong>Administración de medicamentos y curaciones:</strong>{" "}
            Atención segura y profesional en todo momento.
          </li>
          <li className="text-gray-700">
            <strong>Cuidados postoperatorios:</strong> Facilita tu recuperación
            con nuestro soporte médico en casa.
          </li>
          <li className="text-gray-700">
            <strong>Apoyo emocional y comunicación constante con familiares:</strong>{" "}
            Garantizamos tranquilidad para ti y tus seres queridos.
          </li>
        </ul>
      </div>
    </div>
  );
}
