import { NextResponse } from "next/server";
import pool from "@/app/database/database";

export async function POST(req) {
    try {
        // Parse JSON body from the request
        const {
            code, GRV, date_inspected, project, part_number, serial_number, 
            production_job_number, department_company, syspro_code, manuf_items, 
            inspection_phase, total_qty, qty_accepted, qty_to_be_reworked, 
            qty_rejected, qty_wip, defect_codes, remarks, purchase_order_number
        } = await req.json();

        

        // SQL Insert Query
        const SQL = `
            INSERT INTO inspection (
                "status", "code", "grv", "date_inspected", "project", 
                "part_number", "serial_number", "production_job_number", 
                "department_company", "syspro_code", "manuf_items", 
                "inspection_phase", "total_qty", "qty_accepted", 
                "qty_to_be_reworked", "qty_rejected", "qty_wip", 
                "defect_codes", "remarks", "purchase_order_number"
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 
                $12, $13, $14, $15, $16, $17, $18, $19, $20
            );
        `;

        // Values to be inserted
        const values = [
            'new', // Assuming default status or change as needed
            code, GRV, date_inspected, project, part_number, 
            serial_number, production_job_number, department_company, 
            syspro_code, manuf_items, inspection_phase, total_qty, 
            qty_accepted, qty_to_be_reworked, qty_rejected, qty_wip, 
            defect_codes, remarks, purchase_order_number
        ];

        // Execute the query
        await pool.query(SQL, values);

        // Return success response
        return NextResponse.json({ status: 200, msg: "Successfully Inserted Transaction" });
    } catch (error) {
        // Log error and return failure response
        console.error('Error inserting record:', error.message);
        return NextResponse.json({ status: 400, msg: "Could not insert Record" });
    }
}
