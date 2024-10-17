"use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link';

const member = [
    {id: "001", role: "Supervisor", name: "James Smith", email: "jamess@gmail.com", inspectionNum: 1},
    {id: "002", role: "Technician", name: "Sam Tomb", email: "samt@gmail.com", inspectionNum: 2},
    {id: "003", role: "Technician", name: "Brendon Roberts", email: "jamess@gmail.com", inspectionNum: 3}
]


export default function Page() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const [modalStatus, setModalStatus] = useState(null)

    const [user, setUser] = useState()

    const getUsers = async () => {
        try {
            const response = await fetch('/api/User')
            const data = await response.json()
            console.log(data)
            setUser(data.users)

        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getUsers()

    }, [])

    return (
        <main className='py-8 space-y-8'>
            <section className='flex justify-center align-middle'>
                <h1 className='text-4xl text-blue-600'>Inspection Register Admin</h1>
            </section>

            <section className="flex justify-center">
                <Link  href={'/pages/Admin/AddUser'} className="btn btn-success w-36 text-white">Add Employee</Link>
            </section>

            <section className='flex p-8 px-14'>
                <div className="flex w-full overflow-x-auto">
                    <table className="table-hover table">
                        <thead>
                            <tr className='bg-gray-100'>
                                <th></th>
                                <th className='text-black text-2xl font-light'>Name</th>
                                <th className='text-black text-2xl font-light'>Gmail Account</th>
                                <th className='text-black text-2xl font-light'>Inspection Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {user && user.map((M, i) => (
                            <tr key={M.id}>
                                <td className='text-lg'>{i+1}</td>
                                <td className='text-lg'>{M.name}</td>
                                <td className='text-lg'>{M.email}</td>
                                <td className='text-lg'>{M.inspection_number}</td>
                                <td className='text-blue-600'>
                                    <Link href={`/pages/Admin/${M.id}`} className='felx py-2 px-4 rounded bg-blue-600 text-white'>Edit</Link>

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
