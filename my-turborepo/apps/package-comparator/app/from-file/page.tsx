"use client";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";
import styles from "../page.module.css";
import { FileUploaderComponent } from "./components/FileUploader";
import { PackageData, PackageLine } from "./logic";

const firstCol: GridColDef = {
    field: "dependency name",
    headerName: "Dependency name",
};

function page() {
    const [data, setData] = useState<PackageData[]>([]);

    const onUpload = (d: PackageData) => {
        setData((prev) => {
            return [...prev, d];
        });
    };

    const names = data.map((d) => d.projectName);
    const cols: GridColDef[] = names.map((n) => {
        return { field: n, headerName: n };
    });
    cols.unshift(firstCol);

    // rows are a union of PackageLines of all the packages
    // in each cell there is a 'version' of that one in green, or red x if absent
    // need to have some smart data structure
    const allUniquePackages: Set<PackageLine> = new Set(
        data.reduce((prev, curr) => {
            return prev.concat(curr.dependencies).concat(...curr.devDependencies);
        }, [] as PackageLine[])
    );
    const uniquePackagesArray = Array.from(allUniquePackages);
    const rows = uniquePackagesArray.map(
        (packageLine: PackageLine, index: number) => {
            // todo must find here the matching names for packages.
            // wait through applying the set we lose the option to keep the right version.
            return { id: index, field: packageLine.name };
        }
    );

    return (
        <div className={styles.main}>
            <FileUploaderComponent callback={onUpload} />
            <div id="real-grid" style={{ width: "100%" }}>
                <div style={{ height: 750, width: "100%" }}>
                    <DataGrid columns={cols} rows={[]} />
                </div>
            </div>
        </div>
    );
}

export default page;
