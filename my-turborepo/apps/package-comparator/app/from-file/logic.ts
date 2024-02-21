import { ValidatorResult, validate } from "jsonschema";
import schema from "../schema.json";

export function validatePackageJson(obj: Record<any, any>): boolean {
    const r: ValidatorResult = validate(obj, schema);
    return r.valid;
}

export type PackageJsonData = {
    name: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    url?: string
};

export type PackageLine = {
    name: string;
    version: string;
};

export type PackageData = {
    projectName: string;
    dependencies: PackageLine[];
    devDependencies: PackageLine[];
    url?: string
};

export async function parsePackageJson(file: Blob): Promise<PackageData> {
    const text = await file.text();
    if (!text) {
        console.error("File processing error");
        throw new Error();
    }

    const r = parseTextIntoPackageData(text);
    return r;
}

export function parseTextIntoPackageData(text: string): PackageData {
    const json: PackageJsonData = JSON.parse(text);

    const dependencies = json.dependencies
        ? Object.entries(json.dependencies).map(([name, version]) => ({
            name,
            version,
        }))
        : [];

    const devDependencies = json.devDependencies
        ? Object.entries(json.devDependencies).map(([name, version]) => ({
            name,
            version,
        }))
        : [];

    return {
        projectName: json.name,
        dependencies,
        devDependencies,
        url: json.url
    };
}
