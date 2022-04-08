"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const tslib_1 = require("tslib");
const fs = (0, tslib_1.__importStar)(require("node:fs"));
const node_process_1 = require("node:process");
const readline_sync_1 = require("readline-sync");
const helpSing_1 = require("../utils/helpSing");
/**
 * @name Init
 * @param {string} x - res.args
 * @description Init project with monra
 */
const init = (x) => {
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(1);
        (0, node_process_1.exit)();
    }
    let name = (0, readline_sync_1.question)("\x1b[2m[1/4]\x1b[0m \x1b[1mName:\x1b[0m (root) ");
    if (!name)
        name = "root";
    let v = (0, readline_sync_1.question)("\n\x1b[2m[2/4]\x1b[0m \x1b[1mVersion:\x1b[0m (1.0.0) ");
    if (!v)
        v = "1.0.0";
    let dir = (0, readline_sync_1.question)("\n\x1b[2m[3/4]\x1b[0m \x1b[1mDirectory:\x1b[0m (packages) ");
    if (!dir)
        dir = "packages";
    let client = (0, readline_sync_1.question)("\n\x1b[2m[4/4]\x1b[0m \x1b[1mUse yarn, pnpm or npm:\x1b[0m (npm) ");
    if (!client)
        client = "npm";
    fs.appendFileSync("package.json", JSON.stringify({
        name: name.toLowerCase(),
        version: v,
        private: true,
        dependencies: {},
        workspaces: [dir.toLowerCase() + "/*"],
    }));
    fs.appendFileSync("monra.json", JSON.stringify({
        name: name.toLowerCase(),
        version: v.toLowerCase(),
        client: client.toLowerCase(),
        directory: dir.toLowerCase(),
    }));
    fs.mkdirSync(dir.toLowerCase());
    console.log("\n\x1b[32m[monra]\x1b[0m Create mono repo project!");
};
exports.init = init;
/*
{
        "name": x,
        "private": true,
        "main": "dist/index.js",
        "workspaces": [
          "packages/*"
        ]
    }
*/
