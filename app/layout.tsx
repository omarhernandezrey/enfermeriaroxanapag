import './globals.css';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

export const metadata = {
  title: 'Enfermería Roxana',
  description: 'Servicios de cuidado profesional las 24 horas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="bg-teal-600 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Título del sitio */}
            <h1 className="text-2xl font-bold">Enfermería Roxana</h1>

            {/* Menú de navegación - Oculto en dispositivos pequeños */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="/inicio" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/nosotros" className="hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:underline">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Contáctanos
                </a>
              </li>
            </ul>

            {/* Menú móvil - Visible solo en dispositivos pequeños */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
