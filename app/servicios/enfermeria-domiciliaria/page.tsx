"use client";

import Image from "next/image";

export default function EnfermeriaDomiciliaria() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Imagen destacada */}
      <div className="relative">
        <div className="relative w-full h-[50vh]">
          <Image
            src="/images/enfermeria-domiciliaria.jpg" // Asegúrate de colocar esta imagen en public/images/
            alt="Enfermería Domiciliaria"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Enfermería Domiciliaria
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">
          Cuidados especializados en tu hogar
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Nuestros servicios de enfermería domiciliaria están diseñados para
          brindar atención médica personalizada en la comodidad de tu hogar.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Monitoreo y registro de signos vitales.</li>
          <li>Administración de medicamentos y curaciones.</li>
          <li>Cuidados postoperatorios.</li>
          <li>Apoyo emocional y comunicación constante con familiares.</li>
        </ul>
      </div>
    </div>
  );
}
