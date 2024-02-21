import React from "react";
import { PackageData } from "../logic";
import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";

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
