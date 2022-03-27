// @ts-check


import * as fs from "node:fs";

/**
 * @param {string} x - res.args
 * @description get packages list
*/

export const list = (x: string) => {
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    const files = fs.readdirSync(monra?.directory)
    files.map(file => {
        const pj = JSON.parse(fs.readFileSync(monra?.directory+"/"+file+"/package.json", "utf8"));
        console.log(`\x1b[1m${pj?.name}\x1b[0m
└─${pj?.verison}`)
    })
}