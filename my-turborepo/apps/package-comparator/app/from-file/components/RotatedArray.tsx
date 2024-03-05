import styles from "../page.module.css";
import React, { useState } from "react";
import { FileUploaderComponent } from "./FileUploader";
import { PackageData, PackageLine } from "../logic";
import { GridColDef } from "@mui/x-data-grid/models/colDef";
import { DataGrid } from "@mui/x-data-grid/DataGrid";

const firstCol: GridColDef = {
  field: "projectName",
  headerName: "Project name",
};

const convertPackageDataToDictionary = (
  packageDataArray: PackageData[]
): Record<string, PackageLine[]> => {
  return packageDataArray.reduce(
    (acc, { projectName, dependencies, devDependencies }) => {
      // Concatenating dependencies and devDependencies
      const allDependencies = dependencies.concat(devDependencies);

      // Adding or updating the dictionary
      acc[projectName] = allDependencies;

      return acc;
    },
    {} as Record<string, PackageLine[]>
  );
};

function RotatedArray() {
  const [data, setData] = useState<PackageData[]>([]);

  const onUpload = (d: PackageData) => {
    setData((prev) => {
      return [...prev, d];
    });
  };

  // rows are a union of PackageLines of all the packages
  // in each cell there is a 'version' of that one in green, or red x if absent
  // need to have some smart data structure
  const allUniquePackages: Set<PackageLine> = new Set(
    data.reduce((prev, curr) => {
      return prev.concat(curr.dependencies).concat(...curr.devDependencies);
    }, [] as PackageLine[])
  );
  const uniquePackagesArray = Array.from(allUniquePackages);

  const names = data.map((d) => d.projectName);

  const cols: GridColDef[] = uniquePackagesArray.map((n) => {
    return { field: n.name, headerName: n.name };
  });
  cols.unshift(firstCol);

  const rows = data.map((v, i) => {
    return { projectName: v.projectName };
  });

  return (
    <div className={styles.main}>
      <FileUploaderComponent addCallback={onUpload} />
      <div id="real-grid" style={{ width: "100%" }}>
        <div style={{ height: 750, width: "100%" }}>
          <DataGrid columns={cols} rows={[]} />
        </div>
      </div>
    </div>
  );
}

export default RotatedArray;
