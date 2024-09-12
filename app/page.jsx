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
                <Link href={"/pages/AddRecord/"} className='py-2 px-4 rounded-md font-2xl bg-blue-600 text-white'>Add Inspection Record</Link>
                <button onClick={handleOpen} className='felx py-2 px-4 rounded bg-green-600 text-white'>Excel</button>
            </section>
			
			<section className='flex p-1 justify-center w-full'>
				<Table/>
			</section>

            <section>
                {/* <Button onClick={handleOpen} variant="gradient">
                    Open Modal
                </Button> */}

                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Download Inspection Records</DialogHeader>
                        <DialogBody>
                        <div></div>

                            <div className='space-y-4'>
                                <Select color="blue" label="Status" onChange={(val) => setModalStatus(val)} className='text-black'>
                                    <Option value='All'> <strong className='text-blue-600'>All</strong></Option>
                                    <Option value='New'> <strong className='text-blue-600'>New</strong></Option>
                                    <Option value='In-progress'> <strong className='text-blue-600'>In Progress</strong></Option>					
                                    <Option value='Problem'> <strong className='text-blue-600'>Problem</strong></Option>					
                                    <Option value='Completed'> <strong className='text-blue-600'>Completed</strong></Option>					
                                </Select> 
                                <Excel status={modalStatus}/>
                            </div>

                        </DialogBody>
                    <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1 hidden"
                        
                    >
                        <span>Dont press</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Close</span>
                    </Button>
                    </DialogFooter>
                </Dialog>
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
