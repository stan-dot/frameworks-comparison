import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PackageData } from "../logic";

// Step 1: Data Transformation
const transformDataForDataGrid = (
    data: PackageData[]
): { rows: any[]; columns: GridColDef[] } => {
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
                    .find((pkg) => pkg.name=== packageName)?.version||
                "n/a";
            row[packageName] = packageVersion;
        });
        return row;
    });

    return { rows, columns };
};

type PackageVersionDataGridProps = {
    data: PackageData[];
};

export default function PackageVersionDataGrid({
    data,
}: PackageVersionDataGridProps) {
    const { rows, columns } = transformDataForDataGrid(data);
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}
