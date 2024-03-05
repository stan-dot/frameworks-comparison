"use client";
import ConfirmModal from "@repo/ui/confirm-modal";
import { useState } from "react";
import styles from "../page.module.css";
import { FileUploaderComponent } from "./components/FileUploader";
import GitHubFileFetcher from "./components/GithubFileFetcher";
import { InvertedPackageDataGrid } from "./components/InvertedPackageDataGrid";
import ManualDataEntry from "./components/ManualDataEntry";
import PackageVersionDataGrid from "./components/PackageVersionDataGrid";
import ProjectList from "./components/ProjectList";
import Ranking from "./components/Ranking";
import SoloPackagesList from "./components/SoloPackagesList";
import { PackageData } from "./logic";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function page() {
  const [data, setData] = useState<PackageData[]>([]);

  const onUpload = (d: PackageData) => {
    setData((prev) => {
      return [...prev, d];
    });
  };

  const reset = () => setData([]);

  return (
    <div className={styles.main}>
      {/* INPUT STUFF */}
      <Stack direction="column" spacing={2} padding={2} marginBottom={4}>
        <Typography variant="h3">Compare projects</Typography>
        <Stack direction="row" spacing={4} sx={{ borderColor: "info" }}>
          <ManualDataEntry onPackageDataProcessed={onUpload} />
          <GitHubFileFetcher onPackageDataFetched={onUpload} />
          <FileUploaderComponent addCallback={onUpload} />
          <ConfirmModal
            question="reset"
            title={"Are you sure?"}
            onConfirm={reset}
          />
        </Stack>
      </Stack>
      {/* DISPLAY STUFF */}
      <Grid container spacing={4}>
        <Grid xs={7} padding={2}>
          <Ranking packageDataArray={data} />
          <div id="another-grid" style={{ width: "100%" }}>
            <Typography variant="h3">Table</Typography>
            <div style={{ height: 450, width: "100%" }}>
              <PackageVersionDataGrid data={data} />
            </div>
          </div>
          <div id="inverted-grid" style={{ width: "100%" }}>
            <Typography variant="h3">Inverted Table</Typography>
            <div style={{ height: 450, width: "100%" }}>
              <InvertedPackageDataGrid data={data} />
            </div>
          </div>
        </Grid>
        <Grid xs={3} padding={2}>
          <ProjectList data={data} />
        </Grid>
        <Grid xs={2} padding={2}>
          <Typography variant="h4">Total packages list with links</Typography>
          <SoloPackagesList data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default page;
