"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { PackageData, parsePackageJson } from "../logic";
import ConfirmModal from "@repo/ui/confirm-modal";

type FileUploaderComponentProps = {
  addCallback: (d: PackageData) => void;
  resetCallback: () => void;
};

export function FileUploaderComponent({
  addCallback,
  resetCallback,
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
      console.log(packageData);
      // Handle the parsed package data as needed
      addCallback(packageData);
    }
  };

  return (
    <div>
      <TextField
        type="file"
        inputProps={{ multiple: true }}
        onChange={handleFileChange}
        variant="outlined"
      />
      <Button variant="contained" onClick={handleParseClick}>
        Parse Package.json Files
      </Button>
      <ConfirmModal
        question="reset"
        title={"Are you sure?"}
        onConfirm={resetCallback}
      />
    </div>
  );
}
