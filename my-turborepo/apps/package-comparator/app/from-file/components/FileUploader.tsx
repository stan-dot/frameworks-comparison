"use client";
import { useState } from "react";
import { PackageData, parsePackageJson } from "../logic";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type FileUploaderComponentProps = {
  addCallback: (d: PackageData) => void;
};

export function FileUploaderComponent({
  addCallback,
}: FileUploaderComponentProps) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).slice(0, 5);
      setFiles(filesArray);
    }
  };

  const handleParseClick = async () => {
    for (const file of files) {
      const packageData = await parsePackageJson(file);
      // Handle the parsed package data as needed
      addCallback(packageData);
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        type="file"
        inputProps={{ multiple: true }}
        onChange={handleFileChange}
        variant="outlined"
      />
      <Button variant="contained" onClick={handleParseClick}>
        Read in this file
      </Button>
    </Stack>
  );
}
