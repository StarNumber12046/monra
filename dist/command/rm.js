"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.rm = void 0;
const tslib_1 = require("tslib");
const fs = (0, tslib_1.__importStar)(require("fs"));
const process_1 = require("process");
const helpSing_1 = require("../utils/helpSing");
const isInit_1 = require("../utils/isInit");
/**
 * @name Rm
 * @param {string} x - res.args
 * @description remove a file or directory
*/
const rm = (x) => {
    (0, isInit_1.isInit)();
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(9);
        (0, process_1.exit)();
    }
    ;
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (x[2] == "--global" || x[2] == "-g") {
        console.log("\x1b[32m[monra]\x1b[0m Removing file...");
        const files = fs.readdirSync(monra?.directory);
        files.map((file) => {
            console.log("\x1b[33m[monra]\x1b[0m Removing \x1b[1m" + x[1] + "\x1b[0m in \x1b[1m" + monra?.directory + "/" + file + "\x1b[0m, pls wait...");
            fs.unlinkSync(monra?.directory + "/" + file + "/" + x[1]);
        });
        console.log("\x1b[32m[monra]\x1b[0m Done!");
    }
    else {
        console.log("\x1b[32m[monra]\x1b[0m Removing file...");
        console.log("\x1b[33m[monra]\x1b[0m Removing \x1b[1m" + x[1] + "\x1b[0m in \x1b[1m" + monra?.directory + "/" + x[2] + "\x1b[0m, pls wait...");
        fs.unlinkSync(monra?.directory + "/" + x[2] + "/" + x[1]);
        console.log("\x1b[32m[monra]\x1b[0m Done!");
    }
};
exports.rm = rm;
