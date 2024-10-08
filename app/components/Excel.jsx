
import React from 'react';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';

export default function Excel({ status }) {

	// alert(status)

	function SaveToExcel(data) {
		try {
			
			// Create a new workbook
			const workbook = XLSX.utils.book_new();

			// Convert the array of objects to a worksheet
			const worksheet = XLSX.utils.json_to_sheet(data);

			// Append the worksheet to the workbook
			XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

			// Generate a file and trigger the download
			XLSX.writeFile(workbook, `${status}.xlsx`);
			} catch (error) {
			console.log(error.message);
		}
	}

  // Getting records from Redux
	const recordsRedux = useSelector((state) => state.inspection.value);
	
	let filterRecords

	if (status === "All"){
		filterRecords = recordsRedux
	} 

	else {
		filterRecords = recordsRedux.filter((record) => record.status === status)


	}

  return (
    <button 
      onClick={() => SaveToExcel(filterRecords)} 
      className="flex py-2 px-4 rounded text-white bg-green-600"
    >
      Download Excel
    </button>
  );
}
