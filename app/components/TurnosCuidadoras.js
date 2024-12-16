"use client";

import Image from "next/image";

// Subcomponente para cada turno
const TurnoCard = ({ title, description, bgGradient, icon }) => {
  // Número de WhatsApp y mensaje prellenado
  const whatsappNumber = "573136114707";
  const message = `Hola, estoy interesado en el turno ${title}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`rounded-2xl p-8 shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${bgGradient} flex flex-col h-full`}
    >
      <div className="flex flex-col items-center text-center flex-1">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white mb-6">{description}</p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto bg-white text-teal-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
      >
        Solicitar Turno
      </a>
    </div>
  );
};

// Subcomponente para cada beneficio
const BeneficioCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl">
    <Image src={icon} alt={title} width={48} height={48} className="mb-4" />
    <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default function TurnosCuidadoras() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Imagen destacada */}
      <div className="relative">
        <div className="w-full h-[50vh] md:h-[60vh]">
          <Image
            src="/images/turnos-cuidadoras.jpg"
            alt="Turnos de Cuidadoras"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            Turnos de Cuidadoras
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-teal-600 text-center mb-8">
          Cuidado Continuo y Personalizado
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          En <strong>Enfermería Roxana</strong>, entendemos que cada paciente tiene necesidades únicas. Por eso, ofrecemos turnos flexibles y atención profesional que se adapta a tus necesidades, brindándote la tranquilidad y el apoyo que necesitas en el cuidado de tus seres queridos.
        </p>

        {/* Sección de turnos */}
        <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Encabezado de la sección */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900">Nuestros Turnos</h2>
              <p className="mt-4 text-lg text-gray-600">
                Elige el turno que mejor se adapte a tus necesidades y garantiza el mejor cuidado.
              </p>
            </div>

            {/* Grid de turnos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Turnos de 6 horas",
                  description:
                    "Ideales para supervisión temporal y apoyo parcial durante el día. Perfectos para tareas específicas como monitoreo y acompañamiento en actividades puntuales.",
                  bgGradient: "bg-gradient-to-r from-teal-500 to-teal-400",
                  icon: (
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Turnos de 8 y 12 horas",
                  description:
                    "Cobertura extendida que garantiza cuidado continuo durante períodos prolongados, ajustándonos a tus horarios y necesidades diarias.",
                  bgGradient: "bg-gradient-to-r from-teal-600 to-teal-500",
                  icon: (
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Turnos 24x24",
                  description:
                    "Presencia continua con cambios diarios, ideal para pacientes que requieren supervisión constante y atención integral.",
                  bgGradient: "bg-gradient-to-r from-teal-700 to-teal-600",
                  icon: (
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 1.343-3 3v4a3 3 0 006 0v-4c0-1.657-1.343-3-3-3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  ),
                },
                // Nueva tarjeta de turnos: Turnos de Noche (Lunes a Viernes)
                {
                  title: "Turnos de Noche (Lunes a Viernes)",
                  description:
                    "Cuidado profesional durante las horas nocturnas de lunes a viernes, asegurando descanso y bienestar continuo.",
                  bgGradient: "bg-gradient-to-r from-teal-800 to-teal-700",
                  icon: (
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {/* Moon Icon from Heroicons */}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                      />
                    </svg>
                  ),
                },
              ].map((turno, index) => (
                <TurnoCard key={index} {...turno} />
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios de elegirnos */}
        <section className="bg-gray-100 py-16 rounded-3xl mt-16">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-teal-600 mb-12">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Flexibilidad Horaria",
                  description:
                    "Turnos adaptados a tus necesidades específicas y horarios.",
                  icon: "/icons/clock.svg",
                },
                {
                  title: "Equipo Capacitado",
                  description:
                    "Personal de enfermería con experiencia y compromiso con la calidad.",
                  icon: "/icons/stethoscope.svg",
                },
                {
                  title: "Atención Profesional",
                  description:
                    "Cuidado continuo y coordinado con las indicaciones médicas.",
                  icon: "/icons/handshake.svg",
                },
              ].map((beneficio, index) => (
                <BeneficioCard key={index} {...beneficio} />
              ))}
            </div>
          </div>
        </section>

        {/* Llamada a la acción */}
        <div className="bg-teal-600 py-20 rounded-3xl mt-16">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ¿Estás listo para contratar nuestros servicios?
            </h2>
            <p className="text-lg sm:text-xl text-white mb-10">
              Nuestro equipo está disponible para brindarte toda la información y orientación que necesitas. ¡Contáctanos ahora y deja que nos encarguemos del cuidado que mereces!
            </p>
            <a
              href="https://wa.me/573136114707?text=Hola%2C%20estoy%20interesado%20en%20los%20servicios%20de%20Enfermeria%20Roxana."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-teal-800 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
