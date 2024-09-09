"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation'
// Protecting a client side page

export default function CleintMember() {
	// const {data: session} = useSession({
	// 	required: true,
	// 	onUnauthenticated(){
	// 		redirect("/api/auth/signin?callbackUrl=/ClientMember")
	// 	}
	// })
	return (
		<div className='bg-gray-300'>
			<h1 className='m-2 text-5xl text-teal-700'>Member Client Session</h1>

			{/* <div className='m-4'>
				<p className='text-2xl text-orange-700'>{session?.user?.email}</p>
				<p className='text-2xl text-orange-600'>{session?.user?.name}</p>
				<p className='text-lg text-orange-400'>{session?.user?.role}</p>
			</div> */}

		</div>
	)
}