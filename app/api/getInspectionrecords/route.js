import { NextResponse } from "next/server";

export async function POST(req){
    const body = await req.json()
    
    return NextResponse.json({records: body.id}, {status: 200})
}