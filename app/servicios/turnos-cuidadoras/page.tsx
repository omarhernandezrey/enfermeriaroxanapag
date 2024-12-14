export default function TurnosCuidadoras() {
    return (
      <div className="relative min-h-screen bg-gray-50 text-gray-800">
        {/* Imagen destacada */}
        <div className="relative">
          <img
            src="/images/turnos-cuidadoras.jpg"
            alt="Turnos de Cuidadoras"
            className="w-full h-[40vh] md:h-[50vh] object-contain"
          />
          <div className="absolute inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
              Turnos de Cuidadoras
            </h1>
          </div>
        </div>
  
        {/* Contenido */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">
            Cuidado continuo y personalizado
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ofrecemos turnos flexibles para garantizar el cuidado constante de
            tus seres queridos. Nuestros turnos incluyen:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Turnos de 6 horas: Para apoyo parcial durante el día.</li>
            <li>Turnos de 8 y 12 horas: Atención extendida según tus necesidades.</li>
            <li>Turnos 24x24: Presencia continua con cambios diarios.</li>
          </ul>
        </div>
      </div>
    );
  }
  