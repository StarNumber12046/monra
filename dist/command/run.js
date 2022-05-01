"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const tslib_1 = require("tslib");
// @ts-check
const fs = tslib_1.__importStar(require("fs"));
const isInit_1 = require("../utils/isInit");
const readline_sync_1 = require("readline-sync");
const process_1 = require("process");
const child_process_1 = require("child_process");
const helpSing_1 = require("../utils/helpSing");
/**
 * @name Run
 * @description Run command
 * @param {string} x - res.args
 */
const run = (x) => {
    (0, isInit_1.isInit)();
    if (x[1] == "--help" || x[1] == "-h") {
        (0, helpSing_1.helpSing)(5);
        (0, process_1.exit)();
    }
    if (x[1] == "--global" || x[1] == "-g") {
        const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
        const command = (0, readline_sync_1.question)("\x1b[2m[1/1]\x1b[0m \x1b[1mCommand\x1b[0m: ");
        const yesorno = (0, readline_sync_1.question)("\x1b[2m[monra]\x1b[0m \x1b[1mAre you sure you want to run the command\x1b[0m (y/n) ");
        if (yesorno == "y" || yesorno == "yes" || yesorno == "") {
            const files = fs.readdirSync(monra?.directory);
            console.log("\x1b[32m[monra]\x1b[0m Running command...");
            console.log("\x1b[32m[monra]\x1b[0m This action can take a long time...");
            console.log("\n");
            files.map((file) => {
                console.log("\x1b[33m[monra]\x1b[0m Running command in \x1b[1m" +
                    monra?.directory +
                    "/" +
                    file +
                    "\x1b[0m, pls wait...");
                const res = (0, child_process_1.execSync)("cd " + monra?.directory + "/" + file + " && " + command);
                if (res)
                    console.log(res.toString());
            });
            console.log("\x1b[32m[monra]\x1b[0m Done!");
        }
        if (yesorno == "n" || yesorno == "no") {
            console.log("\x1b[32m[monra]\x1b[0m Cancel!");
            (0, process_1.exit)();
        }
    }
    else {
        const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
        const command = (0, readline_sync_1.question)("\x1b[2m[1/1]\x1b[0m \x1b[1mCommand\x1b[0m: ");
        const yesorno = (0, readline_sync_1.question)("\x1b[2m[monra]\x1b[0m \x1b[1mAre you sure you want to run the command\x1b[0m (y/n) ");
        if (yesorno == "y" || yesorno == "yes" || yesorno == "") {
            const packageint = JSON.parse(fs.readFileSync(monra?.directory + "/" + x[1] + "/package.json", "utf8"));
            console.log("\x1b[33m[monra]\x1b[0m Running command in \x1b[1m" +
                monra?.directory +
                "/" +
                x[1] +
                "\x1b[0m, pls wait...");
            const res = (0, child_process_1.execSync)("cd " + monra?.directory + "/" + x[1] + " && " + command);
            console.log(res);
            console.log("\x1b[32m[monra]\x1b[0m Done!");
        }
        if (yesorno == "n" || yesorno == "no") {
            console.log("\x1b[32m[monra]\x1b[0m Cancel!");
            (0, process_1.exit)();
        }
    }
};
exports.run = run;
