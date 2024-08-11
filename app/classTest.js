const {InspectionRecord_Class} = require("./classes/InspectionClass")
const mockInspectionRecords = require('./data.json')

const arrayOfInspectionRecords = []

for (let i = 0; i < mockInspectionRecords.length; i++){
    const inspectionRecord = new InspectionRecord_Class(mockInspectionRecords[i].id, mockInspectionRecords[i].status, mockInspectionRecords[i].code)
    arrayOfInspectionRecords.push(inspectionRecord)
}

console.log(arrayOfInspectionRecords)