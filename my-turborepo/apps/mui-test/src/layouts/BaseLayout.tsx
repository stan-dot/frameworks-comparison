import { Box } from "@mui/material";
import { LayoutProps } from "./LayoutProps";

function Baselayout({ navChild, topChild, bottomChild }: LayoutProps) {
  return (
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
      <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>{navChild}</Box>
      <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>{topChild}</Box>
      <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>
        {bottomChild}
      </Box>
      <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
    </Box>
  );
}

export default Baselayout;
