// @ts-check

import { exec, execSync } from "child_process";
import { existsSync } from "fs";
import * as fs from "node:fs";
import { stderr, stdin } from "process";
import { isInit } from "../utils/isInit";

/**
 * @name Publish
 * @param {string} x - res.args
 * @description Publish all packages
*/

export const publish = (x: string) => {
    isInit()
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    const files = fs.readdirSync(monra?.directory)
    files.map((file) => {
        if (monra?.client == "yarn") {
            execSync("cd "+monra?.directory+"/"+files+" && yarn publish");
        }
    
        if (monra?.client == "npm") {
            execSync("cd "+monra?.directory+"/"+files+" && npm publish")
        }

        if (monra?.client == "pnpm") {
            execSync("cd "+monra?.directory+"/"+files+" && pnpm publish")
        }
    })
}; 

