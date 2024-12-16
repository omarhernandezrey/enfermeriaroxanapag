"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ServicioCard = ({ imageSrc, title, description, link }: any) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
    <div className="relative h-48 w-full">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        className="object-cover"
      />
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

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white h-[90vh] flex items-center justify-center">
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
  En <strong>Enfermería Roxana</strong>, nos especializamos en brindar un
  cuidado integral, humano y personalizado que supera todas las expectativas.
  Nuestro equipo de enfermeras altamente capacitadas, con años de experiencia
  en atención domiciliaria y hospitalaria, se dedica a garantizar el bienestar
  físico y emocional de cada paciente. 

  Ofrecemos una amplia variedad de servicios, adaptados a las necesidades de cada cliente, incluyendo turnos flexibles para asegurar cuidado constante: <strong>turnos de 6, 8, 12 y 24 horas</strong>. Además, nuestras enfermeras no solo se destacan por su profesionalismo, sino también por su empatía, compromiso y dedicación, creando un ambiente de confianza y seguridad para los pacientes y sus familias.
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

      {/* Llamado a la Acción */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-8">
            ¿Listo para Experimentar un Cuidado de Calidad?
          </h2>
          <a
            href="/contacto"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg hover:bg-teal-700 transition transform hover:scale-105"
          >
            Contáctanos Hoy
          </a>
        </div>
      </div>
    </div>
  );
}
