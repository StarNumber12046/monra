"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInit = void 0;
const tslib_1 = require("tslib");
const fs = (0, tslib_1.__importStar)(require("fs"));
const ErrorInit_1 = require("../error/ErrorInit");
/**
 * @name IsInit
 * @description Check if monra.json is created
*/
const isInit = () => {
    if (!fs.existsSync("monra.json")) {
        new ErrorInit_1.ErrorInit();
    }
};
exports.isInit = isInit;
