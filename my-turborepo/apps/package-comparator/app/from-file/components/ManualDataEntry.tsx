import React, { useState } from "react";
import {
  PackageData,
  parsePackageJson,
  parseTextIntoPackageData,
} from "../logic";
import { Box, Button, Stack, TextareaAutosize } from "@mui/material";

type ManualDataEntryProps = {
  onPackageDataProcessed: (d: PackageData) => void;
};

const ManualDataEntry = ({ onPackageDataProcessed }: ManualDataEntryProps) => {
  const [inputText, setInputText] = useState<string>("");

  const handleProcessClick = () => {
    try {
      // Assuming the pasted data is in JSON format and directly corresponds to your PackageData structure
      const packageData = parseTextIntoPackageData(inputText);

      // Validate or further process the packageData as needed
      if (packageData) {
        // Assuming onPackageDataProcessed is a function passed as a prop for handling the processed data
        onPackageDataProcessed(packageData);
        alert("Package data processed successfully.");
      }
    } catch (error) {
      console.error("Error processing input data:", error);
      alert(
        "Failed to process the input data. Please ensure it is valid JSON."
      );
    }
  };

  return (
    <Box>
      <Stack direction="column" spacing={4}>
        <TextareaAutosize
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste package data here"
          minRows={10}
          maxRows={20}
          style={{ width: "100%" }}
        />
        <Button onClick={handleProcessClick}>Process Data</Button>
      </Stack>
    </Box>
  );
};

export default ManualDataEntry;
