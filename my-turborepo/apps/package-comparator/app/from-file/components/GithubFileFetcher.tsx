import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import ConfirmModal from "@repo/ui/confirm-modal";
import { useState } from "react";
import { PackageData, parsePackageJson } from "../logic";
import { diamondUrls } from "./diamondUrls";

type GithubFileFetcherProps = {
  onPackageDataFetched: (d: PackageData) => void;
};

function getRawUrl(url: string): string {
  return url
    .replace("github.com", "raw.githubusercontent.com")
    .replace("/blob/", "/");
}

const isValidGitHubUrl = (url: string) => {
  // Simple pattern check; you might want to expand this for more specific cases
  return /https:\/\/github\.com\/.+\/.+\/blob\/.+/.test(url);
};

const GitHubFileFetcher = ({
  onPackageDataFetched,
}: GithubFileFetcherProps) => {
  const [url, setUrl] = useState<string>("");

  const handleFetchClick = async () => {
    if (!isValidGitHubUrl(url)) {
      alert("Please enter a valid GitHub file URL.");
      return;
    }

    try {
      // Convert GitHub URL to raw content URL
      const rawUrl = getRawUrl(url);

      const response = await fetch(rawUrl);
      if (!response.ok) throw new Error("Failed to fetch file from GitHub");

      const blob = await response.blob();
      const packageData = await parsePackageJson(blob);
      onPackageDataFetched(packageData);

      // Process the Blob to extract PackageData here, similar to file upload handling
      // Example: onPackageDataFetched(processedPackageData);
    } catch (error) {
      console.error("Error fetching or processing GitHub file:", error);
      alert("Failed to fetch or process the GitHub file.");
    }
  };

  const handlePrepopulate = async () => {
    diamondUrls.forEach(async (url) => {
      const raw = getRawUrl(url);
      const r = await fetch(raw);
      if (!r.ok) throw new Error("Failed to fetch file from GitHub");

      const blob = await r.blob();
      const packageData = await parsePackageJson(blob);
      onPackageDataFetched(packageData);
    });
  };

  return (
    <Box margin={2} padding={2}>
      <Input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter GitHub file URL"
      />
      <Button onClick={handleFetchClick}>Fetch Package Data</Button>

      <ConfirmModal
        question={"Prepopulate with Diamond frontend projects"}
        title={`This will show ${diamondUrls.length} projects`}
        onConfirm={handlePrepopulate}
      />
    </Box>
  );
};

export default GitHubFileFetcher;
