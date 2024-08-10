import { NextResponse } from "next/server";

const inspectionRecordsDev = [
    {code: 'ISPC2024/001', stockCode: '5095-RS-8078'},
    {code: 'ISPC2024/002', stockCode: '5695-RS-3978'},
    {code: 'ISPC2024/003', stockCode: '5010-RS-1908'},
]

export async function POST(req){
    const body = await req.json()
    
    return NextResponse.json({records: body.id}, {status: 200})
}

export async function GET(){
    return NextResponse.json({records: inspectionRecordsDev}, {status: 200})
}