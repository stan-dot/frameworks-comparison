import { exec } from 'child_process';

export function getLatestPackageVersion(packageName: string) {
    exec(`npm view ${packageName} version`, (error, stdout) => {
        if (error) {
            console.error('Error:', error);
            return;
        }
        console.log(`${packageName} latest version: ${stdout.trim()}`);
    });
}

// Example usage
// getLatestPackageVersion('react');
