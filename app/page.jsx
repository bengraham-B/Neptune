"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Material Tailwind
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";


// Components
import Table from './components/Table'
import Excel from './components/Excel'

// Redux
import store from './GlobalRedux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/Counter/counterSlice'
import { setInspectionRecords } from './GlobalRedux/Inspection/inspectionSlice'


export default function Home() {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const [modalStatus, setModalStatus] = useState(null)

    const fetchInspectionRecords = async () => {
        try {
            const response = await fetch('/api/getInspectionRecords/')
            const data = await response.json()
            dispatch(setInspectionRecords(data.records))
        } catch (error) {
            console.error("Could not fetch Inspections Records.", error.message)
        }
    }
    

    // const count = useSelector((state) => state.counter.value)
    // const record_redux = useSelector((state) => state.inspection.value)
    

    useEffect(() => {
        fetchInspectionRecords()

    }, [])

    return (
        <main>
			<section className='flex  my-4 justify-between px-8'>
                <Link href={"/pages/AddRecord/"} className='btn py-2 px-4 rounded-md font-2xl hover:bg-blue-500 bg-blue-600 text-white'>Add Inspection Record</Link>
                <Link href={"/pages/Excel"} className='btn felx py-2 px-4 rounded hover:bg-green-500 bg-green-600 text-white w-24'>Excel</Link>
            </section>
			
			<section className='flex p-1 justify-center w-full'>
                {/* This is found in the Component folder */}
				<Table/>
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
