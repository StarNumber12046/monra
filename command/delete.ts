import * as fs from "node:fs";
import { execSync } from "node:child_process";
import { exit } from "node:process";
import { question } from "readline-sync";

export const _delete = (x: string) => {
    const packages = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (monra?.client == "yarn") {
        execSync("yarn remove "+x[1])
    }

    if (monra?.client == "npm") {
        execSync("npm remove "+x[1])
    }
}