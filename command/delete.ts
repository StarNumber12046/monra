// @ts-check


import * as fs from "node:fs";
import { execSync } from "node:child_process";
import { exit } from "node:process";
import { question } from "readline-sync";

/**
 * @name Delete
 * @param {string} x - res.args
 * @description delete package
*/

export const _delete = (x: string) => {
    if (!x[1]) {
        console.log("\x1b[31m[monra]\x1b[0m  Directory name is undefined (use: monra delete <directory-name>)");
        exit()
    } else {
        const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
        if (monra?.client == "yarn") {
            execSync("yarn remove "+x[1]);
        }
    
        if (monra?.client == "npm") {
            execSync("npm remove "+x[1])
        }

        if (monra?.client == "pnpm") {
            execSync("pnpm remove "+x[1])
        }
    
        console.log("\x1b[32m[monra]\x1b[0m Package delete!")
    }
}