// @ts-check

import { exit } from "process";
import * as packagesjson from "../package.json";
import { helpSing } from "../utils/helpSing";

/**
 * @param {string} x - res.args
 * @description get current version
 */

export const version = (x: string) => {
  if (x[1] == "--help" || x[1] == "-h") {
    helpSing(6);
    exit();
  }
  console.log(packagesjson.version);
};
