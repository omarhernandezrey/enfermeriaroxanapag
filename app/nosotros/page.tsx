"use client";

import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/nosotros-hero.jpg"
            alt="Equipo profesional"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-600 to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Conoce a Enfermería Roxana
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Innovación, cuidado humano y compromiso con tu bienestar.
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Misión */}
          <div>
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-700">
              Brindar servicios de cuidado profesional, personalizado y humano a
              pacientes de todas las edades. Nos esforzamos por mejorar la calidad
              de vida de nuestros pacientes y sus familias.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Nuestra Visión</h2>
            <p className="text-lg text-gray-700">
              Ser líderes en atención domiciliaria y hospitalaria, reconocidos
              por nuestra innovación, empatía y compromiso con el bienestar de
              quienes confían en nosotros.
            </p>
          </div>
        </div>
      </div>

      {/* Nuestro Equipo */}
      <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
          Conoce a Nuestro Equipo
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Integrante 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
            <Image
              src="/images/roxana-sagre.jpg"
              alt="Roxana Sagre"
              width={400}
              height={160}
              objectFit="cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-600">Roxana Sagre</h3>
              <p className="text-gray-700 mt-2">Fundadora y Enfermera Jefe</p>
            </div>
          </div>
          {/* Integrante 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
            <Image
              src="/images/andrea-rey.jpg"
              alt="Andrea Rey"
              width={400}
              height={160}
              objectFit="cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-600">Andrea Rey</h3>
              <p className="text-gray-700 mt-2">Enfermera Especialista</p>
            </div>
          </div>
          {/* Integrante 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
            <Image
              src="/images/luz-jasmin.jpg"
              alt="Luz Jasmin Hernández"
              width={400}
              height={160}
              objectFit="cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-teal-600">
                Luz Jasmin Hernández
              </h3>
              <p className="text-gray-700 mt-2">Enfermera Especialista</p>
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="relative bg-teal-600 text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-600 to-transparent opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-6 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Valores</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-white max-w-3xl mx-auto">
            <li>
              <strong>Compromiso:</strong> Siempre ponemos a nuestros pacientes primero.
            </li>
            <li>
              <strong>Empatía:</strong> Brindamos cuidado humano y sensible.
            </li>
            <li>
              <strong>Excelencia:</strong> Nos esforzamos por superar las expectativas.
            </li>
            <li>
              <strong>Innovación:</strong> Usamos tecnología avanzada para ofrecer mejores servicios.
            </li>
            <li>
              <strong>Transparencia:</strong> Comunicamos de manera clara y honesta con las familias.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
