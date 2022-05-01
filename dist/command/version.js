"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
const tslib_1 = require("tslib");
const process_1 = require("process");
const packagesjson = tslib_1.__importStar(require("../package.json"));
const helpSing_1 = require("../utils/helpSing");
/**
 * @param {string} x - res.args
 * @description get current version
 */
const version = (x) => {
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(6);
        (0, process_1.exit)();
    }
    console.log(packagesjson.version);
};
exports.version = version;
