"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';


import Excel from '@/app/components/Excel'
import { Select, Option } from "@material-tailwind/react";



export default function Page() {
    const [modalStatus, setModalStatus] = useState(null)
	const [status, setStatus] = useState()

  
    return (
        <div className='h-screen overflow-hidden'>
			<div className='grid place-items-center h-full'>

				<div className=" flex flex-col justify-start border rounded space-y-4 border-black p-8 w-1/2">
					<div className='space-y-4'>

						<div className='flex justify-start'>
							<h1 className='text-2xl'>Download Excel</h1>
						</div>

						<div className='w-full'>
							<select id="cars" name="cars" onChange={(e) => setStatus(e.target.value)} className='w-full appearance-non border border-black p-1 pl-2 text-lg'>
								<option value="" defaultValue={"Chooses status"}>Choose status</option>
								<option value="New">New</option>
								<option value="In-progress">In Progress</option>
								<option value="completed">Completed</option>
								<option value="All">All</option>
							</select>
						</div>

						<div className='flex justify-end'>
							<div className="flex flex-col space-y-2">
								<Excel status={status}/>
								<Link href={"/"} className='flex justify-center rounded border border-red-600 py-1 px-4 bg-red-600 text-white'>Cancel</Link>
							</div>
						</div>

					</div>
				</div>
				
			</div>
		</div>
    )
}
