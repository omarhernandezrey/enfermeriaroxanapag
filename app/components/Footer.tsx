import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sección superior del footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-teal-400">Enfermería Roxana</h2>
            <p className="text-sm mt-2">
              Brindando cuidado profesional y humano las 24 horas.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Redes sociales */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/573136114707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-700 my-6" />

        {/* Información de contacto */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Enfermería Roxana. Todos los derechos reservados.
          </p>
          <p className="text-sm mt-2">
            Contacto:{" "}
            <a
              href="mailto:roxanapatriciasagrealean@gmail.com"
              className="text-teal-400 hover:underline"
            >
              roxanapatriciasagrealean@gmail.com
            </a>{" "}
            | Teléfono:{" "}
            <a
              href="tel:+573136114707"
              className="text-teal-400 hover:underline"
            >
              +57 313 611 4707
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
