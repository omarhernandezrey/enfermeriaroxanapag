const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Enfermería Roxana. Todos los derechos reservados.
          </p>
          <p className="text-sm mt-2">
            Contacto:{" "}
            <a
              href="mailto:info@enfermeriaroxana.com"
              className="text-teal-400 hover:underline"
            >
              info@enfermeriaroxana.com
            </a>{" "}
            | Teléfono:{" "}
            <a
              href="tel:+1234567890"
              className="text-teal-400 hover:underline"
            >
              +1 234 567 890
            </a>
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="mx-2 text-teal-400 hover:text-teal-300"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="mx-2 text-teal-400 hover:text-teal-300"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="mx-2 text-teal-400 hover:text-teal-300"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  