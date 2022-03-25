import * as readline from "node:readline";
import * as fs from "node:fs";
import { version } from "node:os";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const init = (x: string) => {
  rl.question('\x1b[2m[1/4]\x1b[0m \x1b[1mName:\x1b[0m ', (name: any) => {
    if (!name) {rl.close(); return console.log("\x1b[31m[monora]\x1b[0m  Name is undefined");}
    rl.question('\x1b[2m[2/4]\x1b[0m \x1b[1mVersion:\x1b[0m (1.0.0) ', (v: any) => {
      if (!v) v = '1.0.0';
      rl.question('\x1b[2m[3/4]\x1b[0m \x1b[1mDirectory:\x1b[0m (packages) ', (dir: any) => {
        if (!dir) dir = 'packages';
        rl.question('\x1b[2m[4/4]\x1b[0m \x1b[1mUse yarn or npm:\x1b[0m (npm) ', (client: any) => {
          if (!client) client = 'packages';
          fs.appendFileSync("package.json", JSON.stringify({
            name: name.toLowerCase(),
            private: true,
            workspaces: [dir.toLowerCase()+"/*"]
          }));

          fs.appendFileSync("monra.json", JSON.stringify({
            name: name.toLowerCase(),
            version: v.toLowerCase(),
            client: client.toLowerCase(),
            directory: dir.toLowerCase(),
            packages: []
          }));

          fs.mkdirSync(dir.toLowerCase())

          console.log("\x1b[32m[monra]\x1b[0m Create mono repo project!");
          rl.close()
        });
      });
    });
  });
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