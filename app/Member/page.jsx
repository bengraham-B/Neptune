import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
// Protecting a server side page


export default async function Member() {
	// Sessions are used on server side components
	const session = await getServerSession(options)

	if (!session){
		redirect("/api/auth/signin?callbackUrl=/Member") //^ This will redirec the, to the login page and if they do log in they will then be directed to the Member page.
	}
	return (
		<div>
			<h1 className='m-2 text-5xl'>Member Server Session</h1>
			<p className='text-2xl m-4 text-orange-700'>{session?.user?.email}</p>
			<p className='text-lg m-4 text-orange-400'>{session?.user?.role}</p>
		</div>
	)
}