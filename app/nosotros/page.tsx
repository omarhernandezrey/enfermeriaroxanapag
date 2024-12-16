"use client";

import Image from "next/image";
import {
  FaHandsHelping,
  FaHeart,
  FaStar,
  FaLightbulb,
  FaUserCheck,
} from "react-icons/fa";

export default function Nosotros() {
  const teamMembers = [
    {
      name: "Roxana Sagre",
      role: "Fundadora y Enfermera Jefe",
      image: "/images/roxana-sagre.jpg",
    },
    {
      name: "Andrea Rey",
      role: "Enfermera Especialista",
      image: "/images/andrea-rey.jpg",
    },
    {
      name: "Luz Jasmin Hernández",
      role: "Enfermera Especialista",
      image: "/images/luz-jasmin.jpg",
    },
  ];

  const values = [
    {
      icon: <FaHandsHelping />,
      title: "Compromiso",
      description: "Siempre ponemos a nuestros pacientes primero.",
    },
    {
      icon: <FaHeart />,
      title: "Empatía",
      description: "Brindamos cuidado humano y sensible.",
    },
    {
      icon: <FaStar />,
      title: "Excelencia",
      description: "Nos esforzamos por superar las expectativas.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovación",
      description: "Usamos tecnología avanzada para mejorar los servicios.",
    },
    {
      icon: <FaUserCheck />,
      title: "Transparencia",
      description: "Comunicamos de manera clara y honesta.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/roxana-sagre.jpg"
            alt="Equipo profesional"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-600 to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Conoce a Enfermería Roxana
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Innovación, cuidado humano y compromiso con tu bienestar.
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700">
              Brindar servicios de cuidado profesional, personalizado y humano
              a pacientes de todas las edades. Nos esforzamos por mejorar la
              calidad de vida de nuestros pacientes y sus familias.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              Nuestra Visión
            </h2>
            <p className="text-lg text-gray-700">
              Ser líderes en atención domiciliaria y hospitalaria, reconocidos
              por nuestra innovación, empatía y compromiso con el bienestar de
              quienes confían en nosotros.
            </p>
          </div>
        </div>
      </div>

      {/* Nuestro Equipo */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
            Conoce a Nuestro Equipo
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-teal-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Valores</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg text-center hover:scale-105 transition duration-300"
              >
                <div className="flex items-center justify-center mb-4 text-5xl text-yellow-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
          Testimonios
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-3xl mx-auto">
          <p className="text-lg italic text-gray-700">
            &quot;Gracias al equipo de Enfermería Roxana, mi madre recibió el
            mejor cuidado durante su recuperación. ¡Son los mejores!&quot;
          </p>
          <span className="block mt-4 text-teal-600 font-semibold">
            - Cliente Satisfecho
          </span>
        </div>
      </div>

      {/* Llamada a la acción */}
      <div className="bg-teal-500 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas nuestros servicios?
          </h2>
          <p className="text-lg mb-6">
            Contáctanos hoy mismo para brindarte la mejor atención profesional y
            humana.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg shadow-lg font-semibold text-lg hover:bg-teal-100 transition transform hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
