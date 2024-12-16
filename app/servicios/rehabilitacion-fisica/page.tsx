"use client";

import Image from "next/image";

export default function RehabilitacionFisica() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Imagen destacada */}
      <div className="relative">
        <div className="relative w-full h-[50vh]">
          <Image
            src="/images/rehabilitacion-fisica.jpg"
            alt="Rehabilitación Física"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
            Rehabilitación Física
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-6 text-center">
          Apoyo Integral en la Recuperación Física
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 text-center">
          Nuestras enfermeras y cuidadoras trabajan de manera conjunta con los
          fisioterapeutas y médicos asignados al paciente, garantizando un
          seguimiento continuo de los planes de rehabilitación.
        </p>

        {/* Beneficios clave */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Ejercicios Personalizados */}
          <div className="flex items-start space-x-4">
            <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c2.28 0 4.014-.96 4.49-2.192M18.424 8.928c.917 1.19 1.476 2.735 1.576 4.528M15 20a9 9 0 11-6 0M9 9h.01"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-600">
                Ejercicios Personalizados
              </h3>
              <p className="text-gray-700">
                Realizamos ejercicios guiados y adaptados según las indicaciones
                del fisioterapeuta asignado.
              </p>
            </div>
          </div>

          {/* Seguimiento Continuo */}
          <div className="flex items-start space-x-4">
            <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-600">
                Seguimiento Continuo
              </h3>
              <p className="text-gray-700">
                Nuestras enfermeras monitorean los progresos del paciente y
                reportan avances al médico o fisioterapeuta.
              </p>
            </div>
          </div>

          {/* Coordinación con Profesionales */}
          <div className="flex items-start space-x-4">
            <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14h4m1 2h-6m4-10h-4M5 7h14"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-600">
                Coordinación con Profesionales
              </h3>
              <p className="text-gray-700">
                Trabajamos en equipo con fisioterapeutas y médicos para
                garantizar la efectividad del plan de rehabilitación.
              </p>
            </div>
          </div>

          {/* Documentación de Progresos */}
          <div className="flex items-start space-x-4">
            <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M10 14h10M10 18h6"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-600">
                Documentación de Progresos
              </h3>
              <p className="text-gray-700">
                Se documentan los avances para garantizar la adherencia a los
                objetivos establecidos por los especialistas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
