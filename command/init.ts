import * as readline from "node:readline";

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