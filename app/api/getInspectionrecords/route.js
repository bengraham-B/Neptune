import { NextResponse } from "next/server";

export async function POST(req){
    const body = await req.json()
    
    return NextResponse.json({records: body.id}, {status: 200})
}

export async function GET(){
    return NextResponse.json({records: "Server is working :)"}, {status: 200})
}