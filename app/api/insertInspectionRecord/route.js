import { NextResponse } from "next/server";
import pool from "@/app/database/database";

const getLatestInspectionCode = async () => {
    try {
        const SQL = `SELECT * FROM inspection ORDER BY inspection_code_digit DESC LIMIT 1`
        const query =   await pool.query(SQL)
        const inspectionDigit = query.rows[0].inspection_code_digit
        return inspectionDigit
    } catch (error) {
        return "Error"
    }
}

export async function POST(req) {
    try {
        // Parse JSON body from the request
        const {
            GRV, date_inspected, project, part_number, serial_number, 
            production_job_number, department_company, syspro_code, manuf_items, 
            inspection_phase, total_qty, qty_accepted, qty_to_be_reworked, 
            qty_rejected, qty_wip, defect_codes, remarks, purchase_order_number
        } = await req.json();
        
        let inspectionDigit = await getLatestInspectionCode()


        let d = new Date()
        let currentYear = d.getFullYear()
        let inspectionNumber = `I${currentYear-2000}/${inspectionDigit}`


        if(inspectionDigit === "Error"){
            // Checks to see if there is a base record by checking the the DB has any records.
            const checkRowAmount = await pool.query(`SELECT count(*) FROM inspection`)
            // console.log(checkRowAmount.rows[0].count)
            if(checkRowAmount.rows[0].count == 0){
                inspectionDigit = 1
                inspectionNumber = `I${currentYear-2000}/${inspectionDigit}`

            }
            else {
                return NextResponse.json({ status: 400, msg: "Could retrive Latest Inspection Code Digit" });
            }
        }

        else {
            inspectionDigit++
            inspectionNumber = `I${currentYear-2000}/${inspectionDigit}`
        
        }


            


        

        // SQL Insert Query
        const SQL = `
            INSERT INTO inspection (
                "status","inspection_code_digit", "inspection_code_year", "inspection_code", "grv", "date_inspected", "project", 
                "part_number", "serial_number", "production_job_number", 
                "department_company", "syspro_code", "manuf_items", 
                "inspection_phase", "total_qty", "qty_accepted", 
                "qty_to_be_reworked", "qty_rejected", "qty_wip", 
                "defect_codes", "remarks", "purchase_order_number"
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 
                $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22
            );
        `;

        // Values to be inserted
        const values = [
            'new',inspectionDigit , '2024', inspectionNumber, GRV, date_inspected, project,
            part_number, serial_number, production_job_number, department_company, syspro_code, manuf_items, inspection_phase, total_qty, 
            qty_accepted, qty_to_be_reworked, qty_rejected, qty_wip, defect_codes, 
            remarks, purchase_order_number
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
