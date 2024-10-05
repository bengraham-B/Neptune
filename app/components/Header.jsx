"use client"
import React from 'react'
import Link from 'next/link'

// Next Auth
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation'
// Redux

import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_REDUX, LOGOUT_REDUX } from '../GlobalRedux/Auth/authASlice'

// Material Tailwind
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   

export default  function Header() {
    // const session = await getServerSession(options)
    // const {data: session} = useSession({
	// 	required: true,
	// 	onUnauthenticated(){
	// 		redirect("/api/auth/signin?callbackUrl=/")
	// 	}
	// })
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth.value)

  return (
    <main className='flex bg-blue-700 text-white py-5 px-2'>
        <section className='w-1/3 '>
            <Link href="/" className='flex align-middle'>
                <h1 className='text-4xl'>Home</h1>
            </Link>
        </section>

        <section className='flex justify-center text-center w-1/3'>
            <h1 className='text-3xl'>RRS Inspection Register</h1>
        </section>

        <section className='flex justify-end w-1/3 space-x-4 pr-4 align-middle'>

            <div className='text-lg flex align-middle'>
                {/* <p className='text-lg flex align-middle text-center'>{session?.user?.name}</p> */}
            </div>

            <div className='flex justify-center align-middle'>
                <Link href="/pages/Admin" className='text-lg border border-white rounded py-2 px-4'>Admin</Link>
            </div>

            <div className='text-lg flex align-middle'>
                {/* {session ? <Link href="/api/auth/signout?callbackUrl=/" className='px-4 py-2 rounded text-white border border-white hover:bg-white hover:text-black'>Logout</Link> : <Link href="/api/auth/signin" className='px-4 py-2 rounded text-white border border-white hover:bg-white hover:text-black'>Login</Link> } */}
            </div>

        </section>
    </main>
  )
}
