import { Box } from "@mui/material";
import { LayoutProps } from "./LayoutProps";

function I20layout({ navChild, topChild, bottomChild }: LayoutProps) {
  return (
    <div>
      <h2>I20 layout here</h2>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header sidebar"
  "main main . sidebar"
  "main main footer footer"`,
        }}
      >
        <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>
          {navChild}
        </Box>
        <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>
          {topChild}
        </Box>
        <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>
          {bottomChild}
        </Box>
        <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
      </Box>
    </div>
  );
}

export default I20layout;
