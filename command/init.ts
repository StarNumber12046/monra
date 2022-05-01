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

  if (x[1] == "-y" || x[1] == "--yes") {
    console.log(
      `
\x1b[2m[1/4]\x1b[0m \x1b[1mName:\x1b[0m (root) root

\x1b[2m[2/4]\x1b[0m \x1b[1mVersion:\x1b[0m (1.0.0) 1.0.0

\x1b[2m[3/4]\x1b[0m \x1b[1mDirectory:\x1b[0m (packages) packages

\x1b[2m[4/4]\x1b[0m \x1b[1mClient:\x1b[0m (npm) npm`
    );
    fs.appendFileSync(
      "package.json",
      `{
  "name": "root",
  "version": "1.0.0",
  "private": true,
  "dependencies": {},
  "workspaces": ["packages/*"]
}`
    );

    fs.appendFileSync(
      "monra.json",
      `{
  "name": "root",
  "version": "1.0.0",
  "client": "npm",
  "directory": "packages"
}`
    );

    fs.mkdirSync("packages");

    console.log("\n\x1b[32m[monra]\x1b[0m Create mono repo project!");
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
    `{
  "name": "${name.toLowerCase()}",
  "version": "${v.toLowerCase()}",
  "private": true,
  "dependencies": {},
  "workspaces": ["${dir.toLowerCase()}/*"]
}`
  );

  fs.appendFileSync(
    "monra.json",
    `{
  "name": "${name.toLowerCase()}",
  "version": "${v.toLowerCase()}",
  "client": "${client.toLowerCase()}",
  "directory": "${dir.toLowerCase()}"
}`
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
