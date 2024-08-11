class InspectionRecord_Class {
    constructor(id, status, code, GRV, date_inspected, project, part_number, serial_number, production_job_number, department_company, syspro_code, manuf_items, inspection_phase, total_qty, qty_accepted, qty_to_be_reworked, qty_rejected, qty_wip, defect_codes, remarks, purchase_order_number, FTA) {
        this.id = id;
        this.status = status;
        this.code = code;
        this.GRV = GRV;
        this.date_inspected = date_inspected;
        this.project = project;
        this.part_number = part_number;
        this.serial_number = serial_number;
        this.production_job_number = production_job_number; // fixed typo here
        this.department_company = department_company;
        this.syspro_code = syspro_code;
        this.manuf_items = manuf_items;
        this.inspection_phase = inspection_phase; // completed this assignment
        this.total_qty = total_qty;
        this.qty_accepted = qty_accepted;
        this.qty_to_be_reworked = qty_to_be_reworked;
        this.qty_rejected = qty_rejected;
        this.qty_wip = qty_wip;
        this.defect_codes = defect_codes;
        this.remarks = remarks;
        this.purchase_order_number = purchase_order_number;
        this.FTA = FTA;
    }

    // You can add methods to this class to manipulate or retrieve data as needed
    getSummary() {
        return `Inspection Record ${this.id}: ${this.status} - ${this.part_number}`;
    }

    isAccepted() {
        return this.qty_rejected === 0 && this.qty_to_be_reworked === 0;
    }
}

// export default InspectionRecord_Class
module.exports = {InspectionRecord_Class}
