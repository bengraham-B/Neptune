"use client"
import Link from 'next/link'
import React, { useState} from 'react'

// Import Inspection Class
import { InspectionRecordClass } from '@/app/classes/InspectionClass'

export default function page() {

	const [GRV, setGRV] = useState()
	const [dateInspected, setDateInspected] = useState()
	const [project, setProject] = useState()
	const [partNumber, setPartNumber] = useState()
	const [purchaseOrderNumber, setPurchaseOrderNumber] = useState()
	
	const [productionJobNumber, setProductionJobNumber] = useState()
	const [departmentCompany, setDepartmentCompany] = useState()
	const [sysproCode, setSysproCode] = useState()
	const [manufItems, setManufItems] = useState()

	const [totalQty, setTotalQty] = useState()
	const [acceptedQty, setAcceptedQty] = useState()
	const [qtyToBeReworked, setQtyToBeReworked] = useState()
	const [qtyRejected, setQtyRejected] = useState()

	const [qtyWIP, setQtyWIP] = useState()
	const [defectCode, setDefectCode] = useState()
	const [remarks, setRemarks] = useState()
	const [serialNumbers, setSerialNumbers] = useState()

	// const inspectionRecord = new InspectionRecordClass(
	// 	null, // id
	// 	"Created", // Status
	// 	null, // InspectionCode
	// 	GRV, 
	// 	dateInspected,
	// 	project,
	// 	partNumber,
	// 	serialNumbers,
	// 	productionJobNumber,
	// 	departmentCompany,
	// 	sysproCode,
	// 	manufItems,
	// 	"NA", //InspectionPhase
	// 	totalQty,
	// 	acceptedQty,
	// 	qtyToBeReworked,
	// 	qtyRejected,
	// 	qtyWIP,
	// 	defectCode,
	// 	remarks,
	// 	purchaseOrderNumber
	// )

	const createInspectionRecordObject = {
		status: "Created", 
		GRV: GRV, 
		date_inspected: dateInspected,
		project: project,
		part_number: partNumber,
		serial_number: serialNumbers,
		production_job_number: productionJobNumber,
		department_company: departmentCompany,
		syspro_code: sysproCode,
		manuf_items: manufItems,
		inspection_phase: "NA", //InspectionPhase
		total_qty: totalQty,
		qty_accepted: acceptedQty,
		qty_to_be_reworked: qtyToBeReworked,
		qty_rejected: qtyRejected,
		qty_wip: qtyWIP,
		defect_codes: defectCode,
		remarks: remarks,
		purchase_order_number: purchaseOrderNumber

	}

	const insertInspectionRecord = async () => {
		const response = await fetch('/api/insertInspectionRecord/', {
			method: "POST",
			body: JSON.stringify(createInspectionRecordObject),
			headers: {
				"Content-Type": "application/json"
			}
		})

		const data = await response.json()

		if (response.ok){
			alert(200, data)
			
		}

		else {
			alert(400, data)
		}
	}


    return (
        <main className='flex flex-col space-y-4'>
			<section className='flex justify-center py-4 text-3xl text-black'>Add Inspection Record</section>



			<section className='flex flex-col justify-center mx-20'>
				<div className='py-2 text-black text-lg'>
					<h1>Inspection Code Will Be Generated Once Form is sumbmitted</h1>
				</div>

				<div className='flex p-6 space-x-20 justify-betwween border border-blue-600 rounded'>

					<div id="Column-1" className="flex flex-col space-y-4">
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								GRV
							</label>
							<input onChange={(e) => setGRV(e.target.value)} id="code" placeholder="Code"  className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="date" />
						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Production Job Number
							</label>
							<input onChange={(e) => setProductionJobNumber(e.target.value)} id="inspection-number" placeholder="Inspection Number" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Total Qty
							</label>
							<input onChange={(e) => setTotalQty(e.target.value)} id="inspection-number" placeholder="Total Qty" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>
						
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Qty WIP
							</label>
							<input onChange={(e) => setQtyWIP(e.target.value)} id="inspection-number" placeholder="Qty WIP" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>
						
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Purchase Order
							</label>
							<input onChange={(e) => setPurchaseOrderNumber(e.target.value)} id="inspection-number" placeholder="Purchase Order" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
    
					</div>

					<div id="Column-2" className='flex flex-col space-y-4'>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="GRV">
								Date Inspected
							</label>
							<input onChange={(e) => setDateInspected(e.target.value)} id="GRV" placeholder="GRV" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="date"/>
						</div>
						
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="GRV">
								Department Company
							</label>
							<input onChange={(e) => setDepartmentCompany(e.target.value)} id="GRV" placeholder="Department Company" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text"/>
						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Qty Accepted
							</label>
							<input onChange={(e) => setAcceptedQty(e.target.value)} id="inspection-number" placeholder="Qty Accepted" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Defect Codes
							</label>
							<input onChange={(e) => setDefectCode(e.target.value)} id="inspection-number" placeholder="Qty Accepted" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
    
					</div>

					<div id="Column-3" className='flex flex-col space-y-4'>
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Project
							</label>
							<input onChange={(e) => setProject(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Syspro Code
							</label>
							<input onChange={(e) => setSysproCode(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>


						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Qty To Be Reworked
							</label>
							<input onChange={(e) => setQtyToBeReworked(e.target.value)} id="inspection-number" placeholder="Qty To Be Reworked" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Remarks 
							</label>
							<input onChange={(e) => setRemarks(e.target.value)} id="inspection-number" placeholder="Remarks" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>

					</div>

					<div id="Column-4" className='flex flex-col space-y-4'>
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Part Number
							</label>
							<input onChange={(e) => setPartNumber(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Manuf items
							</label>
							<input onChange={(e) => setManufItems(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>


						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Qty Rejected
							</label>
							<input onChange={(e) => setQtyRejected(e.target.value)} id="inspection-number" placeholder="Qty Rejected" className="shadow appearance-noe border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Serial Numbers
							</label>
							<input onChange={(e) => setSerialNumbers(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						
					</div>

				</div>
					



			</section>

			<section className='flex justify-center space-x-9'>
				<Link href={"/"} className='px-4 py-2 bg-red-600 text-white rounded'>Cancel</Link>
				<button onClick={insertInspectionRecord} className='px-4 py-2 bg-blue-600 text-white rounded'>Complete</button>
			</section>
		</main>
    )
}
