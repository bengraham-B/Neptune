"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Components
// import Table from './components/Table'
import Table2 from './components/Table2'

// Redux
import store from './GlobalRedux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/Counter/counterSlice'
import { setInspectionRecords } from './GlobalRedux/Inspection/inspectionSlice'


export default function page() {
    const [records, setRecords] = useState([])
    const dispatch = useDispatch()

    const fetchInspectionRecords = async () => {
        try {
            const response = await fetch('/api/getInspectionRecords/')
            const data = await response.json()
            console.log("Fetch Inspection records API")
            dispatch(setInspectionRecords(data.records))
        } catch (error) {
            console.error("Could not fetch Inspections Records.", error.message)
        }
    }
    

    const count = useSelector((state) => state.counter.value)
    const record_redux = useSelector((state) => state.inspection.value)
    

    useEffect(() => {
        fetchInspectionRecords()
        setRecords(record_redux)

    }, [])

    return (
        <main>
			<section className='flex justify-center my-4'>
                <Link href={"/pages/AddRecord/"} className='py-2 px-4 rounded-md font-2xl bg-blue-600 text-white'>Add Inspection Record</Link>
            </section>
			
			<section className='flex p-1'>
				<Table2/>
			</section>

            {/* This section is to test redux */}
            {/* <section>
                <div>{count}</div>
                <button className=" btn" onClick={() => dispatch(increment())}>Increment</button>
                <button className=" btn" onClick={() => dispatch(decrement())}>Increment</button>
            </section> */}
        </main>
    )
}
