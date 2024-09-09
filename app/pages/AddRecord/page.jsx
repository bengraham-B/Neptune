"use client"
import Link from 'next/link'
import React, { useState} from 'react'
import { useRouter } from 'next/navigation';



export default function page() {
	// Initilising the router on the clinet side - use next/navigation on client compoents/pages
	const router = useRouter();

	// Get current date 
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
	const day = String(currentDate.getDate()).padStart(2, '0');

	const postgresDate = `${year}-${month}-${day}`; // Output example: "2024-08-21"
	console.log(postgresDate); 

	const formatDate = (dateString) => {
        try {
            const date = new Date(dateString.replace(' ', 'T'))
            return date.toLocaleDateString('en-GB') // Format as 'DD/MM/YYYY'
        } catch (error) {
            return null
        }
    }

	const currentDatePrint = (`${day}/${month}/${year}`)
	console.log(currentDatePrint)

	 // Above Table
	 const [inspectionCode, setInspectionCode] = useState() //
	 const [status, setStatus] = useState() //
	 
	 // Row 1
	 const [GRV, setGRV] = useState() //
	 const [dateInspected, setDateInspected] = useState() //
	 const [inspectionNumber, setInspectionNumber] = useState() // -  //This is the number assigned to the member of the QA tea,
	 const [projectCode, setProjectCode] = useState() //
	 
	 // Row 2
	 const [partNumber, setPartNumber] = useState() //
	 const [serialNumbers, setSerialNumbers] = useState() //
	 const [purchaseOrderNumber, setPurchaseOrderNumber] = useState() //
	 const [productionJobNumber, setProductionJobNumber] = useState() //
 
	 // Row 3
	 const [departmentCompany, setDepartmentCompany] = useState() //
	 const [sysproCode, setSysproCode] = useState() //
	 const [manufItems, setManufItems] = useState() //
	 const [inspectionPhase, setInspectionPhase] = useState() //
	 
	 // Row 4
	 const [totalQty, setTotalQty] = useState(0) //
	 const [acceptedQty, setAcceptedQty] = useState(0) //
	 const [qtyToBeReworked, setQtyToBeReworked] = useState(0) //
	 const [qtyRejected, setQtyRejected] = useState(0) //
	 const [qtyWIP, setQtyWIP] = useState(0)
	 
	 // Row 5
	 const [defectCode, setDefectCode] = useState()
	 const [remarks, setRemarks] = useState()
	 
 
	 const [sumOfQty, setSumOfQty] = useState()

	const createInspectionRecordObject = {
		status: "Created", 
		GRV: GRV ? GRV : postgresDate, 
		date_inspected: dateInspected ? dateInspected : postgresDate,
		project: projectCode,
		part_number: partNumber,
		serial_number: serialNumbers,
		production_job_number: productionJobNumber,
		department_company: departmentCompany,
		syspro_code: sysproCode,
		manuf_items: manufItems,
		inspection_phase: "NA", //InspectionPhaacceptedQtyse

		total_qty: totalQty  ? totalQty : 0,
		qty_accepted:  acceptedQty  ? acceptedQty : 0,
		qty_to_be_reworked:  qtyToBeReworked  ? qtyToBeReworked : 0,
		qty_rejected:  qtyRejected  ? qtyRejected : 0,
		qty_wip:  qtyWIP  ? qtyWIP : 0,

		defect_codes: defectCode,
		remarks: remarks,
		purchase_order_number: purchaseOrderNumber

	}

	const insertInspectionRecord = async () => {
		let sumOfQty = Number(qtyRejected) + Number(qtyWIP) + Number(acceptedQty) + Number(qtyToBeReworked)
        let totalQtyEditSymbit = Number(totalQty)

		if(totalQtyEditSymbit === sumOfQty){
			const response = await fetch('/api/insertInspectionRecord/', {
				method: "POST",
				body: JSON.stringify(createInspectionRecordObject),
				headers: {
					"Content-Type": "application/json"
				}
			})
	
			const data = await response.json()
	
			if (response.ok){
				router.push('/')
				
			}
	
			else {
				alert("Error Creating Inspection Record")
			}
		}

		else {
			alert("Qty Fields are Not Equal")
		}
	}

	const handleDefectCode = (event) => {
		setDefectCode(event.target.value); // Save the selected value to state
    	alert("Selected Value: ", event.target.value);
	}

	return (
        <main className='flex flex-col space-y-4 py-2'>
        	<section className='flex justify-center  text-3xl text-black font- font-liht'>ADD INSPECTION RECORD</section>

		<data value=""></data>

			<section className='flex flex-col justify-center mx-20'>
				<div className='py-1 text-black text-lg flex flex-row justify-between'>
					<h1  className='flex flex-row'><strong className='text-2xl'>Inspection Number</strong>: <p className='text-blue-600 pl-2 text-2xl'> Inspection Number will be generated once record is completed</p></h1>
					{/* <h1  className='flex flex-row'><strong className='text-2xl'>Status</strong>: <p className='text-blue-600 pl-2 text-2xl'> {status}</p></h1> */}
				</div>

				<div className='p-6  justify-between border border-blue-600 rounded'>
				
					<div id="row-1" className='flex flex-row space-x-4 justify-between py-2'>
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="project1">
								GRV
							</label>
							<input onChange={(e) => setGRV(e.target.value)} id="project1" value={GRV} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="date" />
						</div>
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="project1">
								Date Inspected
							</label>
							<input onChange={(e) => setDateInspected(e.target.value)} id="project1" value={dateInspected} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="date" />
						</div>
						
							
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Inspection Number
							</label>
							<input onChange={(e) => setInspectionNumber(e.target.value)} id="" value={inspectionNumber} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>
					
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Project Code
							</label>
							<input onChange={(e) => setProjectCode(e.target.value)} id="" value={projectCode} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>

					</div>
				
					<div id="row-2" className='flex flex-row space-x-4 justify-between py-2'>
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="project1">
								Part Number
							</label>
							<input onChange={(e) => setPartNumber(e.target.value)} id="project1" value={partNumber} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
							
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="project">
								Serial Numbers
							</label>
							<input onChange={(e) => setSerialNumbers(e.target.value)} id="qty-wip" value={serialNumbers} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>


						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Purchase Order
							</label>
							<input onChange={(e) => setPurchaseOrderNumber(e.target.value)} id="qty-rejected" value={purchaseOrderNumber} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>

						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Production Job Number
							</label>
							<input onChange={(e) => setProductionJobNumber(e.target.value)} id="inspection-number" value={productionJobNumber} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>

					</div>
				
					<div id="row-3" className='flex flex-row space-x-4 justify-between py-2'>
						
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Department Company 
							</label>
							<input onChange={(e) => setDepartmentCompany(e.target.value)} id="inspection-number" value={departmentCompany} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Syspro Code 
							</label>
							<input onChange={(e) => setSysproCode(e.target.value)} id="inspection-number" value={sysproCode} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Manuf Items 
							</label>
							<input onChange={(e) => setManufItems(e.target.value)} id="inspection-number" value={manufItems} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						
						<div className='w-[22.5%]'>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Inspection Phase 
							</label>
							<input onChange={(e) => setInspectionPhase(e.target.value)} id="inspection-number" value={inspectionPhase} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>

					</div>

					<div id="row-4" className='flex flex-row space-x-4 justify-between py-2'>
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Total Qty  
							</label>
							<input onChange={(e) => setTotalQty(e.target.value)} id="inspection-number" value={totalQty}  className={`shadow appearance-none border  border-blue-600  bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline`}  type="number" />
						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Accepted Qty  
							</label>
							<input onChange={(e) => setAcceptedQty(e.target.value)} id="inspection-number" value={acceptedQty}  className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>
						
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Qty To Be reworked
							</label>
							<input onChange={(e) => setQtyToBeReworked(e.target.value)} id="inspection-number" value={qtyToBeReworked}  className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>
					
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Qty Rejected
							</label>
							<input onChange={(e) => setQtyRejected(e.target.value)} id="inspection-number" value={qtyRejected}  className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>
						
						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Qty WIP
							</label>
							<input onChange={(e) => setQtyWIP(e.target.value)} id="inspection-number" value={qtyWIP} placeholder={serialNumbers} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
						</div>
					</div>
				
					<div id="row-5" className='flex flex-row space-x-4 justify-between py-2'>
						<div>
							<div className="w-full max-w-sm min-w-[233px]">
								<label className="block mb-1 text-lg text-black">Defect Codes</label>

								<div className="relative">
									<select
									value={defectCode}
									onChange={handleDefectCode}
									className="w-full h-full bg-transparent placeholder:text-slate-400 text-black text-md border border-blue-600 rounded px-3 py-2 appearance-none cursor-pointer">
										<option value={qtyRejected}>{qtyRejected}</option>
										<option value="bucharest">Bucharest</option>
										<option value="london">London</option>
										<option value="washington">Washington</option>
										</select>

										<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.2"
										stroke="currentColor"
										className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
											/>
										</svg>
								</div>
							</div>

						</div>

						<div>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Remarks
							</label>
							<textarea onChange={(e) => setRemarks(e.target.value)} id="inspection-number" value={remarks} placeholder={serialNumbers} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
						</div>
						
					</div>

					



				
				</div>
					



			</section>

			<section className='flex justify-center space-x-9'>
				<Link href={"/"} className='px-4 py-2 bg-red-600 text-white rounded'>Cancel</Link>
				<button onClick={insertInspectionRecord} className='px-4 py-2 bg-green-600 text-white rounded'>Complete</button>
			</section>
    	</main>
    )

    // return (
    //     <main className='flex flex-col space-y-4'>
	// 		<section className='flex justify-center py-4 text-3xl text-black font-body font-liht'>ADD INSPECTION RECORD</section>



	// 		<section className='flex flex-col justify-center mx-20'>
	// 			<div className='py-2 text-black text-lg'>
	// 				<h1><strong>Inspection Number</strong> Will Be Generated Once Form is sumbmitted</h1>
	// 			</div>

	// 			<div className='flex p-6 space-x-20 justify-between border border-blue-600 rounded'>

	// 				<div id="Column-1" className="flex flex-col space-y-4">
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							GRV
	// 						</label>
	// 						<input onChange={(e) => setGRV(e.target.value)}  id="code" placeholder="Code"  className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="date" />
	// 					</div>

	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Production Job Number
	// 						</label>
	// 						<input onChange={(e) => setProductionJobNumber(e.target.value)} id="inspection-number" placeholder="Inspection Number" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>

	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Total Qty
	// 						</label>
	// 						<input onChange={(e) => setTotalQty(e.target.value)} id="inspection-number" placeholder="Total Qty" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
	// 					</div>
						
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Qty WIP
	// 						</label>
	// 						<input onChange={(e) => setQtyWIP(e.target.value)} id="inspection-number" placeholder="Qty WIP" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
	// 					</div>
						
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Purchase Order
	// 						</label>
	// 						<input onChange={(e) => setPurchaseOrderNumber(e.target.value)} id="inspection-number" placeholder="Purchase Order" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>
    
	// 				</div>

	// 				<div id="Column-2" className='flex flex-col space-y-4'>

	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="GRV">
	// 							Date Inspected
	// 						</label>
	// 						<input onChange={(e) => setDateInspected(e.target.value)}  id="GRV" placeholder="GRV" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="date"/>
	// 					</div>
						
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="GRV">
	// 							Department Company
	// 						</label>
	// 						<input onChange={(e) => setDepartmentCompany(e.target.value)} id="GRV" placeholder="Department Company" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text"/>
	// 					</div>

	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Qty Accepted
	// 						</label>
	// 						<input onChange={(e) => setAcceptedQty(e.target.value)} id="inspection-number" placeholder="Qty Accepted" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
	// 					</div>

	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Defect Codes
	// 						</label>

	// 						{defectCode ? 
							
	// 						<input className='shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline' type="text" value={defectCode} onClick={() => setDefectCode(null)}/>

	// 						:
							
	// 						<Select value={defectCode} onChange={(val) => setDefectCode(val)}  color="blue" label="" className='text-black border border-blue-600 text-lg'>
	// 							<Option value='DB'> <strong className='text-blue-600'>DP </strong> - Datapack</Option>
	// 							<Option value='DB'> <strong className='text-blue-600'>DP </strong> - Datapack</Option>
	// 							<Option value="NPO"><strong className='text-blue-600'>NPO</strong> - No Purchase Order</Option>
	// 							<Option value="BH"> <strong className='text-blue-600'>BH </strong> - Build History & No Document From Suppliers</Option>
	// 							<Option value="LAB"><strong className='text-blue-600'>LAB</strong> - Labels</Option>
	// 							<Option value="LEC"><strong className='text-blue-600'>LEC</strong> - Loose Electrical/Electronic Component</Option>
	// 							<Option value="LMC"><strong className='text-blue-600'>LMC</strong> - Loose Mechanical Components</Option>
	// 							<Option value="NBD"><strong className='text-blue-600'>NBD</strong> - Not Built to Docuemntation</Option>
	// 							<Option value="IC"> <strong className='text-blue-600'>IC </strong> - Incorrect Components</Option>
	// 							<Option value="MC"> <strong className='text-blue-600'>MC </strong> - Missing Component</Option>
	// 							<Option value="">   <strong className='text-blue-600'>DM </strong> - Damaged Component</Option>
	// 							<Option value="">   <strong className='text-blue-600'>UAR</strong> - Unauthorised Redlines</Option>
	// 							<Option value="">   <strong className='text-blue-600'>LLO</strong> - Lower Level Observations Not Cleared</Option>
	// 							<Option value="">   <strong className='text-blue-600'>WMS</strong> - Workmanship</Option>
	// 							<Option value="">   <strong className='text-blue-600'>D  </strong> - Design Deficiency</Option>
	// 							<Option value="">   <strong className='text-blue-600'>O  </strong> - other</Option>								
	// 						</Select> 
	// 					}
							
	// 					</div>   
    
	// 				</div>

	// 				<div id="Column-3" className='flex flex-col space-y-4'>
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="project">
	// 							Project
	// 						</label>
	// 						<input onChange={(e) => setProject(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>
						
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="project">
	// 							Syspro Code
	// 						</label>
	// 						<input onChange={(e) => setSysproCode(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>


	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Qty To Be Reworked
	// 						</label>
	// 						<input onChange={(e) => setQtyToBeReworked(e.target.value)} id="inspection-number" placeholder="Qty To Be Reworked" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
	// 					</div>

	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Remarks 
	// 						</label>
	// 						<input onChange={(e) => setRemarks(e.target.value)} id="inspection-number" placeholder="Remarks" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>

	// 				</div>

	// 				<div id="Column-4" className='flex flex-col space-y-4'>
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="project">
	// 							Part Number
	// 						</label>
	// 						<input onChange={(e) => setPartNumber(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>
						
	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="project">
	// 							Manuf items
	// 						</label>
	// 						<input onChange={(e) => setManufItems(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>


	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="code">
	// 							Qty Rejected
	// 						</label>
	// 						<input onChange={(e) => setQtyRejected(e.target.value)} id="inspection-number" placeholder="Qty Rejected" className="shadow appearance-noe border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
	// 					</div>

	// 					<div>
	// 						<label className="block text-black text-lg mb-1" htmlFor="project">
	// 							Serial Numbers
	// 						</label>
	// 						<input onChange={(e) => setSerialNumbers(e.target.value)} id="project" placeholder="Project" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
	// 					</div>
						
	// 				</div>

	// 			</div>
					



	// 		</section>

	// 		<section className='flex justify-center space-x-9'>
	// 			<Link href={"/"} className='px-4 py-2 bg-red-600 text-white rounded'>Cancel</Link>
	// 			<button onClick={insertInspectionRecord} className='px-4 py-2 bg-blue-600 text-white rounded'>Complete</button>
	// 		</section>
	// 	</main>
    // )
}
