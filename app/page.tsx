export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      {/* Encabezado */}
      <header className="w-full bg-teal-600 text-white py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">Enfermería Roxana</h1>
        <p className="text-center text-lg mt-2">
          Servicios de cuidado profesional las 24 horas
        </p>
      </header>

      {/* Contenido principal */}
      <section className="flex flex-col items-center p-8 text-center">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          Atención personalizada en el hogar y hospital
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Ofrecemos servicios de enfermería profesional para el cuidado de niños, personas mayores y pacientes en recuperación. Nuestro equipo está disponible las 24 horas para garantizar tu bienestar y tranquilidad.
        </p>
      </section>

      {/* Botón de contacto */}
      <section className="mt-8">
        <a
          href="#contacto"
          className="bg-teal-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition"
        >
          Contáctanos
        </a>
      </section>
    </main>
  );
}
