import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <AppBar>
        <Stack padding={2} color={"white"} direction="row">
          <Box paddingX={4}>
            <Link href={"/"}>Home</Link>
          </Box>
          <Box paddingX={4}>
            <Link href={"/from-file"}>Compare projects</Link>
          </Box>
        </Stack>
      </AppBar>
    </div>
  );
}

export default Navbar;
