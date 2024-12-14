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
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Acompañamiento Hospitalario
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">
          Atención en hospitales y clínicas
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Brindamos apoyo profesional durante la estancia hospitalaria de tus
          seres queridos, asegurando su comodidad y bienestar.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Supervisión durante procedimientos médicos.</li>
          <li>Apoyo en actividades básicas como alimentación e higiene.</li>
          <li>Comunicación constante con el personal médico y familiares.</li>
        </ul>
      </div>
    </div>
  );
}
