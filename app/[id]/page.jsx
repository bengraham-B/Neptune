"use client"
import React, {useEffect, useState} from 'react'
import Link from 'next/link';

// Material Tailwind
import { Select, Option, input } from "@material-tailwind/react";

export default function page({params}) {
    const id = params.id

    const [status, setStatus] = useState()

    const [inspectionCode, setInspectionCode] = useState()
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

    // This will fetch a single inspection record with the specified ID.
    const fetchInspectionReport = async () => {
        const response = await fetch('/api/getSingleInspectionRecord/', {
            method: "POST",
            body: JSON.stringify({id: id}),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.ok){
            const data = await response.json()
            console.log(data.record)
            setInspectionCode(data.record.inspection_code)
            setProject(data.record.project)
            setPartNumber(data.record.part_number)
            setTotalQty(data.record.total_qty)
            setProductionJobNumber(data.record.production_job_number)
            setStatus(data.record.status)
            setAcceptedQty(data.record.qty_accepted)
            setQtyRejected(data.record.qty_rejected)
            setQtyWIP(data.record.qty_wip)
            setQtyToBeReworked(data.record.qty_to_be_reworked)
        }

    }

    const handleEdit = async () => {
        const response = await fetch('/api/updateInspectionRecord/', {
            method: "PUT",
            body: JSON.stringify({
                id: params.id,
                project:project,
                part_number: partNumber,
                production_job_number: productionJobNumber,
                total_qty: totalQty,
                qty_accepted: acceptedQty,
                qty_wip: qtyWIP,
                qty_rejected: qtyRejected,
                qty_to_be_reworked: qtyToBeReworked

            })
        })

        if(response.ok){
            const data = await response.json()
            console.log(data)
        } 

        else {
            alert("Error Updating Inspection Record")
        }

    } 

    useEffect(() => {
        fetchInspectionReport()
    }, [])
    
    return (
        <main className='flex flex-col space-y-4'>
        <section className='flex justify-center py-4 text-3xl text-black font-body font-liht'>EDIT INSPECTION RECORD</section>



        <section className='flex flex-col justify-center mx-20'>
            <div className='py-2 text-black text-lg flex flex-row justify-between'>
                <h1  className='flex flex-row'><strong className='text-2xl'>Inspection Number</strong>: <p className='text-blue-600 pl-2 text-2xl'> {inspectionCode}</p></h1>
                <h1  className='flex flex-row'><strong className='text-2xl'>Status</strong>: <p className='text-blue-600 pl-2 text-2xl'> {status}</p></h1>
            </div>

            <div className='p-6  justify-between border border-blue-600 rounded'>
               
                <div id="row-1" className='flex flex-row space-x-4 justify-between py-4'>
                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="project1">
                            Project
                        </label>
                        <input onChange={(e) => setProject(e.target.value)} id="project1" value={project} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
                    </div>
						
                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="project">
                            Part Number
                        </label>
                        <input onChange={(e) => setPartNumber(e.target.value)} id="" value={partNumber} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
                    </div>


                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="code">
                            Production Job Number
                        </label>
                        <input onChange={(e) => setProductionJobNumber(e.target.value)} id="inspection-number" value={productionJobNumber} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
                    </div>

                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="code">
                            Total Qty 
                        </label>
                        <input onChange={(e) => setTotalQty(e.target.value)} id="inspection-number" value={totalQty} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
                    </div>

				</div>
               
                <div id="row-2" className='flex flex-row space-x-4 justify-between py-4'>
                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="project1">
                            Qty Accpeted
                        </label>
                        <input onChange={(e) => setAcceptedQty(e.target.value)} id="project1" value={acceptedQty} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
                    </div>
						
                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="project">
                            Qty WIP
                        </label>
                        <input onChange={(e) => setQtyWIP(e.target.value)} id="qty-wip" value={qtyWIP} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
                    </div>


                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="code">
                           Qty Rejected
                        </label>
                        <input onChange={(e) => setQtyRejected(e.target.value)} id="qty-rejected" value={qtyRejected} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
                    </div>

                    <div className='w-[22.5%]'>
                        <label className="block text-black text-lg mb-1" htmlFor="code">
                            Qty To Be Reworked
                        </label>
                        <input onChange={(e) => setQtyToBeReworked(e.target.value)} id="inspection-number" value={qtyToBeReworked} className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="number" />
                    </div>

				</div>
               
                <div id="row-3" className='flex flex-row space-x-4 justify-between py-4'>
                    
                    <div className='w-1/2'>
                        <label className="block text-black text-lg mb-1" htmlFor="code">
                            Remarks 
                        </label>
                        <textarea onChange={(e) => setRemarks(e.target.value)} id="inspection-number" value="Remarks" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-20"  type="text" />
                    </div>
                    <div className='w-1/2'>
                        <label className="block text-black text-lg mb-1" htmlFor="code">
                            Observations 
                        </label>
                        <textarea onChange={(e) => setRemarks(e.target.value)} id="inspection-number" placeholder="Remarks" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-20"  type="text" />
                    </div>

				</div>

                <div id="row-4" className=' py-2'>
                    <div>
                        <label className="block text-black text-lg mb-1" htmlFor="code">
                            Serial Numbers 
                        </label>
                        <input onChange={(e) => setRemarks(e.target.value)} id="inspection-number" placeholder="Serial Numbers" className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  type="text" />
                    </div>
                </div>

                



              
            </div>
                



        </section>

        <section className='flex justify-center space-x-9'>
            <Link href={"/"} className='px-4 py-2 bg-red-600 text-white rounded'>Cancel</Link>
            <button onClick={handleEdit} className='px-4 py-2 bg-blue-600 text-white rounded'>UPDATE</button>
        </section>
    </main>
    )
}