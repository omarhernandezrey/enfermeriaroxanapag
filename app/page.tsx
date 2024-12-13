export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      {/* Sección Inicio */}
      <section id="inicio" className="w-full">
        <header className="w-full bg-teal-600 text-white py-6 shadow-lg">
          <h1 className="text-4xl font-bold text-center">Enfermería Roxana</h1>
          <p className="text-center text-lg mt-2">
            Servicios de cuidado profesional las 24 horas
          </p>
        </header>
      </section>

      {/* Sección Nosotros */}
      <section
        id="nosotros"
        className="w-full flex flex-col items-center p-8 text-center bg-gray-50"
      >
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Nosotros</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Somos un equipo de profesionales en enfermería dedicados a brindar
          cuidado personalizado y de calidad a nuestros pacientes. Con años de
          experiencia, garantizamos servicios confiables y atención
          excepcional.
        </p>
      </section>

      {/* Sección Servicios */}
      <section
        id="servicios"
        className="flex flex-col items-center p-8 text-center"
      >
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          Servicios
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Ofrecemos servicios de enfermería profesional para el cuidado de
          niños, personas mayores y pacientes en recuperación. Nuestro equipo
          está disponible las 24 horas para garantizar tu bienestar y
          tranquilidad.
        </p>
      </section>

      {/* Sección Contáctanos */}
      <section
        id="contacto"
        className="mt-8 flex flex-col items-center bg-gray-50 py-8"
      >
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          Contáctanos
        </h2>
        <a
          href="#"
          className="bg-teal-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition"
        >
          Escríbenos
        </a>
      </section>
    </main>
  );
}
