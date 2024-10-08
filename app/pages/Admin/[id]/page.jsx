"use client"
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Page({params}) {

    const router = useRouter();


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [inspectionNum, setInspectionNum] = useState()

    const userID = params.id

    const fetchUser = async (id) => {
        try {
            const response = await fetch('/api/singleUser/', {
                method: "POST",
                body: JSON.stringify({id: id}),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()
            console.log(data.name)

            if(response.ok){
                setName(data.user.name)
                setEmail(data.user.email)
                setInspectionNum(data.user.inspection_number)
            }
            setUser(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const updateUser = async () => {
        const userID = params.id
        try {
            const response = await fetch("/api/User/", {
                method: "PUT",
                body: JSON.stringify({
                    id: params.id,
                    name: name,
                    email: email,
                    inspectionNum: inspectionNum
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()
            if(response.ok){
                router.push('/pages/Admin')

            }
        } catch (error) {
            console.log(error.message)
        }
    }
   
    const deleteUser = async () => {
        try {
            const response = await fetch("/api/User/", {
                method: "DELETE",
                body: JSON.stringify({
                    id: params.id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()
            if(response.ok){
                router.push('/pages/Admin')

            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleEdit = (id) => {
        updateUser(id)
    }

    const handleDelete = () => {
        if (confirm("Confirm Delete")) deleteUser()
    }


    useEffect(() => {

        fetchUser(userID)
        
    }, [])
    

  return (
        <main >

            <section className='flex justify-center m-8'>
                <h1 className='text-3xl'>Edit Details</h1>
            </section>

            <div className='flex justify-center'>
                <section className='p-8 border border-blue-600 rounded space-y-6'>
                    <div className='flex flex-col space-y-2 text-lg'>
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full max-w-xs border-blue-800" />
                    </div>
                    <div className='flex flex-col space-y-2 text-lg'>
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="input input-bordered w-full max-w-xs border-blue-800" />
                    </div>
                    <div className='flex flex-col space-y-2 text-lg'>
                        <label htmlFor="">Inspection Number</label>
                        <input type="number" value={inspectionNum} onChange={(e) => setInspectionNum(e.target.value)}  className="appearance-none input input-bordered w-full max-w-xs border-blue-800" />
                    </div>
                
                    <section className='flex justify-around'>
                        <button className="btn w-24 btn-info text-white" onClick={() => handleEdit(userID)}>Edit</button>
                        <button className="btn w-24 btn-error text-white" onClick={handleDelete}>Delete</button>
                    </section>

                    
                </section>

                
            </div>

            <section className='flex justify-center my-4'>
                <Link href={'/pages/Admin'} className="btn btn-warning w-24">Cancel</Link>
            </section>


        </main>
  )
}
