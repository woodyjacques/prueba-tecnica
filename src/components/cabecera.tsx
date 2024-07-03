
import mas from "../assets/mas.png"
function Cabecera() {

    return (
        <div>

            <div className="relative flex items-center justify-start h-12 rounded bg-gray-800 p-4 z-0">
                <button type="button" className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-7">
                    Mostrador
                </button>
                <button type="button" className="ml-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-7">
                    Para llevar
                </button>
            </div>

            <div className="relative flex items-center justify-between h-2 rounded bg-green-500 z-10">
            </div>

            <div className="flex items-center justify-between h-12 mb-4 rounded bg-gray-600 p-4">
                <div className="text-white text-sm font-semibold">MOSTRADOR</div>
                <button type="button" className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <img className="mr-2 w-3 h-3" src={mas} alt="" />
                    Nuevo pedido
                </button>
            </div>
        </div>

    );
}

export default Cabecera;



