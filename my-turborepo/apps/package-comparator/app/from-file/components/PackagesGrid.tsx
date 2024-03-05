import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef";

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
