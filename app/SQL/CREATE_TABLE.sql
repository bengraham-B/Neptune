CREATE TABLE inspection (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(), 
    status VARCHAR(255),
    inspection_code_digit SERIAL,
    inspection_code_year INT,
    inspection_code VARCHAR(255),
    GRV DATE,
    date_inspected DATE,
    project VARCHAR(255),
    part_number VARCHAR(255),
    serial_number VARCHAR(255),
    production_job_number VARCHAR(255),
    department_company VARCHAR(255),
    syspro_code VARCHAR(255),
    manuf_items VARCHAR(255),
    inspection_phase VARCHAR(255),
    total_qty FLOAT,
    qty_accepted FLOAT,
    qty_to_be_reworked FLOAT,   
    qty_rejected FLOAT,
    qty_wip FLOAT,
    defect_codes VARCHAR(255),
    purchase_order_number VARCHAR(255),
    remarks TEXT,
    observations TEXT
);
