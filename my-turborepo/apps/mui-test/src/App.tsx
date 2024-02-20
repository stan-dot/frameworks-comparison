import { ButtonGroup, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { tomography } from "@repo/science";
import { Button as RepoButton } from "@repo/ui/button";
import { Component1, Component2, Component3 } from "@repo/ui/test-components";
import { useState } from "react";
import "./App.css";
import Baselayout from "./layouts/BaseLayout";
import I20layout from "./layouts/I20Layout";

const layouts = ["base", "i20"] as const;

export type LayoutType = (typeof layouts)[number];

function App() {
  const m = tomography();

  const [currentLayout, setCurrentLayout] = useState<LayoutType>("base");

  return (
    <>
      <nav>
        <ButtonGroup>
          <Typography>Switch typography</Typography>
          <Button
            onClick={() => setCurrentLayout("base")}
            disabled={currentLayout === "base"}
          >
            go to base
          </Button>
          <Button
            onClick={() => setCurrentLayout("i20")}
            disabled={currentLayout === "i20"}
          >
            go to i20
          </Button>
        </ButtonGroup>
      </nav>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "grey.100",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            p: 1,
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          {"I'm a grid container!"}
        </Box>
        {currentLayout === "base" && (
          <Baselayout
            navChild={<Component1 />}
            topChild={<Component2 />}
            bottomChild={<Component3 />}
          />
        )}
        {currentLayout == "i20" && (
          <I20layout
            navChild={<Component1 />}
            topChild={<Component2 />}
            bottomChild={<Component3 />}
          />
        )}
        <RepoButton appName={"vite"}>
          <p>nothing, but from tomography we get: {m}</p>
        </RepoButton>
      </div>
    </>
  );
}

export default App;
