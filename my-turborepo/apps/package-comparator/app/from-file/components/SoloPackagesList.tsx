import { PackageData } from "../logic";
import { PackagesList } from "./PackageVersionDataGrid";

export default function SoloPackagesList({ data }: { data: PackageData[] }) {
  const uniquePackages = new Set<string>();

  // Find unique package names and create columns
  data.forEach(({ dependencies, devDependencies }) => {
    dependencies.concat(devDependencies).forEach(({ name }) => {
      uniquePackages.add(name);
    });
  });

  const arr = Array.from(uniquePackages);
  return <PackagesList arr={arr} />;
}
