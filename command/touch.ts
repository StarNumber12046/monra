// @ts-check

import * as fs from "fs";
import { exit } from "process";
import { helpSing } from "../utils/helpSing";
import { isInit } from "../utils/isInit";

/**
 * @name Touch
 * @param {string} x - res.args
 * @description create file in package
 */

export const touch = (x: string) => {
  isInit();
  if (x[1] == "--help" || x[1] == "-h") {
    helpSing(7);
    exit();
  }
  const monra = JSON.parse(fs.readFileSync("monra.json", "utf8"));
  if (x[2] == "--global" || x[2] == "-g") {
    const files = fs.readdirSync(monra?.directory);
    console.log("\x1b[32m[monra]\x1b[0m Creating file...");
    files.map((file) => {
      console.log(
        "\x1b[33m[monra]\x1b[0m Creating \x1b[1m" +
          x[1] +
          "\x1b[0m in \x1b[1m" +
          monra?.directory +
          "/" +
          file +
          "\x1b[0m, pls wait..."
      );
      fs.appendFileSync(monra?.directory + "/" + file + "/" + x[1], "");
    });

    console.log("\x1b[32m[monra]\x1b[0m Done!");
  } else {
    console.log("\x1b[32m[monra]\x1b[0m Creating file...");
    console.log(
      "\x1b[33m[monra]\x1b[0m Creating \x1b[1m" +
        x[1] +
        "\x1b[0m in \x1b[1m" +
        monra?.directory +
        "/" +
        x[2] +
        "\x1b[0m, pls wait..."
    );
    fs.appendFileSync(monra?.directory + "/" + x[2] + "/" + x[1], "");
    console.log("\x1b[32m[monra]\x1b[0m Done!");
  }
};
