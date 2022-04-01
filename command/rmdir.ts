// @ts-check

import * as fs from "fs";
import { exit } from "process";
import { helpSing } from "../utils/helpSing";
import { isInit } from "../utils/isInit";

/**
 * @name Rmdir
 * @param {string} x - res.args
 * @description Remove directory
*/

export const rmdir = (x: string) => {
    isInit()
    if (x[1] == "--help" || x[1] == "-h") {
        helpSing(11)
        exit()
    };
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (x[2] == "--global" || x[2] == "-g") {
        console.log("\x1b[32m[monra]\x1b[0m Removing directory...")
        const files = fs.readdirSync(monra?.directory)
        files.map((file) => {
            console.log("\x1b[33m[monra]\x1b[0m Removing \x1b[1m"+x[1]+"\x1b[0m in \x1b[1m"+monra?.directory+"/"+file+"\x1b[0m, pls wait...")
            fs.rmdirSync(monra?.directory+"/"+file+"/"+x[1])
        })
        console.log("\x1b[32m[monra]\x1b[0m Done!")
    } else {
        if (!fs.existsSync(monra?.directory+"/"+x[2]+"/"+x[1])) {
            console.log("\x1b[31m[monra]\x1b[0m Directory \x1b[1m"+x[1]+"\x1b[0m not found!")
            exit()
        }
        console.log("\x1b[32m[monra]\x1b[0m Removing directory...")
        console.log("\x1b[33m[monra]\x1b[0m Removing \x1b[1m"+x[1]+"\x1b[0m in \x1b[1m"+monra?.directory+"/"+x[2]+"\x1b[0m, pls wait...")
        fs.rmdirSync(monra?.directory+"/"+x[2]+"/"+x[1])
        console.log("\x1b[32m[monra]\x1b[0m Done!")
    }
}