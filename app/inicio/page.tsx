"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ServicioCard = ({ imageSrc, title, description, link }: any) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
    <div className="relative h-48 w-full">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-teal-600">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={link}
        className="text-teal-600 font-semibold mt-4 inline-block hover:underline"
      >
        Leer más
      </a>
    </div>
  </div>
);

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

  const turnos = [
    {
      title: "Enfermería 12 horas (Día)",
      description:
        "Turno diurno ideal para cuidado extendido durante el día, asegurando la mejor atención para tus seres queridos.",
      message:
        "Hola, estoy interesado en contratar el turno de Enfermería de 12 horas durante el día. ¿Me pueden dar más información, por favor?",
    },
    {
      title: "Enfermería 8 horas o 6 horas",
      description:
        "Turnos flexibles para adaptarse a tus necesidades específicas, ya sea para cuidado parcial o supervisión puntual.",
      message:
        "Hola, estoy interesado en contratar el turno de Enfermería de 8 o 6 horas. ¿Me pueden dar más información, por favor?",
    },
    {
      title: "Enfermería solo de noche",
      description:
        "Turno nocturno para garantizar la tranquilidad y el cuidado continuo durante la noche.",
      message:
        "Hola, estoy interesado en contratar el turno de Enfermería solo de noche. ¿Me pueden dar más información, por favor?",
    },
    {
      title: "Enfermería turnos 24x24",
      description:
        "Turno continuo con cambios diarios, ideal para cuidado integral y supervisión constante.",
      message:
        "Hola, estoy interesado en contratar el turno de Enfermería 24x24. ¿Me pueden dar más información, por favor?",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Cuidado profesional"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-600 to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-md">
            Atención Profesional y Humana
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 text-center mb-8">
          ¿Quiénes Somos?
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          En <strong>Enfermería Roxana</strong>, nos especializamos en brindar
          un cuidado integral, humano y personalizado que supera todas las
          expectativas. Nuestro equipo de enfermeras altamente capacitadas, con
          años de experiencia en atención domiciliaria y hospitalaria, se
          dedica a garantizar el bienestar físico y emocional de cada paciente.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="/nosotros"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg hover:bg-teal-700 transition transform hover:scale-105"
          >
            Conoce Más
          </a>
        </div>
      </div>

      {/* Servicios Destacados */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 text-center mb-8">
            Servicios Destacados
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ServicioCard
              imageSrc="/images/servicio-ninos.jpg"
              title="Cuidado de Niños"
              description="Atención especializada para niños, asegurando su bienestar y desarrollo en un entorno seguro y cómodo."
              link="/servicios#ninos"
            />
            <ServicioCard
              imageSrc="/images/servicio-adultos-mayores.jpg"
              title="Cuidado de Adultos Mayores"
              description="Servicios de acompañamiento y cuidado especializado para garantizar la calidad de vida de los adultos mayores."
              link="/servicios#adultos-mayores"
            />
            <ServicioCard
              imageSrc="/images/servicio-discapacitados.jpg"
              title="Atención para Personas con Discapacidades"
              description="Apoyo integral para personas con discapacidades, adaptado a sus necesidades específicas."
              link="/servicios#discapacitados"
            />
          </div>
        </div>
      </div>

      {/* Testimonios dinámicos */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="relative max-w-xl mx-auto bg-white text-teal-600 p-6 rounded-lg shadow-lg text-center">
            <p className="italic text-lg">
              &quot;{testimonios[currentIndex].comentario}&quot;
            </p>
            <p className="mt-4 font-bold">- {testimonios[currentIndex].nombre}</p>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {testimonios.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-teal-300" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver testimonio ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

{/* Sección de turnos */}
<div className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 text-center mb-12">
      Elige tu Turno Ideal
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {turnos.map((turno, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
        >
          {/* Cabecera decorativa */}
          <div className="relative bg-gradient-to-b from-teal-600 to-teal-500 text-white p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-teal-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center">{turno.title}</h3>
          </div>

          {/* Contenido */}
          <div className="flex-grow p-6">
            <p className="text-gray-700 text-sm text-center">
              {turno.description}
            </p>
          </div>

          {/* Botón */}
          <div className="p-6">
            <a
              href={`https://wa.me/573136114707?text=${encodeURIComponent(
                turno.message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-teal-600 text-white text-center px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-teal-500 transition transform hover:scale-105"
            >
              Solicitar Turno
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}
