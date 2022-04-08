"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = void 0;
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const fs = (0, tslib_1.__importStar)(require("node:fs"));
const process_1 = require("process");
const helpSing_1 = require("../utils/helpSing");
const isInit_1 = require("../utils/isInit");
/**
 * @name Publish
 * @param {string} x - res.args
 * @description Publish all packages
*/
const publish = (x) => {
    (0, isInit_1.isInit)();
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(4);
        (0, process_1.exit)();
    }
    ;
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    const files = fs.readdirSync(monra?.directory);
    files.map((file) => {
        if (monra?.client == "yarn") {
            (0, child_process_1.execSync)("cd " + monra?.directory + "/" + files + " && yarn publish");
        }
        if (monra?.client == "npm") {
            (0, child_process_1.execSync)("cd " + monra?.directory + "/" + files + " && npm publish");
        }
        if (monra?.client == "pnpm") {
            (0, child_process_1.execSync)("cd " + monra?.directory + "/" + files + " && pnpm publish");
        }
    });
};
exports.publish = publish;
