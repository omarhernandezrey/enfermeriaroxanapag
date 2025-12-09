"use client";

import Image from "next/image";
import {
  FaHandsHelping,
  FaHeart,
  FaStar,
  FaLightbulb,
  FaUserCheck,
} from "react-icons/fa";
import {
  FiCamera,
  FiCheckCircle,
  FiMapPin,
  FiMoreVertical,
  FiPaperclip,
  FiPhoneCall,
  FiSend,
  FiSmile,
  FiShield,
  FiVideo,
} from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";

export default function Nosotros() {
  const whatsappBase =
    "https://wa.me/573136114707?text=Hola,%20quiero%20agendar%20enfermera%20a%20domicilio%20en%20Bogot%C3%A1%20norte.%20Vengo%20del%20sitio%20web.";

  const teamMembers = [
    {
      name: "Roxana Sagre",
      role: "Fundadora y dueña; enfermera con 15+ años en hospitales y líder en atención domiciliaria",
      image: "/images/roxana-sagre.jpg",
    },
    {
      name: "Andrea Rey",
      role: "cuidadora con experiencia.",
      image: "/images/andrea-rey.jpg",
    },
    {
      name: "Luz Jasmin Hernández",
      role: "Enfermera Especialista",
      image: "/images/luz-jasmin.jpg",
    },
    {
      name: "Yenis Garrido",
      role: "Enfermera Especialista",
      image: "/images/Yenis-Garrido.jpg",
    },
    {
      name: "Ninfa Yisela Hernández",
      role: "Enfermera Especialista",
      image: "/images/yiselaHernandez.jpg",
    },
    {
      name: "Claudia Ladino Cadena",
      role: "Enfermera Especialista",
      image: "/images/ClaudiaOrjuela.jpg",
    },
  ];

  const values = [
    {
      icon: <FaHandsHelping />,
      title: "Compromiso",
      description: "Siempre ponemos a nuestros pacientes primero.",
    },
    {
      icon: <FaHeart />,
      title: "Empatía",
      description: "Brindamos cuidado humano y sensible.",
    },
    {
      icon: <FaStar />,
      title: "Excelencia",
      description: "Nos esforzamos por superar las expectativas.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovación",
      description: "Usamos tecnología avanzada para mejorar los servicios.",
    },
    {
      icon: <FaUserCheck />,
      title: "Transparencia",
      description: "Comunicamos de manera clara y honesta.",
    },
  ];

  const chatMessages = [
    {
      sender: "ROXANA",
      role: "Coordinación",
      avatar: "/images/logo.png",
      text: "Caso nuevo en Rosales: paciente oncológica, requerimos turno de 12h desde las 8 a. m.",
      time: "6:45 a. m.",
    },
    {
      sender: "Andrea Rey",
      role: "Enfermera (día)",
      avatar: "/images/avatar/Andrea Enfermera.png",
      text: "Puedo tomar el turno de día. Llevo kit para PICC y analgesia según orden médica.",
      time: "6:47 a. m.",
    },
    {
      sender: "CAMILO herrera",
      role: "Hijo del paciente",
      avatar: "/images/avatar/01hombre.jpeg",
      text: "Gracias. También necesitamos apoyo nocturno desde hoy.",
      time: "6:50 a. m.",
    },
    {
      sender: "ROXANA",
      role: "Coordinación",
      avatar: "/images/logo.png",
      text: "Turno noche confirmado con Marta. Llegará 7:30 p. m. Se une al grupo al iniciar.",
      time: "6:52 a. m.",
    },
    {
      sender: "YASMIN rojas",
      role: "Auxiliar de enfermería",
      avatar: "/images/avatar/yasmin auxiliar enfemera.jpg",
      text: "Estoy en ruta al laboratorio para recoger exámenes y llevarlos a casa antes del mediodía.",
      time: "7:05 a. m.",
    },
    {
      sender: "camilo herrera",
      role: "Hijo del paciente",
      avatar: "/images/avatar/01hombre.jpeg",
      text: "Perfecto, avisen cuando tengan los resultados para compartirlos con el oncólogo.",
      time: "7:07 a. m.",
    },
    {
      sender: "ANDREA Rey",
      role: "Enfermera (día)",
      avatar: "/images/avatar/Andrea Enfermera.png",
      text: "Instalación de bomba de analgesia terminada, dolor 3/10, signos estables. Próximo control 1 p. m.",
      time: "9:28 a. m.",
    },
    {
      sender: "Roxana",
      role: "Coordinación",
      avatar: "/images/logo.png",
      text: "Fotos de la línea y reporte enviados por correo. Avisamos 30 minutos antes del relevo.",
      time: "9:31 a. m.",
    },
    {
      sender: "YISELA Hernández",
      role: "Enfermera (noche)",
      avatar: "/images/avatar/yiselaEnfermera.png",
      text: "Yo llego 7:15 p. m. Reviso analgesia y curación para relevo completo.",
      time: "9:32 a. m.",
    },
    {
      sender: "Camilo Herrera",
      role: "Hijo del paciente",
      avatar: "/images/avatar/01hombre.jpeg",
      text: "Recibido. Gracias por la velocidad y por documentar todo en el chat.",
      time: "9:33 a. m.",
    },
    {
      sender: "JAVIER gómez",
      role: "Hermano del paciente",
      avatar: "/images/avatar/06hombre.jpeg",
      text: "Estoy al pendiente de cualquier novedad en el chat. Avísenme si requieren apoyo extra.",
      time: "9:35 a. m.",
    },
    {
      sender: "Roxana",
      role: "Coordinación",
      avatar: "/images/logo.png",
      text: "Equipo, resultados de laboratorio en rango. Continuamos plan de analgesia y curación.",
      time: "11:50 a. m.",
    },
    {
      sender: "Camilo Herrera",
      role: "Hijo del paciente",
      avatar: "/images/avatar/01hombre.jpeg",
      text: "Gracias. ¿Necesitan que consigamos algo más para la tarde?",
      time: "11:53 a. m.",
    },
    {
      sender: "Yasmin Rojas",
      role: "Auxiliar de enfermería",
      avatar: "/images/avatar/yasmin auxiliar enfemera.jpg",
      text: "Todo listo para el control de curación. Aviso al llegar.",
      time: "12:02 p. m.",
    },
    {
      sender: "Andrea Rey",
      role: "Enfermera (día)",
      avatar: "/images/avatar/Andrea Enfermera.png",
      text: "Control de 1 p. m. programado, reviso bomba y línea PICC y dejo reporte aquí.",
      time: "12:55 p. m.",
    },
    {
      sender: "Yisela Hernández",
      role: "Enfermera (noche)",
      avatar: "/images/avatar/yiselaEnfermera.png",
      text: "En ruta para relevo. Ajusto analgesia con orden del oncólogo al recibir turno.",
      time: "6:20 p. m.",
    },
    {
      sender: "Javier Gómez",
      role: "Hermano, soporte logístico",
      avatar: "/images/avatar/06hombre.jpeg",
      text: "Compré hidratación y elementos de confort, los dejo en el área de enfermería. Confirmo llegada 6:45 p. m.",
      time: "6:30 p. m.",
    },
    {
      sender: "Camilo Herrera",
      role: "Hijo del paciente",
      avatar: "/images/avatar/01hombre.jpeg",
      text: "Perfecto, quedamos atentos. Gracias por mantener todo en el chat.",
      time: "6:32 p. m.",
    },
  ];

  const participantColors = ["text-[#25D366]", "text-[#ef63b5]", "text-[#8ab4f8]"];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white flex items-center justify-center h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/roxana-sagre.jpg"
            alt="Equipo profesional"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-600 to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-sm uppercase tracking-wide">
            Servicio a familias — no es convocatoria laboral
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Conoce a Enfermería Roxana
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Innovación, cuidado humano y compromiso con el bienestar de tus seres queridos en casa y clínica.
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700">
              Brindar servicios de cuidado profesional, personalizado y humano
              a pacientes de todas las edades. Nos esforzamos por mejorar la
              calidad de vida de nuestros pacientes y sus familias.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              Nuestra Visión
            </h2>
            <p className="text-lg text-gray-700">
              Ser líderes en atención domiciliaria y hospitalaria, reconocidos
              por nuestra innovación, empatía y compromiso con el bienestar de
              quienes confían en nosotros.
            </p>
          </div>
        </div>
      </div>

      {/* Sello Roxana */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-teal-900 to-slate-800 text-white py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -bottom-16 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute -right-12 -top-10 w-64 h-64 bg-cyan-400/25 rounded-full blur-3xl" />
          <div className="absolute inset-x-10 top-1/3 h-[1px] bg-white/10" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.25em] text-teal-100 font-semibold">
              Sello Roxana
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              El rostro detrás del cuidado premium en el norte de Bogotá
            </h2>
            <p className="text-lg text-gray-100/90 leading-relaxed">
              Soy Roxana Sagre, enfermera con más de 15 años de experiencia hospitalaria y aún más enfocada en servicios domiciliarios. Soy la dueña y coordinadora de Enfermería Roxana: superviso cada turno, asigno el equipo adecuado y mantengo a tu familia informada como si fuera la mía. Este logo es la promesa de entrar con calidez y profesionalismo a tu hogar.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-start gap-3 shadow-lg">
                <FiShield className="text-2xl text-teal-100 mt-1" />
                <div>
                  <p className="font-semibold text-white">Supervisión clínica directa</p>
                  <p className="text-sm text-gray-100/80">
                    Coordino protocolos, turnos y comunicación con tu médico tratante.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-start gap-3 shadow-lg">
                <FiSmile className="text-2xl text-teal-100 mt-1" />
                <div>
                  <p className="font-semibold text-white">Cuidado humano y cercano</p>
                  <p className="text-sm text-gray-100/80">
                    Equipos amables que respetan rutinas y ganan confianza desde la primera visita.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-start gap-3 shadow-lg">
                <FiCheckCircle className="text-2xl text-teal-100 mt-1" />
                <div>
                  <p className="font-semibold text-white">Respuesta 24/7 en minutos</p>
                  <p className="text-sm text-gray-100/80">
                    Disponibilidad prioritaria en Usaquén, Chapinero y Suba con confirmación ágil.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-start gap-3 shadow-lg">
                <FiPaperclip className="text-2xl text-teal-100 mt-1" />
                <div>
                  <p className="font-semibold text-white">Reportes en el mismo hilo</p>
                  <p className="text-sm text-gray-100/80">
                    Fotos, horarios y avances quedan documentados para cada familiar.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-teal-900 px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-50 transition"
              >
                Habla con Roxana
              </a>
              <a
                href="/#planes"
                className="inline-flex items-center justify-center border border-white/70 px-5 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Ver planes 24/7
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-[32px]" />
            <div className="relative bg-white text-teal-900 rounded-[28px] p-5 shadow-2xl border border-white/40">
              <div className="absolute -top-5 right-5 inline-flex items-center gap-2 bg-teal-700 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg">
                <FiMapPin />
                Coordinación norte Bogotá
              </div>
              <div className="bg-gradient-to-b from-teal-50 via-white to-teal-50 rounded-2xl p-6 shadow-inner flex flex-col items-center gap-6">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-teal-100/70 via-white/40 to-cyan-100/60 blur-2xl -z-10" aria-hidden />
                  <div className="absolute inset-1 rounded-full border-2 border-teal-200/60 shadow-inner -z-10" aria-hidden />
                  <Image
                    src="/logo-32.png"
                    alt="Logo Roxana Enfermera"
                    fill
                    sizes="(max-width: 768px) 70vw, 320px"
                    className="object-contain drop-shadow-[0_12px_30px_rgba(15,118,110,0.35)]"
                    priority
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-sm">
                  <div className="bg-white/70 border border-teal-100 rounded-xl px-4 py-3 shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">
                      Disponibilidad
                    </p>
                    <p className="text-lg font-bold text-teal-900">45-90 min</p>
                    <p className="text-teal-800/80">Tiempo promedio de respuesta en zona norte.</p>
                  </div>
                  <div className="bg-white/70 border border-teal-100 rounded-xl px-4 py-3 shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">
                      Experiencia
                    </p>
                    <p className="text-lg font-bold text-teal-900">+12 años</p>
                    <p className="text-teal-800/80">Cuidado hospitalario llevado a casa con protocolos claros.</p>
                  </div>
                  <div className="bg-white/70 border border-teal-100 rounded-xl px-4 py-3 shadow-sm sm:col-span-2">
                    <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">
                      Promesa del logo
                    </p>
                    <p className="text-base text-teal-900">
                      Llegamos puntuales, damos reportes claros y dejamos tranquilidad en cada visita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
            Conoce a Nuestro Equipo
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
            Somos un equipo de enfermería altamente capacitado, con amplia
            experiencia en atención domiciliaria y hospitalaria. Nuestro
            compromiso es tu salud y bienestar, y trabajamos incansablemente
            para brindarte un servicio de primera clase con empatía, dedicación
            y profesionalismo. ¡Confía en nosotros y descubre por qué somos el
            mejor equipo de enfermería!
          </p>

          {/* Grid de tarjetas */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden 
                           hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                {/* Contenedor con proporción 3:4 (vertical) */}
                <div className="w-full aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    // Llenamos todo el espacio, manteniendo tarjeta uniforme
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-teal-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Valores</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg text-center 
                           hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center mb-4 text-5xl text-cyan-100">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <section className="bg-[#eae6df] text-[#111b21] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#111b21]">Testimonios en grupo de WhatsApp</h2>
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mt-10">
            <div className="hidden lg:flex justify-end">
              <p className="max-w-sm text-right text-sm text-[#54656f]">
                Coordinamos turnos, entregamos reportes y validamos el material disponible en el mismo chat donde nos contactas.
              </p>
            </div>
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="relative rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.25)] border border-[#d9d9d9] bg-[#eae6df]">
                <div className="bg-[#008069] px-4 py-3 flex items-center gap-3 text-white">
                  <div className="relative w-9 h-9 shrink-0 aspect-square rounded-full overflow-hidden border-2 border-[#006c5a] shadow-sm">
                    <Image
                      src="/images/logo.png"
                      alt="Logo Roxana"
                      fill
                      sizes="36px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold leading-tight">Familias con Roxana • Grupo</p>
                    <p className="text-xs text-white/90 mt-0.5">11 participantes • en línea</p>
                  </div>
                  <div className="flex items-center gap-3 text-white text-lg">
                    <FiVideo />
                    <FiPhoneCall />
                    <FiMoreVertical />
                  </div>
                </div>
                <div
                  className="relative p-4 space-y-3 max-h-[520px] overflow-auto"
                  style={{
                    backgroundColor: "#eae6df",
                    backgroundImage:
                      "radial-gradient(circle at 0 0, rgba(0,0,0,0.05) 12%, transparent 13%), radial-gradient(circle at 40px 60px, rgba(0,0,0,0.04) 10%, transparent 11%), radial-gradient(circle at 120px 140px, rgba(0,0,0,0.045) 12%, transparent 13%)",
                    backgroundSize: "240px 240px",
                  }}
                >
                  <div className="flex justify-start">
                    <div className="bg-[#d9fdd3] text-[#0b412c] text-sm px-3 py-2 rounded-2xl rounded-bl-sm shadow-sm border border-[#c5edc0]">
                      https://wa.me/agenda-enfermeria
                      <span className="ml-2 text-[11px] text-[#54656f]">7:22 p. m.</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-[11px] bg-[#d9d9d9] text-[#111b21] px-3 py-1 rounded-full border border-[#c6c6c6] shadow-sm">
                      lunes
                    </span>
                  </div>
                  {chatMessages.map((message, index) => {
                    const isOutgoing = message.sender === "Roxana";
                    const bubbleColor = isOutgoing ? "#d9fdd3" : "#ffffff";
                    const nameColor = isOutgoing ? "text-[#54656f]" : participantColors[index % participantColors.length];
                    return (
                      <div
                        key={`${message.sender}-${index}`}
                        className={`flex ${isOutgoing ? "justify-end" : "justify-start"} items-start gap-2`}
                      >
                        {!isOutgoing && (
                          <div className="relative w-7 h-7 shrink-0 aspect-square rounded-full overflow-hidden border border-[#c6c6c6] bg-white flex items-center justify-center text-xs font-semibold text-white">
                            {message.avatar ? (
                              <Image
                                src={message.avatar}
                                alt={`Avatar de ${message.sender}`}
                                fill
                                sizes="28px"
                                className="object-cover"
                                priority
                              />
                            ) : (
                              <span className="px-1 py-0.5 bg-[#25D366] rounded-full">
                                {message.sender
                                  .split(" ")
                                  .map((word) => word[0])
                                  .join("")
                                  .slice(0, 2)
                                  .toUpperCase()}
                              </span>
                            )}
                          </div>
                        )}
                        <div
                          className={`relative max-w-[calc(100%-3rem)] sm:max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
                            isOutgoing ? "bg-[#d9fdd3] rounded-tr-sm text-[#111b21]" : "rounded-tl-sm text-[#111b21]"
                          }`}
                          style={{ backgroundColor: bubbleColor }}
                        >
                          {!isOutgoing && (
                            <span
                              className="absolute -left-2 top-3"
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: "6px solid transparent",
                                borderBottom: "6px solid transparent",
                                borderRight: `6px solid ${bubbleColor}`,
                              }}
                              aria-hidden
                            />
                          )}
                          {isOutgoing && (
                            <span
                              className="absolute -right-2 top-3"
                              style={{
                                width: 0,
                                height: 0,
                                borderTop: "6px solid transparent",
                                borderBottom: "6px solid transparent",
                                borderLeft: "6px solid #d9fdd3",
                              }}
                              aria-hidden
                            />
                          )}
                          <p className={`text-[12px] font-semibold tracking-wide mb-1 ${nameColor}`}>
                            ~ {message.sender} • {message.role}
                          </p>
                          <p>{message.text}</p>
                          <div className="flex items-center gap-1 justify-end text-[11px] text-[#54656f] mt-2">
                            <span>{message.time}</span>
                            {isOutgoing && <BsCheckAll className="text-[#34B7F1]" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-center">
                    <span className="text-[11px] bg-[#d9d9d9] text-[#111b21] px-3 py-1 rounded-full border border-[#c6c6c6] shadow-sm">
                      martes
                    </span>
                  </div>
                </div>
                <div className="bg-[#f0f2f5] px-3 py-2 flex items-center gap-3 border-t border-[#d9d9d9]">
                  <FiSmile className="text-[#54656f]" />
                  <FiPaperclip className="text-[#54656f]" />
                  <FiCamera className="text-[#54656f]" />
                  <input
                    readOnly
                    value="Escribe un mensaje"
                    className="flex-1 bg-white text-[#111b21] text-sm px-4 py-2 rounded-full border border-[#d9d9d9] placeholder:text-[#8696a0]"
                  />
                  <div className="bg-[#25D366] p-2 rounded-full text-[#111b21] shadow">
                    <FiSend />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/70 border border-[#d9d9d9] rounded-2xl p-4 shadow text-sm text-[#111b21] space-y-3">
                <p className="text-[#111b21] font-semibold text-base">Cómo lucen tus conversaciones:</p>
                <p>Confirmamos horarios, asignamos enfermeras y compartimos fotos de avances o evolución.</p>
                <p>Todo queda en el chat de WhatsApp que ya usas, sin apps adicionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <div className="bg-teal-500 text-white py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas nuestros servicios?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contáctanos hoy mismo para brindarte la mejor atención profesional y
            humana. Nuestro equipo está listo para acompañarte en cada paso de tu
            proceso de cuidado.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg shadow-lg 
                       font-semibold text-lg hover:bg-teal-100 hover:scale-105 transition-transform"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
