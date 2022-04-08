"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports._delete = void 0;
const tslib_1 = require("tslib");
const fs = (0, tslib_1.__importStar)(require("node:fs"));
const node_child_process_1 = require("node:child_process");
const node_process_1 = require("node:process");
const readline_sync_1 = require("readline-sync");
const isInit_1 = require("../utils/isInit");
const helpSing_1 = require("../utils/helpSing");
/**
 * @name Delete
 * @param {string} x - res.args
 * @description delete package
*/
const _delete = (x) => {
    (0, isInit_1.isInit)();
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(10);
        (0, node_process_1.exit)();
    }
    ;
    if (!x[1]) {
        console.log("\x1b[31m[monra]\x1b[0m  Package name is undefined (use: monra delete [name])");
        (0, node_process_1.exit)();
    }
    else {
        if (x[2] == "-d" || x[2] == "--directory") {
            const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
            const packagejs = JSON.parse(fs.readFileSync("package.json", "utf8"));
            if (!fs.existsSync(monra?.directory + "/" + x[1])) {
                console.log("\x1b[31m[monra]\x1b[0m  Package name path don't exist (use: monra delete [path] -d)");
            }
            const yesorno = (0, readline_sync_1.question)('\x1b[31m[monra]\x1b[0m \x1b[1mAre you sure?\x1b[0m (y/n) ');
            if (yesorno == "y" || yesorno == "yes" || yesorno == "") {
                const packageint = JSON.parse(fs.readFileSync(monra?.directory + "/" + x[1] + "/package.json", "utf8"));
                if (monra?.client == "yarn") {
                    (0, node_child_process_1.execSync)("yarn remove " + packageint?.name + " -W");
                }
                if (monra?.client == "npm") {
                    (0, node_child_process_1.execSync)("npm uninstall " + packageint?.name);
                }
                if (monra?.client == "pnpm") {
                    (0, node_child_process_1.execSync)("pnpm uninstall " + packageint?.name);
                }
                fs.rmSync(monra?.directory + "/" + x[1], { recursive: true, force: true });
                console.log("\x1b[32m[monra]\x1b[0m Delete package!");
            }
            if (yesorno == "n" || yesorno == "no") {
                console.log("\x1b[32m[monra]\x1b[0m Cancel!");
            }
        }
        else {
            const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
            const packagejs = JSON.parse(fs.readFileSync("package.json", "utf8"));
            const yesorno = (0, readline_sync_1.question)('\x1b[31m[monra]\x1b[0m \x1b[1mAre you sure?\x1b[0m (y/n) ');
            if (yesorno == "y" || yesorno == "yes" || yesorno == "") {
                const files = fs.readdirSync(monra?.directory);
                files.map((file) => {
                    const packageint = JSON.parse(fs.readFileSync(monra?.directory + "/" + file + "/package.json", "utf8"));
                    if (packageint?.name == x[1]) {
                        if (monra?.client == "yarn") {
                            (0, node_child_process_1.execSync)("yarn remove " + packageint?.name + " -W");
                        }
                        if (monra?.client == "npm") {
                            (0, node_child_process_1.execSync)("npm uninstall " + packageint?.name);
                        }
                        if (monra?.client == "pnpm") {
                            (0, node_child_process_1.execSync)("pnpm uninstall " + packageint?.name);
                        }
                        fs.rmSync(monra?.directory + "/" + file, { recursive: true, force: true });
                    }
                });
                console.log("\x1b[32m[monra]\x1b[0m Delete package!");
            }
            if (yesorno == "n" || yesorno == "no") {
                console.log("\x1b[32m[monra]\x1b[0m Cancel!");
            }
        }
    }
};
exports._delete = _delete;
