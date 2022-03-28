import * as fs from "fs";
import { ErrorInit } from "../error/ErrorInit";

/**
 * @name IsInit
 * @description Check if monra.json is created
*/

export const isInit = () => {
    if (!fs.existsSync("monra.json")) {
        new ErrorInit();
    }
}