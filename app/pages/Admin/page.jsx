"use client"
import React, { useState } from 'react'
import MemberComp from './MemberComp'
// Material Tailwind
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

const member = [
    {id: "001", role: "Supervisor", name: "James Smith", email: "jamess@gmail.com", inspectionNum: 1},
    {id: "002", role: "Technician", name: "Sam Tomb", email: "samt@gmail.com", inspectionNum: 2},
    {id: "003", role: "Technician", name: "Brendon Roberts", email: "jamess@gmail.com", inspectionNum: 3}
]


export default function Page() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const [modalStatus, setModalStatus] = useState(null)

    return (
        <main className='py-8'>
            <section className='flex justify-center align-middle'>
                <h1 className='text-4xl text-blue-600'>Inspection Register Admin</h1>
            </section>

            <section>
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
                                {/* <Excel status={modalStatus}/> */}
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

            <section className='flex p-8 px-14'>
                <div className="flex w-full overflow-x-auto">
                    <table className="table-hover table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Gmail Account</th>
                                <th>Inspection Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {member.map((M) => (
                            <tr key={M.id}>
                                <td>{M.name}</td>
                                <td>{M.role}</td>
                                <td>{M.email}</td>
                                <td>{M.inspectionNum}</td>
                                <td className='text-blue-600'>
                                    <button onClick={handleOpen} className='felx py-2 px-4 rounded bg-green-600 text-white'>Excel</button>

                                </td>
                            </tr>
                        ))}
                           
                        </tbody>
                    </table>
                </div>
               
            </section>
        </main>
    )
}
