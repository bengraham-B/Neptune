"use client"
import React, {useState, useEffect} from 'react'

// Redux
import store from '../GlobalRedux/store'
import { useSelector } from 'react-redux'

export default function Table() {
    const [records, setRecords] = useState([])

    //~ Getting records from REDUX
    const recordsRedux = useSelector((state) => state.inspection.value)





    // Fetching the inspection Records from the Server.
    // const fetchInspectionRecords = async () => {
    //     const response = await fetch(`/api/getInspectionRecords/`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     if(response.ok){
    //         const data = await response.json()
    //         setRecords(data.records)
    //     }

    //     else {
    //         console.error(data.error)
    //     }
    // }

    // useEffect(() => {
    //     fetchInspectionRecords()
    // }, [])

    // useEffect(() => {console.log("Table3: ", records)}, [records])

  return (
    <section>
        <table className='min-w-full bg-white border border-black rounded-md'>
            <thead>
                <tr className='bg-blue-600 text-white font-light'>
                    <th className='px-6 font-normal text-lg'></th>
                    <th className='px-6 font-normal text-lg'>GRV</th>
                    <th className='px-6 font-normal text-lg'>Date Inspected</th>
                    <th className='px-6 font-normal text-lg'>Project</th>
                    <th className='px-6 font-normal text-lg'>Part Number</th>
                    <th className='px-6 font-normal text-lg'>Total Qty</th>
                    <th className='px-6 font-normal text-lg'>Total Qty to Be Reworked</th>
                    <th className='px-6 font-normal text-lg'>Qty Rejected</th>
                    <th className='px-6 font-normal text-lg'>Qty WIP</th>
                </tr>
            </thead>
            <tbody>

                {recordsRedux && recordsRedux.map((R) => (
                    <tr className='text-black hover:bg-gray-300' key={R.id}>
                        <td className='px-6  py-2 text-center'>{R.inspection_code}</td>
                        <td className='px-6  py-2 text-center'>{R.grv}</td>
                        <td className='px-6  py-2 text-center'>{R.date_inspected}</td>
                        <td className='px-6  py-2 text-center'>{R.project}</td>
                        <td className='px-6  py-2 text-center'>{R.part_number}</td>
                        <td className='px-6  py-2 text-center'>{R.total_qty}</td>
                        <td className='px-6  py-2 text-center'>{R.qty_to_be_reworked}</td>
                        <td className='px-6  py-2 text-center'>{R.qty_rejected}</td>
                        <td className='px-6  py-2 text-center'>{R.qty_wip}</td>
                    </tr>
                ))}

                 {/* <tr className='text-black hover:bg-gray-300 '>
                    <td className='px-6  py-2 text-center'>I24/678</td>
                    <td className='px-6  py-2 text-center'>6 Aug 2024</td>
                    <td className='px-6  py-2 text-center'>6 Aug 2024</td>
                    <td className='px-6  py-2 text-center'>0MQ</td>
                    <td className='px-6  py-2 text-center'>5840-RS-6789</td>
                    <td className='px-6  py-2 text-center'>100</td>
                    <td className='px-6  py-2 text-center'>12</td>
                    <td className='px-6  py-2 text-center'>34</td>
                    <td className='px-6  py-2 text-center'>60</td>
                </tr>*/}
            </tbody>
        </table>
    </section>
  )
}
