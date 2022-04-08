"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const tslib_1 = require("tslib");
const fs = (0, tslib_1.__importStar)(require("fs"));
const child_process_1 = require("child_process");
const process_1 = require("process");
const readline_sync_1 = require("readline-sync");
const isInit_1 = require("../utils/isInit");
const helpSing_1 = require("../utils/helpSing");
/**
 * @name Create
 * @param {string} x - res.args
 * @description Create new package
 */
const create = (x) => {
    (0, isInit_1.isInit)();
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(2);
        (0, process_1.exit)();
    }
    const packages = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
    if (!x[1]) {
        console.log("\x1b[31m[monra]\x1b[0m  Directory name is undefined (use: monra create <directory-name>)");
        (0, process_1.exit)();
    }
    else {
        if (x[2] == "-ts" || x[2] == "--typescript") {
            let name = (0, readline_sync_1.question)("\x1b[2m[1/4]\x1b[0m \x1b[1mName:\x1b[0m (@" +
                monra?.name +
                "/" +
                x[1] +
                ") ");
            let v = (0, readline_sync_1.question)("\n\x1b[2m[1/4]\x1b[0m \x1b[1mVersion:\x1b[0m (1.0.0) ");
            if (!name)
                name = "@" + monra?.name + "/" + x[1];
            if (!v)
                v = "1.0.0";
            fs.mkdirSync(monra?.directory + "/" + x[1]);
            fs.mkdirSync(monra?.directory + "/" + x[1] + "/src");
            fs.appendFileSync(monra?.directory + "/" + x[1] + "/src/index.ts", "");
            fs.appendFileSync(monra?.directory + "/" + x[1] + "/package.json", JSON.stringify({
                name: name.toLowerCase(),
                main: "src/index.js",
                version: v,
            }));
            if (monra?.client == "yarn") {
                (0, child_process_1.execSync)("yarn add file:./" + monra?.directory + "/" + x[1] + " -W");
            }
            if (monra?.client == "npm") {
                (0, child_process_1.execSync)("npm i " + name);
            }
            if (monra?.client == "pnpm") {
                (0, child_process_1.execSync)("pnpm add ./" + monra?.directory + "/" + x[1]);
            }
            console.log("\n\x1b[32m[monra]\x1b[0m Create package!");
        }
        else {
            let name = (0, readline_sync_1.question)("\x1b[2m[1/2]\x1b[0m \x1b[1mPackage Name:\x1b[0m (@" +
                monra?.name +
                "/" +
                x[1] +
                ") ");
            let v = (0, readline_sync_1.question)("\n\x1b[2m[2/2]\x1b[0m \x1b[1mVerison:\x1b[0m (1.0.0) ");
            if (!name)
                name = "@" + monra?.name + "/" + x[1];
            if (!v)
                v = "1.0.0";
            fs.mkdirSync(monra?.directory + "/" + x[1]);
            fs.mkdirSync(monra?.directory + "/" + x[1] + "/src");
            fs.appendFileSync(monra?.directory + "/" + x[1] + "/src/index.js", "");
            fs.appendFileSync(monra?.directory + "/" + x[1] + "/package.json", JSON.stringify({
                name: name.toLowerCase(),
                main: "src/index.js",
                version: v,
            }));
            if (monra?.client == "yarn") {
                (0, child_process_1.execSync)("yarn add file:./" + monra?.directory + "/" + x[1] + " -W");
            }
            if (monra?.client == "npm") {
                (0, child_process_1.execSync)("npm i " + name);
            }
            if (monra?.client == "pnpm") {
                (0, child_process_1.execSync)("pnpm add ./" + monra?.directory + "/" + x[1] + " -W");
            }
            console.log("\n\x1b[32m[monra]\x1b[0m Create package!");
        }
    }
};
exports.create = create;
