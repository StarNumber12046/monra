// @ts-check

import * as fs from "fs";
import { exit } from "process";

/**
 * @name Mkdir
 * @param {string} x - res.args
 * @description create a directory
*/

export const mkdir = (x: string) => {
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (x[2] == "--global" || x[2] == "-g") {
        console.log("\x1b[32m[monra]\x1b[0m Creating directory...")
        const files = fs.readdirSync(monra?.directory)
        files.map((file) => {
            console.log("\x1b[33m[monra]\x1b[0m Creating \x1b[1m"+x[1]+"\x1b[0m in \x1b[1m"+monra?.directory+"/"+x[2]+"\x1b[0m, pls wait...")
            fs.mkdirSync(monra?.directory+"/"+file+"/"+x[1])
        })
        console.log("\x1b[32m[monra]\x1b[0m Done!")
    } else {
        console.log("\x1b[32m[monra]\x1b[0m Creating directory...")
        console.log("\x1b[33m[monra]\x1b[0m Creating \x1b[1m"+x[1]+"\x1b[0m in \x1b[1m"+monra?.directory+"/"+x[2]+"\x1b[0m, pls wait...")
        fs.mkdirSync(monra?.directory+"/"+x[2]+"/"+x[1])
        console.log("\x1b[32m[monra]\x1b[0m Done!")
    }
}