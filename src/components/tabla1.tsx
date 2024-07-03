
function Tabla1() {

    return (

        <div>

            <div className="mb-6 text-gray-500 text-sm font-semibold">EN CURSO</div>

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

                        <tr className="bg-white border-l-4 border-red-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Hora de inicio
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">En curso</button>
                            </td>
                            <td className="px-6 py-4">
                                Cliente
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>

                        <tr className="bg-white border-l-4 border-red-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Hora de inicio
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">En curso</button>
                            </td>
                            <td className="px-6 py-4">
                                Cliente
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>

                        <tr className="bg-white border-l-4 border-red-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Hora de inicio
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">En curso</button>
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

export default Tabla1;




