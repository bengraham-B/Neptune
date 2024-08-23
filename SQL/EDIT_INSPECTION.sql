UPDATE inspection
SET 
    status=$1,
    code=$2,
    GRV=$3,
    date_inspected=$4,
    project=$5,
    part_number=$6,
    serial_number=$7,
    production_job_number=$8,
    department_company=$9,
    syspro_code=$10,
    manuf_items=$11,
    inspection_phase=$12,
    total_qty=$13,
    qty_accepted=$14,
    qty_to_be_reworked=$15,
    qty_rejected=$16,
    qty_wip=$17,
    defect_codes=$18,
    remarks=$19,
    purchase_order_number=$20,
    FTA=$21
WHERE id=${id}