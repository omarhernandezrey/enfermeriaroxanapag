"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Inicio() {
  const testimonios = [
    {
      comentario:
        "Gracias a Enfermería Roxana, mi padre tuvo el mejor cuidado en casa durante su recuperación. Su equipo es increíble.",
      nombre: "Ana María Rodríguez",
    },
    {
      comentario:
        "Contraté los servicios de acompañamiento hospitalario y quedé completamente satisfecho. Muy profesionales.",
      nombre: "Carlos Eduardo Martínez",
    },
    {
      comentario:
        "El servicio de enfermería domiciliaria es excelente. Mi abuela está en las mejores manos. Lo recomiendo al 100%.",
      nombre: "Juliana López",
    },
    {
      comentario:
        "El equipo es muy amable y siempre están dispuestos a ayudar. El apoyo emocional que brindan es invaluable.",
      nombre: "Laura Camila Gutiérrez",
    },
    {
      comentario:
        "Siempre pongo todo mi esfuerzo para garantizar el bienestar de mis pacientes. Trabajar aquí me llena de orgullo.",
      nombre: "Roxana Sagre - ENFERMERA",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonios.length]);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Cuidado profesional"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-600 to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Atención Profesional y Humana
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Cuidado personalizado las 24 horas, los 7 días de la semana.
          </p>
          <a
            href="/contacto"
            className="mt-6 inline-block bg-white text-teal-600 px-6 py-3 rounded-full shadow-lg font-semibold text-lg hover:bg-teal-100 transition transform hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Sobre nosotros */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
          Sobre Nosotros
        </h2>
        <p className="text-lg text-gray-700 text-center">
          En <strong>Enfermería Roxana</strong>, nos dedicamos a ofrecer un
          cuidado integral y personalizado, adaptado a las necesidades únicas de
          cada paciente. Contamos con un equipo altamente capacitado de
          enfermeras y cuidadoras, comprometidas con brindar no solo atención
          médica de calidad, sino también acompañamiento humano que garantiza la
          salud y el bienestar de nuestros usuarios y sus familias.
        </p>
      </div>

      {/* Servicios Destacados */}
      <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
          Servicios Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Servicio para niños */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
            <Image
              src="/images/servicio-ninos.jpg"
              alt="Cuidado de Niños"
              width={400}
              height={160}
              objectFit="cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-600">Cuidado de Niños</h3>
              <p className="text-gray-700 mt-2">
                Atención especializada para niños, asegurando su bienestar y
                desarrollo en un entorno seguro y cómodo.
              </p>
              <a
                href="/servicios#ninos"
                className="text-teal-600 font-semibold mt-4 inline-block hover:underline"
              >
                Leer más
              </a>
            </div>
          </div>

          {/* Servicio para adultos mayores */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
            <Image
              src="/images/servicio-adultos-mayores.jpg"
              alt="Cuidado de Adultos Mayores"
              width={400}
              height={160}
              objectFit="cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-600">
                Cuidado de Adultos Mayores
              </h3>
              <p className="text-gray-700 mt-2">
                Servicios de acompañamiento y cuidado especializado para
                garantizar la calidad de vida de los adultos mayores.
              </p>
              <a
                href="/servicios#adultos-mayores"
                className="text-teal-600 font-semibold mt-4 inline-block hover:underline"
              >
                Leer más
              </a>
            </div>
          </div>

          {/* Servicio para personas con discapacidades */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
            <Image
              src="/images/servicio-discapacitados.jpg"
              alt="Cuidado para Personas con Discapacidades"
              width={400}
              height={160}
              objectFit="cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-600">
                Atención para Personas con Discapacidades
              </h3>
              <p className="text-gray-700 mt-2">
                Apoyo integral para personas con discapacidades, adaptado a sus
                necesidades específicas.
              </p>
              <a
                href="/servicios#discapacitados"
                className="text-teal-600 font-semibold mt-4 inline-block hover:underline"
              >
                Leer más
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonios dinámicos */}
      <div className="bg-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Lo que dicen nuestros clientes y equipo
          </h2>
          <div className="relative max-w-xl mx-auto bg-white text-teal-600 p-6 rounded-lg shadow-lg text-center">
            <p className="italic text-lg">
              &quot;{testimonios[currentIndex].comentario}&quot;
            </p>
            <p className="mt-4 font-bold">- {testimonios[currentIndex].nombre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
