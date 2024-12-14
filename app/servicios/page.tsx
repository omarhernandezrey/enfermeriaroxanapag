export default function Servicios() {
  return (
    <div className="bg-gray-50 text-gray-800 py-10">
      {/* Título principal */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-600">Nuestros Servicios</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Brindamos una atención personalizada y profesional adaptada a las necesidades de nuestros pacientes, con un enfoque integral en su bienestar.
        </p>
      </div>

      {/* Sección 1: Servicios específicos */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6">Servicios que ofrecemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio: Enfermería domiciliaria */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/enfermeria-domiciliaria.jpg"
              alt="Enfermería domiciliaria"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Enfermería domiciliaria</h3>
            <p className="text-gray-600 mb-4">
              Atención especializada en el hogar, incluyendo administración de medicamentos, cuidado de heridas,
              registro de signos vitales y monitoreo de tratamientos.
            </p>
          </div>

          {/* Servicio: Turnos de cuidadoras */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/turnos-cuidadoras.jpg"
              alt="Turnos de cuidadoras"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Turnos de cuidadoras</h3>
            <p className="text-gray-600 mb-4">
              Asistencia general para actividades diarias (higiene, alimentación, movilidad) en turnos flexibles
              de 6, 8, 12 horas o turnos 24x24 para atención continua.
            </p>
          </div>

          {/* Servicio: Acompañamiento hospitalario */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/acomp-hospitalario.jpg"
              alt="Acompañamiento hospitalario"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Acompañamiento hospitalario</h3>
            <p className="text-gray-600 mb-4">
              Compañía y asistencia durante la estancia en hospitales o clínicas, garantizando un cuidado adecuado
              y apoyo emocional constante.
            </p>
          </div>

          {/* Servicio: Cuidados paliativos */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/cuidado-paliativo.jpg"
              alt="Cuidados paliativos"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Cuidados paliativos</h3>
            <p className="text-gray-600 mb-4">
              Atención especializada para pacientes terminales, con control del dolor, apoyo emocional y mejora
              de la calidad de vida.
            </p>
          </div>

          {/* Servicio: Rehabilitación física */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/rehabilitacion-fisica.jpg"
              alt="Rehabilitación física"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Rehabilitación física</h3>
            <p className="text-gray-600 mb-4">
              Terapias físicas personalizadas para recuperación postoperatoria, mejora de la movilidad y
              fortalecimiento físico.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Tipos de personas atendidas */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6">¿A quiénes atendemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personas mayores */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/adultos-mayores.jpg"
              alt="Adultos mayores"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Adultos mayores</h3>
            <p className="text-gray-600">
              Atención integral para mejorar su calidad de vida, incluyendo asistencia en actividades diarias,
              monitoreo de salud y apoyo emocional.
            </p>
          </div>

          {/* Bebés y niños */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/bebes-ninos.jpg"
              alt="Bebés y niños"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Bebés y niños</h3>
            <p className="text-gray-600">
              Cuidado especializado para recién nacidos y niños, incluyendo control de salud, vacunación y
              monitoreo de enfermedades crónicas.
            </p>
          </div>

          {/* Personas con discapacidades */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="/images/discapacidad.jpg"
              alt="Personas con discapacidades"
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-2">Personas con discapacidades</h3>
            <p className="text-gray-600">
              Apoyo personalizado, adaptado a sus necesidades específicas, con asistencia terapéutica y
              cuidado integral.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
