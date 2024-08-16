"use client"
import React from 'react'

export default function Table3() {
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
                    {/* <th className='px-6 font-normal text-lg'>Serial Number</th> */}
                    {/* <th className='px-6 font-normal text-lg'>Purchase Order</th> */}
                    {/* <th className='px-6 font-normal text-lg'>Production Job Number</th> */}
                    <th className='px-6 font-normal text-lg'>Total Qty</th>
                    <th className='px-6 font-normal text-lg'>Total Qty to Be Reworked</th>
                    <th className='px-6 font-normal text-lg'>Qty Rejected</th>
                    <th className='px-6 font-normal text-lg'>Qty WIP</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-black hover:bg-gray-300 '>
                    <td className='px-6  py-2 text-center'>I24/678</td>
                    <td className='px-6  py-2 text-center'>6 Aug 2024</td>
                    <td className='px-6  py-2 text-center'>6 Aug 2024</td>
                    <td className='px-6  py-2 text-center'>0MQ</td>
                    <td className='px-6  py-2 text-center'>5840-RS-6789</td>
                    {/* <td className='px-6  py-2 text-center'>#188 (MSR 314)</td> */}
                    {/* <td className='px-6  py-2 text-center'>668810</td> */}
                    {/* <td className='px-6  py-2 text-center'>47479</td> */}
                    <td className='px-6  py-2 text-center'>100</td>
                    <td className='px-6  py-2 text-center'>12</td>
                    <td className='px-6  py-2 text-center'>34</td>
                    <td className='px-6  py-2 text-center'>60</td>
                </tr>
                <tr className='text-black hover:bg-gray-300 '>
                    <td className='px-6  py-2 text-center'>I24/678</td>
                    <td className='px-6  py-2 text-center'>6 Aug 2024</td>
                    <td className='px-6  py-2 text-center'>6 Aug 2024</td>
                    <td className='px-6  py-2 text-center'>0MQ</td>
                    <td className='px-6  py-2 text-center'>5840-RS-6789</td>
                    {/* <td className='px-6  py-2 text-center'>#188 (MSR 314)</td> */}
                    {/* <td className='px-6  py-2 text-center'>668810</td> */}
                    {/* <td className='px-6  py-2 text-center'>47479</td> */}
                    <td className='px-6  py-2 text-center'>100</td>
                    <td className='px-6  py-2 text-center'>12</td>
                    <td className='px-6  py-2 text-center'>34</td>
                    <td className='px-6  py-2 text-center'>60</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

// "use client"
// import React from 'react'

// export default function Table3() {
//   return (
//     <section>
//         <table className="min-w-full bg-white">
//             <thead className="bg-gray-200">
//                 <tr>
//                     <th className="px-6 py-3 text-left text-black">Project</th>
//                     <th className="px-6 py-3 text-left text-black">Project</th>
//                     <th className="px-6 py-3 text-left text-black">Project</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr className="bg-gray-50">
//                     <td className="px-6 py-4 text-black">Goose</td>
//                     <td className="px-6 py-4 text-black">Goose</td>
//                     <td className="px-6 py-4 text-black">Goose</td>
//                 </tr>
//             </tbody>
//         </table>
//     </section>
//   )
// }
