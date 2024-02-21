import React from 'react'
import { PackageData } from '../logic';

type RankingProps = {
    packageDataArray: PackageData[];
}


function Ranking({ packageDataArray }: RankingProps) {

    const packageCounts: Record<string, number> = {};

    packageDataArray.forEach(({ dependencies, devDependencies }) => {
        const allDeps = [...dependencies, ...devDependencies];
        allDeps.forEach(({ name }) => {
            packageCounts[name] = (packageCounts[name] || 0) + 1;
        });
    });
    const sortedPackages = Object.entries(packageCounts).sort((a, b) => a[1] - b[1]);

    const mostCommonPackages = sortedPackages.slice(-5).reverse(); // Last 5 entries are the most common
    const leastCommonPackages = sortedPackages.slice(0, 5); // First 5 entries are the least common


    return (
        <div>Ranking</div>
    )
}

export default Ranking