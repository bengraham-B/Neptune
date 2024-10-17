import { NextResponse } from "next/server";
import pool from "@/app/database/database";

export async function POST(req) {
  try {
    // Parse the request body
    const { id } = await req.json();

    // Use parameterized query to prevent SQL injection
    const SQL = `SELECT * FROM rrs_user WHERE id = $1;`;
    const values = [id];

    const query = await pool.query(SQL, values);
    const user = query.rows[0];

    // Check if user exists
    if (user.length === 0) {
      return NextResponse.json({ msg: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json({ user: user }, { status: 200 });

  } catch (error) {
    // Log the error message and return error response
    console.error("Error retrieving user:", error.message);
    return NextResponse.json(
      { msg: "Could not retrieve user", error: error.message },
      { status: 400 }
    );
  }
}

export async function PUT(req){
    const body = await req.json()

    try {
        const SQL = `UPDATE user SET name='${body.name}', email='${body.email}', inspection_number='${body.inspectionNum}' WHERE id='${id}' RETURNING *`;
        const query = await pool.query(SQL)
        const user = query.rows[0]
        console.log(user)
        return NextResponse.json({user: user}, {status: 200})

        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}
