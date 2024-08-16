class InspectionRecordClass {
    constructor(id, status, inspectionCode, GRV, date_inspected, project,  partNumber, serial_numbers, production_job_number, department_company, syspro_code, manuf_items, inspection_phase, total_qty, qty_accepted, qty_to_be_reworked, qty_rejected, qty_wip, defect_code, remarks, purchase_order_number) {
        this.id = id;
        this.status = this.validateStatus(status);
        this.inspectionCode = inspectionCode;
        this.GRV = GRV;
        this.project = project;
        this.partNumber = partNumber;
        this.date_inspected = date_inspected;
        this.serial_numbers = serial_numbers;
        this.production_job_number = production_job_number; // fixed typo here
        this.department_company = department_company;
        this.syspro_code = syspro_code;
        this.manuf_items = manuf_items;
        this.inspection_phase = inspection_phase; // completed this assignment
        this.total_qty = this.validateQty(total_qty);
        this.qty_accepted = this.validateQty(qty_accepted);
        this.qty_to_be_reworked = this.validateQty(qty_to_be_reworked);
        this.qty_rejected = this.validateQty(qty_rejected);
        this.qty_wip = this.validateQty(qty_wip);
        this.defect_code = defect_code;
        this.remarks = remarks;
        this.purchase_order_number = purchase_order_number;
    }

   	validateQty(qty){
    	if(qty === null || qty === undefined || isNaN(qty) || qty === "0"){
			return 0
		}

   	}

	validateStatus(status){
		if(status === "" || status === null || status === undefined){
			return "Created"
		}
	}
}

// export default InspectionRecord_Class
module.exports = {InspectionRecordClass}
