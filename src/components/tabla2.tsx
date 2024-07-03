
function Tabla2() {

    return (
        <div className="mt-10">

            <div className="mb-6 text-gray-500 text-sm font-semibold">CERRADAS (ULTIMAS 5)</div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">

                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora de inicio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cliente
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-white border-l-4 border-green-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Hora de inicio
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Cerrado</button>
                            </td>
                            <td className="px-6 py-4">
                                Cliente
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>

                        <tr className="bg-white border-l-4 border-green-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Hora de inicio
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Cerrado</button>
                            </td>
                            <td className="px-6 py-4">
                                Cliente
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>

                        <tr className="bg-white border-l-4 border-green-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Hora de inicio
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Cerrado</button>
                            </td>
                            <td className="px-6 py-4">
                                Cliente
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


        </div>
    );

}

export default Tabla2;




