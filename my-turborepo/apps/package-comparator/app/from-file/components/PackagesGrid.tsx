import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const cols: GridColDef[] = [
  { field: "Package name" },
  { field: "Repo1 version" },
  { field: "Repo2 version" },
];

type PackagesGridProps = {};

function PackagesGrid() {
  return (
    <div>
      <DataGrid columns={cols} rows={[]} />
    </div>
  );
}

export default PackagesGrid;
