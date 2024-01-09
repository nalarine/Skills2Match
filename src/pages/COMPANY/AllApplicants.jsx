import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { renderStatus } from "../components/lib/consts/renderers/renderStatus";

const columns = [
  { field: "fullName", headerName: "Full Name", minWidth: 200, flex: 1 },
  {
    field: "hiringStage",
    headerName: "Hiring Stage",
    type: "singleSelect",
    renderCell: renderStatus,
    // editable: true,
    minWidth: 150,
    flex: 1,
    valueOptions: ({ row }) => {
      if (row === "Interview") {
        return (
          <div className="border p-3 border-dark-yellow">
            <span className="text-dark-yellow">{row}</span>
          </div>
        );
      }
    },
  },
  { field: "appliedDate", headerName: "Applied Date", minWidth: 200, flex: 1 },
  { field: "jobRole", headerName: "Job Role", minWidth: 200, flex: 1 },
  { field: "action", headerName: "Action", minWidth: 200, flex: 1 },
];

export default function AllApplicants() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("src/components/lib/consts/dummy/dummy_table.json") // Verify the path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  // console.log(tableData);

  return (
    <div className="flex flex-col p-3 gap-5">
      <div>
        <span className="text-3xl font-black">
          Total Applicants: {tableData.length}
        </span>
      </div>
      <div className="w-full max-h-[8rem]">
        <DataGrid
          rows={tableData}
          columns={columns}
          pagination
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </div>
  );
}
