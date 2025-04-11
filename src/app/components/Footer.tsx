import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="bg-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-black mb-4">
                Acerca de Nosotros
              </h3>
              <p className="text-gray-700 pb-10">
                Somos una plataforma de cursos en línea especializada en
                tecnologías web. Nuestro objetivo es brindar una educación de
                calidad y accesible a todos los interesados en el desarrollo
                web.
              </p>
            </div>
            <div className="px-8">
              <h3 className="text-lg font-bold text-black mb-4">
                Enlaces Rápidos
              </h3>
              <ul className="text-gray-700">
                <li>
                  <a href="#" className="hover:text-black">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-4">Contacto</h3>
              <p className="text-gray-700">
                ¿Tienes alguna pregunta o sugerencia? Escríbenos a:
              </p>
              <p className="text-gray-700">info@cursosprogramacionweb.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-white">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-700 hover:text-white">
                  <FaXTwitter />
                </a>
                <a href="#" className="text-gray-700 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-700 hover:text-white">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700">
            <p className="text-center text-gray-700">
              &copy; {new Date().getFullYear()} Cursos de Programación Web.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
