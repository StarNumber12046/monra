// @ts-check


import { exec } from "child_process";
import * as fs from "node:fs";
import { stderr, stdin } from "process";

/**
 * @param {string} x - res.args
 * @description Publish all packages
*/

export const publish = (x: string) => {
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (monra?.client == "yarn") {
        exec("yarn publish", (e, stdin, stderr) => {
            console.log("\x1b[32m[monra]\x1b[0m Publish!")
        })
    }

    if (monra?.client == "npm") {
        exec("npm publish", (e, stdin, stderr) => {
            console.log("\x1b[32m[monra]\x1b[0m Publish!")
        })
    }

    if (monra?.client == "npm") {
        exec("pnpm publish", (e, stdin, stderr) => {
            console.log("\x1b[32m[monra]\x1b[0m Publish!")
        })
    }
};