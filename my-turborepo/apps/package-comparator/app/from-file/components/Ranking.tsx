import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import { PackageData } from "../logic";

type RankingProps = {
    packageDataArray: PackageData[];
};

function getPackagePopularity(packageDataArray: PackageData[]) {
    const packageCounts: Record<string, number> = {};

    packageDataArray.forEach(({ dependencies, devDependencies }) => {
        const allDeps = [...dependencies, ...devDependencies];
        allDeps.forEach(({ name }) => {
            packageCounts[name] = (packageCounts[name] || 0) + 1;
        });
    });
    const sortedPackages = Object.entries(packageCounts).sort(
        (a, b) => a[1] - b[1]
    );

    const mostCommonPackages = sortedPackages.slice(-5).reverse(); // Last 5 entries are the most common
    const leastCommonPackages = sortedPackages.slice(0, 5); // First 5 entries are the least common
    return { mostCommonPackages, leastCommonPackages };
}

function Ranking({ packageDataArray }: RankingProps) {
    const { mostCommonPackages, leastCommonPackages } =
        getPackagePopularity(packageDataArray);


    return (
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Most Common Packages</Typography>
                    <List dense>
                        {mostCommonPackages.map(([packageName, count], index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={`${packageName} (used in ${count} projects)`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Least Common Packages</Typography>
                    <List dense>
                        {leastCommonPackages.map(([packageName, count], index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={`${packageName} (used in ${count} projects)`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Ranking;
