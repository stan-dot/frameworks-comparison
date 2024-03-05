import { PackageData } from '../logic'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import { GridColDef } from '@mui/x-data-grid/models/colDef';

export function InvertedPackageDataGrid({ data }: { data: PackageData[] }) {
    // Assuming the PackageLine and PackageData interfaces are as previously defined

    // Collect all unique packages
    const allPackages = new Map<string, Record<string, string>>();
    data.forEach(({ projectName, dependencies, devDependencies }) => {
        const allDeps = [...dependencies, ...devDependencies];
        allDeps.forEach(({ name, version }) => {
            if (!allPackages.has(name)) {
                allPackages.set(name, { name });
            }
            allPackages.get(name)![projectName] = version;
        });
    });

    // Prepare rows for DataGrid
    const rows = Array.from(allPackages.values()).map((packageInfo, index) => ({
        id: index,
        ...packageInfo,
    }));

    // Prepare columns for DataGrid
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Package Name', width: 150 },
        ...data.map(({ projectName }) => ({
            field: projectName,
            headerName: projectName,
            width: 130,
        })),
    ];

    return (

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}
