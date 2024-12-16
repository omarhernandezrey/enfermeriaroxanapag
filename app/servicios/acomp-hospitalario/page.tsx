"use client";

import Image from "next/image";

export default function AcompHospitalario() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Imagen destacada */}
      <div className="relative">
        <div className="relative w-full h-[50vh]">
          <Image
            src="/images/acomp-hospitalario.jpg"
            alt="Acompañamiento Hospitalario"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
            Acompañamiento Hospitalario
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-4">
          Atención en hospitales y clínicas
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Brindamos apoyo profesional durante la estancia hospitalaria de tus
          seres queridos, asegurando su comodidad y bienestar.
        </p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-3">
          <li className="text-lg text-gray-700">
            Supervisión durante procedimientos médicos.
          </li>
          <li className="text-lg text-gray-700">
            Apoyo en actividades básicas como alimentación e higiene.
          </li>
          <li className="text-lg text-gray-700">
            Comunicación constante con el personal médico y familiares.
          </li>
        </ul>
      </div>
    </div>
  );
}
