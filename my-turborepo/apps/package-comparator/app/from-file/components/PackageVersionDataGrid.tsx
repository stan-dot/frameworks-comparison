import { GridColDef } from "@mui/x-data-grid/models/colDef";
import { PackageData } from "../logic";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import { DataGrid } from "@mui/x-data-grid/DataGrid";

// Step 1: Data Transformation
const transformDataForDataGrid = (
  data: PackageData[]
): { rows: any[]; columns: GridColDef[]; uniquePackages: Set<string> } => {
  const uniquePackages = new Set<string>();

  // Find unique package names and create columns
  data.forEach(({ dependencies, devDependencies }) => {
    dependencies.concat(devDependencies).forEach(({ name }) => {
      uniquePackages.add(name);
    });
  });

  const columns: GridColDef[] = [
    {
      field: "projectName",
      headerName: "Project Name",
      width: 150,
      editable: false,
    },
    ...Array.from(uniquePackages).map((packageName) => ({
      field: packageName,
      headerName: packageName,
      width: 130,
      editable: false,
    })),
  ];

  const rows = data.map((project, index) => {
    const row: Record<string, any> = {
      id: index,
      projectName: project.projectName,
    };
    uniquePackages.forEach((packageName) => {
      const packageVersion =
        project.dependencies
          .concat(project.devDependencies)
          .find((pkg) => pkg.name === packageName)?.version || "n/a";
      row[packageName] = packageVersion;
    });
    return row;
  });

  return { rows, columns, uniquePackages };
};

type PackageVersionDataGridProps = {
  data: PackageData[];
};

export default function PackageVersionDataGrid({
  data,
}: PackageVersionDataGridProps) {
  const { rows, columns, uniquePackages } = transformDataForDataGrid(data);
  const arr = Array.from(uniquePackages);
  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* <PackagesList arr={arr} /> */}

      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export function PackagesList({ arr }: { arr: string[] }) {
  {
    /* unique packages displayed */
  }
  return (
    <List>
      {arr.map((s, i) => {
        return (
          <ListItem key={`package-list-item-${i}`}>
            <Link href={`https://npmjs.com/package/${s}`}>{s}</Link>
          </ListItem>
        );
      })}
    </List>
  );
}
