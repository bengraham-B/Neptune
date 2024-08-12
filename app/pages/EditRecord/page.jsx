import Link from 'next/link'
import React from 'react'

export default function EditRecord() {
    return (
        <main className='flex flex-col space-y-2'>
			<section className='flex justify-center py-4 text-3xl text-black'>Edit Inspection Record</section>

			<section className='flex h-40 border border-blue-600 rounded mx-6'></section>

			<section className='flex justify-center space-x-9'>
				<Link href={"/"} className='px-4 py-2 bg-red-600 text-white rounded'>Cancel</Link>
				<button className='px-4 py-2 bg-blue-600 text-white rounded'>Edit Inspection Record</button>
			</section>
		</main>
    )
}
