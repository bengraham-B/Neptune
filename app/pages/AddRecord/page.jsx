import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <main className='flex flex-col space-y-4'>
			<section className='flex justify-center py-4 text-3xl text-black'>Add Inspection Record</section>

			<section className='flex justify-center mx-20'>

				<div className='flex p-6 space-x-20 justify-betwween border border-blue-600 rounded'>

					<div id="Left-Side" className="flex flex-col space-y-4">
						<div>
							<label class="block text-black text-lg mb-1" for="code">
								Code
							</label>
							<input id="code" placeholder="Code" class="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>

						<div>
							<label class="block text-black text-lg mb-1" for="code">
								Inspection Number
							</label>
							<input id="inspection-number" placeholder="Inspection Number" class="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
    
					</div>

					<div id="Right-Side" className='flex flex-col space-y-4'>
						<div>
							<label class="block text-black text-lg mb-1" for="project">
								Project
							</label>
							<input id="project" placeholder="Project" class="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						<div>
							<label class="block text-black text-lg mb-1" for="GRV">
								GRV
							</label>
							<input id="GRV" placeholder="GRV" class="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="date"/>
						</div>

						<div>
							<label class="block text-black text-lg mb-1" for="date-inspected">
								Date Inspected
							</label>
							<input id="date-inspected" placeholder="Date Inspected" class="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="Date"/>
						</div>
    
					</div>
				</div>


			</section>

			<section className='flex justify-center space-x-9'>
				<Link href={"/"} className='px-4 py-2 bg-red-600 text-white rounded'>Cancel</Link>
				<button className='px-4 py-2 bg-blue-600 text-white rounded'>Add Inspection Record</button>
			</section>
		</main>
    )
}
