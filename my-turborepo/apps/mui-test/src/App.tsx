import Box from "@mui/material/Box";
import { tomography } from "@repo/science";
import { Button } from "@repo/ui/button";
import "./App.css";

function App() {
  const m = tomography();

  return (
    <>
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`,
          }}
        >
          <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
          <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
          <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
        </Box>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button appName={"vite"}>
        <p>nothing, but from tomography we get: {m}</p>
      </Button>
    </>
  );
}

export default App;
