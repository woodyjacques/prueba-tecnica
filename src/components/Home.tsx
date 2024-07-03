
import estadistica from "../assets/Estadistica.png"
import tenedor from "../assets/cuviertos.png"
import calculadora from "../assets/calculadora.png"
import vaso from "../assets/vaso.png"
import usuario from "../assets/usuario.png"
import camion from "../assets/camion.png"
import panel from "../assets/panel.png"
import configuracion from "../assets/configuracion.png"
import campana from "../assets/campana.png"
import Tabla1 from "./tabla1"
import Tabla2 from "./tabla2"
import Cabecera from "./cabecera"

function Home() {

  return (
    <div>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-34 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 shadow-md">

          <a className="flex items-center ps-2.5 mb-8">
            <img className="h-12 me-3 sm:h-14" src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1719968634/Captura_de_pantalla_2024-07-02_205916_c9eewc.png" />
          </a>

          <ul className="space-y-2 font-medium">

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 bg-green-400 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={tenedor} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={estadistica} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={calculadora} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={vaso} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={usuario} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={camion} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={panel} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={configuracion} alt="" />
              </a>
            </li>

            <li>
              <a href="#" className="mt-10 flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                <img className="w-10 h-10" src={campana} alt="" />
              </a>
            </li>

          </ul>

        </div>
      </aside>

      <div className="p-4 sm:ml-32">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <Cabecera/>
          <Tabla1 />
          <Tabla2 />
        </div>
      </div>

    </div>
  );

}

export default Home;






