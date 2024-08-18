import { NextResponse } from "next/server";
import pool from "@/app/database/database";

export async function POST(req){
    const body = await req.json()


    try {
        const SQL = `SELECT * FROM inspection WHERE id='${body.id}'`
        const query = await pool.query(SQL)
        const record = query.rows[0]
        return NextResponse.json({record: record}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}