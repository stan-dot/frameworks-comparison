import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { PackageData } from "../logic";

function ProjectList({ data }: { data: PackageData[] }) {
  return (
    <Box>
      <Typography variant="h3">Project list</Typography>
      <List sx={{maxHeight:200}}>
        {data.map((d, i) => {
          return (
            <ListItem key={`package-list-item-${i}`}>
              {d.url ? (
                <Link href={d.url}>{d.projectName}</Link>
              ) : (
                <Typography variant="h5">
                  {d.projectName} no URL given
                </Typography>
              )}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default ProjectList;
