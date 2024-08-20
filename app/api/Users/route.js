import pool from "@/app/database/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

async function duplicateEmail(_email){ 
    const SQL = `SELECT email FROM inspection_user`
    const emails = await pool.query(SQL)

    console.log(emails.rows)

    for (let i = 0; i < emails.rows.length; i++){
        if(_email === emails.rows[i].email) {
            return NextResponse.json({message: "Email already Taken"}, {status: 409})
        }
    }

}


export async function POST(req){
    try {
        const body = await req.json()
        const userData = body.formData
        console.log(userData)

        // Confirm That data exists
        if(!userData?.email || !userData.password){
            return NextResponse.json({message: "All fields required"}, {status: 400})
        }   

        console.log(userData.email)

        // Check Duplicate emails
        await duplicateEmail(userData.email)

        const hashPassword = await bcrypt.hash(userData.password, 10)
        userData.password = hashPassword

        const SQL = `INSERT INTO inspection_user ("email", "name", "password", "privilege") VALUES ('${userData.email}', '${userData.name}', '${userData.password}', 'user')`
        const createUser = await pool.query(SQL)

        return NextResponse.json({message: createUser.rows}, {status: 201})
        
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message: error.message, catch: "Catch"}, {status: 500})
    }
}