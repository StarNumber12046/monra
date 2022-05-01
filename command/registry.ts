// @ts-check

import fs from "fs";
import { exit } from "process";
import { helpSing } from "../utils/helpSing";

/**
 * @name Registry
 * @description get registry
 * @param {string} x - res.args
 */

export const registry = (x: string) => {
  if (x[1] == "--help" || x[1] == "-h") {
    helpSing(12);
    exit();
  }
  const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
  if (x[1] == "--edit" || x[1] == "-e") {
    const n_ = x[2];
    if (!n_) return console.log("\x1b[31m[monra]\x1b[0m Please enter a url");
    monra["registry"] = n_;
    fs.writeFileSync("monra.json", JSON.stringify(monra, null, 2), "utf8");
    console.log("\x1b[32m[monra]\x1b[0m Registry updated!");
    exit()
  } 
    console.log(monra?.registry);
};
