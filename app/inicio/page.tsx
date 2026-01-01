"use client";

import Image from "next/image";
import { Fragment } from "react";
import {
  FiCamera,
  FiMapPin,
  FiCheckCircle,
  FiClock,
  FiMoreVertical,
  FiPhoneCall,
  FiPaperclip,
  FiShield,
  FiSend,
  FiSmile,
  FiVideo,
} from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";
import { FaUserNurse, FaHeartbeat } from "react-icons/fa";

const whatsappBase =
  "https://wa.me/573136114707?text=Hola,%20quiero%20agendar%20enfermera%20a%20domicilio%20en%20Bogot%C3%A1%20norte.%20Vengo%20del%20sitio%20web.";

type ServicioDestacado = {
  imageSrc: string;
  title: string;
  description: string;
  cta: string;
};

const ServicioCard = ({
  imageSrc,
  title,
  description,
  cta,
}: ServicioDestacado) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col">
    <div className="relative w-full aspect-[4/3]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="p-6 flex flex-col flex-1 space-y-4">
      <div className="flex items-center space-x-2 text-teal-600 font-semibold">
        <FaUserNurse />
        <span>Equipo certificado</span>
      </div>
      <h3 className="text-2xl font-bold text-teal-700">{title}</h3>
      <p className="text-gray-600 flex-1 leading-relaxed">{description}</p>
      <a
        href={whatsappBase}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-teal-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
      >
        {cta}
      </a>
    </div>
  </div>
);

