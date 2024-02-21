import { PackageData } from "../logic";

// Example of hardcoded latest versions
// we could maintain a service outlining the latest versions that we support
const latestVersions: Record<string, string> = {
    react: "18.2.0",
    lodash: "4.17.21",
    typescript: '5.3.3',
    "@h5web/lib": "11.0.0",
    vite: "5.1.3",
    zustand: "4.5.1"
};

// Function to compare versions (simplified for demonstration)
// For actual semver comparison, consider using the semver library
const isOutdated = (version: string, latestVersion: string): boolean => {
    return version !== latestVersion; // Simplified comparison, replace with semver comparison as needed
};

async function getLatestPackageVersion(packageName: string) {
    const url = `https://registry.npmjs.org/${packageName}/latest`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.version;
    } catch (error) {
        console.error("Error fetching package version:", error);
        return null;
    }
}

type OutdatedTrackerProps = {
    packageDataArray: PackageData[];
};

function OutdatedTracker({ packageDataArray }: OutdatedTrackerProps) {
    // Check each project for outdated versions
    const outdatedPackages: Record<string, string[]> = {};

    packageDataArray.forEach(({ projectName, dependencies, devDependencies }) => {
        const allDeps = [...dependencies, ...devDependencies];
        allDeps.forEach(({ name, version }) => {
            if (latestVersions[name] && isOutdated(version, latestVersions[name]!)) {
                if (!outdatedPackages[projectName]) {
                    outdatedPackages[projectName] = [];
                }
                outdatedPackages[projectName]!.push(
                    `${name} (${version} -> ${latestVersions[name]})`
                );
            }
        });
    });

    // Example usage
    const packageName = "react"; // Replace with any package name
    getLatestPackageVersion(packageName).then((version) => {
        console.log(`${packageName} latest version: ${version}`);
    });
    return <div>OutdatedTracker</div>;
}
export default OutdatedTracker;
