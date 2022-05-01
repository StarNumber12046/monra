"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("node:fs"));
const node_process_1 = require("node:process");
const helpSing_1 = require("../utils/helpSing");
/**
 * @name List
 * @param {string} x - res.args
 * @description get packages list
*/
const list = (x) => {
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(3);
        (0, node_process_1.exit)();
    }
    ;
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    const files = fs.readdirSync(monra?.directory);
    files.map(file => {
        const pj = JSON.parse(fs.readFileSync(monra?.directory + "/" + file + "/package.json", "utf8"));
        console.log(`\x1b[1m${pj?.name}\x1b[0m
└─v${pj?.version}`);
    });
};
exports.list = list;
