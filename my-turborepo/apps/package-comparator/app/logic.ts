import { ValidatorResult, validate } from "jsonschema"
import schema from './schema.json';

export function validatePackageJson(obj: Record<any, any>): boolean {
    const r: ValidatorResult = validate(obj, schema);
    return r.valid;
}


type PackageJsonData = {
    name: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
};

type PackageLine = {
    name: string;
    version: string;
};

type PackageData = {
    name: string;
    dependencies: PackageLine[];
    devDependencies: PackageLine[];
};

export async function parsePackageJson(file: Blob): Promise<PackageData> {
    const text = await file.text();
    const json: PackageJsonData = JSON.parse(text);

    const dependencies = json.dependencies
        ? Object.entries(json.dependencies).map(([name, version]) => ({ name, version }))
        : [];

    const devDependencies = json.devDependencies
        ? Object.entries(json.devDependencies).map(([name, version]) => ({ name, version }))
        : [];

    return {
        name: json.name,
        dependencies,
        devDependencies,
    };
}

