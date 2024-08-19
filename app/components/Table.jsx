"use client"
import React from 'react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


// Redux
import { useSelector } from 'react-redux'

export default function Table() {
    const router = useRouter()



    //~ Getting records from REDUX
    const recordsRedux = useSelector((state) => state.inspection.value)

    const openInspectionRecord = async (id) => {
        router.push(`/${id}`)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString.replace(' ', 'T'))
        return date.toLocaleDateString('en-GB') // Format as 'DD/MM/YYYY'
    }

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
                    {/* <th className='px-6 font-normal text-lg'>FTA</th> */}
                </tr>
            </thead>
            <tbody>

                {recordsRedux && recordsRedux.map((R) => (
                        //  <Link href="/" className='flex'>
                    <tr className='text-black hover:bg-gray-300' key={R.id} onClick={() => openInspectionRecord(R.id)}>
                            <td className='px-6  py-2 text-center'>{R.inspection_code}</td>
                            {/* <td className='px-6  py-2 text-center'>{R.grv}</td> */}
                            <td className='px-6  py-2 text-center'>{formatDate(R.grv)}</td>
                            <td className='px-6  py-2 text-center'>{formatDate(R.date_inspected)}</td>
                            <td className='px-6  py-2 text-center'>{R.project}</td>
                            <td className='px-6  py-2 text-center'>{R.part_number}</td>
                            <td className='px-6  py-2 text-center'>{R.total_qty}</td>
                            <td className='px-6  py-2 text-center'>{R.qty_to_be_reworked}</td>
                            <td className='px-6  py-2 text-center'>{R.qty_rejected}</td>
                            <td className='px-6  py-2 text-center'>{R.qty_wip}</td>
                            {/* <td className='px-6  py-2 text-center'>{R.total_qty * ((R.qty_wip + R.qty_rejected + R.qty_to_be_reworked) / 100) * 100}%</td> */}
                    </tr>
                        // </Link>
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
