import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'


export default function Table() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <main>
        {count}
        <table className="table-fixed text-black border border-slate-500">
            <thead className=''>
                <tr className='border border-black'>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
                </tr>
            </thead>

            <tbody >
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                </tr>

                <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                </tr>
                <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                </tr>
            </tbody>
        </table>
    </main>
  )
}
