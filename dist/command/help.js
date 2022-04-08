"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = void 0;
const tslib_1 = require("tslib");
const packagesjson = (0, tslib_1.__importStar)(require("../../package.json"));
/**
 * @name Help
 * @param {string} x - res.args
 * @description get help
*/
const help = (x) => {
    console.log(`\x1b[1m${packagesjson?.name}\x1b[0m - \x1b[1mv${packagesjson?.version}\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32minit\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mcreate\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mlist\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mpublish\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mrun\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mversion\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mtouch\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mmkdir\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mrm\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mrmdir\x1b[0m
└─ \x1b[2mmonra\x1b[0m \x1b[32mdelete\x1b[0m`);
};
exports.help = help;
