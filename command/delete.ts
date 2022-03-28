// @ts-check


import * as fs from "node:fs";
import { execSync } from "node:child_process";
import { exit } from "node:process";
import { question } from "readline-sync";
import { isInit } from "../utils/isInit";

/**
 * @name Delete
 * @param {string} x - res.args
 * @description delete package
*/

export const _delete = (x: string) => {
    isInit()
    if (!x[1]) {
        console.log("\x1b[31m[monra]\x1b[0m  Directory name is undefined (use: monra delete <directory-name>)");
        exit()
    } else {
        const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
        const packagejs = JSON.parse(fs.readFileSync("package.json", "utf8"));

        const yesorno = question('\x1b[31m[monra]\x1b[0m \x1b[1mAre you sure?\x1b[0m (y/n) ');

        if (yesorno == "y" || yesorno == "yes" || yesorno == "") {
            const packageint = JSON.parse(fs.readFileSync(monra?.directory+"/"+x[1]+"/package.json", "utf8"));
            if (monra?.client == "yarn") {
                execSync("yarn remove "+packageint?.name)
            }

            if (monra?.client == "npm") {
                execSync("npm uninstall "+packageint?.name)
            }

            if (monra?.client == "pnpm") {
                execSync("pnpm uninstall "+packageint?.name)
            }

            fs.rmSync(monra?.directory+"/"+x[1], { recursive: true, force: true });
            console.log("\x1b[32m[monra]\x1b[0m Delete package!");
        }

        if (yesorno == "n" || yesorno == "no") {
            console.log("\x1b[32m[monra]\x1b[0m Cancel!");
        }
    }
}