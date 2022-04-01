// @ts-check

import * as fs from "node:fs";
import { exit } from "node:process";
import { helpSing } from "../utils/helpSing";

/**
 * @name List
 * @param {string} x - res.args
 * @description get packages list
*/

export const list = (x: string) => {
    if (x[1] == "--help" || x[1] == "-h") {
        helpSing(3)
        exit()
    };
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    const files = fs.readdirSync(monra?.directory)
    files.map(file => {
        const pj = JSON.parse(fs.readFileSync(monra?.directory+"/"+file+"/package.json", "utf8"));
        console.log(`\x1b[1m${pj?.name}\x1b[0m
└─v${pj?.version}`)
    })
}