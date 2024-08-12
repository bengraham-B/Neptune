"use client"
import React, { useState, useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'



export default function Table() {
    const [records, setRecords] = useState([])

    //^ This gets the inspections records from REDUX
    const count = useSelector((state) => state.counter.value)
    const records_redux = useSelector((state) => state.inspection.value)

    console.log("Table Redux", records_redux)
    
    useEffect(() => {
        setRecords(records_redux)
        console.log("Table Redux", records_redux)

    }, [records_redux])
    


    // const dispatch = useDispatch()
  return (
    <main>
        {/* {count} */}
        <table className="table-fixed text-black border border-slate-500 space-x-3'">
            <thead className="space-x-3 px-12'">
                <tr className='border border-black'>
                <th>code</th>
                <th>GRV</th>
                <th>Date Inspected</th>
                <th>Status</th>
                <th>Inspection Number</th>
                <th>Project</th>
                </tr>
            </thead>

            <tbody className='space-x-3'>

                {records && records.map((T) => (
                    <tr key={T.id}>
                        <td>{T.stockCode}</td>
                        <td>{T.code}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    </main>
  )
}
