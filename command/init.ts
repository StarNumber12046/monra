// @ts-check

import * as fs from "node:fs";
import { version } from "node:os";
import { exit } from "node:process";
import { question } from "readline-sync";
import { helpSing } from "../utils/helpSing";

/**
 * @name Init
 * @param {string} x - res.args
 * @description Init project with monra
 */

export const init = (x: string) => {
  if (x[1] == "--help" || x[1] == "-h") {
    helpSing(1);
    exit();
  }
  let name = question("\x1b[2m[1/4]\x1b[0m \x1b[1mName:\x1b[0m (root) ");
  if (!name) name = "root";
  let v = question("\n\x1b[2m[2/4]\x1b[0m \x1b[1mVersion:\x1b[0m (1.0.0) ");
  if (!v) v = "1.0.0";
  let dir = question(
    "\n\x1b[2m[3/4]\x1b[0m \x1b[1mDirectory:\x1b[0m (packages) "
  );
  if (!dir) dir = "packages";
  let client = question(
    "\n\x1b[2m[4/4]\x1b[0m \x1b[1mUse yarn, pnpm or npm:\x1b[0m (npm) "
  );
  if (!client) client = "npm";
  fs.appendFileSync(
    "package.json",
    JSON.stringify({
      name: name.toLowerCase(),
      version: v,
      private: true,
      dependencies: {},
      workspaces: [dir.toLowerCase() + "/*"],
    })
  );

  fs.appendFileSync(
    "monra.json",
    JSON.stringify({
      name: name.toLowerCase(),
      version: v.toLowerCase(),
      client: client.toLowerCase(),
      directory: dir.toLowerCase(),
    })
  );

  fs.mkdirSync(dir.toLowerCase());

  console.log("\n\x1b[32m[monra]\x1b[0m Create mono repo project!");
};

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
