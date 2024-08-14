"use client"
import React, { useState, useEffect } from 'react'


// Redux
import { useSelector, useDispatch } from 'react-redux'

export default function Table2() {
    const [records, setRecords] = useState([])

    //^ This gets the inspections records from REDUX
    const count = useSelector((state) => state.counter.value)
    const records_redux = useSelector((state) => state.inspection.value)

    console.log("Table Redux", records_redux)
    
    useEffect(() => {
        setRecords(records_redux)
        console.log("Table Redux", records_redux)

    }, [records_redux])
    return (
        <main>
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th scope="col" class="px-6 py-3 text-start font-medium text-blue-600 uppercase text-xl">Inspection Number</th>
                                <th scope="col" class="px-6 py-3 text-start font-medium text-blue-600 uppercase text-xl">Status</th>
                                <th scope="col" class="px-6 py-3 text-start font-medium text-blue-600 uppercase text-xl">GRV</th>
                                <th scope="col" class="px-6 py-3 text-end font-medium text-blue-600 uppercase text-xl">Part Number</th>
                                <th scope="col" class="px-6 py-3 text-end font-medium text-blue-600 uppercase text-xl">Project</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                                {records && records.map((T) => (
                                    <tr key={T.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{T.stockCode}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{T.code}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">gooo</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">gooo</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">gooo</td>
                                    </tr>
                                ))}
                           

                            {/* <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Jim Green</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">27</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">London No. 1 Lake Park</td>
                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                    <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                </td>
                            </tr>

                            <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Joe Black</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sidney No. 1 Lake Park</td>
                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                            </td>
                            </tr> */}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
