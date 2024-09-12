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
		status: "New", 
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
	}

	return (
        <main className='flex flex-col space-y-4 py-2'>
        	<section className='flex justify-center  text-3xl text-black font- font-liht'>ADD INSPECTION RECORD</section>

		<data value=""></data>

			<section className='flex flex-col justify-center mx-20'>
				<div className='py-1 text-black text-lg flex flex-row justify-between'>
					<h1  className='flex flex-row'><strong className='text-2xl'>Inspection Number</strong>: <p className='text-blue-600 pl-2 text-2xl'> Inspection Number will be generated once record is completed</p></h1>
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
							<input onChange={(e) => setProjectCode(e.target.value)} id="" value={projectCode} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
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
						<div className='w-full'>
							
                        	<div>
								<label className="block mb-1 text-lg text-black">Defect Codes</label>

								<select
									value={defectCode}
									onChange={handleDefectCode}
									className=" w-[100%] flex justify-start h-full bg-transparent placeholder:text-slate-400 text-black text-md border border-blue-600 rounded pl-2 pr-16 py-2 appearance-none cursor-pointer">
										<option value="-">- No Defect</option>
										<option value="DP">DP - Datapack</option>
										<option value="NPO">NPO - No Purchase Order</option>
										<option value="BH">BH - Build History Incomplete & No Documenation from Suppliers</option>
										<option value="LAB">LAB - Labels</option>
										<option value="LEC">LEC - Loose Electrical / E;ectronic Connections and Components</option>
										<option value="LMC">LMC - Loose Mechganical Components</option>
										<option value="NBD">NBD - Not built to Documentation</option>
										<option value="IC">IC - Incorect Components</option>
										<option value="MC">MC - Missing Components</option>
										<option value="DAM">DAM - Damaged Components</option>
										<option value="UAR">UAR - Unauthorised Redlines</option>
										<option value="LLO">LLO - Lower Level Observations not Cleared</option>
										<option value="WMS">WMS - Workmanship</option>
										<option value="D">D - Design Deficiency</option>
										<option value="O">O - Other</option>
								</select>
                              
							</div>


						</div>
						
						
					</div>

					<div>
						<div className='w-[100%]'>
							<label className="block text-black text-lg mb-1" htmlFor="code">
								Remarks
							</label>
							<textarea onChange={(e) => setRemarks(e.target.value)} id="inspection-number" value={remarks} placeholder={serialNumbers} className="h-24 shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
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
}
