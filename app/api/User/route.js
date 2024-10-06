import { NextResponse } from "next/server";
import pool from "@/app/database/database";

export async function GET() {
    try {
        const SQL = `SELECT * FROM rrs_user;`
        const query =   await pool.query(SQL)
        const users = query.rows
        return NextResponse.json({users: users}, {status: 200})
        
    } catch (error) {
        return NextResponse.json({ status: 400, msg: "Could not retrieve", error: error.message });
    }
}

export async function POST(req){
    const body = await req.json()
    try {
        const SQL = `INSERT INTO rrs_user(name, email, inspection_number) VALUES ('${body.name}', '${body.email}', '${body.inspectionNum}')`
        const query = await pool.query(SQL)
        const user = query.rows
        return NextResponse.json({user: user}, {status: 200})
        
    } catch (error) {
        console.log(">", error.message)
        return NextResponse.json({ status: 400, msg: "Could not add employee", error: error.message });
    }
}

export async function DELETE(req){
    const body = await req.json()
    try {
        const SQL = `DELETE FROM rrs_user WHERE id='${body.id}'`
        const query = await pool.query(SQL)
        const user = query.rows[0]
        return NextResponse.json({user: user}, {status: 200})
        
    } catch (error) {
        return NextResponse.json({ status: 400, msg: "Could not Delete employee", error: error.message });
    }
}

export async function PUT(req){
    const body = await req.json()

    try {
        const SQL = `UPDATE rrs_user SET name='${body.name}', email='${body.email}', inspection_number='${body.inspectionNum}' WHERE id='${body.id}'`;
        const query = await pool.query(SQL)
        const user = query.rows[0]
        console.log(user)
        return NextResponse.json({user: user}, {status: 200})

        
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({error: error.message}, {status: 400})
    }
}