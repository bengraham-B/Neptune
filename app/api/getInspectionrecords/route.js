import { NextResponse } from "next/server";
import pool from "@/app/database/database";


import InspectionRecord_Class from "@/app/classes/InspectionClass";
import mockInspectionRecords from '../data/inspectionRecords.json'


const arrayOfInspectionRecords = []

for (let i = 0; i++; i <mockInspectionRecords.length){
    const inspectionRecord = new InspectionRecord_Class(mockInspectionRecords[i].id)
    arrayOfInspectionRecords.push(inspectionRecord)
}

console.log(arrayOfInspectionRecords)

export async function POST(req){
    const body = await req.json()
    
    return NextResponse.json({records: body.id}, {status: 200})
}

export async function GET(){
    try {
        const SQL = `SELECT * FROM inspection`
        const query = await pool.query(SQL)
        return NextResponse.json({records: query.rows}, {status: 400})

        
    } catch (error) {
        return NextResponse.json({status: 400})
    }
    // return NextResponse.json({records: mockInspectionRecords}, {status: 200})
}