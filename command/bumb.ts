// @ts-check

import { exec, execSync } from "child_process";
import { existsSync } from "fs";
import * as fs from "node:fs";
import { stderr, stdin } from "process";

/**
 * @name Bumb
 * @param {string} x - res.args
 * @description Publish all packages
 */

const bumb = (x: string) => {
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    const files = fs.readdirSync(monra?.directory)
    files.map((file) => {})
}