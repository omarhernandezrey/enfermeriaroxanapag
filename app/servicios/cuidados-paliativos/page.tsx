export default function CuidadosPaliativos() {
    return (
      <div className="relative min-h-screen bg-gray-50 text-gray-800">
        {/* Imagen destacada */}
        <div className="relative">
          <img
            src="/images/cuidado-paliativo.jpg" // Asegúrate de colocar esta imagen en public/images/
            alt="Cuidados Paliativos"
            className="w-full h-[50vh] object-cover"
          />
          <div className="absolute inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Cuidados Paliativos
            </h1>
          </div>
        </div>
  
        {/* Contenido principal */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">
            Atención integral y humanizada
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Ofrecemos servicios personalizados para pacientes en etapas avanzadas
            de enfermedad, enfocados en mejorar su calidad de vida, manejar el
            dolor y proporcionar apoyo emocional a ellos y sus familias.
          </p>
  
          {/* Sección de beneficios */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-600">Control del Dolor</h3>
                <p className="text-gray-700">
                  Aplicamos técnicas avanzadas para manejar el dolor y otros
                  síntomas asociados, mejorando el bienestar del paciente.
                </p>
              </div>
            </div>
  
            <div className="flex items-start space-x-4">
              <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-600">
                  Apoyo Emocional
                </h3>
                <p className="text-gray-700">
                  Proporcionamos soporte emocional y psicológico tanto al paciente
                  como a sus familiares.
                </p>
              </div>
            </div>
  
            <div className="flex items-start space-x-4">
              <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M10 14h10M10 18h6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-600">
                  Documentación Detallada
                </h3>
                <p className="text-gray-700">
                  Informes regulares sobre el progreso y estado del paciente,
                  compartidos con los familiares.
                </p>
              </div>
            </div>
  
            <div className="flex items-start space-x-4">
              <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c2.28 0 4.014-.96 4.49-2.192M18.424 8.928c.917 1.19 1.476 2.735 1.576 4.528M15 20a9 9 0 11-6 0M9 9h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-600">
                  Asistencia Personalizada
                </h3>
                <p className="text-gray-700">
                  Servicios diseñados a medida para cada paciente, ya sea en casa
                  o en una clínica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  