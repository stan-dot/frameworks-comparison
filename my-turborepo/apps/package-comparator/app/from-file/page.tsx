"use client";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";
import styles from "../page.module.css";
import { FileUploaderComponent } from "./components/FileUploader";
import { PackageData, PackageLine } from "./logic";
import PackageVersionDataGrid from "./components/PackageVersionDataGrid";
import { InvertedPackageDataGrid } from "./components/InvertedPackageDataGrid";
import { Typography } from "@mui/material";
import Ranking from "./components/Ranking";

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

    const reset = () => setData([])

    return (
        <div className={styles.main}>
            <FileUploaderComponent addCallback={onUpload} resetCallback={reset} />
            <Ranking packageDataArray={data} />
            <div id="another-grid" style={{ width: "100%" }}>
                <Typography variant="h3" >Table</Typography>
                <div style={{ height: 450, width: "100%" }}>
                    <PackageVersionDataGrid data={data} />
                </div>
            </div>
            <div id="inverted-grid" style={{ width: "100%" }}>
                <Typography variant="h3" >Inverted Table</Typography>
                <div style={{ height: 450, width: "100%" }}>
                    <InvertedPackageDataGrid data={data} />
                </div>
            </div>
        </div>
    );
}

export default page;
