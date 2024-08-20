import { NextResponse } from "next/server";
import pool from "@/app/database/database";

export async function PUT(req){
    const {
        id, status, GRV, date_inspected, project, part_number, serial_number, 
        production_job_number, department_company, syspro_code, manuf_items, 
        inspection_phase, total_qty, qty_accepted, qty_to_be_reworked, 
        qty_rejected, qty_wip, defect_codes, remarks, purchase_order_number
    } = await req.json()

    try {
        const SQL = `
        UPDATE inspection
        SET 
            status=$1,
            GRV=$2,
            date_inspected=$3,
            project=$4,
            part_number=$5,
            serial_number=$6,
            production_job_number=$7,
            department_company=$8,
            syspro_code=$9,
            manuf_items=$10,
            inspection_phase=$11,
            total_qty=$12,
            qty_accepted=$13,
            qty_to_be_reworked=$14,
            qty_rejected=$15,
            qty_wip=$16,
            defect_codes=$17,
            remarks=$18,
            purchase_order_number=$19
        WHERE id='${id}'        
        `

        const values =[
            status, 
            GRV,
            date_inspected,
            project,
            part_number,
            serial_number,
            production_job_number,
            department_company,
            syspro_code,
            manuf_items,
            inspection_phase,
            total_qty,
            qty_accepted,
            qty_to_be_reworked,
            qty_rejected,
            qty_wip,
            defect_codes,
            remarks,
            purchase_order_number

        ]

        const query = await pool.query(SQL, values)
        return NextResponse.json({ status: 200, msg: "Successfully Updated Inspection" });

    } catch (error) {
        return NextResponse.json({ status: 400, msg: "Could not insert Record", error: error.message });
    }
}