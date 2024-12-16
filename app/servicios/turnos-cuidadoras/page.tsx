"use client";

import Image from "next/image";

export default function TurnosCuidadoras() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {/* Imagen destacada */}
      <div className="relative">
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src="/images/turnos-cuidadoras.jpg"
            alt="Turnos de Cuidadoras"
            fill
            className="object-cover brightness-110 contrast-125"
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
          En <strong>Enfermería Roxana</strong>, entendemos que cada paciente
          tiene necesidades únicas. Por eso, ofrecemos turnos flexibles y
          atención profesional que se adapta a tus necesidades, brindándote la
          tranquilidad y el apoyo que necesitas en el cuidado de tus seres
          queridos.
        </p>

        {/* Sección de turnos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Turnos de 6 horas",
              description:
                "Supervisión temporal y apoyo parcial durante el día. Perfectos para monitoreo y actividades puntuales.",
              bgColor: "bg-gradient-to-r from-teal-600 to-teal-500",
              textColor: "text-white",
            },
            {
              title: "Turnos de 8 y 12 horas",
              description:
                "Cobertura extendida para cuidado continuo durante períodos prolongados, adaptándonos a tus horarios.",
              bgColor: "bg-gradient-to-r from-teal-500 to-teal-400",
              textColor: "text-white",
            },
            {
              title: "Turnos 24x24",
              description:
                "Presencia continua con cambios diarios, ideal para pacientes que requieren supervisión constante.",
              bgColor: "bg-gradient-to-r from-teal-400 to-teal-300",
              textColor: "text-white",
            },
          ].map((turno, index) => (
            <div
              key={index}
              className={`${turno.bgColor} rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between`}
            >
              <h3 className={`text-2xl font-bold ${turno.textColor} mb-4`}>
                {turno.title}
              </h3>
              <p className={`${turno.textColor} mb-6`}>{turno.description}</p>
              <a
                href={`https://wa.me/573136114707?text=${encodeURIComponent(
                  `Hola, estoy interesado en contratar el turno: ${turno.title}. ¿Podrían darme más información?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-full text-center shadow-md hover:bg-gray-100 transition transform hover:scale-105"
              >
                Solicitar Turno
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Beneficios de elegirnos */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-600 mb-6">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flexibilidad horaria",
                description:
                  "Turnos adaptados a tus necesidades específicas y horarios.",
                icon: "https://img.icons8.com/ios-filled/50/ffffff/clock.png",
              },
              {
                title: "Equipo capacitado",
                description:
                  "Personal de enfermería con experiencia y compromiso con la calidad.",
                icon: "https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png",
              },
              {
                title: "Atención profesional",
                description:
                  "Cuidado continuo y coordinado con las indicaciones médicas.",
                icon: "https://img.icons8.com/ios-filled/50/ffffff/handshake.png",
              },
            ].map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition transform duration-300"
              >
                <img
                  src={icon}
                  alt={title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <div className="bg-teal-600 py-16 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ¿Estás listo para contratar nuestros servicios?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Nuestro equipo está disponible para brindarte toda la información y
            orientación que necesitas. ¡Contáctanos ahora y deja que nos
            encarguemos del cuidado que mereces!
          </p>
          <a
            href="/contacto"
            className="inline-block bg-yellow-400 text-teal-800 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
