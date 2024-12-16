"use client";

import Image from "next/image";
import {
  FaUserCheck,
  FaHandsHelping,
  FaClock,
  FaHeartbeat,
  FaMedkit,
  FaHandHoldingHeart,
} from "react-icons/fa";

export default function Servicios() {
  return (
    <div className="bg-gray-50 text-gray-800 py-10">
      {/* Título principal */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-600 animate-fade-in">
          Nuestros Servicios
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
          En <strong>Enfermería Roxana</strong>, somos especialistas en
          brindar un cuidado humano, profesional y personalizado bajo la
          dirección de tu médico de confianza. Nuestro compromiso es
          garantizar tu bienestar y el de tus seres queridos en cada etapa de
          su atención.
        </p>
      </div>

      {/* Sección 1: Servicios específicos */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">
          Servicios que ofrecemos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              imgSrc: "/images/enfermeria-domiciliaria.jpg",
              title: "Enfermería domiciliaria",
              description:
                "Cuidados en el hogar para administración de medicamentos, curaciones, control de signos vitales y asistencia en tratamientos bajo prescripción médica.",
            },
            {
              imgSrc: "/images/turnos-cuidadoras.jpg",
              title: "Turnos de cuidadoras",
              description:
                "Turnos flexibles de 6, 8, 12 horas o turnos 24x24, asegurando el mejor cuidado en actividades diarias y seguimiento médico.",
            },
            {
              imgSrc: "/images/acomp-hospitalario.jpg",
              title: "Acompañamiento hospitalario",
              description:
                "Compañía durante la estancia hospitalaria, garantizando atención oportuna, control del estado del paciente y apoyo emocional.",
            },
            {
              imgSrc: "/images/cuidado-paliativo.jpg",
              title: "Cuidados paliativos",
              description:
                "Atención profesional para pacientes en estado terminal, siguiendo las indicaciones médicas para manejo del dolor y apoyo integral.",
            },
            {
              imgSrc: "/images/rehabilitacion-fisica.jpg",
              title: "Apoyo en rehabilitación física",
              description:
                "Colaboramos con terapias físicas prescritas, asegurando la adherencia al plan del profesional de la salud.",
            },
            {
              imgSrc: "/images/nutricion.jpg",
              title: "Asistencia en nutrición",
              description:
                "Seguimos las recomendaciones del médico para la preparación y administración de planes alimenticios diseñados para cada paciente.",
            },
          ].map(({ imgSrc, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-xl rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={imgSrc}
                  alt={title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 2: Tipos de personas atendidas */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">
          ¿A quiénes atendemos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              imgSrc: "/images/adultos-mayores.jpg",
              title: "Adultos mayores",
              description:
                "Cuidado integral y apoyo emocional para mejorar su calidad de vida en la comodidad de su hogar.",
            },
            {
              imgSrc: "/images/bebes-ninos.jpg",
              title: "Bebés y niños",
              description:
                "Atención con amor y experiencia, asegurando su bienestar, monitoreo y adherencia a tratamientos pediátricos.",
            },
            {
              imgSrc: "/images/discapacidad.jpg",
              title: "Personas con discapacidades",
              description:
                "Asistencia personalizada, adaptada a sus necesidades específicas, siguiendo el plan médico indicado.",
            },
            {
              imgSrc: "/images/pacientes-terminales.jpg",
              title: "Pacientes terminales",
              description:
                "Cuidado humano y profesional para pacientes en estado terminal, ofreciendo tranquilidad y calidad de vida.",
            },
          ].map(({ imgSrc, title, description }, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={imgSrc}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-teal-600 mt-4 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección: Por qué elegirnos */}
      <section className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">
            ¿Por qué elegir <span className="text-yellow-400">Enfermería Roxana</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Atención personalizada",
                description:
                  "Adaptamos nuestros cuidados a tus necesidades específicas y las de tu médico.",
                icon: <FaUserCheck className="text-yellow-400 text-5xl" />,
              },
              {
                title: "Experiencia",
                description:
                  "Nuestras enfermeras cuentan con años de experiencia, brindando cuidado profesional y humano.",
                icon: <FaMedkit className="text-yellow-400 text-5xl" />,
              },
              {
                title: "Confianza",
                description:
                  "Trabajamos en colaboración con médicos y especialistas, siguiendo estrictamente sus indicaciones.",
                icon: <FaHandsHelping className="text-yellow-400 text-5xl" />,
              },
              {
                title: "Disponibilidad",
                description:
                  "Ofrecemos servicios las 24 horas del día, los 7 días de la semana, con turnos adaptados a tus necesidades.",
                icon: <FaClock className="text-yellow-400 text-5xl" />,
              },
              {
                title: "Humanidad",
                description:
                  "Nos destacamos por nuestra empatía, respeto y trato cálido hacia cada paciente.",
                icon: <FaHandHoldingHeart className="text-yellow-400 text-5xl" />,
              },
              {
                title: "Compromiso",
                description:
                  "Nos esforzamos por superar expectativas, garantizando bienestar y tranquilidad a cada familia.",
                icon: <FaHeartbeat className="text-yellow-400 text-5xl" />,
              },
            ].map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-200 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