export default function Inicio() {
  const chatMessages = [
    // Domingo (inicio caso Cedritos)
    { day: "domingo", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Buenos días, arrancamos el caso en Cedritos. Turno 7 a. m. - 7 p. m. con Andrea, relevo 7 p. m. - 7 a. m. con Yasmin. Vamos coordinando por aquí.", time: "7:05 a. m." },
    { day: "domingo", sender: "LUIS Herrera", role: "Hermano del paciente", avatar: "/images/avatar/02hombre.jpeg", text: "Buenos días, ya avisando a la portería. Si pueden llegar un poquito antes de las 8, mejor.", time: "7:10 a. m." },
    { day: "domingo", sender: "Carolina Torres", role: "Hija del paciente", avatar: "/images/avatar/03mujer.jpeg", text: "Buenos días, estoy en casa. Dejo los papeles del seguro a mano por si los piden.", time: "7:14 a. m." },
    { day: "domingo", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Andrea llega 7:45; Yasmin releva a las 7 p. m. Dejamos todo hilado para que no haya huecos.", time: "7:30 a. m." },
    { day: "domingo", sender: "Andrea Rey", role: "Auxiliar de enfermería (día)", avatar: "/images/avatar/Andrea Enfermera.png", text: "Buenos días, ingreso 7:48 a. m. Signos estables, dolor 3/10. Inicio curación 9:00 a. m.", time: "8:10 a. m." },
    { day: "domingo", sender: "MARIO Díaz", role: "Cuñado", avatar: "/images/avatar/06hombre.jpeg", text: "Buenos días, paso a las 10:00 a. m. para acompanar y ver que todo esté cómodo para ella.", time: "9:15 a. m." },
    { day: "domingo", sender: "Patricia Núñez", role: "Vecina", avatar: "/images/avatar/05mujer.jpeg", text: "Buenos días, yo recibo al equipo si llegan antes. Estoy en el apto 502.", time: "9:30 a. m." },
    { day: "domingo", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Gracias, Patricia. Relevo confirmado 6:50 p. m. y avisamos por aquí si algo cambia.", time: "9:40 a. m." },
    { day: "domingo", sender: "Claudia Rincón", role: "Cuidadora (apoyo día)", avatar: "/images/avatar/03mujer.jpeg", text: "Buenos días, apoyo en alimentación y seguridad de 10 a. m. a 4 p. m. Les escribo cuando llegue.", time: "10:05 a. m." },
    { day: "domingo", sender: "Andrea Rey", role: "Auxiliar de enfermería (día)", avatar: "/images/avatar/Andrea Enfermera.png", text: "Curación lista 9:10 a. m., sin sangrado. Próxima analgesia 12:00 m. Todo tranquilo.", time: "10:20 a. m." },
    { day: "domingo", sender: "YASMIN Rojas", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yasmin auxiliar enfemera.jpg", text: "En camino para relevo, llego 6:45 p. m. Turno completo hasta 7 a. m.", time: "6:30 p. m." },
    { day: "domingo", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Relevo 6:45 p. m. Andrea entrega a Yasmin sin vacíos. Seguimos 24/7.", time: "6:50 p. m." },
    // Lunes (turno noche Yasmin -> día Andrea)
    { day: "lunes", sender: "YASMIN Rojas", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yasmin auxiliar enfemera.jpg", text: "Buenos días, turno noche tranquilo: signos estables y sin dolor. Curación de las 2:00 a. m. en orden.", time: "6:55 a. m." },
    { day: "lunes", sender: "CAMILO Herrera", role: "Hijo del paciente", avatar: "/images/avatar/01hombre.jpeg", text: "Buenos días, ¿podemos coordinar visita del médico hoy? Prefiero en la mañana.", time: "7:10 a. m." },
    { day: "lunes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Buenos días, visita médica 11:00 a. m. confirmada. Andrea recibe turno 7 a. m. y avisa al llegar.", time: "7:20 a. m." },
    { day: "lunes", sender: "Andrea Rey", role: "Auxiliar de enfermería (día)", avatar: "/images/avatar/Andrea Enfermera.png", text: "Buenos días, relevo hecho 7:05 a. m. Analgesia 8 a. m. aplicada, dolor 2/10.", time: "8:15 a. m." },
    { day: "lunes", sender: "PAULA Ríos", role: "Prima (logística)", avatar: "/images/avatar/05mujer.jpeg", text: "Buenos días, dejo llaves en portería y coordino alimentación blanda para la tarde.", time: "9:00 a. m." },
    { day: "lunes", sender: "Claudia Rincón", role: "Cuidadora (apoyo día)", avatar: "/images/avatar/03mujer.jpeg", text: "Buenas tardes, estoy 2 p. m. a 6 p. m. con alimentación y acompañamiento en sala.", time: "2:30 p. m." },
    { day: "lunes", sender: "YASMIN Rojas", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yasmin auxiliar enfemera.jpg", text: "Buenas tardes, entrego reporte en app y lista para relevo nocturno de hoy.", time: "6:20 p. m." },
    { day: "lunes", sender: "YISELA Hernández", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yiselaEnfermera.png", text: "Buenas tardes, ingreso 7 p. m. Reviso analgesia y curación de las 9 p. m.", time: "6:55 p. m." },
    // Martes (turno noche Yisela -> día Andrea)
    { day: "martes", sender: "YISELA Hernández", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yiselaEnfermera.png", text: "Turno noche: sin fiebre, descanso adecuado. Curación 3 a. m. ok.", time: "7:05 a. m." },
    { day: "martes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Recibido reporte. Hoy repetimos esquema 7 a. m. - 7 p. m. con Andrea.", time: "7:15 a. m." },
    { day: "martes", sender: "Andrea Rey", role: "Auxiliar de enfermería (día)", avatar: "/images/avatar/Andrea Enfermera.png", text: "Buenos días, ingreso 7 a. m. Signos estables, control de dolor 10 a. m. planificado.", time: "8:05 a. m." },
    { day: "martes", sender: "SOFIA Ramírez", role: "Prima", avatar: "/images/avatar/05mujer.jpeg", text: "Buenos días, gracias por mantenernos al tanto, reviso el correo con el reporte.", time: "8:20 a. m." },
    { day: "martes", sender: "Catalina Muñoz", role: "Psicóloga de apoyo", avatar: "/images/avatar/03mujer.jpeg", text: "Hola, disponible 6:00 p. m. para una sesión corta de soporte emocional si la familia quiere.", time: "9:00 a. m." },
    { day: "martes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Sesión confirmada. Yasmin cubrirá noche nuevamente 7 p. m. - 7 a. m.", time: "9:10 a. m." },
    { day: "martes", sender: "LUIS Herrera", role: "Hermano del paciente", avatar: "/images/avatar/02hombre.jpeg", text: "Buenos días, gracias por la continuidad en turnos, seguimos pendientes.", time: "9:30 a. m." },
    { day: "martes", sender: "Marcela Peña", role: "Cuidadora (apoyo tarde)", avatar: "/images/avatar/05mujer.jpeg", text: "Buenas tardes, puedo cubrir acompañamiento 2 p. m. - 6 p. m. si requieren.", time: "10:45 a. m." },
    { day: "martes", sender: "YASMIN Rojas", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yasmin auxiliar enfemera.jpg", text: "Buenas tardes, relevo 7 p. m. confirmado, trabajamos con lo que dejó la familia.", time: "6:45 p. m." },
    // Miércoles
    { day: "miércoles", sender: "YASMIN Rojas", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yasmin auxiliar enfemera.jpg", text: "Buenos días, turno noche: curación 2 a. m. sin sangrado. Dolor controlado.", time: "6:50 a. m." },
    { day: "miércoles", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Buenos días, relevo 7 a. m. con Andrea. Laboratorios listos, todos en rango.", time: "7:05 a. m." },
    { day: "miércoles", sender: "Andrea Rey", role: "Auxiliar de enfermería (día)", avatar: "/images/avatar/Andrea Enfermera.png", text: "Curación sin signos de infección. Dolor 2/10. Próximo control 3 p. m.", time: "9:30 a. m." },
    { day: "miércoles", sender: "NATALIA Sierra", role: "Amiga", avatar: "/images/avatar/04mujer.jpeg", text: "Llevaré compresas frías y apoyo emocional después de las 4 p. m.", time: "10:05 a. m." },
    { day: "miércoles", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Visita médica para ajuste paliativo confirmada 11:30 a. m.", time: "10:15 a. m." },
    { day: "miércoles", sender: "Carolina Torres", role: "Hija del paciente", avatar: "/images/avatar/03mujer.jpeg", text: "Estoy en casa para recibir al médico. Gracias por cuadrar la cita.", time: "10:22 a. m." },
    { day: "miércoles", sender: "Marcela Peña", role: "Cuidadora (apoyo tarde)", avatar: "/images/avatar/05mujer.jpeg", text: "Ingreso 2 p. m. a 6 p. m. para acompañamiento y seguridad.", time: "1:30 p. m." },
    { day: "miércoles", sender: "YISELA Hernández", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yiselaEnfermera.png", text: "Recibo turno 7 p. m. y paso relevo con Andrea sin vacíos.", time: "6:55 p. m." },
    // Jueves
    { day: "jueves", sender: "YISELA Hernández", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yiselaEnfermera.png", text: "Turno noche: analgesia en hora, reposo tranquilo. Curación 3 a. m. ok.", time: "6:50 a. m." },
    { day: "jueves", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Andrea cubre 7 a. m. - 7 p. m. hoy; Yasmin en apoyo si se requiere.", time: "7:00 a. m." },
    { day: "jueves", sender: "Ricardo López", role: "Primo del paciente", avatar: "/images/avatar/01hombre.jpeg", text: "Buenos días, llego 7:45 a. m. para acompañar y coordinar la cita de controles.", time: "7:45 a. m." },
    { day: "jueves", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Buenos días, trabajamos con lo que la familia dejó listo. Gracias, Ricardo.", time: "8:05 a. m." },
    { day: "jueves", sender: "MARÍA Fernanda", role: "Auxiliar de enfermería (backup)", avatar: "/images/avatar/03mujer.jpeg", text: "Disponible para cubrir en tarde si el caso lo requiere.", time: "12:10 p. m." },
    { day: "jueves", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "María queda en backup. Turno principal se mantiene 7-7.", time: "12:18 p. m." },
    { day: "jueves", sender: "Catalina Muñoz", role: "Psicóloga de apoyo", avatar: "/images/avatar/03mujer.jpeg", text: "Sesión 6:00 p. m. confirmada, llevo material de relajación.", time: "2:00 p. m." },
    { day: "jueves", sender: "Claudia Rincón", role: "Cuidadora (apoyo tarde)", avatar: "/images/avatar/03mujer.jpeg", text: "Hoy cubro 2 p. m. - 6 p. m. para acompañamiento básico.", time: "2:15 p. m." },
    // Viernes
    { day: "viernes", sender: "YISELA Hernández", role: "Auxiliar de enfermería (noche)", avatar: "/images/avatar/yiselaEnfermera.png", text: "Reviso analgesia y curación de las 10 p. m. Dejo reporte aquí.", time: "9:15 p. m." },
    { day: "viernes", sender: "MARIO Díaz", role: "Cuñado", avatar: "/images/avatar/06hombre.jpeg", text: "Buenas noches, coordino exámenes de mañana sábado 8:00 a. m. y confirmo entrega de resultados.", time: "9:20 p. m." },
    { day: "viernes", sender: "SANDRA López", role: "Auxiliar de enfermería (apoyo)", avatar: "/images/avatar/05mujer.jpeg", text: "Buenas noches, lista para cubrir si Yisela necesita refuerzo en la madrugada.", time: "10:05 p. m." },
    { day: "viernes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Buenas noches, gracias Sandra, de momento seguimos con el equipo actual 7-7.", time: "10:10 p. m." },
    // Sábado
    { day: "sábado", sender: "Andrea Rey", role: "Auxiliar de enfermería (día)", avatar: "/images/avatar/Andrea Enfermera.png", text: "SatO2 97%, curación limpia. Envío fotos al correo del familiar.", time: "8:10 a. m." },
    { day: "sábado", sender: "PAULA Ríos", role: "Prima (logística)", avatar: "/images/avatar/05mujer.jpeg", text: "Compré hidratación y snacks blandos para el finde. Los dejo en cocina.", time: "8:40 a. m." },
    { day: "sábado", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Cobertura domingo: Andrea 7 a. m. - 7 p. m., Yisela 7 p. m. - 7 a. m.", time: "9:00 a. m." },
    { day: "sábado", sender: "JAVIER Gómez", role: "Hermano", avatar: "/images/avatar/06hombre.jpeg", text: "Buenos días, yo cubro llamadas y pendientes de agenda el domingo en la tarde.", time: "9:15 a. m." },
    { day: "sábado", sender: "Carolina Torres", role: "Hija del paciente", avatar: "/images/avatar/03mujer.jpeg", text: "Gracias a todos, quedo pendiente por si necesitan algo en casa o acompañamiento.", time: "9:20 a. m." },
    // Domingo siguiente
    { day: "domingo", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Agenda de domingo lista. Andrea día, Yisela noche. Caso estable.", time: "7:05 a. m." },
    { day: "domingo", sender: "Andrea Rey", role: "Auxiliar de enfermería (día)", avatar: "/images/avatar/Andrea Enfermera.png", text: "Ingreso 7 a. m., curación 9 a. m. prevista, analgésico a las 8 a. m.", time: "7:25 a. m." },
    { day: "domingo", sender: "YASMIN Rojas", role: "Auxiliar de enfermería (apoyo)", avatar: "/images/avatar/yasmin auxiliar enfemera.jpg", text: "Buenos días, disponible como refuerzo si se requiere en la tarde.", time: "11:00 a. m." },
    { day: "domingo", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Todo en orden. Confirmamos relevo nocturno con Yisela 6:50 p. m.", time: "6:00 p. m." },
    // Nuevo caso Chicó (24x24)
    { day: "lunes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Buenos días, nuevo caso en Chicó: arranca turno 24x24 hoy 7 a. m. con Luisa (aux) y Yasmin (aux).", time: "6:45 a. m." },
    { day: "lunes", sender: "Luisa Pérez", role: "Auxiliar de enfermería (Chicó)", avatar: "/images/avatar/03mujer.jpeg", text: "Buenos días, ingreso Chicó 7 a. m. Revisaré catéter y control de dolor, dejo reporte al familiar.", time: "7:05 a. m." },
    { day: "lunes", sender: "Carlos Medina", role: "Hijo paciente Chicó", avatar: "/images/avatar/01hombre.jpeg", text: "Gracias por la rapidez, avisaré en portería. Estamos listos.", time: "7:20 a. m." },
    { day: "lunes", sender: "YASMIN Rojas", role: "Auxiliar de enfermería (Chicó)", avatar: "/images/avatar/yasmin auxiliar enfemera.jpg", text: "Con Luisa en Chicó para turno 24x24. Verificamos lo que la familia dejó al ingresar.", time: "7:25 a. m." },
    { day: "lunes", sender: "Marcela Peña", role: "Cuidadora (Chicó noche)", avatar: "/images/avatar/05mujer.jpeg", text: "Ingreso 7 p. m. en Chicó para acompañamiento básico y monitoreo de sueño.", time: "6:15 p. m." },
    { day: "lunes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Cedritos estable con esquema 12h/12h; Chicó cubierto 24x24 con auxiliares y cuidadora. Seguimos 24/7.", time: "8:00 p. m." },
    // Nuevos roles y apoyo extra
    { day: "lunes", sender: "FELIPE Ortega", role: "Hermano mayor de la paciente", avatar: "/images/avatar/01hombre.jpeg", text: "Dejo contacto del portero y autorizaciones impresas en recepción para el caso de mi mamá en Cedritos.", time: "8:20 p. m." },
    { day: "martes", sender: "Laura Vega", role: "Cuidadora (nocturna)", avatar: "/images/avatar/04mujer.jpeg", text: "Disponible 10 p. m. - 6 a. m. si necesitan segundo apoyo de noche.", time: "10:05 a. m." },
    { day: "martes", sender: "Ana Suárez", role: "Auxiliar de enfermería (backup)", avatar: "/images/avatar/05mujer.jpeg", text: "Puedo cubrir 7 a. m. - 7 p. m. mañana si alguien se reporta indispuesto.", time: "10:30 a. m." },
    { day: "martes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Gracias Laura y Ana, las dejo en lista de respaldo si hay cambios de turno.", time: "10:45 a. m." },
    { day: "miércoles", sender: "FELIPE Ortega", role: "Hermano mayor de la paciente", avatar: "/images/avatar/01hombre.jpeg", text: "Dejo la clave del wifi y quedo atento en casa por si requieren algo con mi mamá.", time: "7:40 a. m." },
    { day: "miércoles", sender: "Laura Vega", role: "Cuidadora (nocturna)", avatar: "/images/avatar/04mujer.jpeg", text: "Puedo quedarme 6 p. m. - 10 p. m. como pre-relevo para Yisela.", time: "5:10 p. m." },
    { day: "jueves", sender: "Ana Suárez", role: "Auxiliar de enfermería (backup)", avatar: "/images/avatar/05mujer.jpeg", text: "Libre el jueves completo. Avísenme si se requiere segunda auxiliar en día.", time: "8:15 a. m." },
    { day: "jueves", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Anotado: Ana disponible jueves día; Laura puede cubrir 6-10 p. m. Gracias.", time: "8:30 a. m." },
    { day: "viernes", sender: "FELIPE Ortega", role: "Hermano mayor de la paciente", avatar: "/images/avatar/01hombre.jpeg", text: "Gracias por el apoyo, todo quedó organizado en sala. Excelente servicio del equipo.", time: "7:50 a. m." },
    { day: "viernes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Recibido, Felipe. Gracias por dejar todo listo.", time: "8:05 a. m." },
    { day: "viernes", sender: "Laura Vega", role: "Cuidadora (nocturna)", avatar: "/images/avatar/04mujer.jpeg", text: "Confirmo apoyo 6 p. m. - 10 p. m. hoy, antes de que ingrese Yisela.", time: "3:10 p. m." },
    { day: "sábado", sender: "Ana Suárez", role: "Auxiliar de enfermería (backup)", avatar: "/images/avatar/05mujer.jpeg", text: "Sábado disponible para cubrir 12h día si lo requieren. Aviso 30 min antes.", time: "8:30 a. m." },
    { day: "sábado", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Gracias Ana, te tenemos de backup por si hay cambio de último momento.", time: "8:40 a. m." },
    { day: "domingo", sender: "FELIPE Ortega", role: "Hermano mayor de la paciente", avatar: "/images/avatar/01hombre.jpeg", text: "Estoy en casa para recibir a la auxiliar de turno nocturno de mi mamá.", time: "5:20 p. m." },
    { day: "domingo", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Gracias Felipe, continuidad asegurada. Equipo completo y en línea.", time: "5:45 p. m." },
    // Nuevo contacto desde botón de WhatsApp
    { day: "lunes", sender: "SANTIAGO Gómez", role: "Cliente nuevo", avatar: "/images/avatar/14hombre.jpg", text: "Hola, quiero agendar enfermera a domicilio en Bogotá norte. Vengo del sitio web.", time: "7:30 p. m." },
    { day: "lunes", sender: "ROXANA", role: "Coordinación", avatar: "/images/logo.png", text: "Hola Santiago, te ayudo ya mismo. Dime la dirección y horario en Bogotá norte para asignar la enfermera.", time: "7:34 p. m." },
  ];

  const avatarMap: Record<string, string> = {
    ROXANA: "/images/logo.png",
    "LUIS Herrera": "/images/avatar/07hombre.jpg",
    "CAMILO Herrera": "/images/avatar/08hombre.jpg",
    "MARIO Díaz": "/images/avatar/09hombre.jpg",
    "FELIPE Ortega": "/images/avatar/10hombre.jpg",
    "Carlos Medina": "/images/avatar/11hombre.jpg",
    "Ricardo López": "/images/avatar/12hombre.jpg",
    "JAVIER Gómez": "/images/avatar/13hombre.jpg",
    "SANTIAGO Gómez": "/images/avatar/14hombre.jpg",
    "Carolina Torres": "/images/avatar/16mujer.jpg",
    "Patricia Núñez": "/images/avatar/17mujer.jpg",
    "Claudia Rincón": "/images/avatar/18mujer.jpg",
    "PAULA Ríos": "/images/avatar/19mujer.jpg",
    "SOFIA Ramírez": "/images/avatar/20mujer.jpg",
    "Catalina Muñoz": "/images/avatar/21mujer.jpg",
    "Marcela Peña": "/images/avatar/22mujer.jpg",
    "NATALIA Sierra": "/images/avatar/23mujer.jpg",
    "Laura Vega": "/images/avatar/04mujer.jpeg",
    "Ana Suárez": "/images/avatar/yasmin auxiliar enfemera.jpg",
    "MARÍA Fernanda": "/images/avatar/Andrea Enfermera.png",
    "Luisa Pérez": "/images/avatar/yiselaEnfermera.png",
    "SANDRA López": "/images/avatar/yiselaEnfermera.png",
    "Andrea Rey": "/images/avatar/Andrea Enfermera.png",
    "YASMIN Rojas": "/images/avatar/yasmin auxiliar enfemera.jpg",
    "YISELA Hernández": "/images/avatar/yiselaEnfermera.png",
  };

  const messagesWithAvatars = chatMessages.map((message) => ({
    ...message,
    avatar: avatarMap[message.sender] ?? message.avatar,
  }));

  const participantCount = new Set(messagesWithAvatars.map((m) => m.sender)).size;

  const serviciosDestacados: ServicioDestacado[] = [
    {
      imageSrc: "/images/enfermeria-domiciliaria.jpg",
      title: "Enfermería domiciliaria 24/7",
      description:
        "Llevamos estándares hospitalarios a tu casa: curaciones avanzadas, administración segura de medicamentos y seguimiento clínico con enfermeras verificadas y auxiliares de confianza.",
      cta: "Agendar enfermera",
    },
    {
      imageSrc: "/images/acomp-hospitalario.jpg",
      title: "Acompañamiento hospitalario VIP",
      description:
        "Guardias privadas para que tu familiar nunca esté solo en clínica. Coordinamos con médicos, actualizamos a la familia y gestionamos todo el turno.",
      cta: "Reservar guardia",
    },
    {
      imageSrc: "/images/cuidado-paliativo.jpg",
      title: "Cuidados paliativos y control del dolor",
      description:
        "Diseñamos un plan de alivio del dolor, confort y soporte emocional en casa con un equipo sensible y coordinado con tu especialista.",
      cta: "Solicitar plan paliativo",
    },
  ];

  const planes = [
    {
      title: "Turno Premium 12h (Día)",
      focus: "Ideal para familias en el norte de Bogotá",
      bullets: [
        "Supervisión médica y signos vitales cada visita",
        "Apoyo en alimentación, movilidad y medicamentos",
        "Reporte digital al familiar responsable",
      ],
    },
    {
      title: "Turno 12h (Noche)",
      focus: "Para pacientes postquirúrgicos y vigilancia nocturna",
      bullets: [
        "Monitoreo del dolor y confort nocturno",
        "Prevención de caídas y vigilancia del sueño",
        "Coordinación con el médico tratante",
      ],
    },
    {
      title: "Turno flexible 6h u 8h",
      focus: "Seguimiento ambulatorio y acompañamiento a citas",
      bullets: [
        "Curaciones, inyecciones y acompañamiento a citas",
        "Enfermera asignada según la complejidad",
        "Disponibilidad el mismo día",
      ],
    },
    {
      title: "Turno 24x24 y 24x48",
      focus: "Continuidad total con equipos coordinados",
      bullets: [
        "Doble equipo coordinado para relevo sin vacíos",
        "Gestión clínica y control de dolor",
        "Check-ins programados con la familia",
      ],
    },
  ];

  const beneficios = [
    {
      icon: <FiClock className="text-3xl text-cyan-100" />,
      title: "Respuesta en minutos",
      desc: "Cobertura prioritaria en norte de Bogotá para asignar enfermera sin demoras.",
    },
    {
      icon: <FiShield className="text-3xl text-cyan-100" />,
      title: "Personal verificado",
      desc: "Enfermeras y auxiliares con experiencia hospitalaria y validación de antecedentes.",
    },
    {
      icon: <FiCheckCircle className="text-3xl text-cyan-100" />,
      title: "Planes a la medida",
      desc: "Diseñamos el turno según indicaciones médicas y rutina familiar.",
    },
    {
      icon: <FaHeartbeat className="text-3xl text-cyan-100" />,
      title: "Seguimiento humano",
      desc: "Comunicación permanente con la familia y el especialista.",
    },
  ];

  const faqs = [
    {
      q: "¿En cuánto tiempo llega una enfermera al norte de Bogotá?",
      a: "Prioridad en 45-90 minutos según tráfico y complejidad. Confirmamos la hora exacta al agendar.",
    },
    {
      q: "¿Atienden noches y fines de semana?",
      a: "Sí, 24/7. Tenemos turnos de noche y esquemas 24x24 para pacientes que requieren vigilancia constante.",
    },
    {
      q: "¿Qué incluye el acompañamiento hospitalario?",
      a: "Supervisión continua, apoyo en higiene, recordatorio de medicamentos autorizados y reporte al familiar.",
    },
    {
      q: "¿Pueden trabajar con el médico tratante?",
      a: "Coordinamos indicaciones, dosis y restricciones con tu especialista para mantener el plan seguro.",
    },
    {
      q: "¿Cuentan con materiales para curaciones?",
      a: "Podemos llevar kit básico y te damos lista de material especial (apósitos, sondas, sueros) para que la familia lo tenga listo.",
    },
    {
      q: "¿En qué zonas tienen mayor disponibilidad?",
      a: "Priorizamos direcciones en el norte de la ciudad y respondemos en minutos para confirmar.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative bg-teal-800 text-white overflow-hidden" id="inicio">
        <div className="absolute inset-0">
          {/* Imagen para Desktop (oculta en móvil) */}
          <Image
            src="/images/hero-image.jpg"
            alt="Enfermera a domicilio en Bogotá norte"
            fill
            className="hidden lg:block object-cover object-center"
            priority
          />
          {/* Imagen para Móvil (oculta en desktop) */}
          <Image
            src="/images/hero-imageMobile.jpg"
            alt="Enfermera a domicilio en Bogotá norte"
            fill
            className="lg:hidden object-cover object-top"
            priority
          />
          
          {/* Gradiente optimizado: Vertical para móvil (texto arriba), Horizontal para desktop (texto izquierda) */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent lg:bg-gradient-to-r lg:from-slate-900/90 lg:via-teal-900/50 lg:to-slate-900/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-24 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-4 lg:space-y-6">
            {/* Badge Cobertura: Oculto en móvil para ahorrar espacio */}
            <span className="hidden lg:inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-sm uppercase tracking-wide">
              Cobertura en Bogotá Norte, Chapinero, Usaquén y Suba
            </span>
            
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Roxana Enfermera
            </h1>
            
            {/* Badge Aviso: Oculto en móvil para limpiar vista */}
            <span className="hidden lg:inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-xs lg:text-sm uppercase tracking-wide text-[#d9fdd3]">
              Servicio a familias — no es convocatoria laboral
            </span>

            {/* Descripción: Ultra corta en móvil */}
            <p className="text-lg lg:text-xl text-gray-100 leading-relaxed font-medium drop-shadow-md">
              <span className="lg:hidden">
                Enfermería domiciliaria 24/7 en Bogotá Norte. Curaciones, inyectología y cuidado de pacientes en casa.
              </span>
              <span className="hidden lg:inline">
                Coordinamos en minutos una enfermera o auxiliar verificada para tu familiar
                en casa o clínica. Turnos 24/7, paliativos y acompañamiento hospitalario
                con reportes claros, trato humano y estándares de clase mundial en el
                norte de Bogotá y Chapinero.
              </span>
            </p>

            {/* Línea directa: Oculta en móvil (ya están los botones) */}
            <p className="hidden lg:inline-flex items-center gap-2 text-sm text-[#d9fdd3] bg-white/10 border border-[#25D366]/40 px-3 py-2 rounded-full shadow-md">
              <span className="font-semibold text-[#0b412c] bg-[#d9fdd3] px-2 py-1 rounded-full shadow-sm">
                Línea directa
              </span>
              <a className="font-bold underline text-[#d9fdd3]" href="tel:+573136114707">
                +57 313 611 4707
              </a>
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <a
                href={whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-teal-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-50 transition"
              >
                Agenda una enfermera
              </a>
              <a
                href="tel:+573136114707"
                className="inline-flex items-center justify-center border border-white/70 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                <FiPhoneCall className="mr-2" />
                Llamada inmediata
              </a>
            </div>
            
            {/* Stats: Ocultos en móvil para limpiar la vista */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-2xl font-bold text-cyan-100">24/7</p>
                <p>Disponibilidad inmediata</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-2xl font-bold text-cyan-100">+12 años</p>
                <p>Experiencia clínica</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-2xl font-bold text-cyan-100">Cobertura</p>
                <p>Bogotá Norte y Chapinero</p>
              </div>
            </div>
          </div>
          {/* Card eliminada por solicitud del usuario */}
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="servicios">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
            Servicios estrella
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nos especializamos en pacientes que requieren confianza total
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Diseñados para familias del norte de Bogotá que prefieren atención privada en casa.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviciosDestacados.map((servicio) => (
            <ServicioCard key={servicio.title} {...servicio} />
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio) => (
              <div
                key={beneficio.title}
                className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur border border-white/10"
              >
                <div className="mb-3">{beneficio.icon}</div>
                <h3 className="text-xl font-bold mb-2">{beneficio.title}</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {beneficio.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes y turnos */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="planes">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
                Planes y turnos
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                Escoge el esquema perfecto para tu familia
              </h2>
              <p className="text-gray-600 mt-2">
                Turnos premium para adultos mayores, postquirúrgicos y pacientes crónicos.
              </p>
            </div>
            <a
              href={whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-600 text-white px-5 py-3 rounded-full font-semibold shadow hover:bg-teal-700 transition"
            >
              Cotizar ahora
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {planes.map((plan, index) => (
              <div
                key={plan.title}
                className="relative bg-white rounded-2xl shadow-xl p-6 flex flex-col space-y-4 border border-gray-100 h-full hover:-translate-y-2 transition-transform"
              >
                <span className="absolute -top-3 left-4 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">
                  {index === 0 ? "Más pedido" : index === 3 ? "24/7" : "Flexible"}
                </span>
                <h3 className="text-xl font-bold text-teal-700">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.focus}</p>
                <ul className="space-y-2 text-sm text-gray-700 flex-1">
                  {plan.bullets.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <FiCheckCircle className="text-teal-600 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-teal-600 text-white px-4 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition mt-auto"
                >
                  Solicitar turno
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-16 relative overflow-hidden" id="zonas">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-white to-cyan-50" />
        <div className="absolute -right-20 -top-24 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
              Cobertura
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Llegamos rápido en el norte de Bogotá
            </h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Confirmamos disponibilidad en minutos y enviamos enfermera según la complejidad del caso. Dinos tu dirección en el norte de la ciudad y coordinamos el turno ideal.
            </p>
          </div>
          <div className="text-center">
            <a
              href={whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-600 text-white px-5 py-3 rounded-full font-semibold shadow hover:bg-teal-700 transition"
            >
              Confirmar disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-[#eae6df] text-[#111b21] py-16" id="testimonios">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#111b21]">Testimonios en grupo de WhatsApp</h2>
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mt-10">
            <div className="hidden lg:flex justify-end">
              <div className="bg-white/70 backdrop-blur border border-[#d9d9d9] shadow-lg rounded-2xl p-5 max-w-sm text-sm text-[#111b21] space-y-3">
                <p className="font-semibold text-lg text-[#0a3324]">Por qué usamos WhatsApp</p>
                <ul className="space-y-2 text-[#54656f]">
                  <li>• Respuestas rápidas y humanas sin apps raras.</li>
                  <li>• Familia y equipo clínico en un solo hilo por paciente.</li>
                  <li>• Confirma turnos, fotos y avances como en tu chat diario.</li>
                  <li>• Horarios claros y roles visibles para no perderse.</li>
                </ul>
              </div>
            </div>
            <div className="relative w-full max-w-[92vw] sm:max-w-[400px] md:max-w-[420px] mx-auto">
              <div className="relative rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.25)] border border-[#d9d9d9] bg-[#eae6df]">
                <div className="bg-[#008069] px-3 sm:px-4 py-3 flex items-center gap-3 text-white">
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
                    <p className="font-semibold leading-tight">Familia Roxana • Grupo</p>
                    <p className="text-xs text-white/90 mt-0.5">
                      {participantCount} participantes • en línea
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-white text-lg">
                    <FiVideo />
                    <FiPhoneCall />
                    <FiMoreVertical />
                  </div>
                </div>
                <div
                  className="relative p-3 sm:p-4 space-y-3 max-h-[520px] overflow-auto"
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
                    <div className="text-[12px] text-[#54656f] bg-white/80 border border-[#d9d9d9] px-3 py-2 rounded-xl shadow-sm flex items-center gap-2">
                      <FiClock />
                      <span>Mensajes temporales activos: se borran después de 7 días</span>
                    </div>
                  </div>
                  {messagesWithAvatars.map((message, index) => {
                    const showDay =
                      index === 0 || messagesWithAvatars[index - 1].day !== message.day;
                    const isOutgoing = message.sender === "ROXANA";
                    const bubbleColor = isOutgoing ? "#d9fdd3" : "#ffffff";
                    const nameColor = isOutgoing ? "text-[#54656f]" : "text-[#128C7E]";
                    const initials = message.sender
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase();
                    return (
                      <Fragment key={`${message.sender}-${index}`}>
                        {showDay && (
                          <div className="flex justify-center my-1">
                            <span className="text-[11px] bg-[#d9d9d9] text-[#111b21] px-3 py-1 rounded-full border border-[#c6c6c6] shadow-sm">
                              {message.day}
                            </span>
                          </div>
                        )}
                        <div className={`flex ${isOutgoing ? "justify-end" : "justify-start"} items-start gap-2`}>
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
                                <span className="px-1 py-0.5 bg-[#25D366] rounded-full">{initials}</span>
                              )}
                            </div>
                          )}
                          <div
                            className={`relative max-w-[calc(100%-3rem)] sm:max-w-[86%] rounded-2xl px-3 sm:px-4 py-3 text-sm leading-relaxed shadow break-words ${
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
                      </Fragment>
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
              <div className="bg-white/70 backdrop-blur border border-[#d9d9d9] shadow-lg rounded-2xl p-5 max-w-sm text-sm text-[#111b21] space-y-3">
                <p className="font-semibold text-lg text-[#0a3324]">Coordina por WhatsApp</p>
                <p className="text-[#54656f]">
                  Escríbenos y recibirás un flujo igual al ejemplo: reportes rápidos, fotos y confirmaciones en tiempo real.
                </p>
                <a
                  href={whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#008069] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#0b785d] transition"
                >
                  Abrir chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA rápida */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-teal-50 via-white to-cyan-50 border border-teal-100 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wide text-teal-700 font-semibold">
              Atención prioritaria
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              ¿Necesitas una enfermera hoy mismo para tu familiar?
            </h3>
            <p className="text-gray-700">
              Escríbenos y confirmamos disponibilidad en minutos. Coordinamos con tu médico,
              definimos el turno y llegamos con protocolos claros.
            </p>
            <div className="mt-2 text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold text-teal-700">Correo:</span>{" "}
                <a
                  href="mailto:roxanapatriciasagrealean@gmail.com"
                  className="underline underline-offset-4 hover:text-teal-800"
                >
                  roxanapatriciasagrealean@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-teal-700">Celular / WhatsApp:</span>{" "}
                <a
                  href="tel:+573136114707"
                  className="underline underline-offset-4 hover:text-teal-800"
                >
                  +57 313 611 4707
                </a>
              </p>
              <p className="text-xs text-gray-500">
                Si prefieres, cuéntanos por teléfono y nosotros gestionamos todo por ti.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal-700 text-white px-5 py-3 rounded-full font-semibold hover:bg-teal-800 transition w-full sm:w-auto"
            >
              Solicitar enfermera ahora
            </a>
            <a
              href="tel:+573136114707"
              className="inline-flex items-center justify-center border border-teal-800 text-teal-800 px-5 py-3 rounded-full font-semibold hover:bg-teal-50 transition w-full sm:w-auto"
            >
              Llamar
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Información clara antes de agendar
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
              <h4 className="text-lg font-semibold text-teal-700 flex items-start space-x-2">
                <FiCheckCircle className="mt-1" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
