"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ServicioCard = ({ imageSrc, title, description, link }: any) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300">
    <div className="relative h-48 w-full">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-teal-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        href={link}
        className="text-teal-500 font-semibold mt-4 inline-block hover:text-teal-700 transition"
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
    }, 5000);
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
            layout="fill"
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Atención Profesional y Humana
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Cuidado personalizado las 24 horas, los 7 días de la semana.
          </p>
          <a
            href="/contacto"
            className="mt-6 inline-block bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 shadow-md transform hover:scale-105 transition"
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

{/* Testimonios estilo WhatsApp mejorados */}
<div className="bg-teal-600 text-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
      Lo que Dicen Nuestros Clientes
    </h2>
    <div className="relative max-w-xl mx-auto bg-gray-100 p-4 rounded-lg shadow-lg">
      {/* Contenedor del chat */}
      <div className="flex flex-col space-y-6">
        {/* Mensaje del cliente */}
        <div className="self-start flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-teal-600">
            {testimonios[currentIndex].nombre
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>
          <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-md max-w-sm relative">
            <p className="text-sm italic">
              {testimonios[currentIndex].comentario}
            </p>
            <span className="absolute bottom-0 right-2 text-xs text-gray-400 mt-1">
              {["10:15 AM", "3:45 PM", "9:00 PM"][currentIndex % 3]}
            </span>
          </div>
        </div>

        {/* Respuesta automática */}
        <div className="self-end flex items-center space-x-3">
          <div className="bg-teal-500 text-white px-4 py-3 rounded-2xl shadow-md max-w-sm relative">
            <p className="text-sm">
              Muchas gracias, {testimonios[currentIndex].nombre}. Nos alegra
              saber que estás satisfecho con nuestro servicio. 😊
            </p>
            <span className="absolute bottom-0 right-2 text-xs text-gray-200 mt-1">
              {["10:17 AM", "3:50 PM", "9:05 PM"][currentIndex % 3]}
            </span>
          </div>
        </div>

        {/* Mensaje adicional del cliente */}
        {currentIndex % 2 === 0 && (
          <div className="self-start flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-teal-600">
              {testimonios[currentIndex].nombre
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
            <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-md max-w-sm relative">
              <p className="text-sm italic">
                Siempre recomendaré a Enfermería Roxana. ¡Son los mejores! 💙
              </p>
              <span className="absolute bottom-0 right-2 text-xs text-gray-400 mt-1">
                {["10:20 AM", "3:55 PM", "9:10 PM"][currentIndex % 3]}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
    {/* Navegación de testimonios */}
    <div className="flex justify-center space-x-2 mt-8">
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


      {/* Turnos */}
      <div className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 text-center mb-12">
      Elige tu Turno Ideal
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {turnos.map((turno, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 relative overflow-hidden"
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-500 via-teal-400 to-teal-300 opacity-20 z-0"></div>
          <div className="relative z-10">
            {/* Icono decorativo */}
            <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full shadow-lg mb-4 mx-auto">
              <span className="text-lg font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">
              {turno.title}
            </h3>
            <p className="text-gray-700 mb-6 text-center">{turno.description}</p>
          </div>
          <a
            href={`https://wa.me/573136114707?text=${encodeURIComponent(
              turno.message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-500 transition transform hover:scale-105 text-center"
          >
            Solicitar Turno
          </a>
          {/* Decoración de sombra */}
          <div className="absolute inset-x-0 bottom-0 h-2 bg-teal-400 rounded-b-xl"></div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}
