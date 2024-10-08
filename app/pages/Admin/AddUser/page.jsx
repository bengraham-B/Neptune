"use client"
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function page() {

    const router = useRouter();

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [inspectionNum, setInspectionNum] = useState()

    const AddUser = async () => {
        try {
            const response = await fetch('/api/User/', {
                method: "POST",
                body: JSON.stringify({
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

    const handleAddUser = () => {
        AddUser()
    }
    
    

  return (
        <main >

            <section className='flex justify-center m-8'>
                <h1 className='text-3xl'>Add Employee</h1>
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
                        <button className="btn w-24 btn-success text-white" onClick={handleAddUser}>Add</button>
                        <Link href={'/pages/Admin'} className="btn w-24 btn-error text-white">Cancel</Link>
                    </section>
                </section>
            </div>
        </main>
  )
}
